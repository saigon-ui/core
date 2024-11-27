import { forwardRef } from "react";
import { NavbarTextProps, NavbarTextType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Text: NavbarTextType = forwardRef<HTMLElement, NavbarTextProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["navbar-text", next]);

    return createElement(
      as || "span",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Text;
