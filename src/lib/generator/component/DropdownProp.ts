import { OffsetOptions } from "@floating-ui/react";
import { AnimationType, ThemeColor } from "../../saigon.types";

export type DropdownProp = Partial<{
  /**
   * Dropdown side
   * @default bottom
   */
  side: "top" | "right" | "bottom" | "left";

  /**
   * Dropdown alignment
   * @default start
   */
  alignment: "start" | "end" | "middle";

  /**
   * CSS .position strategy
   *
   * @default 'absolute'
   */
  strategy: "fixed" | "absolute";

  /**
   * Translates the floating element along the specified axes.
   *
   * @OffsetOptions = number | { mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null }
   * @description More info at: https://floating-ui.com/docs/offset
   */
  offset: OffsetOptions;

  /**
   * This is useful when you don’t know which placement will be best for the floating element, or don’t want to have to explicitly specify it.
   * Note: Will ignore `side` and `alignment` props
   *
   * @default false
   */
  autoPlacement: boolean;

  /**
   * Animate the popover on show and hide
   * @default 'fade'
   */
  animation: AnimationType;

  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.
   * @default false
   */
  splitButton: boolean;

  /**
   * Callback fired when the open/close the dropdown
   * @param open true when open
   * @param event original event object
   * @returns
   */
  onOpenChange: (open: boolean, event?: object) => void;
}>;

export type DropdownToggleProp = Partial<{
  /**
   * Use contextual classes to style list items with a stateful background and color.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * @default false
   */
  split: boolean;
}>;

export type DropdownItemProp = Partial<{
  /**
   *
   */
  as: "button" | "a" | string;

  /**
   * Add .active to items in the dropdown to style them as active. To convey the active state to assistive technologies, use the aria-current attribute — using the page value for the current page, or true for the current item in a set.
   */
  active: boolean;

  /**
   * Add .disabled to items in the dropdown to style them as disabled.
   */
  disabled: boolean;

  /**
   * Need when `as`='a'
   */
  href: "#" | string;

  /**
   * Need when `as`='button'
   */
  type: "button" | string;
}>;
