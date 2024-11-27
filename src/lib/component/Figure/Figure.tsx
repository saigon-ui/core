import { forwardRef } from "react";
import { FigureProps, FigureType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Figure: FigureType = forwardRef<HTMLElement, FigureProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Figure;
