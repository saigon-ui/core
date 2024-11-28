/* eslint-disable @typescript-eslint/no-unused-vars */
import { Interpolation, Theme } from "@emotion/react";
import { OffsetOptions } from "@floating-ui/react";
import * as CSS from "csstype";

export interface ColorValue {
  hex: string;
  rgb: { r: number; g: number; b: number; a: number };
}

export type ThemeOptions = {
  cssVarPrefix: string;
  direction: "ltr" | "rtl";
  colors: {
    white: string;
    gray: {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
    };
    black: string;
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
  };
  variants: {
    primary: ColorValue;
    secondary: ColorValue;
    success: ColorValue;
    info: ColorValue;
    warning: ColorValue;
    danger: ColorValue;
    light: ColorValue;
    dark: ColorValue;
  };
  breakpoints: Breakpoint<string>;
  spacer: {
    base: string;
    spacers: {
      "0": string;
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
    };
  };
};

export type ThemeColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

// A strick to keep Typescript intellisense survival from add string to all props
export type CSSString = string & Record<never, never>;

/**
 * Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.
 * xs: 540px
 * sm: 540px
 * md: 720px
 * lg: 960px
 * xl: 1140px
 * xxl: 1320px
 */
export type Breakpoint<T> = {
  /**
   * Apply property on viewports sized XS (extra small) or wider.
   * @NOTE: xs = 0px
   */
  xs?: T;

  /**
   * Apply property on viewports sized SM (small) or wider.
   * @NOTE: sm =  540px
   */
  sm?: T;

  /**
   * Apply property on viewports sized MD (medium) or wider.
   * @NOTE: md =  720px
   */
  md?: T;

  /**
   * Apply property on viewports sized LG (large) or wider.
   * @NOTE: lg = 960px
   */
  lg?: T;

  /**
   * Apply property on viewports sized XL (extra large)) or wider.
   * @NOTE: xl = 1140px
   */
  xl?: T;

  /**
   * Apply property on viewports sized XXL (extra extra large) or wider.
   * @NOTE: xxl = 1320px
   */
  xxl?: T;
};

export type Responsive<Props> = Props | Breakpoint<Props>;

// Generated code insertion start here

export type SpacingProps = Partial<{
  /**
   * `m` - for classes that set `margin`
   * @param {string} m '0'|'1'|'2'|'3'|'4'|'5'|'auto', (CSS.Property.Margin & Record<never, never>), "none"
   */
  m: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.Margin & Record<never, never>)
    | "none"
  >;

  /**
   * `mb` - for classes that set `margin-bottom`.
   * @param {string} mb "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginBottom & Record<never, never>), "none"
   */
  mb: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.MarginBottom & Record<never, never>)
    | "none"
  >;

  /**
   * `me` - for classes that set `margin-right`.
   * @param {string} me "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginRight & Record<never, never>), "none"
   */
  me: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.MarginRight & Record<never, never>)
    | "none"
  >;

  /**
   * `ms` - for classes that set `margin-left`.
   * @param {string} ms "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginLeft & Record<never, never>), "none"
   */
  ms: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.MarginLeft & Record<never, never>)
    | "none"
  >;

  /**
   * `mt` - for classes that set `margin-top`.
   * @param {string} mt "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginTop & Record<never, never>), "none"
   */
  mt: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.MarginTop & Record<never, never>)
    | "none"
  >;

  /**
   * `mx` - for classes that set `margin-left` and `margin-right` equally.
   * @param {string} mx "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginLeft & Record<never, never>), (CSS.Property.MarginRight & Record<never, never>), "none"
   */
  mx: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.MarginLeft & Record<never, never>)
    | (CSS.Property.MarginRight & Record<never, never>)
    | "none"
  >;

  /**
   * `my` - for classes that set `margin-top` and `margin-bottom` equally.
   * @param {string} my "0", "1", "2", "3", "4", "5", "auto", (CSS.Property.MarginTop & Record<never, never>), (CSS.Property.MarginBottom & Record<never, never>), "none"
   */
  my: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "auto"
    | (CSS.Property.MarginTop & Record<never, never>)
    | (CSS.Property.MarginBottom & Record<never, never>)
    | "none"
  >;

  /**
   * `p` - for classes that set `padding`
   * @param {string} p '0'|'1'|'2'|'3'|'4'|'5', (CSS.Property.Padding & Record<never, never>), "none"
   */
  p: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.Padding & Record<never, never>)
    | "none"
  >;

  /**
   * `pb` - for classes that set `padding-bottom`.
   * @param {string} pb "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingBottom & Record<never, never>), "none"
   */
  pb: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.PaddingBottom & Record<never, never>)
    | "none"
  >;

  /**
   * `pe` - for classes that set `padding-left`.
   * @param {string} pe "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingRight & Record<never, never>), "none"
   */
  pe: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.PaddingRight & Record<never, never>)
    | "none"
  >;

  /**
   * `ps` - for classes that set `padding-left`.
   * @param {string} ps "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingLeft & Record<never, never>), "none"
   */
  ps: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.PaddingLeft & Record<never, never>)
    | "none"
  >;

  /**
   * `pt` - for classes that set `padding-top`.
   * @param {string} pt "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingTop & Record<never, never>), "none"
   */
  pt: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.PaddingTop & Record<never, never>)
    | "none"
  >;

  /**
   * `px` - for classes that set `padding-left` and `padding-right` equally.
   * @param {string} px "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingLeft & Record<never, never>), (CSS.Property.PaddingRight & Record<never, never>)
   */
  px: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.PaddingLeft & Record<never, never>)
    | (CSS.Property.PaddingRight & Record<never, never>)
  >;

  /**
   * `py` - for classes that set `padding-top` and `padding-bottom` equally.
   * @param {string} py "0", "1", "2", "3", "4", "5", (CSS.Property.PaddingTop & Record<never, never>), (CSS.Property.PaddingBottom & Record<never, never>), "none"
   */
  py: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.PaddingTop & Record<never, never>)
    | (CSS.Property.PaddingBottom & Record<never, never>)
    | "none"
  >;
}>;

export type PositionProps = Partial<{
  /**
   * Setting `bottom: *` css property.
   * @param {string} bottom "0", "50", "100", (CSS.Property.Bottom & Record<never, never>), "none"
   */
  bottom: Responsive<
    "0" | "50" | "100" | (CSS.Property.Bottom & Record<never, never>) | "none"
  >;

  /**
   * Setting `right: *` css property.
   * @param {string} end "0", "50", "100", (CSS.Property.Right & Record<never, never>), "none"
   */
  end: Responsive<
    "0" | "50" | "100" | (CSS.Property.Right & Record<never, never>) | "none"
  >;

  /**
   * Position an element at the top of the viewport, or at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
   * @param {string} fixed "top", "bottom", "none"
   */
  fixed: Responsive<"top" | "bottom" | "none">;

  /**
   * Toggle floats on any element, across any breakpoint, using our responsive float utilities.
   * @param {string} float "start", "end", "none"
   */
  float: Responsive<"start" | "end" | "none">;

  /**
   * The `inset` property sets the distance between an element and the parent element.
   *
   * **Note:** For this property to take effect it has to have the position property specified.
   * @param {CSS.Property.Inset} inset CSS.Property.Inset
   */
  inset: Responsive<CSS.Property.Inset>;

  /**
   * The `inset-block` property sets the distance between an element and the parent element in the block direction.
   *
   * **Note:** For this property to take effect it has to have the position property specified.
   * @param {CSS.Property.InsetBlock} insetBlock CSS.Property.InsetBlock
   */
  insetBlock: Responsive<CSS.Property.InsetBlock>;

  /**
   * The `inset-inline` property sets the distance between an element and the parent element in the inline direction.
   *
   * **Note:** For this property to take effect it has to have the position property specified.
   * @param {CSS.Property.InsetInline} insetInline CSS.Property.InsetInline
   */
  insetInline: Responsive<CSS.Property.InsetInline>;

  /**
   * Setting `left: *` css property.
   * @param {string} start "0", "50", "100", (CSS.Property.Left & Record<never, never>), "none"
   */
  left: Responsive<
    "0" | "50" | "100" | (CSS.Property.Left & Record<never, never>) | "none"
  >;

  /**
   * Use these helpers for quickly configuring the position of an element.
   *
   * **Fixed top** Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
   *
   * **Fixed bottom** Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
   *
   * **Sticky top** Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.
   *
   * **Sticky bottom** Position an element at the bottom of the viewport, from edge to edge, but only after you scroll past it.
   *
   * @param {string} position "static", "relative", "absolute", "fixed", "sticky", "none"
   */
  position: Responsive<
    "static" | "relative" | "absolute" | "fixed" | "sticky" | "none"
  >;

  /**
   * Setting `right: *` css property.
   * @param {string} end "0", "50", "100", (CSS.Property.Right & Record<never, never>), "none"
   */
  right: Responsive<
    "0" | "50" | "100" | (CSS.Property.Right & Record<never, never>) | "none"
  >;

  /**
   * The `rotate` property defines a value for how much an element is rotated clockwise around z-axis. To rotate an element around x-axis or y-axis or in other ways, this must be defined.
   * @param {CSS.Property.Rotate} rotate CSS.Property.Rotate
   */
  rotate: Responsive<CSS.Property.Rotate>;

  /**
   * The `scale` property defines values for how much an element is scaled in x- and y-directions. You can also define how much an element is scaled in z-direction.
   * @param {CSS.Property.Scale} scale CSS.Property.Scale
   */
  scale: Responsive<CSS.Property.Scale>;

  /**
   * Setting `left: *` css property.
   * @param {string} start "0", "50", "100", (CSS.Property.Left & Record<never, never>), "none"
   */
  start: Responsive<
    "0" | "50" | "100" | (CSS.Property.Left & Record<never, never>) | "none"
  >;

  /**
   * Position an element at the top of the viewport, or bottom of the viewport, from edge to edge, but only after you scroll past it.
   * @param {string} sticky "top", "bottom", "none"
   */
  sticky: Responsive<"top" | "bottom" | "none">;

  /**
   * Setting `top: *` css property.
   * @param {string} top "0", "50", "100", (CSS.Property.Top & Record<never, never>), "none"
   */
  top: Responsive<
    "0" | "50" | "100" | (CSS.Property.Top & Record<never, never>) | "none"
  >;

  /**
   * The `transform` property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
   * @param {CSS.Property.Transform} transform CSS.Property.Transform
   */
  transform: Responsive<CSS.Property.Transform>;

  /**
   * The `translate` property defines x- and y-coordinates of an element in 2D. You can also define the z-coordinate to change position in 3D.
   * @param {CSS.Property.Translate} translate CSS.Property.Translate
   */
  translate: Responsive<CSS.Property.Translate>;

  /**
   * Setting `transform: translate(-50%, -50%)` css property.
   * @param {string} translateMiddle boolean
   */
  translateMiddle: Responsive<boolean>;

  /**
   * Setting `transform: translateX(-50%)` css property.
   * @param {string} translateMiddleX boolean
   */
  translateMiddleX: Responsive<boolean>;

  /**
   * Setting `transform: translateY(-50%)` css property.
   * @param {string} translateMiddleY boolean
   */
  translateMiddleY: Responsive<boolean>;

  /**
   * Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.
   * @param {string} vAlign "baseline", "top", "middle", "bottom", "none"
   */
  vAlign: Responsive<"baseline" | "top" | "middle" | "bottom" | "none">;
}>;

export type LayoutProps = Partial<{
  /**
   * Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
   * @param {string} display "inline", "inline-block", "block", "grid", "inline-grid", "table", "table-row", "table-cell", "flex", "inline-flex", "none", (CSS.Property.Display & Record<never, never>)
   */
  display: Responsive<
    | "inline"
    | "inline-block"
    | "block"
    | "grid"
    | "inline-grid"
    | "table"
    | "table-row"
    | "table-cell"
    | "flex"
    | "inline-flex"
    | "none"
    | (CSS.Property.Display & Record<never, never>)
  >;

  /**
   * Change the display value of elements when printing with our print display utility classes. Includes support for the same display values as our responsive .d-* utilities.
   * @param {string} displayPrint "inline", "inline-block", "block", "grid", "inline-grid", "table", "table-row", "table-cell", "flex", "inline-flex", "none"
   */
  displayPrint: Responsive<
    | "inline"
    | "inline-block"
    | "block"
    | "grid"
    | "inline-grid"
    | "table"
    | "table-row"
    | "table-cell"
    | "flex"
    | "inline-flex"
    | "none"
  >;

  /**
   * Set css `height: ` with percentage.
   * @param {string} height "25", "50", "75", "100", "auto", (CSS.Property.Height & Record<never, never>), "none"
   */
  height: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | "auto"
    | (CSS.Property.Height & Record<never, never>)
    | "none"
  >;

  /**
   * Use .hstack for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use .gap-* utilities to add space between items.
   * @param {boolean} hstack boolean
   */
  hstack: Responsive<boolean>;

  /**
   * Set css `max-height: ` percentage.
   * @param {string} maxHeight "25", "50", "75", "100", "auto", (CSS.Property.MaxHeight & Record<never, never>), "none"
   */
  maxHeight: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | "auto"
    | (CSS.Property.MaxHeight & Record<never, never>)
    | "none"
  >;

  /**
   * Set css `max-width: ` percentage.
   * @param {string} maxWidth "25", "50", "75", "100", "auto", (CSS.Property.MaxWidth & Record<never, never>), "none"
   */
  maxWidth: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | "auto"
    | (CSS.Property.MaxWidth & Record<never, never>)
    | "none"
  >;

  /**
   * Set css `min-height: ` percentage.
   * @param {string} minHeight "25", "50", "75", "100", "auto", (CSS.Property.MinHeight & Record<never, never>), "none"
   */
  minHeight: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | "auto"
    | (CSS.Property.MinHeight & Record<never, never>)
    | "none"
  >;

  /**
   * Set css `min-width: ` percentage.
   * @param {string} minWidth "25", "50", "75", "100", "auto", (CSS.Property.MinWidth & Record<never, never>), "none"
   */
  minWidth: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | "auto"
    | (CSS.Property.MinWidth & Record<never, never>)
    | "none"
  >;

  /**
   * Use these shorthand utilities for quickly configuring how content overflows an element.
   * @param {string} overflow "auto", "hidden", "visible", "scroll", (CSS.Property.Overflow & Record<never, never>), "none"
   */
  overflow: Responsive<
    | "auto"
    | "hidden"
    | "visible"
    | "scroll"
    | (CSS.Property.Overflow & Record<never, never>)
    | "none"
  >;

  /**
   * Adjust the overflow-x property to affect the overflow of content horizontally.
   * @param {string} overflowX "auto", "hidden", "visible", "scroll", (CSS.Property.OverflowX & Record<never, never>), "none"
   */
  overflowX: Responsive<
    | "auto"
    | "hidden"
    | "visible"
    | "scroll"
    | (CSS.Property.OverflowX & Record<never, never>)
    | "none"
  >;

  /**
   * Adjust the overflow-y property to affect the overflow of content vertically.
   * @param {string} overflowY "auto", "hidden", "visible", "scroll", (CSS.Property.OverflowY & Record<never, never>), "none"
   */
  overflowY: Responsive<
    | "auto"
    | "hidden"
    | "visible"
    | "scroll"
    | (CSS.Property.OverflowY & Record<never, never>)
    | "none"
  >;

  /**
   * Control the visibility of elements, without modifying their display, with visibility utilities.
   * @param {string} visibility (CSS.Property.Visibility & Record<never, never>), "none"
   */
  visibility: Responsive<
    (CSS.Property.Visibility & Record<never, never>) | "none"
  >;

  /**
   * Use .vstack to create vertical layouts. Stacked items are full-width by default. Use .gap-* utilities to add space between items.
   * @param {boolean} hstack boolean
   */
  vstack: Responsive<boolean>;

  /**
   * Set css `width: ` with percentage.
   * @param {string} width "25", "50", "75", "100", "auto", (CSS.Property.Width & Record<never, never>), "none"
   */
  width: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | "auto"
    | (CSS.Property.Width & Record<never, never>)
    | "none"
  >;

  /**
   * Use our low-level z-index utilities to quickly change the stack level of an element or component.
   * @param {string} zIndex "n1", "0", "1", "2", "3", (CSS.Property.ZIndex & Record<never, never>), "none"
   */
  zIndex: Responsive<
    | "n1"
    | "0"
    | "1"
    | "2"
    | "3"
    | (CSS.Property.ZIndex & Record<never, never>)
    | "none"
  >;
}>;

export type BackgroundProps = Partial<{
  /**
   * Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set color, so in some cases you’ll want to use .text-* color utilities.
   * @param {string} bg ThemeColor, (CSS.Property.BackgroundColor & Record<never, never>), "black", "white", "body", "transparent", "body-secondary", "body-tertiary", "none"
   */
  bg: Responsive<
    | ThemeColor
    | (CSS.Property.BackgroundColor & Record<never, never>)
    | "black"
    | "white"
    | "body"
    | "transparent"
    | "body-secondary"
    | "body-tertiary"
    | "none"
  >;

  /**
   * The `background-attachment` property sets whether a background image scrolls with the rest of the page, or is fixed.
   * @param {CSS.Property.BackgroundAttachment} bgAttachment CSS.Property.BackgroundAttachment
   */
  bgAttachment: Responsive<CSS.Property.BackgroundAttachment>;

  /**
   * The `background-blend-mode` property defines the blending mode of each background layer (color and/or image).
   * @param {CSS.Property.BackgroundBlendMode} bgBlendMode CSS.Property.BackgroundBlendMode
   */
  bgBlendMode: Responsive<CSS.Property.BackgroundBlendMode>;

  /**
   * The `background-clip` property defines how far the background (color or image) should extend within an element.
   * @param {CSS.Property.BackgroundClip} bgClip CSS.Property.BackgroundClip
   */
  bgClip: Responsive<CSS.Property.BackgroundClip>;

  /**
   * The `background-color` property sets the background color of an element.
   *
   * The background of an element is the total size of the element, including padding and border (but not the margin).
   *
   * **Tip:** Use a background color and a text color that makes the text easy to read.
   * @param {CSS.Property.BackgroundColor} bgColor CSS.Property.BackgroundColor
   */
  bgColor: Responsive<CSS.Property.BackgroundColor>;

  /**
   * By adding a .bg-gradient class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.
   * Do you need a gradient in your custom CSS? Just add `background-image: var(--#{$prefix}gradient)`.
   * @param {string} bgGradient boolean
   */
  bgGradient: Responsive<boolean>;

  /**
   * The `background-image` property sets one or more background images for an element.
   *
   * By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
   *
   * **Tip:** The background of an element is the total size of the element, including padding and border (but not the margin).
   *
   * **Tip:** Always set a background-color to be used if the image is unavailable.
   * @param {CSS.Property.BackgroundImage} bgImage CSS.Property.BackgroundImage
   */
  bgImage: Responsive<CSS.Property.BackgroundImage>;

  /**
   * As of v5.1.0, background-color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
   * @param {string} bgOpacity "10", "25", "50", "75", "100", number, "none"
   */
  bgOpacity: Responsive<"10" | "25" | "50" | "75" | "100" | number | "none">;

  /**
   * The background-origin property specifies the origin position (the background positioning area) of a background image.
   *
   * **Note:** This property has no effect if `background-attachment` is "fixed".
   * @param {CSS.Property.BackgroundOrigin} bgOrigin CSS.Property.BackgroundOrigin
   */
  bgOrigin: Responsive<CSS.Property.BackgroundOrigin>;

  /**
   * The `background-position` property sets the starting position of a background image.
   *
   * **Tip:** By default, a `background-image` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
   * @param {CSS.Property.BackgroundPosition} bgPosition CSS.Property.BackgroundPosition
   */
  bgPosition: Responsive<CSS.Property.BackgroundPosition>;

  /**
   * The `background-position-x` property sets the position of a background image on the x-axis.
   *
   * **Tip:** By default, a `background-image` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
   * @param {CSS.Property.BackgroundPositionX} bgPositionX CSS.Property.BackgroundPositionX
   */
  bgPositionX: Responsive<CSS.Property.BackgroundPositionX>;

  /**
   * The `background-position-y` property sets the position of a background image on the y-axis.
   *
   * **Tip:** By default, a `background-image` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
   * @param {CSS.Property.BackgroundPositionY} bgPositionY CSS.Property.BackgroundPositionY
   */
  bgPositionY: Responsive<CSS.Property.BackgroundPositionY>;

  /**
   * The `background-repeat` property sets if/how a background image will be repeated.
   *
   * By default, a `background-image` is repeated both vertically and horizontally.
   *
   * **Tip:** The background image is placed according to the `background-position` property. If no `background-position` is specified, the image is always placed at the element's top left corner.
   * @param {CSS.Property.BackgroundRepeat} bgRepeat CSS.Property.BackgroundRepeat
   */
  bgRepeat: Responsive<CSS.Property.BackgroundRepeat>;

  /**
   * The `background-size` property specifies the size of the background images.
   * @param {CSS.Property.BackgroundSize} bgSize CSS.Property.BackgroundSize
   */
  bgSize: Responsive<CSS.Property.BackgroundSize>;

  /**
   * Render background color `.bg-*` with `.bg-*-subtle` utility.
   * @param {string} bgSubtle boolean
   */
  bgSubtle: Responsive<boolean>;
}>;

export type BorderProps = Partial<{
  /**
   * Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
   * @param {string} border boolean, (CSS.Property.Border & Record<never, never>), "0", "none"
   */
  border: Responsive<
    boolean | (CSS.Property.Border & Record<never, never>) | "0" | "none"
  >;

  /**
   * The CSS `border-block` property is very similar to CSS property border, but the `border-block` property is dependent on block direction. Aka, `writing-mode` that defines block direction
   * @param {string} borderBlock CSS.Property.BorderBlock
   */
  borderBlock: Responsive<CSS.Property.BorderBlock>;

  /**
   * Set border on `border-bottom` only.
   * @param {string} borderBottom boolean, (CSS.Property.BorderBottom & Record<never, never>), "0", "none"
   */
  borderBottom: Responsive<
    boolean | (CSS.Property.BorderBottom & Record<never, never>) | "0" | "none"
  >;

  /**
   * The `border-collapse` property sets the collapsing borders model for two tables.
   * @param {string} borderCollapse CSS.Property.BorderCollapse
   */
  borderCollapse: Responsive<CSS.Property.BorderCollapse>;

  /**
   * Change the border color using utilities built on our theme colors.
   * @param {string} borderColor ThemeColor, CSS.Property.BorderColor, "black", "white", "none"
   */
  borderColor: Responsive<
    ThemeColor | CSS.Property.BorderColor | "black" | "white" | "none"
  >;

  /**
   * Set border on `border-right` only.
   * @param {string} borderEnd boolean, (CSS.Property.BorderLeft & Record<never, never>), "0", "none"
   */
  borderEnd: Responsive<
    boolean | (CSS.Property.BorderLeft & Record<never, never>) | "0" | "none"
  >;

  /**
   * The `border-image` property allows you to specify an image to be used as the border around an element.
   * @param {string} borderImage CSS.Property.BorderImage
   */
  borderImage: Responsive<CSS.Property.BorderImage>;

  /**
   * The `border-iline` property sets the style, color and width of the borders for different elements in the inline direction.
   * @param {string} borderInline CSS.Property.BorderInline
   */
  borderInline: Responsive<CSS.Property.BorderInline>;

  /**
   * Bootstrap border-{color} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
   * @param {string} borderOpacity "10", "25", "50", "75", "100", number, "none"
   */
  borderOpacity: Responsive<
    "10" | "25" | "50" | "75" | "100" | number | "none"
  >;

  /**
   * Add classes to an element to easily round with `border-radius`.
   * @param {string} borderRadius boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
   */
  borderRadius: Responsive<
    | boolean
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "circle"
    | "pill"
    | (CSS.Property.BorderRadius & Record<never, never>)
    | "none"
  >;

  /**
   * Add classes to an element to easily round `border-bottom-right-radius` and `border-bottom-left-radius` corners.
   * @param {string} borderRadiusBottom boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
   */
  borderRadiusBottom: Responsive<
    | boolean
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "circle"
    | "pill"
    | (CSS.Property.BorderRadius & Record<never, never>)
    | "none"
  >;

  /**
   * Add classes to an element to easily round `border-top-right-radius` and `border-bottom-right-radius` corners.
   * @param {string} borderRadiusEnd boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
   */
  borderRadiusEnd: Responsive<
    | boolean
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "circle"
    | "pill"
    | (CSS.Property.BorderRadius & Record<never, never>)
    | "none"
  >;

  /**
   * Add classes to an element to easily round `border-top-left-radius` and `border-bottom-left-radius` corners.
   * @param {string} borderRadiusStart boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
   */
  borderRadiusStart: Responsive<
    | boolean
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "circle"
    | "pill"
    | (CSS.Property.BorderRadius & Record<never, never>)
    | "none"
  >;

  /**
   * Add classes to an element to easily round `border-top-left-radius` and `border-top-right-radius` corners.
   * @param {string} borderRadiusTop boolean, "0", "1", "2", "3", "4", "5", "circle", "pill", (CSS.Property.BorderRadius & Record<never, never>), "none"
   */
  borderRadiusTop: Responsive<
    | boolean
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "circle"
    | "pill"
    | (CSS.Property.BorderRadius & Record<never, never>)
    | "none"
  >;

  /**
   * The `border-spacing` property sets the distance between the borders of adjacent cells.
   * @param {string} borderSpacing CSS.Property.BorderSpacing
   */
  borderSpacing: Responsive<CSS.Property.BorderSpacing>;

  /**
   * Set border on `border-left` only.
   * @param {string} borderStart boolean, (CSS.Property.BorderRight & Record<never, never>), "0", "none"
   */
  borderStart: Responsive<
    boolean | (CSS.Property.BorderRight & Record<never, never>) | "0" | "none"
  >;

  /**
   * The `border-style` property sets the style of an element's four borders. This property can have from one to four values.
   * @param {string} borderStyle CSS.Property.BorderStyle
   */
  borderStyle: Responsive<CSS.Property.BorderStyle>;

  /**
   * Apply border color with `-subtle` colors.
   * @param {string} borderSubtle boolean
   */
  borderSubtle: Responsive<boolean>;

  /**
   * Set border on `border-top` only.
   * @param {string} borderTop boolean, (CSS.Property.BorderTop & Record<never, never>), "0", "none"
   */
  borderTop: Responsive<
    boolean | (CSS.Property.BorderTop & Record<never, never>) | "0" | "none"
  >;

  /**
   * Add classes to an element to easily round `border-top-left-radius` and `border-bottom-left-radius` corners.
   * @param {string} borderWidth "1", "2", "3", "4", "5", (CSS.Property.BorderWidth & Record<never, never>), "none"
   */
  borderWidth: Responsive<
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.BorderWidth & Record<never, never>)
    | "none"
  >;
}>;

export type TextProps = Partial<{
  /**
   * Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.
   * @param {ThemeColor} color CSS.Property.Color
   */
  color: Responsive<CSS.Property.Color>;

  /**
   * The `.focus-ring` helper removes the default outline on :focus, replacing it with a `box-shadow` that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the :root level, that can be modified for any element or component.
   * @param {string} focusRing ThemeColor, "none"
   */
  focusRing: Responsive<ThemeColor | "none">;

  /**
   * The `font` property is a shorthand property for: `font-style`, `font-variant`, `font-weight`, `font-size/line-height` and `font-family`.
   *
   * The font-size and font-family values are required. If one of the other values is missing, their default value are used.
   *
   * **Note:** The line-height property sets the space between lines.
   * @param {CSS.Property.Font} font CSS.Property.Font
   */
  font: Responsive<CSS.Property.Font>;

  /**
   * The `font-family` property specifies the font for an element.
   *
   * The `font-family` property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.
   * @param {CSS.Property.FontFamily} fontFamily CSS.Property.FontFamily
   */
  fontFamily: Responsive<CSS.Property.FontFamily>;

  /**
   * The `font-kerning` property controls the usage of the kerning information stored in a font.
   *
   * **Tip:** Kerning defines how letters are spaced.
   *
   * **Note:** For fonts that do not include kerning data, this property will have no visible effect.
   * @param {CSS.Property.FontKerning} fontKerning CSS.Property.FontKerning
   */
  fontKerning: Responsive<CSS.Property.FontKerning>;

  /**
   * Change a selection to our monospace font stack with `.font-monospace.`
   * @param {string} fontMonospace boolean
   */
  fontMonospace: Responsive<boolean>;

  /**
   * Quickly change the font-size of text. While our heading classes (e.g., .h1–.h6) apply font-size, font-weight, and line-height, these utilities only apply font-size. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.
   * @param {string} fontSize "1", "2", "3", "4", "5", "6", (CSS.Property.FontSize & Record<never, never>), "none"
   */
  fontSize: Responsive<
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | (CSS.Property.FontSize & Record<never, never>)
    | "none"
  >;

  /**
   * The `font-size-adjust` property gives you better control of the font size when the first selected font is not available.
   *
   * When a font is not available, the browser uses the second specified font. This could result in a big change for the font size. To prevent this, use the `font-size-adjust` property.
   * @param {CSS.Property.FontSizeAdjust} fontSizeAdjust CSS.Property.FontSizeAdjust
   */
  fontSizeAdjust: Responsive<CSS.Property.FontSizeAdjust>;

  /**
   * The `font-stretch` property allows you to make text narrower (condensed) or wider (expanded).
   *
   * **Note:** Some fonts provide additional faces; condensed faces and expanded faces. For these fonts, you can use the font-stretch property to select a normal, condensed, or expanded font face.
   *
   * **Note:** This property has no effect if the selected font does not offer condensed or expanded faces!
   * @param {CSS.Property.FontStretch} fontStretch CSS.Property.FontStretch
   */
  fontStretch: Responsive<CSS.Property.FontStretch>;

  /**
   * Quickly change the `font-weight` of text with these utilities
   * @param {string} fontStyle "italic", "normal", (CSS.Property.FontStyle & Record<never, never>), "none"
   */
  fontStyle: Responsive<
    | "italic"
    | "normal"
    | (CSS.Property.FontStyle & Record<never, never>)
    | "none"
  >;

  /**
   * In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.
   *
   * The `font-variant` property specifies whether or not a text should be displayed in a small-caps font.
   * @param {CSS.Property.FontVariant} fontVariant CSS.Property.FontVariant
   */
  fontVariant: Responsive<CSS.Property.FontVariant>;

  /**
   * The `font-variant-caps` property controls the usage of alternate glyphs for capital letters.
   * @param {CSS.Property.FontVariantCaps} fontVariant CSS.Property.FontVariantCaps
   */
  fontVariantCaps: Responsive<CSS.Property.FontVariantCaps>;

  /**
   * Quickly change the `font-style` of text with these utilities
   * @param {string} fontWeight "lighter", "light", "normal", "medium", "semibold", "bold", "bolder", (CSS.Property.FontWeight & Record<never, never>), "none"
   */
  fontWeight: Responsive<
    | "lighter"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "bolder"
    | (CSS.Property.FontWeight & Record<never, never>)
    | "none"
  >;

  /**
   * Change the line height with `.lh-*` utilities.
   * @param {string} lineHeight "1", "sm", "base", "lg", (CSS.Property.LineHeight & Record<never, never>), "none"
   */
  lineHeight: Responsive<
    | "1"
    | "sm"
    | "base"
    | "lg"
    | (CSS.Property.LineHeight & Record<never, never>)
    | "none"
  >;

  /**
   * Colored link helpers have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.
   * @param {string} textTrunc "body-emphasis", ThemeColor, "none"
   */
  linkColor: Responsive<"body-emphasis" | ThemeColor | "none">;

  /**
   * Change the underline’s distance from your text. Offset is set in em units to automatically scale with the element’s current font-size.
   * @param {string} linkOffset "1", "2", "3", (CSS.Property.TextUnderlineOffset & Record<never, never>), "none"
   */
  linkOffset: Responsive<
    | "1"
    | "2"
    | "3"
    | (CSS.Property.TextUnderlineOffset & Record<never, never>)
    | "none"
  >;

  /**
   * Change the alpha opacity of the link rgba() color value with utilities. Please be aware that changes to a color’s opacity can lead to links with insufficient contrast.
   * @param {opacity} textEmphasis "10", "25", "50", "75", "100", number, "none"
   */
  linkOpacity: Responsive<"10" | "25" | "50" | "75" | "100" | number | "none">;

  /**
   * Change the underline’s color independent of the link text color.
   * @param {string} linkUnderline ThemeColor, boolean, "none"
   */
  linkUnderline: Responsive<ThemeColor | boolean | "none">;

  /**
   * Change the underline’s opacity. Requires adding .link-underline to first set an rgba() color we use to then modify the alpha opacity.
   * @param {string} linkUnderlineOpacity "0", "10", "25", "50", "75", "100", number, "none"
   */
  linkUnderlineOpacity: Responsive<
    "0" | "10" | "25" | "50" | "75" | "100" | number | "none"
  >;

  /**
   * Add .stretched-link to a link to make its containing block clickable via a ::after pseudo element. In most cases, this means that an element with position: relative; that contains a link with the .stretched-link class is clickable. Please note given how CSS position works, .stretched-link cannot be mixed with most table elements.
   * @param {string} stretchedLink boolean
   */
  stretchedLink: Responsive<boolean>;

  /**
   * Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.
   * @param {string} textAlign "start", "end", "center", "none"
   */
  textAlign: Responsive<"start" | "end" | "center" | "none">;

  /**
   * Set background color by adding class names: text-bg-{color}
   * @param {string} textBg ThemeColor, "none"
   */
  textBg: Responsive<ThemeColor | "none">;

  /**
   * Prevent long strings of text from breaking your components’ layout by using .text-break to set word-wrap: break-word and word-break: break-word. We use word-wrap instead of the more common overflow-wrap for wider browser support, and add the deprecated word-break: break-word to avoid issues with flex containers.
   * @param {boolean} textBreak boolean
   */
  textBreak: Responsive<boolean>;

  /**
   * Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.
   * @param {ThemeColor} textColor ThemeColor, (CSS.Property.Color & Record<never, never>), "black", "white", "body", "muted", "black-50", "white-50", "body-secondary", "body-tertiary", "body-emphasis", "none"
   */
  textColor: Responsive<
    | ThemeColor
    | (CSS.Property.Color & Record<never, never>)
    | "black"
    | "white"
    | "body"
    | "muted"
    | "black-50"
    | "white-50"
    | "body-secondary"
    | "body-tertiary"
    | "body-emphasis"
    | "none"
  >;

  /**
   * Decorate text in components with text decoration classes.
   * @param {string} textDecoration "none", "underline", "line-through", (CSS.Property.TextDecoration & Record<never, never>)
   */
  textDecoration: Responsive<
    | "none"
    | "underline"
    | "line-through"
    | (CSS.Property.TextDecoration & Record<never, never>)
  >;

  /**
   * For higher contrast text. Not applicable for backgrounds.
   * @param {boolean} textEmphasis boolean
   */
  textEmphasis: Responsive<boolean>;

  /**
   * The `text-indent` property specifies the indentation of the first line in a text-block.
   *
   * **Note**: Negative values are allowed. The first line will be indented to the left if the value is negative.
   * @param {CSS.Property.TextIndent} textIndent CSS.Property.TextIndent
   */
  textIndent: Responsive<CSS.Property.TextIndent>;

  /**
   * The `text-justify` property specifies the justification method of text when text-align is set to "justify".
   * @param {CSS.Property.TextJustify} textJustify CSS.Property.TextJustify
   */
  textJustify: Responsive<CSS.Property.TextJustify>;

  /**
   * Control the opacity of elements.
   * @param {string} textOpacity "25", "50", "75", "100", (CSS.Property.Opacity & Record<never, never>), "none"
   */
  textOpacity: Responsive<
    | "25"
    | "50"
    | "75"
    | "100"
    | (CSS.Property.Opacity & Record<never, never>)
    | "none"
  >;

  /**
   * The `text-orientation` property specifies the orientation of characters.
   * @param {CSS.Property.TextOrientation} textOrientation CSS.Property.TextOrientation
   */
  textOrientation: Responsive<CSS.Property.TextOrientation>;

  /**
   * The `text-overflow` property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.
   *
   * **Note:** Both of the following properties are required for text-overflow: `white-space: nowrap` and `overflow: hidden` .
   * @param {CSS.Property.TextOverflow} textOverflow CSS.Property.TextOverflow
   */
  textOverflow: Responsive<CSS.Property.TextOverflow>;

  /**
   * Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.
   * @param {boolean} textReset boolean
   */
  textReset: Responsive<boolean>;

  /**
   * The `text-shadow` property adds shadow to text. This property accepts a comma-separated list of shadows to be applied to the text.
   * @param {CSS.Property.TextShadow} textShadow CSS.Property.TextShadow
   */
  textShadow: Responsive<CSS.Property.TextShadow>;

  /**
   * Transform text in components with text capitalization classes.
   * @param {string} textTransform "lowercase", "uppercase", "capitalize", (CSS.Property.TextTransform & Record<never, never>), "none"
   */
  textTransform: Responsive<
    | "lowercase"
    | "uppercase"
    | "capitalize"
    | (CSS.Property.TextTransform & Record<never, never>)
    | "none"
  >;

  /**
   * For longer content, you can add a .text-truncate class to truncate the text with an ellipsis. Requires display: inline-block or display: block.
   * @param {string} textTrunc boolean
   */
  textTrunc: Responsive<boolean>;

  /**
   * Wrap text with a .text-wrap or .text-nowrap class.
   * @param {string} textWrap "wrap", "nowrap", "none"
   */
  textWrap: Responsive<"wrap" | "nowrap" | "none">;

  /**
   * Setting the css value `vertical-align: text-bottom`
   * @param {string} vTextAlign "bottom", "top", "none"
   */
  vTextAlign: Responsive<"bottom" | "top" | "none">;

  /**
   * The `zoom` property specifies the zoom factor for an element. An element can be zoomed in and out..
   * @param {CSS.Property.Zoom} zoom CSS.Property.Zoom
   */
  zoom: Responsive<CSS.Property.Zoom>;
}>;

export type FlexProps = Partial<{
  /**
   * Use align-content utilities on flexbox containers to align flex items together on the cross axis. Choose from start (browser default), end, center, between, around, or stretch. To demonstrate these utilities, we’ve enforced flex-wrap: wrap and increased the number of flex items.
   * *Heads up!* This property has no effect on single rows of flex items.
   * @param {string} alignContent "start", "end", "center", "between", "around", "stretch", (CSS.Property.AlignContent & Record<never, never>), "none"
   */
  alignContent: Responsive<
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "stretch"
    | (CSS.Property.AlignContent & Record<never, never>)
    | "none"
  >;

  /**
   * Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).
   * @param {string} alignItems "start", "end", "center", "baseline", "stretch", (CSS.Property.AlignItems & Record<never, never>), "none"
   */
  alignItems: Responsive<
    | "start"
    | "end"
    | "center"
    | "baseline"
    | "stretch"
    | (CSS.Property.AlignItems & Record<never, never>)
    | "none"
  >;

  /**
   * Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from the same options as align-items: start, end, center, baseline, or stretch (browser default).
   * @param {string} alignSelf "auto", "start", "end", "center", "baseline", "stretch", (CSS.Property.AlignSelf & Record<never, never>), "none"
   */
  alignSelf: Responsive<
    | "auto"
    | "start"
    | "end"
    | "center"
    | "baseline"
    | "stretch"
    | (CSS.Property.AlignSelf & Record<never, never>)
    | "none"
  >;

  /**
   * `column-gap` sets the horizontal space between children items in the specified container.
   * @param {string} columnGap "0", "1", "2", "3", "4", "5", (CSS.Property.ColumnGap & Record<never, never>), "none"
   */
  columnGap: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.ColumnGap & Record<never, never>)
    | "none"
  >;

  /**
   * Apply `display: flex` utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties.
   * @param {string} flex "fill", "row", "column", "row-reverse", "column-reverse", "grow-0", "grow-1", "shrink-0", "shrink-1", "wrap", "nowrap", "wrap-reverse", (CSS.Property.Flex & Record<never, never>), "none"
   */
  flex: Responsive<
    | "fill"
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | "grow-0"
    | "grow-1"
    | "shrink-0"
    | "shrink-1"
    | "wrap"
    | "nowrap"
    | "wrap-reverse"
    | (CSS.Property.Flex & Record<never, never>)
    | "none"
  >;

  /**
   * The `flex-basis` property specifies the initial length of a flexible item.
   *
   * **Note:** If the element is not a flexible item, the `flex-basis` property has no effect.
   * @param {CSS.Property.FlexBasis} flexBasis CSS.Property.FlexBasis
   */
  flexBasis: Responsive<CSS.Property.FlexBasis>;

  /**
   * The `flex-direction` property specifies the direction of the flexible items.
   *
   * **Note:** If the element is not a flexible item, the `flex-direction` property has no effect.
   * @param {CSS.Property.FlexDirection} flexDirection CSS.Property.FlexDirection
   */
  flexDirection: Responsive<CSS.Property.FlexDirection>;

  /**
   * The `flex-flow` property is a shorthand property for: `flex-direction` and `flex-wrap`
   *
   * Note: If the elements are not flexible items, the `flex-flow` property has no effect.
   * @param {CSS.Property.FlexFlow} flexFlow CSS.Property.FlexFlow
   */
  flexFlow: Responsive<CSS.Property.FlexFlow>;

  /**
   * The `flex-grow` property specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   *
   * **Note:** If the element is not a flexible item, the `flex-grow` property has no effect.
   * @param {CSS.Property.FlexGrow} flexGrow CSS.Property.FlexGrow
   */
  flexGrow: Responsive<CSS.Property.FlexGrow>;

  /**
   * The `flex-shrink` property specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   *
   * **Note:** If the element is not a flexible item, the `flex-shrink` property has no effect.
   * @param {CSS.Property.FlexShrink} flexShrink CSS.Property.FlexShrink
   */
  flexShrink: Responsive<CSS.Property.FlexShrink>;

  /**
   * The `flex-wrap` property specifies whether the flexible items should wrap or not.
   *
   * **Note:** If the elements are not flexible items, the `flex-wrap` property has no effect.
   * @param {boolean, (CSS.Property.FlexWrap & Record<never, never>)} flexWrap boolean, (CSS.Property.FlexWrap & Record<never, never>)
   */
  flexWrap: Responsive<
    boolean | (CSS.Property.FlexWrap & Record<never, never>)
  >;

  /**
   * When using `display: grid` or `display: flex`, you can make use of gap utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via our utilities API, based on the `$spacers` Sass map.
   * @param {string} gap "0", "1", "2", "3", "4", "5", (CSS.Property.Gap & Record<never, never>), "none"
   */
  gap: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.Gap & Record<never, never>)
    | "none"
  >;

  /**
   * Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, around, or evenly.
   * @param {string} justifyContent "start", "end", "center", "between", "around", "evenly", (CSS.Property.JustifyContent & Record<never, never>), "none"
   */
  justifyContent: Responsive<
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | (CSS.Property.JustifyContent & Record<never, never>)
    | "none"
  >;

  /**
   * Use `.order-*` classes for controlling the visual order of your content. Useful for the `flex` system.
   * @param {string} order "first", "0", "1", "2", "3", "4", "5", "last", (CSS.Property.Order & Record<never, never>), "none"
   */
  order: Responsive<
    | "first"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "last"
    | (CSS.Property.Order & Record<never, never>)
    | "none"
  >;

  /**
   * `row-gap` sets the vertical space between children items in the specified container.
   * @param {string} rowGap "0", "1", "2", "3", "4", "5", (CSS.Property.RowGap & Record<never, never>), "none"
   */
  rowGap: Responsive<
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | (CSS.Property.RowGap & Record<never, never>)
    | "none"
  >;
}>;

export type OtherProps = Partial<{
  /**
   * Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.
   * @param {string} aspectRatio "1x1", "4x3", "16x9", "21x9", "none"
   */
  aspectRatio: Responsive<"1x1" | "4x3" | "16x9" | "21x9" | "none">;

  /**
   * Override default `list-style` style with custom styles.
   * @param {string} listStyle "unstyled", "inline", "inline-item", (CSS.Property.ListStyle & Record<never, never>), "none"
   */
  listStyle: Responsive<
    | "unstyled"
    | "inline"
    | "inline-item"
    | (CSS.Property.ListStyle & Record<never, never>)
    | "none"
  >;

  /**
   * The opacity property sets the opacity level for an element. The opacity level describes the transparency level, where 1 is not transparent at all, .5 is 50% visible, and 0 is completely transparent.
   * @param {string} opacity "0", "25", "50", "75", "100", (CSS.Property.Opacity & Record<never, never>), "none"
   */
  opacity: Responsive<
    | "0"
    | "25"
    | "50"
    | "75"
    | "100"
    | (CSS.Property.Opacity & Record<never, never>)
    | "none"
  >;

  /**
   * Using Bootstrap `.pe-none` and `.pe-auto` classes to prevent or add element interactions.
   * @param {string} pointerEvents "none", "auto"
   */
  pointerEvents: Responsive<"none" | "auto">;

  /**
   * The `scrollbar-color` property specifies the color of the scrollbar track (background) and thumb (the scroller).
   * @param {CSS.Property.ScrollbarColor} scrollbarColor CSS.Property.ScrollbarColor
   */
  scrollbarColor: Responsive<CSS.Property.ScrollbarColor>;

  /**
   * The `CSS.Property.ScrollBehavior` property specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable box.
   * @param {CSS.Property.ScrollBehavior} scrollBehavior CSS.Property.ScrollBehavior
   */
  scrollBehavior: Responsive<CSS.Property.ScrollBehavior>;

  /**
   * The `scroll-margin` property specifies the distance between the snap position and the container.
   *
   * This means that when you stop scrolling, the scrolling will quickly adjust and stop at a specified distance between the snap position and the container.
   * @param {CSS.Property.ScrollMargin} scrollMargin CSS.Property.ScrollMargin
   */
  scrollMargin: Responsive<CSS.Property.ScrollMargin>;

  /**
   * The `scroll-padding` property specifies the distance from the container to the snap position of child elements.
   *
   * This means that when you stop scrolling, the scrolling will quickly adjust and stop at a specified distance from the container to the snap position of the child element in focus.
   * @param {CSS.Property.ScrollPadding} scrollPadding CSS.Property.ScrollPadding
   */
  scrollPadding: Responsive<CSS.Property.ScrollPadding>;

  /**
   * Add or remove shadows to elements with box-shadow utilities.
   * @param {string} shadow boolean, "sm", "lg", "none", (CSS.Property.BoxShadow & Record<never, never>), "none"
   */
  shadow: Responsive<
    | boolean
    | "sm"
    | "lg"
    | "none"
    | (CSS.Property.BoxShadow & Record<never, never>)
    | "none"
  >;

  /**
   * The `transition` property is a shorthand property for: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
   * @param {CSS.Property.Transition} transition CSS.Property.Transition
   */
  transition: Responsive<CSS.Property.Transition>;

  /**
   * Change the way in which the content is selected when the user interacts with it.
   * @param {string} userSelect "all", "auto", "none", (CSS.Property.UserSelect & Record<never, never>)
   */
  userSelect: Responsive<
    "all" | "auto" | "none" | (CSS.Property.UserSelect & Record<never, never>)
  >;
}>;

export type ImageProp = Partial<{
  /**
   * Images in Bootstrap are made responsive with *.img-fluid*. This applies *max-width: 100%;* and *height: auto;* to the image so that it scales with the parent width.
   * @param {boolean} imgFluid boolean
   */
  imgFluid: Responsive<boolean>;

  /**
   * In addition to our border-radius utilities, you can use *.img-thumbnail* to give an image a rounded 1px border appearance.
   * @param {boolean} imgThumbnail boolean
   */
  imgThumbnail: Responsive<boolean>;

  /**
   * Use the object fit utilities to modify how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
   * @param {string} objectFit "contain", "cover", "fill", "scale", "none"
   */
  objectFit: Responsive<"contain" | "cover" | "fill" | "scale" | "none">;

  /**
   * The CSS object-position property is used to specify how an *<img>* or *<video>* should be positioned within its container.
   * @param {string} objectPosition CSS.Property.ObjectPosition
   */
  objectPosition: Responsive<CSS.Property.ObjectPosition>;
}>;
// End generated code

//

export type As = React.ElementType;

export type BaseResponsiveProps<T extends As> = {
  as?: T | keyof JSX.IntrinsicElements | React.FunctionComponent<any>;
  css?: Responsive<Interpolation<Theme>>;

  /**
   * Responsive style shortcuts
   */
  css_xs?: Interpolation<Theme>;
  css_sm?: Interpolation<Theme>;
  css_md?: Interpolation<Theme>;
  css_lg?: Interpolation<Theme>;
  css_xl?: Interpolation<Theme>;
  css_xxl?: Interpolation<Theme>;
};

export type SaigonProps<T extends As, E extends HTMLElement> =
  /**
   * @param {HTMLAttributes} HTMLAttributes Standard react HTML Attributes
   * @param {as} As slot, depend on component, some allow `as` with ReactElement
   * @param {css} CSS @emotion/react styles patterns
   * @param {SpacingProps} SpacingProps Saigon UI spacing props
   * @param {TextProps} TextProps Saigon UI spacing props
   * @param {BackgroundProps} BackgroundProps Saigon UI spacing props
   */
  React.HTMLAttributes<E> &
    BaseResponsiveProps<T> &
    SpacingProps &
    PositionProps &
    LayoutProps &
    TextProps &
    BackgroundProps &
    BorderProps &
    FlexProps &
    OtherProps;

export interface SaigonComponent<PropsType> {
  (
    props: React.PropsWithChildren<React.PropsWithoutRef<PropsType>>
  ): React.ReactNode;

  displayName?: string;

  // Support for defaultProps will be removed from function components in a future major release! Since React 17
  // defaultProps?: object;
}

export interface ForwardRefComponent<RefType, PropsType>
  extends React.ForwardRefExoticComponent<
    Omit<PropsType, "ref"> & React.RefAttributes<RefType>
  > {
  displayName?: string;
}

export type PlacementType =
  | "top-middle"
  | "top-start"
  | "top-end"
  | "right-middle"
  | "right-start"
  | "right-end"
  | "bottom-middle"
  | "bottom-start"
  | "bottom-end"
  | "left-middle"
  | "left-start"
  | "left-end";

export type AccordionProp = Partial<{
  /**
   * The default active key that is expanded on start
   * @default undefined
   */
  defaultActiveKey: string | number | string[] | number[];

  /**
   * Add .accordion-flush to remove some borders and rounded corners to render accordions edge-to-edge with their parent container.
   * @default false
   */
  flush: boolean;

  /**
   * make accordion items stay open when another item is opened.
   * @default false
   */
  alwaysOpen: boolean;

  /**
   * make accordion items stay open when another item is opened.
   * @default false
   */
  expanded: boolean;

  /**
   * Callback fired when the active item changes.
   * @param eventKey activeIndex
   * @param event native event object
   */
  onSelect?: (eventKey: string, event: object) => void;
}>;

export type AlertProp = Partial<{
  /**
   * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
   * @default
   * @param {ThemeColor} variant
   */
  variant: Responsive<ThemeColor>;

  /**
   * Renders a properly aligned dismiss button.
   * @default false
   * @param {boolean} dismissible
   */
  dismissible: boolean;

  /**
   * Animate the alert dismissal. Defaults to using <Fade> animation or use false to disable
   * @default 'fade'
   */
  animation: AnimationType;

  /**
   * Callback fired when alert is closed after transitioning.
   */
  onClose: () => void;

  /**
   * Callback fired when alert is showed after transitioning.
   */
  onOpen: () => void;
}>;

export type AnimationType =
  | "fade"
  | "clip"
  | "blind"
  | "bounce"
  | "drop"
  | "fold"
  | "puff"
  | "scale"
  | "shake"
  | "slide"
  | "shift"
  | "pulsate"
  | "rotate"
  | "none";

export type AnimationProp = Partial<{
  /**
   * Child component
   */
  component: React.FunctionComponent<any>;

  /**
   * Start the animation
   */
  open: boolean;

  /**
   * Animation type
   *
   * @default 'fade'
   */
  animation: Omit<AnimationType, "none">;

  /**
   * The animation duration `var(--anim-duration)` in miliseconds
   *
   * @default 400ms
   */
  duration: number;

  /**
   * Run the fade in animation when the component mounts, if it is initially shown
   * @default false
   */
  appear: boolean;

  /**
   * Callback when the animation is finished
   */
  onExit: () => void;

  /**
   * Callback when the animation is started
   */
  onEnter: () => void;

  /**
   * Callback after calling onExit and onEnter
   */
  onChange: (isShow: boolean) => void;
}>;

export type BadgeProp = Partial<{
  /**
   * The badge background color
   * @default primary
   */
  badgeColor: ThemeColor;

  /**
   * Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.
   * @default false
   */
  roundedPill: boolean;
}>;

export type BreadcrumbProp = Partial<{
  /**
   * Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --#{$prefix}breadcrumb-divider, or through the $breadcrumb-divider Sass variable — and $breadcrumb-divider-flipped for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.
   * @default "--#{$prefix}breadcrumb-divider: '>';"
   */
  divider: string;
}>;

export type BreadcrumbItemProp = Partial<{
  /**
   *
   */
  active: boolean;
}>;

export type ButtonGroupProp = Partial<{
  /**
   * Instead of applying button sizing classes to every button in a group, just add .btn-group-* to each .btn-group, including each one when nesting multiple groups.
   * @default md
   */
  size: "lg" | "md" | "sm";
}>;

export type ButtonProp = Partial<{
  /**
   * The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).
   * @default button
   */
  as: "button" | "a" | "input" | React.ReactNode;

  /**
   * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
   * @param {ThemeColor | 'link'} primary
   */
  variant: Responsive<ThemeColor | "link">;

  /**
   * In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.
   */
  outline: Responsive<boolean>;

  /**
   * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
   */
  size: Responsive<"lg" | "sm">;

  /**
   * If you don’t want the button text to wrap, you can add the .text-nowrap class to the button. In Sass, you can set $btn-white-space: nowrap to disable text wrapping for each button.
   */
  noTextWrap: Responsive<boolean>;

  /**
   * Make buttons look inactive by adding the disabled boolean attribute to any <button> element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.
   */
  disabled: boolean;

  /**
   * When rendering using <input> tag, type need to be specified, by default is 'button'
   */
  type: "button" | "submit" | "reset" | string;

  /**
   * When rendering using <a> tag, it is better leave href default value
   */
  href: "#" | string;

  /**
   * If `true`, disabling the button and showing a spinner.
   * @default false
   */
  isLoading: boolean;

  /**
   * The label to show in the button when `isLoading` is true
   */
  loadingText: Responsive<React.ReactNode>;

  /**
   * Replace the spinner component when `isLoading` is set to `true`
   *
   * @type React.ReactNode or one of value from SpinnerProp["animation"], such as, 'dots-1', 'dots-2'...
   */
  loadingSpinner: Responsive<
    | SpinnerProp["animation"]
    | boolean
    | (React.ReactNode & Record<never, never>)
  >;

  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "end"
   */
  spinnerPlacement: Responsive<"start" | "end">;

  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactNode
   */
  startIcon: Responsive<React.ReactNode>;

  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactNode
   */
  endIcon: Responsive<React.ReactNode>;

  /**
   * The space between the button icon and label.
   * @type string
   * @default "5px"
   */
  iconSpacing: Responsive<CSS.Property.Gap>;

  /**
   * Button click effect when pointer-up
   *
   * @default slide
   */
  clickEffect: Responsive<
    "ripple" | "puff" | "box-shadow" | "slide" | "stripe"
  >;
}>;

export type DateTimePresetRange = { title: string; from: Date; to: Date };

export type CalendarPickerProp = Partial<{
  /**
   * Color variant.
   *
   * @default primary
   */
  variant: Responsive<ThemeColor>;

  /**
   * Outline style
   */
  outline: Responsive<boolean>;

  /**
   * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
   */
  size: Responsive<"lg" | "sm">;

  /**
   * Renders a properly aligned dismiss button.
   * @default false
   * @param {boolean} dismissible
   */
  dismissible: boolean;

  /**
   *
   * @default false
   */
  disabled: boolean;

  /**
   *
   * @default false
   */
  disabledDate: Date[];

  /**
   *
   * @default false
   */
  enableDate: Date[];

  /**
   * Render extra geader at the top of panel.
   * @default undefined
   */
  extraHeader: React.ElementType;

  /**
   * Render extra footer at the bottom of panel.
   * @default undefined
   */
  extraFooter: React.ElementType;

  /**
   * Apply transition effect for show/hide
   * @default 'fade'
   */
  animation: AnimationType;

  /**
   * The transition time in milliseconds
   * @default 400ms
   */
  animationTime?: number;
}>;

export type DateTimePickerProp = CalendarPickerProp &
  Partial<{
    /**
     * Input date format
     * @default 'YYYY-MM-DD'
     */
    format: string;

    /**
     * @default true
     */
    todayButton: boolean;

    /**
     *
     * @default 'Date'
     */
    pickerMode: "Time" | "DateTime" | "Date" | "Week" | "Month" | "Year";

    /**
     *
     * @default false
     */
    clock12Hour: boolean;

    /**
     *
     * @default false
     */
    disabledHour: boolean;

    /**
     *
     * @default false
     */
    disabledMinute: boolean;

    /**
     *
     * @default false
     */
    disabledSecond: boolean;

    /**
     * Control state value
     */
    value?: Date;

    /**
     * Uncontrol state value
     */
    defaultValue?: Date;

    /**
     * Callback when selecting value
     * @param val
     * @returns
     */
    onChange: (val: Date) => void;

    /**
     * Callback when users click on the okay button
     * @param val
     * @returns
     */
    onOkay: (val: Date, event: any) => void;
  }>;

export type DateTimeRangePickerProp = CalendarPickerProp &
  Partial<{
    /**
     *
     */
    pickerMode: "Time" | "DateTime" | "Date" | "Week" | "Month" | "Year";

    /**
     * @default undefined
     */
    maximumRange: number;

    /**
     * Allow empty for the RangePicker
     * @default true
     */
    allowEmpty: boolean;

    /**
     * Set preset ranges to RangePicker to improve user experience
     * @default undefined
     */
    presetRanges: Array<DateTimePresetRange>;

    /**
     * Control state value
     */
    value?: [Date, Date];

    /**
     * Uncontrol state value
     */
    defaultValue?: [Date, Date];

    /**
     * Callback when selecting value
     * @param val
     * @returns
     */
    onChange: (val: [Date, Date]) => void;

    /**
     * Callback when user select preset ranges
     * @param val
     * @returns
     */
    onSelectPresetRange: (val: DateTimePresetRange) => void;
  }>;

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

export type CloseButtonProp = Partial<{
  /**
   * Disabled close buttons change their opacity. We’ve also applied pointer-events: none and user-select: none to preventing hover and active states from triggering.
   *
   * @default false
   */
  disabled: boolean;
}>;

export type DropdownProp = Partial<{
  /**
   * Dropdown side
   * @default top
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

export type CheckboxProp = Partial<{
  /**
   * Default checked state value
   */
  defaultValue: boolean;

  /**
   * Checked state value
   */
  value: boolean;

  /**
   * utilize the :indeterminate pseudo class for the checkbox
   *
   * @default false
   */
  indeterminate: boolean;

  /**
   * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Callback when checked state changes.
   *
   * @param checked true if selected
   * @param evt native Event object
   */
  onChange: (checked: boolean, evt: Event) => void;

  /**
   * ref object to the input element
   */
  inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
   *
   * @default false
   */
  inline: boolean;

  /**
   * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
   *
   * @default false
   */
  reverse: boolean;
}>;

export type SwitchProp = Partial<{
  /**
   * Default checked state value
   */
  defaultValue: boolean;

  /**
   * Checked state value
   */
  value: boolean;

  /**
   * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Callback when checked state changes.
   *
   * @param checked true if selected
   * @param evt native Event object
   */
  onChange: (checked: boolean, evt: Event) => void;

  /**
   * ref object to the input element
   */
  inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
   *
   * @default false
   */
  inline: boolean;

  /**
   * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
   *
   * @default false
   */
  reverse: boolean;
}>;

export type RadioButtonProp = Partial<{
  /**
   * Default checked state value
   */
  defaultValue: boolean;

  /**
   * Checked state value
   */
  value: boolean;

  /**
   * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Callback when checked state changes.
   *
   * @param checked true if selected
   * @param evt native Event object
   */
  onChange: (checked: boolean, evt: Event) => void;

  /**
   * ref object to the input element
   */
  inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
   *
   * @default false
   */
  inline: boolean;

  /**
   * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
   *
   * @default false
   */
  reverse: boolean;

  /**
   * Set the `name` attribute for input
   */
  name: string;
}>;

export type SelectProp = Partial<{
  /**
   * Default selected value
   */
  defaultValue: boolean;

  /**
   * Controlling selected value
   */
  value: boolean;

  /**
   * You may also choose from small and large custom selects to match our similarly sized text inputs.
   *
   * @default undefined
   */
  size: "sm" | "lg";

  /**
   * Allow multiple selection
   *
   * @default false
   */
  multiple: boolean;

  /**
   * The size attribute of the underlying HTML element. Specifies the number of visible options.
   *
   * @default undefined
   */
  htmlSize: number;

  /**
   * Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.
   *
   * @default false
   */
  disabled: boolean;
}>;

export type RangeProp = Partial<{
  /**
   * The range label
   */
  label: string;

  /**
   * Default checked state value
   */
  defaultValue: number;

  /**
   * Checked state value
   */
  value: number;

  /**
   * The mininum value of the range
   *
   * @default 0
   */
  min: number;

  /**
   * The maximum value of the range
   *
   * @default 100
   */
  max: number;

  /**
   * The step on increasement
   *
   * @default 1
   */
  step: number;

  /**
   * Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Callback when the value changes.
   *
   * @param value
   * @param evt native Event object
   */
  onChange: (value: number, evt: Event) => void;
}>;

export type InputGroupProp = Partial<{
  /**
   * You may also choose from small and large custom selects to match our similarly sized text inputs.
   *
   * @default undefined
   */
  size: "sm" | "lg";

  /**
   * Apply validation effect depends on the classnames of the directly child `input`.
   *
   * @default false
   */
  hasValidation: boolean;

  /**
   * Set to `true` to make add-on background color will be the same as input background color
   */
  noBackground: boolean;
}>;

export type FormControlProp = Partial<{
  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Use browser defaults validation feedback messages
   *
   * @default false
   */
  required: boolean;
}>;

export type FormControlWithIconProp = Partial<
  FormControlProp & {
    /**
     * Left icon
     * @default undefined
     */
    startIcon: Responsive<React.ReactNode>;

    /**
     * Right icon
     * @default undefined
     */
    endIcon: Responsive<React.ReactNode>;

    /**
     * Left icon when hover
     * @default undefined
     */
    startHoverIcon: Responsive<React.ReactNode>;

    /**
     * Right icon when hover
     * @default undefined
     */
    endHoverIcon: Responsive<React.ReactNode>;
  }
>;

export type DateTimeControlProp = Partial<{
  /**
   * Uncontrolled state value
   * @default 'new Date()'
   */
  defaultValue: Date;

  /**
   * Controlled state value
   * @default 'new Date()'
   */
  value: Date;

  /**
   * Date time format. For the complete list of formats, please visit [momentjs](https://momentjs.com/docs/#/displaying/format/)
   * @default 'YYYY-MM-DD'
   */
  format: string;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Use browser defaults validation feedback messages
   *
   * @default false
   */
  required: boolean;

  /**
   * Callback when form state value changing
   * @returns Possibly returns `undefined` when `required` is false.
   */
  onChange: (val: Date | undefined) => void;

  /**
   * Callback when user click on clear button
   * @returns Possibly returns `undefined` when `required` is false.
   */
  onClear: (val: Date | undefined) => void;
}>;

export type FormFeedbackProp = Partial<{
  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;
}>;

export type FormColLabelProp = Partial<{
  /**
   * You may also choose from small and large custom selects to match our similarly sized text inputs.
   *
   * @default undefined
   */
  size: "sm" | "lg";
}>;

export type FormFloatingProp = Partial<{
  /**
   * The floating label
   *
   * @default undefined
   */
  label: string;
}>;

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

export type ListGroupProp = Partial<{
  /**
   * Add .list-group-flush to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).
   * @default false
   */
  flush: boolean;

  /**
   * Add the .list-group-numbered modifier class (and optionally use an <ol> element) to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <ol>s default browser styling) for better placement inside list group items and to allow for better customization.
   *
   * Numbers are generated by counter-reset on the <ol>, and then styled and placed with a ::before pseudo-element on the <li> with counter-increment and content.
   *
   * @default false
   */
  numbered: boolean;

  /**
   * Add .list-group-horizontal to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant .list-group-horizontal-{sm|md|lg|xl|xxl} to make a list group horizontal starting at that breakpoint’s min-width.
   *
   * **Currently horizontal list groups cannot be combined with flush list groups**.
   *
   * @default false
   */
  horizontal: boolean;
}>;

export type ListGroupItemProp = Partial<{
  /**
   * @default li
   */
  as: "a" | "li";

  /**
   * Use contextual classes to style list items with a stateful background and color.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * Add `.active` to a `.list-group-item` to indicate the current active selection.
   *
   * @default false
   */
  active: boolean;

  /**
   * Contextual classes also work with .list-group-item-action for <a> and <button> elements. Note the addition of the hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item.
   *
   * @default false
   */
  action: boolean;

  /**
   * Add `.disabled` to a `.list-group-item` to make it appear disabled.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Want equal-width list group items when horizontal? Add .flex-fill to each list group item.
   *
   * @default false
   */
  flexFill: boolean;

  /**
   * When rendering list items a links, you can give href attribute the value.
   * @default undefined
   */
  href: string;
}>;

export type ModalProp = Partial<{
  /**
   * Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
   *
   * | Size | Class | Modal max-width
   * | -------- | ------- | -------
   * | Small | .modal-sm | 300px
   * | Default | None | 500px
   * | Large | .modal-lg | 800px
   * | Extra large | .modal-xl | 1140px
   *
   * @default undefined
   */
  size: "sm" | "lg" | "xl";

  /**
   * Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a `.modal-dialog`.
   */
  fullscreen:
    | boolean
    | "sm-down"
    | "md-down"
    | "lg-down"
    | "xl-down"
    | "xxl-down";

  /**
   * When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.
   *
   * @default false
   */
  staticBackdrop: boolean;

  /**
   * When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
   *
   * @default false
   */
  scrollable: boolean;

  /**
   * Add .modal-dialog-centered to .modal-dialog to vertically center the modal.
   *
   * @default false
   */
  verticalCentered: boolean;

  /**
   * Apply a CSS fade transition to the toast.
   *
   * @default 'fade'
   */
  animation: AnimationType;
}>;

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

export type OffcanvasProp = Partial<{
  /**
   * The offcanvas will show itself.
   *
   * @default false
   */
  show: boolean;

  /**
   * When backdrop is set to static, the offcanvas will not close when clicking outside of it.
   *
   * @default true
   */
  backdrop: "static" | boolean;

  /**
   * Closes the offcanvas when escape key is pressed.
   *
   * @default true
   */
  keyboard: boolean;

  /**
   * Scrolling the <body> element is disabled when an offcanvas and its backdrop are visible
   *
   * @default false
   */
  bodyScroll: boolean;

  /**
   * There’s no default placement for offcanvas components, so you must add one of the modifier classes below
   *
   * @default start
   */
  placement: "start" | "end" | "top" | "bottom";

  /**
   * When true The offcanvas will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.
   *
   * @default true
   */
  autoFocus: boolean;

  /**
   * When true The offcanvas will prevent focus from leaving the offcanvas while open. Consider leaving the default value here, as it is necessary to make the offcanvas work well with assistive technologies, such as screen readers.
   *
   * @default true
   */
  enforceFocus: boolean;

  /**
   * When true The offcanvas will restore focus to previously focused element once offcanvas is hidden
   *
   * @default true
   */
  restoreFocus: boolean;

  /**
   * A callback fired when the offcanvas is opening.
   *
   * @default undefined
   */
  onShow: () => void;

  /**
   * A callback fired when the header closeButton or backdrop is clicked. Required if either are specified.
   *
   * @default undefined
   */
  onHide: () => void;

  /**
   * A callback fired when the offcanvas after showing or hiding.
   *
   * @param show true when showing, false when hiding
   * @default undefined
   */
  onDisplay: (show: boolean) => void;

  /**
   * A callback fired when the escape key, if specified in keyboard, is pressed.
   *
   * @default undefined
   */
  onEscapeKeyDown: () => void;

  /**
   * Callback fired before the offcanvas transitions in
   *
   * @default undefined
   */
  onEnter: () => void;

  /**
   * Callback fired as the offcanvas begins to transition in
   *
   * @default undefined
   */
  onEntering: () => void;

  /**
   * Callback fired after the offcanvas finishes transitioning in
   *
   * @default undefined
   */
  onEntered: () => void;

  /**
   * Callback fired right before the offcanvas transitions out
   *
   * @default undefined
   */
  onExit: () => void;

  /**
   * Callback fired as the offcanvas begins to transition out
   *
   * @default undefined
   */
  onExiting: () => void;

  /**
   * Callback fired after the offcanvas finishes transitioning out
   *
   * @default undefined
   */
  onExited: () => void;
}>;

export type PaginationProp = Partial<{
  /**
   * Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes.
   *
   * @default undefined
   */
  size: "sm" | "lg";
}>;

export type PaginationItemProp = Partial<{
  /**
   * Set to active state
   *
   * @default false
   */
  active: boolean;

  /**
   * Set to disable state
   *
   * @default false
   */
  disabled: boolean;
}>;

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

export type ProgressProp = Partial<{
  /**
   * Use background utility classes to change the appearance of individual progress bars.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * Current value of progress
   *
   * @default 0
   */
  now: number;

  /**
   * Minimum value progress can begin from
   *
   * @default 0
   */
  min: number;

  /**
   * 	Maximum value progress can reac
   *
   * @default 100
   */
  max: number;

  /**
   * Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.
   *
   * @default false
   */
  striped: boolean;

  /**
   * The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.
   *
   * @default false
   */
  animated: boolean;

  /**
   * You can include multiple progress components inside a container with `.progress-stacked` to create a single stacked progress bar.
   *
   * @default false
   */
  multiple: boolean;
}>;

export type SpinnerProp = Partial<{
  /**
   * Changes the animation style of the spinner.
   *
   * @default border
   */
  animation:
    | "border"
    | "grow"
    | "dots-1"
    | "dots-2"
    | "dots-3"
    | "dots-4"
    | "bars-1"
    | "bars-2"
    | "beat"
    | "bounce"
    | "clock"
    | "fade"
    | "hash"
    | "moon_1"
    | "moon_2"
    | "propagate"
    | "puff"
    | "pulse-1"
    | "pulse-2"
    | "skew"
    | "scale"
    | "sync-1"
    | "sync-2"
    | "square"
    | "buddhism_1";

  /**
   * Component size variations. Also works with `CSS.Property.Width` value.
   *
   * @default undefined
   */
  size: CSS.Property.Width;

  /**
   * An ARIA accessible role applied to the Menu component.
   *
   * @default 'status'
   */
  role: string;
}>;

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

export type ToastProp = Partial<{
  /**
   * Apply a CSS fade transition to the toast.
   *
   * @default Fade
   */
  animation: AnimationType;

  /**
   * Automatically hide the toast after the delay.
   *
   * @default true
   */
  autoHide: boolean;

  /**
   * Delay in milliseconds before hiding the toast.
   * @default 3600ms
   */
  delay: number;

  /**
   * Set white text color with `.btn-close-white`
   *
   * @default false
   */
  btnCloseWhite: boolean;
}>;

export type ToastContainerProp = Partial<{
  /**
   * Building on the above example, you can create different toast color schemes with our color and background utilities
   *
   * @default undefined
   */
  placement:
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-start"
    | "middle-center"
    | "middle-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";

  /**
   * Specify the positioning method for the container.
   *
   * @default fixed
   */
  containerPosition: "static" | "fixed";
}>;

export type ToggleButtonProp = Partial<{
  /**
   * The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).
   * @default button
   */
  as: "button" | "input" | React.ComponentType;

  /**
   * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
   * @param {ThemeColor | 'link'} primary
   */
  variant: ThemeColor | "link";

  /**
   * In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.
   */
  outline: boolean;

  /**
   * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
   */
  size: "lg" | "sm";

  /**
   * If you don’t want the button text to wrap, you can add the .text-nowrap class to the button. In Sass, you can set $btn-white-space: nowrap to disable text wrapping for each button.
   */
  noTextWrap: boolean;

  /**
   * Active state, for toogle button style
   */
  active: boolean;

  /**
   * Make buttons look inactive by adding the disabled boolean attribute to any <button> element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.
   */
  disabled: boolean;

  /**
   * Callback fire when toggling
   * @param selected
   * @param event
   * @returns
   */
  onChange: (selected: boolean, event: object) => void;

  /**
   * When rendering using <input> tag, type need to be specified, by default is 'button'
   */
  type: "button" | "submit" | "reset" | string;

  /**
   * If `true`, disabling the button and showing a spinner.
   * @default false
   */
  isLoading: boolean;

  /**
   * The label to show in the button when `isLoading` is true
   */
  loadingText: React.ReactElement | string;

  /**
   * Replace the spinner component when `isLoading` is set to `true`
   *
   * @type React.ReactElement or one of value from SpinnerProp["animation"], such as, 'dots-1', 'dots-2'...
   */
  loadingSpinner: React.ReactElement | SpinnerProp["animation"];

  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "end"
   */
  spinnerPlacement: "start" | "end";

  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */
  startIcon: React.ReactElement;

  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactElement
   */
  endIcon: React.ReactElement;

  /**
   * The space between the button icon and label.
   * @type string
   * @default "5px"
   */
  iconSpacing: CSS.Property.Gap;

  /**
   * Button click effect when pointer-up
   *
   * @default slide
   */
  clickEffect: "ripple" | "puff" | "box-shadow" | "slide" | "stripe";
}>;

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

export type TypographyProp = Partial<{
  /**
   * All HTML headings, <h1> through <h6>, are available.
   */
  as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | React.ComponentType;

  /**
   * Display headings are configured via the $display-font-sizes
   */
  textLevel: "1" | "2" | "3" | "4" | "5" | "6";

  /**
   * Make a paragraph stand out by adding .lead.
   */
  textLead: boolean;
}>;
