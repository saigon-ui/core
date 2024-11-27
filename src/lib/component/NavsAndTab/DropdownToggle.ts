import classNames from "classnames";
import { forwardRef } from "react";
import { createElement, usePropsDestructor } from "../../base";
import { Dropdown, DropdownToggleProps, DropdownToggleType } from "../Dropdown";

const DropdownToggle: DropdownToggleType = forwardRef<
  HTMLElement,
  DropdownToggleProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    Dropdown.Toggle,
    {
      as,
      ref,
      className: classNames("nav-link", className),
      css,
      style,
      ...remainedProps,
    },
    children
  );
});

export default DropdownToggle;
