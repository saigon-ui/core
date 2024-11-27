import { forwardRef } from "react";
import { FigureCaptionProps, FigureCaptionType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Caption: FigureCaptionType = forwardRef<HTMLElement, FigureCaptionProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["figure-caption", next]);

    return createElement(
      as || "figcaption",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Caption;
