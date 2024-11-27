import { forwardRef } from "react";
import { CardFooterProps, CardFooterType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Footer: CardFooterType = forwardRef<HTMLElement, CardFooterProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-footer", next]);

    return createElement(
      as || "div",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Footer;
