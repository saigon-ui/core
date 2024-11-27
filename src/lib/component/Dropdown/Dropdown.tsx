import {
  autoPlacement,
  offset,
  Placement,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import classNames from "classnames";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { DropdownProps, DropdownRef, DropdownType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import DropdownContext from "./Context";

const PlacementMap: { [key: string]: Placement } = {
  "top-middle": "top",
  "top-start": "top-start",
  "top-end": "top-end",
  "right-middle": "right",
  "right-start": "right-start",
  "right-end": "right-end",
  "bottom-middle": "bottom",
  "bottom-start": "bottom-start",
  "bottom-end": "bottom-end",
  "left-middle": "left",
  "left-start": "left-start",
  "left-end": "left-end",
};

const Dropdown: DropdownType = forwardRef<DropdownRef, DropdownProps>(
  (props, ref) => {
    let {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props);

    let {
      // props
      side,
      alignment,

      // float-ui
      strategy,
      autoPlacement: isAutoPlacement,
      offset: offsetValue,
      animation,

      // split button mode
      splitButton,

      // callback
      onOpenChange,

      ...remainedProps
    } = rest;

    // side and alignment could be any string value, don't trust them be always correct, use a map to check the value
    strategy = strategy || "fixed"; // menu component should be better when using `fixed` style
    if (!side && !alignment) {
      isAutoPlacement = true;
    }
    const placement =
      PlacementMap[`${side || "bottom"}-${alignment || "end"}`] || "bottom-end";

    const [isOpen, setOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
      open: isOpen,
      placement,
      strategy,
      middleware: [
        isAutoPlacement ? autoPlacement() : undefined,
        offset(offsetValue),
      ],
      onOpenChange: (open: boolean, event: any) => {
        setOpen(open);

        // fire an event
        onOpenChange && onOpenChange(open, event);
      },
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([click, dismiss, role]);

    const domRef = useRef<HTMLElement>(null);
    const handleShow = useCallback(
      (relativeDom: HTMLElement) => {
        if (relativeDom) refs.setPositionReference(relativeDom);
        setOpen(true);
      },
      [isOpen]
    );

    useImperativeHandle(ref, () => {
      if (domRef.current)
        Object.assign(domRef.current, {
          show: handleShow,
          close: () => setOpen(false),
        });

      return domRef.current as any;
    });

    className = classNames(splitButton ? "btn-group" : "dropdown", className);

    return (
      <DropdownContext.Provider
        value={{
          isOpen,
          setOpen,
          animation,
          refs,
          floatingStyles,
          getReferenceProps,
          getFloatingProps,
          getItemProps,
          context,
        }}
      >
        {createElement(
          as || "div",
          {
            ref: domRef,
            className,
            css,
            style,
            ...remainedProps,
          },
          children
        )}
      </DropdownContext.Provider>
    );
  }
);

export default Dropdown;
