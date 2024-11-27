import {
  DropdownItemProp,
  DropdownProp,
  DropdownToggleProp,
  ForwardRefComponent,
  SaigonComponent,
  SaigonProps,
} from "../../saigon.types";
import DividerFC from "./Divider";
import DropdownFC from "./Dropdown";
import ItemFC from "./Item";
import MenuFC from "./Menu";
import ToggleFC from "./Toggle";

export type DropdownProps = DropdownProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof DropdownProp>;

export type DropdownRef = HTMLElement & {
  show: (relativeDom: HTMLElement) => void;
  close: () => void;
};
export type DropdownType = ForwardRefComponent<DropdownRef, DropdownProps>;

export type DropdownToggleProps = DropdownToggleProp &
  Omit<SaigonProps<"button", HTMLElement>, keyof DropdownToggleProp>;

export type DropdownToggleType = SaigonComponent<DropdownToggleProps>;

export type DropdownMenuProps = Omit<SaigonProps<"ul", HTMLElement>, "as">;

export type DropdownMenuType = SaigonComponent<DropdownMenuProps>;

export type DropdownItemProps = DropdownItemProp &
  Omit<SaigonProps<"button", HTMLElement>, keyof DropdownItemProp>;

export type DropdownItemType = ForwardRefComponent<
  HTMLElement,
  DropdownItemProps
>;

export type DropdownDividerProps = SaigonProps<"hr", HTMLElement>;

export type DropdownDividerType = ForwardRefComponent<
  HTMLElement,
  DropdownDividerProps
>;

DropdownFC.displayName = "Dropdown";
ToggleFC.displayName = "Dropdown.Toggle";
MenuFC.displayName = "Dropdown.Menu";
ItemFC.displayName = "Dropdown.Item";
DividerFC.displayName = "Dropdown.Divider";

export const Dropdown = Object.assign(DropdownFC, {
  Toggle: ToggleFC,
  Menu: MenuFC,
  Item: ItemFC,
  Divider: DividerFC,
});
