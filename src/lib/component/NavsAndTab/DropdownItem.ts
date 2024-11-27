import { forwardRef } from "react";
import { createElement, usePropsDestructor } from "../../base";
import { Dropdown, DropdownItemProps, DropdownItemType } from "../Dropdown";

const DropdownItem: DropdownItemType = forwardRef<
  HTMLElement,
  DropdownItemProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    Dropdown.Item,
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

export default DropdownItem;
