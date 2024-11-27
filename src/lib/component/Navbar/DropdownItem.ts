import { forwardRef } from "react";
import { createElement } from "../../base";
import { Dropdown, DropdownItemProps, DropdownItemType } from "../Dropdown";

const DropdownItem: DropdownItemType = forwardRef<
  HTMLElement,
  DropdownItemProps
>((props, ref: any) => {
  const { children, ...pass } = props;

  return createElement(
    Dropdown.Item,
    {
      ref,
      ...pass,
    },
    children
  );
});

export default DropdownItem;
