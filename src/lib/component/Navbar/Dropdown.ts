import classNames from "classnames";
import { forwardRef } from "react";
import { createElement } from "../../base";
import {
  Dropdown as DropdownFC,
  DropdownProps,
  DropdownRef,
  DropdownType,
} from "../Dropdown";

const Dropdown: DropdownType = forwardRef<DropdownRef, DropdownProps>(
  (props, ref: any) => {
    const { className, children, ...pass } = props;
    return createElement(
      DropdownFC,
      {
        ref,
        ...pass,
        className: classNames("nav-item", className),
      },
      children
    );
  }
);

export default Dropdown;
