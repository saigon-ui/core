import { createContext } from "react";

export type NavbarContextType = {
  show: boolean;
  collapsing: boolean;
  scroll: boolean;
  setShow: (val: boolean) => void;
};

export const NavbarContext = createContext<NavbarContextType>({
  show: false,
  collapsing: false,
  scroll: false,
  setShow: undefined as any,
});
NavbarContext.displayName = "Navbar.Context";
