import { forwardRef } from "react";
import { CardHeaderProps, CardHeaderType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Header: CardHeaderType = forwardRef<HTMLElement, CardHeaderProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["card-header", next]);

    return createElement(
      as || "div",
      { ref, className, style, css, ...remainedProps },
      children
    );
  }
);

export default Header;
