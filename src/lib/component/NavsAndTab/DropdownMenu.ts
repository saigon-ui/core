import { forwardRef } from "react";
import { createElement, usePropsDestructor } from "../../base";
import { Dropdown, DropdownMenuProps, DropdownMenuType } from "../Dropdown";

const DropdownMenu: DropdownMenuType = forwardRef<
  HTMLElement,
  DropdownMenuProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    Dropdown.Menu,
    {
      as,
      ref,
      className,
      css,
      style,
      ...remainedProps,
    },
    children
  );
});

export default DropdownMenu;
