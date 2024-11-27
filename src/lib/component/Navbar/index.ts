import {
  ForwardRefComponent,
  NavbarLinkProp,
  NavbarProp,
  SaigonProps,
} from "../../saigon.types";
import NavbarFC from "./Navbar";
import BrandFC from "./Brand";
import TogglerFC from "./Toggler";
import TogglerIconFC from "./TogglerIcon";
import CollapseFC from "./Collapse";
import NavFC from "./Nav";
import ItemFC from "./Item";
import LinkFC from "./Link";
import TextFC from "./Text";
import FormControlWithIconFC from "./FormControlWithIcon";
import DropdownFC from "./Dropdown";
import DropdownToggleFC from "./DropdownToggle";
import DropdownMenuFC from "./DropdownMenu";
import DropdownItemFC from "./DropdownItem";
import DropdownDividerFC from "./DropdownDivider";

export type NavbarProps = NavbarProp &
  Omit<SaigonProps<"nav", HTMLElement>, keyof NavbarProp>;
export type NavbarType = ForwardRefComponent<HTMLElement, NavbarProps>;

export type NavbarBrandProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  SaigonProps<"a", HTMLElement>;
export type NavbarBrandType = ForwardRefComponent<
  HTMLElement,
  NavbarBrandProps
>;

export type NavbarTogglerProps = SaigonProps<"button", HTMLElement>;
export type NavbarTogglerType = ForwardRefComponent<
  HTMLElement,
  NavbarTogglerProps
>;

export type NavbarTogglerIconProps = SaigonProps<"span", HTMLElement>;
export type NavbarTogglerIconType = ForwardRefComponent<
  HTMLElement,
  NavbarTogglerIconProps
>;

export type NavbarCollapseProps = SaigonProps<"div", HTMLElement>;
export type NavbarCollapseType = ForwardRefComponent<
  HTMLElement,
  NavbarCollapseProps
>;

export type NavbarNavProps = SaigonProps<"ul", HTMLElement>;
export type NavbarNavType = ForwardRefComponent<HTMLElement, NavbarNavProps>;

export type NavbarItemProps = SaigonProps<"li", HTMLElement>;
export type NavbarItemType = ForwardRefComponent<HTMLElement, NavbarItemProps>;

export type NavbarTextProps = SaigonProps<"span", HTMLElement>;
export type NavbarTextType = ForwardRefComponent<HTMLElement, NavbarTextProps>;

export type NavbarLinkProps = NavbarLinkProp &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<SaigonProps<"a", HTMLElement>, keyof NavbarLinkProp>;
export type NavbarLinkType = ForwardRefComponent<HTMLElement, NavbarLinkProps>;

NavbarFC.displayName = "Navbar";
BrandFC.displayName = "Navbar.Brand";
TogglerFC.displayName = "Navbar.Toggler";
TogglerIconFC.displayName = "Navbar.TogglerIcon";
CollapseFC.displayName = "Navbar.Collapse";
NavFC.displayName = "Navbar.Nav";
ItemFC.displayName = "Navbar.Item";
LinkFC.displayName = "Navbar.Link";
TextFC.displayName = "Navbar.Text";

// Form proxy component
FormControlWithIconFC.displayName = "Navbar.FormControlWithIcon";

// Dropdown proxy component

DropdownFC.displayName = "Nav.Dropdown";
DropdownToggleFC.displayName = "Nav.DropdownToggle";
DropdownMenuFC.displayName = "Nav.DropdownMenu";
DropdownItemFC.displayName = "Nav.DropdownItem";
DropdownDividerFC.displayName = "Nav.DropdownDivider";

export const Navbar = Object.assign(NavbarFC, {
  Brand: BrandFC,
  Toggler: TogglerFC,
  TogglerIcon: TogglerIconFC,
  Collapse: CollapseFC,
  Nav: NavFC,
  Item: ItemFC,
  Link: LinkFC,
  Text: TextFC,
  FormControl: FormControlWithIconFC,
  Dropdown: DropdownFC,
  DropdownToggle: DropdownToggleFC,
  DropdownMenu: DropdownMenuFC,
  DropdownItem: DropdownItemFC,
  DropdownDivider: DropdownDividerFC,
});
