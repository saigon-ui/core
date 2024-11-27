import { forwardRef } from "react";
import { NavItemProps, NavItemType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Item: NavItemType = forwardRef<HTMLElement, NavItemProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["nav-item", next]);

    return createElement(
      as || "li",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Item;
