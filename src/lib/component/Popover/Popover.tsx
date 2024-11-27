import {
  autoPlacement,
  offset,
  Placement,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { PopoverProps, PopoverRef, PopoverType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import OffsetOption from "./Constant";
import PopoverContext from "./Context";

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

const Popover: PopoverType = forwardRef<PopoverRef, PopoverProps>(
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
      title,
      content,
      side,
      alignment,
      strategy,
      placement: placementProp,
      autoPlacement: isAutoPlacement,
      offset: offsetValue,
      autoDismiss,
      hover,
      animation,

      // callback
      onOpenChange,

      // rest
      ...remainedProps
    } = rest;

    // side and alignment could be any string value, don't trust them be always correct, use a map to check the value
    strategy = strategy || "absolute";
    autoDismiss = typeof autoDismiss == "undefined" ? true : !!autoDismiss;
    hover = typeof autoDismiss == "undefined" ? false : !!hover;
    animation = typeof animation === "undefined" ? "fade" : animation;

    offsetValue =
      typeof offsetValue == "number"
        ? offsetValue + OffsetOption.ArrowSize
        : OffsetOption.ArrowSize;

    const { floatPosition, placement } = useMemo(() => {
      let placement = `${side || "bottom"}-${alignment || "middle"}`;
      let floatPosition: Placement = PlacementMap[placement] || "bottom";
      if (placementProp !== undefined) {
        floatPosition = PlacementMap[placementProp];
        placement = placementProp;
      }
      return { floatPosition, placement };
    }, [placementProp, side, alignment]);

    if (!side && !alignment && !placementProp) {
      isAutoPlacement = true;
    }

    const [isOpen, setOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
      open: isOpen,
      placement: floatPosition,
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

    const clickInt = useClick(context);
    const dismissInt = useDismiss(context, { enabled: autoDismiss });
    const hoverInt = useHover(context, { enabled: hover });
    const roleInt = useRole(context);

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([clickInt, dismissInt, hoverInt, roleInt]);

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

    return (
      <PopoverContext.Provider
        value={{
          isOpen,
          setOpen,
          placement,
          animation,
          autoDismiss,
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
          { ref: domRef, className, css, style, ...remainedProps },
          children
        )}
      </PopoverContext.Provider>
    );
  }
);

export default Popover;
