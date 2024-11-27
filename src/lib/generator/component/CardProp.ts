import { ThemeColor } from "../../saigon.types";

export type CardProp = Partial<{
  /**
   * Set a background-color with contrasting foreground color with our `.text-bg-{color}` helpers
   *
   * @default undefined
   */
  cardBg: ThemeColor;

  /**
   * Use border utilities to change just the border-color of a card. Note that you can put .text-{color} classes on the parent .card or a subset of the card’s contents.
   *
   * @default none
   */
  cardBorder: ThemeColor;

  /**
   * Remove cards background-color with `.bg-transparent`.
   *
   * @default false
   */
  cardBgTransparent: boolean;
}>;

export type CardImgProp = Partial<{
  /**
   * Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.
   *
   * @default top
   */
  variant: "top" | "bottom";

  /**
   * Override img `src` with placeholder
   *
   * @default false
   */
  placeholder: boolean;
}>;
