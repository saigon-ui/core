import { Responsive } from "../../saigon.types";

export type ContainerProp = Partial<{
  /**
   * Use *.container-fluid* for a full width container, spanning the entire width of the viewport.
   * @default false
   */
  breakpoint: boolean | "sm" | "md" | "lg" | "xl" | "xxl" | "fluid";

  /**
   * Use .container-fluid to make width: 100% at all breakpoints
   *
   */
  fluid: boolean;
}>;

export type RowProp = Partial<{
  /**
   *
   * @default div
   */
  as: "div" | React.ComponentType;

  /**
   * Use these row columns classes to quickly create basic grid layouts or to control your card layouts.
   * @default undefined
   */
  rowCols: "auto" | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
   */
  g: 1 | 2 | 3 | 4 | 5;

  /**
   * Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
   */
  gx: 1 | 2 | 3 | 4 | 5;

  /**
   * Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
   */
  gy: 1 | 2 | 3 | 4 | 5;
}>;

export type ColProp = Partial<{
  /**
   *
   * @default div
   */
  as: "div" | React.ComponentType;

  /**
   * Apply property on viewports sized XS (extra small) or wider.
   * @NOTE: xs = 0px
   */
  col: Responsive<"auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

  /**
   * For offsetting grid columns you can set an offset value or for a more general layout.
   */
  offset: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}>;

export type StackProp = Partial<{
  /**
   *
   * @default div
   */
  as: "div" | React.ComponentType;

  /**
   * Applying Bootstrap `flex-fill` classname
   */
  fill: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-row` classname, aka, `flex-direction: row`
   */
  row: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-column` classname, aka, `flex-direction: column`
   */
  column: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-row-reverse` classname, aka, `flex-direction: row-reverse`
   */
  rowReverse: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-column-reverse` classname, aka, `flex-direction: column-reverse`
   */
  columnReverse: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-grow-0` classname, aka, `flex-grow: 0`
   */
  grow0: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-grow-1` classname, aka, `flex-grow: 1`
   */
  grow1: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-shrink-0` classname, aka, `flex-shrink: 0`
   */
  shrink0: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-shrink-1` classname, aka, `flex-shrink: 1`
   */
  shrink1: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-wrap` classname, aka, `flex-wrap: wrap`
   */
  wrap: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-nowrap` classname, aka, `flex-wrap: nowrap`
   */
  nowrap: Responsive<boolean>;

  /**
   * Applying Bootstrap `flex-wrap-reverse` classname, aka, `flex-wrap: wrap-reverse`
   */
  wrapReverse: Responsive<boolean>;
}>;
