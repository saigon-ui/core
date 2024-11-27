import { forwardRef } from "react";
import { DivProps, DivType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Div: DivType = forwardRef<HTMLElement, DivProps>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    as || "div",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Div;
