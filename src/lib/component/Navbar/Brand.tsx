import { forwardRef } from "react";
import { NavbarBrandProps, NavbarBrandType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Brand: NavbarBrandType = forwardRef<HTMLElement, NavbarBrandProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["navbar-brand", next]);

    return createElement(
      as || "a",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Brand;
