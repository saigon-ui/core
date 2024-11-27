import {
  autoPlacement,
  FloatingFocusManager,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import classNames from "classnames";
import { useState } from "react";
import { TooltipProps, TooltipType } from ".";
import Animation from "../Animation/Animation";

// eslint-disable-next-line react-refresh/only-export-components
const ArrowSize = 4; // 4px
const OffsetOption: any = {
  ArrowSize,
  top: {
    bsClass: "top",
    style: {
      left: `calc(50% - 4px)`,
      transform: "translate3d(0px, -1px, 0px)",
    },
  },
  right: {
    bsClass: "end",
    style: {
      top: `calc(50% - 6px)`,
      transform: "translate3d(1px, 0px, 0px)",
    },
  },
  bottom: {
    bsClass: "bottom",
    style: {
      left: `calc(50% - 4px)`,
      transform: "translate3d(0px, 1px, 0px)",
    },
  },
  left: {
    bsClass: "start",
    style: {
      top: `calc(50% - 6px)`,
      transform: "translate3d(-1px, 0px, 0px)",
    },
  },
};

const Tooltip: TooltipType = (props: TooltipProps) => {
  let {
    title,
    placement,
    autoPlacement: isAutoPlacement,
    offset: offsetValue,
    strategy,
    animation,

    // callback
    onOpenChange,
    children,
  } = props;

  animation = typeof animation === "undefined" ? "fade" : animation;
  placement = placement || "top";
  strategy = strategy || "absolute";
  offsetValue =
    typeof offsetValue == "number"
      ? offsetValue + OffsetOption.ArrowSize
      : OffsetOption.ArrowSize;

  const hasAnimation = animation && animation !== "none";

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

  const clickInt = useClick(context);
  const dismissInt = useDismiss(context);
  const hoverInt = useHover(context);
  const roleInt = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    clickInt,
    dismissInt,
    hoverInt,
    roleInt,
  ]);

  const clz = {
    tooltip: true,
    "bs-tooltip-top": placement == "top",
    "bs-tooltip-end": placement == "right",
    "bs-tooltip-bottom": placement == "bottom",
    "bs-tooltip-start": placement == "left",
  };

  return (
    <>
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ display: "inline-block" }}
      >
        {children}
      </span>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <span
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {hasAnimation ? (
              <Animation
                animation={animation}
                component={(p: any) => (
                  <span className={classNames(clz, p.className)}>
                    <span
                      className="tooltip-arrow"
                      style={{
                        position: "absolute",
                        ...OffsetOption[placement]?.style,
                      }}
                    ></span>
                    <span className="tooltip-inner">{title}</span>
                  </span>
                )}
                open={isOpen}
              />
            ) : (
              <span className={classNames(clz, "show")}>
                <span
                  className="tooltip-arrow"
                  style={{
                    position: "absolute",
                    ...OffsetOption[placement]?.style,
                  }}
                ></span>
                <span className="tooltip-inner">{title}</span>
              </span>
            )}
          </span>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default Tooltip;
