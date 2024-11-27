import { forwardRef } from "react";
import { createElement } from "../../base";
import {
  Dropdown,
  DropdownDividerProps,
  DropdownDividerType,
} from "../Dropdown";

const DropdownDivider: DropdownDividerType = forwardRef<
  HTMLElement,
  DropdownDividerProps
>((props, ref: any) => {
  const { children, ...pass } = props;

  return createElement(
    Dropdown.Divider,
    {
      ref,
      ...pass,
    },
    children
  );
});

export default DropdownDivider;
