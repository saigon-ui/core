import { forwardRef } from "react";
import { CardBodyProps, CardBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Body: CardBodyType = forwardRef<HTMLElement, CardBodyProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-body", next]);

    return createElement(
      as || "div",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Body;
