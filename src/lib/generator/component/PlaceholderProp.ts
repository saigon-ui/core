import { Responsive, ThemeColor } from "../../saigon.types";

export type PlaceholderProp = Partial<{
  /**
   * Effect of the skeleton loader
   *
   * @default glow
   */
  animation: "glow" | "wave" | "bouncing";
}>;

export type PlaceholderSpanProp = Partial<{
  /**
   * Effect of the skeleton loader
   *
   * @default glow
   */
  /**
   * Apply property on viewports sized XS (extra small) or wider.
   * @NOTE: xs = 0px
   */
  col: Responsive<"auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

  /**
   * For offsetting grid columns you can set an offset value or for a more general layout.
   */
  offset: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  /**
   * The size of .placeholders are based on the typographic style of the parent element
   *
   * @default undefined equivalent to `md`
   */
  size: "xs" | "sm" | "lg";

  /**
   * Set skeleton background color.
   *
   * @default undefined
   */
  variant: ThemeColor;
}>;

export type PlaceholderButtonProp = Partial<{
  /**
   * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
   * @param {ThemeColor | 'link'} primary
   */
  variant: ThemeColor | "link";

  /**
   * The same as Button size
   *
   * @default md
   */
  size: "lg" | "sm";
}>;
