import { Responsive } from "../../saigon.types";

export type NavProp = Partial<{
  /**
   * Stack your navigation by changing the flex item direction with the .flex-column utility
   *
   * @default false
   */
  vertical: Responsive<boolean>;

  /**
   * Adding the .nav-tabs class to generate a tabbed interface
   *
   * @default false
   */
  tabs: Responsive<boolean>;

  /**
   * Adding the .nav-pills class to generate a pills interface
   *
   * @default false
   */
  pills: Responsive<boolean>;

  /**
   * Adding the .nav-underline class to generate a underline interface
   *
   * @default false
   */
  underline: Responsive<boolean>;

  /**
   * Force your .nav’s contents to extend the full available width with one of two modifier classes
   *
   * @default false
   */
  fill: boolean;

  /**
   * For equal-width elements, use .nav-justified. All horizontal space will be occupied by nav links, every nav item will be the same width.
   *
   * @default false
   */
  justified: boolean;
}>;

export type NavLinkProp = Partial<{
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
