import { forwardRef } from "react";
import { CardTextProps, CardTextType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Text: CardTextType = forwardRef<HTMLElement, CardTextProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-text", next]);

    return createElement(
      as || "p",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Text;
