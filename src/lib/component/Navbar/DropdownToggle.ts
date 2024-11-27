import classNames from "classnames";
import { forwardRef } from "react";
import { createElement } from "../../base";
import { Dropdown, DropdownToggleProps, DropdownToggleType } from "../Dropdown";

const DropdownToggle: DropdownToggleType = forwardRef<
  HTMLElement,
  DropdownToggleProps
>((props, ref: any) => {
  const { className, children, ...remainedProps } = props;

  return createElement(
    Dropdown.Toggle,
    {
      ref,
      className: classNames("nav-link", className),
      ...remainedProps,
    },
    children
  );
});

export default DropdownToggle;
