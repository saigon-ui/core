import { forwardRef } from "react";
import { NavbarItemProps, NavbarItemType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Item: NavbarItemType = forwardRef<HTMLElement, NavbarItemProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["navbar-item", next]);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Item;
