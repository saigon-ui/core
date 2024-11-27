import { forwardRef } from "react";
import { OffcanvasHeaderProps, OffcanvasHeaderType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Header: OffcanvasHeaderType = forwardRef<
  HTMLElement,
  OffcanvasHeaderProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, (next) => ["offcanvas-header", next]);

  return createElement(
    as || "div",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Header;
