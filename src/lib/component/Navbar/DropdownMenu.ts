import { forwardRef } from "react";
import { createElement } from "../../base";
import { Dropdown, DropdownMenuProps, DropdownMenuType } from "../Dropdown";

const DropdownMenu: DropdownMenuType = forwardRef<
  HTMLElement,
  DropdownMenuProps
>((props, ref: any) => {
  const { children, ...pass } = props;

  return createElement(
    Dropdown.Menu,
    {
      ref,
      ...pass,
    },
    children
  );
});

export default DropdownMenu;
