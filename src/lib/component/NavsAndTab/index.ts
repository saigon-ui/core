import {
  ForwardRefComponent,
  NavLinkProp,
  NavProp,
  SaigonProps,
} from "../../saigon.types";
import NavFC from "./Nav";
import ItemFC from "./Item";
import LinkFC from "./Link";
import DropdownFC from "./Dropdown";
import DropdownToggleFC from "./DropdownToggle";
import DropdownMenuFC from "./DropdownMenu";
import DropdownItemFC from "./DropdownItem";
import DropdownDividerFC from "./DropdownDivider";

export type NavProps = NavProp &
  Omit<SaigonProps<"nav", HTMLElement>, keyof NavProp>;
export type NavType = ForwardRefComponent<HTMLElement, NavProps>;

export type NavItemProps = SaigonProps<"ul", HTMLElement>;
export type NavItemType = ForwardRefComponent<HTMLElement, NavItemProps>;

export type NavLinkProps = NavLinkProp &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<SaigonProps<"a", HTMLElement>, keyof NavLinkProp>;
export type NavLinkType = ForwardRefComponent<HTMLElement, NavLinkProps>;

NavFC.displayName = "Nav";
ItemFC.displayName = "Nav.Item";
LinkFC.displayName = "Nav.Link";

// Dropdown proxy component

DropdownFC.displayName = "Nav.Dropdown";
DropdownToggleFC.displayName = "Nav.DropdownToggle";
DropdownMenuFC.displayName = "Nav.DropdownMenu";
DropdownItemFC.displayName = "Nav.DropdownItem";
DropdownDividerFC.displayName = "Nav.DropdownDivider";

const Nav = Object.assign(NavFC, {
  Item: ItemFC,
  Link: LinkFC,
  Dropdown: DropdownFC,
  DropdownToggle: DropdownToggleFC,
  DropdownMenu: DropdownMenuFC,
  DropdownItem: DropdownItemFC,
  DropdownDivider: DropdownDividerFC,
});

export default Nav;
