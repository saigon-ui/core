import { forwardRef } from "react";
import { CardSubtitleProps, CardSubtitleType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Subtitle: CardSubtitleType = forwardRef<HTMLElement, CardSubtitleProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-subtitle", next]);

    return createElement(
      as || "div",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Subtitle;
