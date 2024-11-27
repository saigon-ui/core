import { forwardRef } from "react";
import { NavbarTogglerIconProps, NavbarTogglerIconType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const TogglerIcon: NavbarTogglerIconType = forwardRef<
  HTMLElement,
  NavbarTogglerIconProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, (next) => ["navbar-toggler-icon", next]);

  return createElement(
    as || "span",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default TogglerIcon;
