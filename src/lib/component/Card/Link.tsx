import { forwardRef } from "react";
import { CardLinkProps, CardLinkType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Text: CardLinkType = forwardRef<HTMLElement, CardLinkProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-link", next]);

    return createElement(
      as || "a",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Text;
