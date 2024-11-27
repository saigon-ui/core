import { forwardRef } from "react";
import { CardTitleProps, CardTitleType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Title: CardTitleType = forwardRef<HTMLElement, CardTitleProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-title", next]);

    return createElement(
      as || "h5",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Title;
