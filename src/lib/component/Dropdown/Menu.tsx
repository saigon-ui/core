/** @jsxImportSource @emotion/react */
import { FloatingFocusManager } from "@floating-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { DropdownMenuProps, DropdownMenuType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import DropdownContext from "./Context";
import classNames from "classnames";
import Animation from "../Animation/Animation";

function PropsDestructor(next: any): [ClassNameFuncResult, RemainingProps] {
  return ["dropdown-menu", next];
}

const Menu: DropdownMenuType = (props: DropdownMenuProps) => {
  const ctx = useContext(DropdownContext);
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  const domRef = useRef<HTMLDivElement>(null);
  const [modalSize, setModalSize] = useState({ width: -1, height: -1 });
  const hasAnimation = ctx.animation && ctx.animation !== "none";
  useEffect(() => {
    if (domRef.current && modalSize.width == -1 && modalSize.height == -1) {
      const { width, height } = domRef.current.getBoundingClientRect();
      setModalSize({ width, height });
    }
  }, [domRef.current]);

  remainedProps["aria-labelledby"] = "dropdownMenuLink";

  if (!hasAnimation && ctx.isOpen)
    return (
      <FloatingFocusManager context={ctx.context} modal={false}>
        {createElement(
          as || "ul",
          {
            ref: ctx.refs.setFloating,
            className,
            css,
            style: { ...style, ...ctx.floatingStyles, display: "block" },
            ...remainedProps,
            ...ctx.getFloatingProps(),
          },
          children
        )}
      </FloatingFocusManager>
    );

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
              as || "ul",
              {
                className,
                css,
                style: { display: "block" },
                ...remainedProps,
              },
              children
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
              style={{ ...ctx.floatingStyles, ...modalSize, zIndex: 1001 }}
              {...ctx.getFloatingProps()}
            >
              <Animation
                animation={ctx.animation}
                component={(p: any) =>
                  createElement(
                    as || "ul",
                    {
                      className: classNames(className, p.className),
                      css,
                      style: { ...style, display: "block" },
                      ...remainedProps,
                    },
                    children
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

export default Menu;
