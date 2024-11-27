export type NavbarProp = Partial<{
  /**
   * Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl|-xxl} for responsive collapsing and color scheme classes.
   *
   * @default undefined
   */
  expand: "sm" | "md" | "lg" | "xl" | "xxl";

  /**
   * Add .navbar-nav-scroll to a .navbar-nav (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar
   *
   * @default false
   */
  scroll: boolean;
}>;

export type NavbarLinkProp = Partial<{
  /**
   * set to active state
   *
   * @default false
   */
  active: boolean;

  /**
   * set to disabled state
   *
   * @default false
   */
  disabled: boolean;
}>;
