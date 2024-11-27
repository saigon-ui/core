import { forwardRef } from "react";
import { createElement, usePropsDestructor } from "../../base";
import {
  Dropdown,
  DropdownDividerProps,
  DropdownDividerType,
} from "../Dropdown";

const DropdownDivider: DropdownDividerType = forwardRef<
  HTMLElement,
  DropdownDividerProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    Dropdown.Divider,
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

export default DropdownDivider;
