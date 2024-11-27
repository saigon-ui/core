import { OffsetOptions } from "@floating-ui/react";
import { AnimationType } from "../../saigon.types";
import { PlacementType } from "../types";

export type PopoverProp = Partial<{
  /**
   * Popovers title
   */
  title: string | React.ReactElement;

  /**
   * Popovers content
   */
  content: string | React.ReactElement;

  /**
   * Popovers display side
   * @default top
   */
  side: "top" | "right" | "bottom" | "left";

  /**
   * Popovers display alignment
   *
   * @default start
   */
  alignment: "start" | "end" | "middle";

  /**
   * Short syntax for `side`-`alignment` props
   *
   * @default placement
   */
  placement: PlacementType;

  /**
   * This is useful when you don’t know which placement will be best for the floating element, or don’t want to have to explicitly specify it.
   * Note: Will ignore `side` and `alignment` props
   *
   * @default false
   */
  autoPlacement: boolean;

  /**
   * Closes the popover when a dismissal is requested
   *
   * @default true
   */
  autoDismiss: boolean;

  /**
   * Closes the popover when a dismissal is requested
   *
   * @default true
   */
  hover: boolean;

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
   * Animate the popover on show and hide
   * @default 'fade'
   */
  animation: AnimationType;

  /**
   * Callback fired when the open/close the popover
   * @param open true when open
   * @param event original event object
   * @returns
   */
  onOpenChange: (open: boolean, event?: object) => void;
}>;
