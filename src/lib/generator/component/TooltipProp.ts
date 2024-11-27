import { OffsetOptions } from "@floating-ui/react";
import { AnimationType } from "../../saigon.types";

export type TooltipProp = Partial<{
  /**
   * The informative text is displayed when users hover over, focus on, or tap an element.
   *
   * @default EmptyString
   */
  title: string | React.ReactElement;

  /**
   * Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL.
   *
   * @default top
   */
  placement: "top" | "right" | "bottom" | "left";

  /**
   * This is useful when you don’t know which placement will be best for the floating element, or don’t want to have to explicitly specify it.
   * Note: Will ignore `side` and `alignment` props
   *
   * @default false
   */
  autoPlacement: boolean;

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
   * Apply a CSS fade transition to the tooltip. Currently, working only with fade or zoom.
   *
   * @default Fade
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
