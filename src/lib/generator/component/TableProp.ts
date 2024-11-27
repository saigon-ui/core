import { ThemeColor } from "../../saigon.types";

export type TableProp = Partial<{
  /**
   * Use contextual classes to color tables, table rows or individual cells.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * Use `.table-light` or `.table-dark` for light/dark theme
   */
  theme: "light" | "dark";

  /**
   * Add `.table-sm` to make any .table more compact by cutting all cell padding in half.
   *
   * @default undefined
   */
  size: boolean;

  /**
   * Use `.table-striped-columns` to add zebra-striping to any table column.
   *
   * @default false
   */
  striped: boolean;

  /**
   * Add `.table-bordered` for borders on all sides of the table and cells.
   *
   * @default false
   */
  bordered: boolean;

  /**
   * Add `.table-borderless` for a table without borders.
   *
   * @default false
   */
  borderless: boolean;

  /**
   * Add `.table-active` for a table without borders.
   *
   * @default false
   */
  active: boolean;

  /**
   * Add `.table-hover` to enable a hover state on table rows within a <tbody>.
   *
   * @default false
   */
  hover: boolean;

  /**
   * Responsive tables allow tables to be scrolled horizontally with ease
   */
  responsive: "sm" | "md" | "lg" | "xl" | "xxl";

  /**
   * Set the caption position
   *
   * @default top
   */
  caption: "top" | "bottom";
}>;

export type TableBodyProp = Partial<{
  /**
   * Add a thicker border, darker between table groups—<thead>, <tbody>, and <tfoot>—with .table-group-divider
   *
   * @default false
   */
  divider: boolean;

  /**
   * Use contextual classes to color tables, table rows or individual cells.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * Use `.table-light` or `.table-dark` for light/dark theme
   */
  theme: "light" | "dark";
}>;

export type TableSubProp = Partial<{
  /**
   * Use contextual classes to color tables, table rows or individual cells.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * Use `.table-light` or `.table-dark` for light/dark theme
   */
  theme: "light" | "dark";
}>;
