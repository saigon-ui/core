import { forwardRef } from "react";
import { OffcanvasBodyProps, OffcanvasBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Body: OffcanvasBodyType = forwardRef<HTMLElement, OffcanvasBodyProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["offcanvas-body", next]);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Body;
