import { FloatingFocusManager } from "@floating-ui/react";
import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { PopoverModalProps, PopoverModalType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import Animation from "../Animation/Animation";
import OffsetOption from "./Constant";
import PopoverContext from "./Context";

const Modal: PopoverModalType = (props: PopoverModalProps) => {
  const ctx = useContext(PopoverContext);
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  const domRef = useRef<HTMLDivElement>(null);
  const [modalSize, setModalSize] = useState({ width: -1, height: -1 });
  const hasAnimation = ctx.animation && ctx.animation !== "none";

  useEffect(() => {
    if (domRef.current && modalSize.width == -1 && modalSize.height == -1) {
      const { width, height } = domRef.current.getBoundingClientRect();
      setModalSize({ width, height });
    }
  }, [domRef.current]);

  className = classNames(
    ["popover", `bs-popover-${OffsetOption[ctx.placement]?.bsClass}`],
    className
  );

  const Child = [
    <div
      key="0"
      className="popover-arrow"
      style={{
        position: "absolute",
        ...OffsetOption[ctx.placement]?.style,
      }}
    />,
    children,
  ];

  if (!hasAnimation && ctx.isOpen) {
    return (
      <FloatingFocusManager context={ctx.context} modal={false}>
        {createElement(
          as || "div",
          {
            ref: ctx.refs.setFloating,
            className,
            css,
            style: { ...style, ...ctx.floatingStyles },
            ...remainedProps,
            ...ctx.getFloatingProps(),
          },
          Child
        )}
      </FloatingFocusManager>
    );
  }

  return (
    <>
      {
        /* Temporary mouted to calculate the bounding rect size */
        modalSize.width == -1 && modalSize.height == -1 && (
          <div
            ref={domRef}
            style={{ position: "fixed", top: 0, left: 0, visibility: "hidden" }}
          >
            {createElement(
              as || "div",
              {
                className,
                css,
                style,
                ...remainedProps,
              },
              Child
            )}
          </div>
        )
      }
      {
        /* After having the bounding rect size, do the real dom rendering */
        ctx.isOpen && (
          <FloatingFocusManager context={ctx.context} modal={false}>
            <div
              ref={ctx.refs.setFloating}
              style={{ ...ctx.floatingStyles, ...modalSize }}
              {...ctx.getFloatingProps()}
            >
              <Animation
                animation={ctx.animation}
                component={(p: any) =>
                  createElement(
                    as || "div",
                    {
                      className: classNames(className, p.className),
                      css,
                      style,
                      ...remainedProps,
                    },
                    Child
                  )
                }
                open={ctx.isOpen}
              />
            </div>
          </FloatingFocusManager>
        )
      }
    </>
  );
};

export default Modal;
