import fs from "node:fs";
import path from "node:path";
import { exit } from "node:process";
import { fileURLToPath } from "node:url";

export type PropNameType = {
  [key in PropName]: {
    group: PropGroup;
    ownByComponent?: boolean;
    comment?: string;
  };
};

enum PropGroup {
  // General props
  SpacingProps = "SpacingProps",
  PositionProps = "PositionProps",
  LayoutProps = "LayoutProps",
  BackgroundProps = "BackgroundProps",
  BorderProps = "BorderProps",
  TextProps = "TextProps",
  FlexProps = "FlexProps",
  OtherProps = "OtherProps",
  // Component props
  ImageProp = "ImageProp",
  TypographyProp = "TypographyProp",
}

const PropGroupMap: { [key in PropGroup]: string[] } = {
  // General props
  SpacingProps: [],
  PositionProps: [],
  LayoutProps: [],
  BackgroundProps: [],
  BorderProps: [],
  TextProps: [],
  FlexProps: [],
  OtherProps: [],
  // Component props
  // Just for props overlap testing, will not be used to generate types declaration
  ImageProp: [],
  TypographyProp: [],
};

enum PropName {
  listStyle = "listStyle",
  stretchedLink = "stretchedLink",
  aspectRatio = "aspectRatio",
  fixed = "fixed",
  sticky = "sticky",
  hstack = "hstack",
  vstack = "vstack",
  vAlign = "vAlign",
  vTextAlign = "vTextAlign",
  float = "float",
  objectFit = "objectFit",
  objectPosition = "objectPosition",
  opacity = "opacity",
  overflow = "overflow",
  overflowX = "overflowX",
  overflowY = "overflowY",
  display = "display",
  displayPrint = "displayPrint",
  shadow = "shadow",
  focusRing = "focusRing",
  position = "position",
  top = "top",
  bottom = "bottom",
  start = "start",
  end = "end",
  left = "left",
  right = "right",
  translateMiddle = "translateMiddle",
  translateMiddleX = "translateMiddleX",
  translateMiddleY = "translateMiddleY",
  border = "border",
  borderTop = "borderTop",
  borderEnd = "borderEnd",
  borderBottom = "borderBottom",
  borderStart = "borderStart",
  borderColor = "borderColor",
  borderSubtle = "borderSubtle",
  borderOpacity = "borderOpacity",
  width = "width",
  maxWidth = "maxWidth",
  minWidth = "minWidth",
  height = "height",
  maxHeight = "maxHeight",
  minHeight = "minHeight",
  justifyContent = "justifyContent",
  alignItems = "alignItems",
  alignContent = "alignContent",
  alignSelf = "alignSelf",
  order = "order",
  m = "m",
  mx = "mx",
  my = "my",
  mt = "mt",
  mb = "mb",
  ms = "ms",
  me = "me",
  p = "p",
  px = "px",
  py = "py",
  pt = "pt",
  pb = "pb",
  ps = "ps",
  pe = "pe",
  gap = "gap",
  rowGap = "rowGap",
  columnGap = "columnGap",
  fontMonospace = "fontMonospace",
  fontSize = "fontSize",
  fontStyle = "fontStyle",
  fontWeight = "fontWeight",
  lineHeight = "lineHeight",
  textLead = "textLead",
  textLevel = "textLevel",
  textBg = "textBg",
  textTrunc = "textTrunc",
  textAlign = "textAlign",
  textDecoration = "textDecoration",
  textTransform = "textTransform",
  textWrap = "textWrap",
  textBreak = "textBreak",
  color = "color",
  textColor = "textColor",
  textReset = "textReset",
  textOpacity = "textOpacity",
  textEmphasis = "textEmphasis",
  linkColor = "linkColor",
  linkOpacity = "linkOpacity",
  linkOffset = "linkOffset",
  linkUnderline = "linkUnderline",
  linkUnderlineOpacity = "linkUnderlineOpacity",
  bg = "bg",
  bgOpacity = "bgOpacity",
  bgSubtle = "bgSubtle",
  bgGradient = "bgGradient",
  userSelect = "userSelect",
  pointerEvents = "pointerEvents",
  borderRadius = "borderRadius",
  borderRadiusTop = "borderRadiusTop",
  borderRadiusEnd = "borderRadiusEnd",
  borderRadiusBottom = "borderRadiusBottom",
  borderRadiusStart = "borderRadiusStart",
  borderBlock = "borderBlock",
  borderImage = "borderImage",
  borderSpacing = "borderSpacing",
  borderCollapse = "borderCollapse",
  borderInline = "borderInline",
  borderStyle = "borderStyle",
  borderWidth = "borderWidth",
  visibility = "visibility",
  zIndex = "zIndex",
  // Other CSS properties
  bgAttachment = "bgAttachment",
  bgBlendMode = "bgBlendMode",
  bgClip = "bgClip",
  bgColor = "bgColor",
  bgImage = "bgImage",
  bgOrigin = "bgOrigin",
  bgPosition = "bgPosition",
  bgPositionX = "bgPositionX",
  bgPositionY = "bgPositionY",
  bgRepeat = "bgRepeat",
  bgSize = "bgSize",
  transform = "transform",
  translate = "translate",
  rotate = "rotate",
  scale = "scale",
  transition = "transition",
  textIndent = "textIndent",
  textJustify = "textJustify",
  textOrientation = "textOrientation",
  textOverflow = "textOverflow",
  textShadow = "textShadow",
  zoom = "zoom",
  scrollBehavior = "scrollBehavior",
  scrollMargin = "scrollMargin",
  scrollPadding = "scrollPadding",
  scrollbarColor = "scrollbarColor",
  font = "font",
  fontFamily = "fontFamily",
  fontKerning = "fontKerning",
  fontSizeAdjust = "fontSizeAdjust",
  fontStretch = "fontStretch",
  fontVariant = "fontVariant",
  fontVariantCaps = "fontVariantCaps",
  inset = "inset",
  insetBlock = "insetBlock",
  insetInline = "insetInline",
  // Flex
  flex = "flex",
  flexBasis = "flexBasis",
  flexDirection = "flexDirection",
  flexFlow = "flexFlow",
  flexGrow = "flexGrow",
  flexShrink = "flexShrink",
  flexWrap = "flexWrap",
  // Image props
  imgFluid = "imgFluid",
  imgThumbnail = "imgThumbnail",
  // Button props
}

export const PropNames: PropNameType = {
  listStyle: {
    comment: `\
    * Override default \`list-style\` style with custom styles.
    * @param {string} listStyle __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  textBg: {
    comment: `\
    * Set background color by adding class names: text-bg-{color}
    * @param {string} textBg __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textTrunc: {
    comment: `\
    * For longer content, you can add a .text-truncate class to truncate the text with an ellipsis. Requires display: inline-block or display: block.
    * @param {string} textTrunc __ARGMS__`,
    group: PropGroup.TextProps,
  },
  linkColor: {
    comment: `\
    * Colored link helpers have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.
    * @param {string} textTrunc __ARGMS__`,
    group: PropGroup.TextProps,
  },
  stretchedLink: {
    comment: `\
    * Add .stretched-link to a link to make its containing block clickable via a ::after pseudo element. In most cases, this means that an element with position: relative; that contains a link with the .stretched-link class is clickable. Please note given how CSS position works, .stretched-link cannot be mixed with most table elements.
    * @param {string} stretchedLink __ARGMS__`,
    group: PropGroup.TextProps,
  },
  aspectRatio: {
    comment: `\
    * Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.
    * @param {string} aspectRatio __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  fixed: {
    comment: `\
    * Position an element at the top of the viewport, or at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
    * @param {string} fixed __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  sticky: {
    comment: `\
    * Position an element at the top of the viewport, or bottom of the viewport, from edge to edge, but only after you scroll past it.
    * @param {string} sticky __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  hstack: {
    comment: `\
    * Use .hstack for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use .gap-* utilities to add space between items.
    * @param {boolean} hstack __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  vstack: {
    comment: `\
    * Use .vstack to create vertical layouts. Stacked items are full-width by default. Use .gap-* utilities to add space between items.
    * @param {boolean} hstack __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  vAlign: {
    comment: `\
    * Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.
    * @param {string} vAlign __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  vTextAlign: {
    comment: `\
    * Setting the css value \`vertical-align: text-bottom\`
    * @param {string} vTextAlign __ARGMS__`,
    group: PropGroup.TextProps,
  },
  float: {
    comment: `\
    * Toggle floats on any element, across any breakpoint, using our responsive float utilities.
    * @param {string} float __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  objectFit: {
    comment: `\
    * Use the object fit utilities to modify how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
    * @param {string} objectFit __ARGMS__`,
    group: PropGroup.ImageProp,
  },
  objectPosition: {
    comment: `\
    * The CSS object-position property is used to specify how an *<img>* or *<video>* should be positioned within its container.
    * @param {string} objectPosition __ARGMS__`,
    group: PropGroup.ImageProp,
  },
  imgFluid: {
    comment: `\
    * Images in Bootstrap are made responsive with *.img-fluid*. This applies *max-width: 100%;* and *height: auto;* to the image so that it scales with the parent width.
    * @param {__ARGMS__} imgFluid __ARGMS__`,
    group: PropGroup.ImageProp,
  },
  imgThumbnail: {
    comment: `\
    * In addition to our border-radius utilities, you can use *.img-thumbnail* to give an image a rounded 1px border appearance.
    * @param {__ARGMS__} imgThumbnail __ARGMS__`,
    group: PropGroup.ImageProp,
  },
  opacity: {
    comment: `\
    * The opacity property sets the opacity level for an element. The opacity level describes the transparency level, where 1 is not transparent at all, .5 is 50% visible, and 0 is completely transparent.
    * @param {string} opacity __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  overflow: {
    comment: `\
    * Use these shorthand utilities for quickly configuring how content overflows an element.
    * @param {string} overflow __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  overflowX: {
    comment: `\
    * Adjust the overflow-x property to affect the overflow of content horizontally.
    * @param {string} overflowX __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  overflowY: {
    comment: `\
    * Adjust the overflow-y property to affect the overflow of content vertically.
    * @param {string} overflowY __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  display: {
    comment: `\
    * Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
    * @param {string} display __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  displayPrint: {
    comment: `\
    * Change the display value of elements when printing with our print display utility classes. Includes support for the same display values as our responsive .d-* utilities.
    * @param {string} displayPrint __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  shadow: {
    comment: `\
    * Add or remove shadows to elements with box-shadow utilities.
    * @param {string} shadow __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  focusRing: {
    comment: `\
    * The \`.focus-ring\` helper removes the default outline on :focus, replacing it with a \`box-shadow\` that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the :root level, that can be modified for any element or component.
    * @param {string} focusRing __ARGMS__`,
    group: PropGroup.TextProps,
  },
  position: {
    comment: `\
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
    * @param {string} position __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  top: {
    comment: `\
    * Setting \`top: *\` css property.
    * @param {string} top __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  bottom: {
    comment: `\
    * Setting \`bottom: *\` css property.
    * @param {string} bottom __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  start: {
    comment: `\
    * Setting \`left: *\` css property.
    * @param {string} start __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  end: {
    comment: `\
    * Setting \`right: *\` css property.
    * @param {string} end __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  left: {
    comment: `\
    * Setting \`left: *\` css property.
    * @param {string} start __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  right: {
    comment: `\
    * Setting \`right: *\` css property.
    * @param {string} end __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  translateMiddle: {
    comment: `\
    * Setting \`transform: translate(-50%, -50%)\` css property.
    * @param {string} translateMiddle __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  translateMiddleX: {
    comment: `\
    * Setting \`transform: translateX(-50%)\` css property.
    * @param {string} translateMiddleX __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  translateMiddleY: {
    comment: `\
    * Setting \`transform: translateY(-50%)\` css property.
    * @param {string} translateMiddleY __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  border: {
    comment: `\
    * Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
    * @param {string} border __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderTop: {
    comment: `\
    * Set border on \`border-top\` only.
    * @param {string} borderTop __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderEnd: {
    comment: `\
    * Set border on \`border-right\` only.
    * @param {string} borderEnd __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderBottom: {
    comment: `\
    * Set border on \`border-bottom\` only.
    * @param {string} borderBottom __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderStart: {
    comment: `\
    * Set border on \`border-left\` only.
    * @param {string} borderStart __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderColor: {
    comment: `\
    * Change the border color using utilities built on our theme colors.
    * @param {string} borderColor __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderSubtle: {
    comment: `\
    * Apply border color with \`-subtle\` colors.
    * @param {string} borderSubtle __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderOpacity: {
    comment: `\
    * Bootstrap border-{color} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
    * @param {string} borderOpacity __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  width: {
    comment: `\
    * Set css \`width: \` with percentage.
    * @param {string} width __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  maxWidth: {
    comment: `\
    * Set css \`max-width: \` percentage.
    * @param {string} maxWidth __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  minWidth: {
    comment: `\
    * Set css \`min-width: \` percentage.
    * @param {string} minWidth __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  height: {
    comment: `\
    * Set css \`height: \` with percentage.
    * @param {string} height __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  maxHeight: {
    comment: `\
    * Set css \`max-height: \` percentage.
    * @param {string} maxHeight __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  minHeight: {
    comment: `\
    * Set css \`min-height: \` percentage.
    * @param {string} minHeight __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  flex: {
    comment: `\
    * Apply \`display: flex\` utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties.
    * @param {string} flex __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  justifyContent: {
    comment: `\
    * Use \`justify-content\` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, around, or evenly.
    * @param {string} justifyContent __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  alignItems: {
    comment: `\
    * Use \`align-items\` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).
    * @param {string} alignItems __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  alignContent: {
    comment: `\
    * Use align-content utilities on flexbox containers to align flex items together on the cross axis. Choose from start (browser default), end, center, between, around, or stretch. To demonstrate these utilities, we’ve enforced flex-wrap: wrap and increased the number of flex items.
    * *Heads up!* This property has no effect on single rows of flex items.
    * @param {string} alignContent __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  alignSelf: {
    comment: `\
    * Use \`align-self\` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from the same options as align-items: start, end, center, baseline, or stretch (browser default).
    * @param {string} alignSelf __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  order: {
    comment: `\
    * Use \`.order-*\` classes for controlling the visual order of your content. Useful for the \`flex\` system.
    * @param {string} order __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  m: {
    comment: `\
    * \`m\` - for classes that set \`margin\`
    * @param {string} m __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  mx: {
    comment: `\
    * \`mx\` - for classes that set \`margin-left\` and \`margin-right\` equally.
    * @param {string} mx __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  my: {
    comment: `\
    * \`my\` - for classes that set \`margin-top\` and \`margin-bottom\` equally.
    * @param {string} my __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  mt: {
    comment: `\
    * \`mt\` - for classes that set \`margin-top\`.
    * @param {string} mt __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  mb: {
    comment: `\
    * \`mb\` - for classes that set \`margin-bottom\`.
    * @param {string} mb __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  ms: {
    comment: `\
    * \`ms\` - for classes that set \`margin-left\`.
    * @param {string} ms __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  me: {
    comment: `\
    * \`me\` - for classes that set \`margin-right\`.
    * @param {string} me __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  p: {
    comment: `\
    * \`p\` - for classes that set \`padding\`
    * @param {string} p __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  px: {
    comment: `\
    * \`px\` - for classes that set \`padding-left\` and \`padding-right\` equally.
    * @param {string} px __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  py: {
    comment: `\
    * \`py\` - for classes that set \`padding-top\` and \`padding-bottom\` equally.
    * @param {string} py __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  pt: {
    comment: `\
    * \`pt\` - for classes that set \`padding-top\`.
    * @param {string} pt __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  pb: {
    comment: `\
    * \`pb\` - for classes that set \`padding-bottom\`.
    * @param {string} pb __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  ps: {
    comment: `\
    * \`ps\` - for classes that set \`padding-left\`.
    * @param {string} ps __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  pe: {
    comment: `\
    * \`pe\` - for classes that set \`padding-left\`.
    * @param {string} pe __ARGMS__`,
    group: PropGroup.SpacingProps,
  },
  gap: {
    comment: `\
    * When using \`display: grid\` or \`display: flex\`, you can make use of gap utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via our utilities API, based on the \`$spacers\` Sass map.
    * @param {string} gap __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  rowGap: {
    comment: `\
    * \`row-gap\` sets the vertical space between children items in the specified container.
    * @param {string} rowGap __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  columnGap: {
    comment: `\
    * \`column-gap\` sets the horizontal space between children items in the specified container.
    * @param {string} columnGap __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  fontMonospace: {
    comment: `\
    * Change a selection to our monospace font stack with \`.font-monospace.\`
    * @param {string} fontMonospace __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontSize: {
    comment: `\
    * Quickly change the font-size of text. While our heading classes (e.g., .h1–.h6) apply font-size, font-weight, and line-height, these utilities only apply font-size. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.
    * @param {string} fontSize __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontStyle: {
    comment: `\
    * Quickly change the \`font-weight\` of text with these utilities
    * @param {string} fontStyle __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontWeight: {
    comment: `\
    * Quickly change the \`font-style\` of text with these utilities
    * @param {string} fontWeight __ARGMS__`,
    group: PropGroup.TextProps,
  },
  lineHeight: {
    comment: `\
    * Change the line height with \`.lh-*\` utilities.
    * @param {string} lineHeight __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textAlign: {
    comment: `\
    * Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.
    * @param {string} textAlign __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textDecoration: {
    comment: `\
    * Decorate text in components with text decoration classes.
    * @param {string} textDecoration __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textTransform: {
    comment: `\
    * Transform text in components with text capitalization classes.
    * @param {string} textTransform __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textWrap: {
    comment: `\
    * Wrap text with a .text-wrap or .text-nowrap class.
    * @param {string} textWrap __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textBreak: {
    comment: `\
    * Prevent long strings of text from breaking your components’ layout by using .text-break to set word-wrap: break-word and word-break: break-word. We use word-wrap instead of the more common overflow-wrap for wider browser support, and add the deprecated word-break: break-word to avoid issues with flex containers.
    * @param {boolean} textBreak __ARGMS__`,
    group: PropGroup.TextProps,
  },
  color: {
    comment: `\
    * Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.
    * @param {ThemeColor} color __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textColor: {
    comment: `\
    * Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.
    * @param {ThemeColor} textColor __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textReset: {
    comment: `\
    * Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.
    * @param {boolean} textReset __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textOpacity: {
    comment: `\
    * Control the opacity of elements.
    * @param {string} textOpacity __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textEmphasis: {
    comment: `\
    * For higher contrast text. Not applicable for backgrounds.
    * @param {boolean} textEmphasis __ARGMS__`,
    group: PropGroup.TextProps,
  },
  linkOpacity: {
    comment: `\
    * Change the alpha opacity of the link rgba() color value with utilities. Please be aware that changes to a color’s opacity can lead to links with insufficient contrast.
    * @param {opacity} textEmphasis __ARGMS__`,
    group: PropGroup.TextProps,
  },
  linkOffset: {
    comment: `\
    * Change the underline’s distance from your text. Offset is set in em units to automatically scale with the element’s current font-size.
    * @param {string} linkOffset __ARGMS__`,
    group: PropGroup.TextProps,
  },
  linkUnderline: {
    comment: `\
    * Change the underline’s color independent of the link text color.
    * @param {string} linkUnderline __ARGMS__`,
    group: PropGroup.TextProps,
  },
  linkUnderlineOpacity: {
    comment: `\
    * Change the underline’s opacity. Requires adding .link-underline to first set an rgba() color we use to then modify the alpha opacity.
    * @param {string} linkUnderlineOpacity __ARGMS__`,
    group: PropGroup.TextProps,
  },
  bg: {
    comment: `\
    * Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set color, so in some cases you’ll want to use .text-* color utilities.
    * @param {string} bg __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgOpacity: {
    comment: `\
    * As of v5.1.0, background-color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
    * @param {string} bgOpacity __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgSubtle: {
    comment: `\
    * Render background color \`.bg-*\` with \`.bg-*-subtle\` utility.
    * @param {string} bgSubtle __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgGradient: {
    comment: `\
    * By adding a .bg-gradient class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.
    * Do you need a gradient in your custom CSS? Just add \`background-image: var(--#{$prefix}gradient)\`.
    * @param {string} bgGradient __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  userSelect: {
    comment: `\
    * Change the way in which the content is selected when the user interacts with it.
    * @param {string} userSelect __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  pointerEvents: {
    comment: `\
    * Using Bootstrap \`.pe-none\` and \`.pe-auto\` classes to prevent or add element interactions.
    * @param {string} pointerEvents __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  borderRadius: {
    comment: `\
    * Add classes to an element to easily round with \`border-radius\`.
    * @param {string} borderRadius __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderRadiusTop: {
    comment: `\
    * Add classes to an element to easily round \`border-top-left-radius\` and \`border-top-right-radius\` corners.
    * @param {string} borderRadiusTop __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderRadiusEnd: {
    comment: `\
    * Add classes to an element to easily round \`border-top-right-radius\` and \`border-bottom-right-radius\` corners.
    * @param {string} borderRadiusEnd __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderRadiusBottom: {
    comment: `\
    * Add classes to an element to easily round \`border-bottom-right-radius\` and \`border-bottom-left-radius\` corners.
    * @param {string} borderRadiusBottom __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderRadiusStart: {
    comment: `\
    * Add classes to an element to easily round \`border-top-left-radius\` and \`border-bottom-left-radius\` corners.
    * @param {string} borderRadiusStart __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderBlock: {
    comment: `\
    * The CSS \`border-block\` property is very similar to CSS property border, but the \`border-block\` property is dependent on block direction. Aka, \`writing-mode\` that defines block direction
    * @param {string} borderBlock __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderImage: {
    comment: `\
    * The \`border-image\` property allows you to specify an image to be used as the border around an element.
    * @param {string} borderImage __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderSpacing: {
    comment: `\
    * The \`border-spacing\` property sets the distance between the borders of adjacent cells.
    * @param {string} borderSpacing __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderCollapse: {
    comment: `\
    * The \`border-collapse\` property sets the collapsing borders model for two tables.
    * @param {string} borderCollapse __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderInline: {
    comment: `\
    * The \`border-iline\` property sets the style, color and width of the borders for different elements in the inline direction.
    * @param {string} borderInline __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderStyle: {
    comment: `\
    * The \`border-style\` property sets the style of an element's four borders. This property can have from one to four values.
    * @param {string} borderStyle __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  borderWidth: {
    comment: `\
    * Add classes to an element to easily round \`border-top-left-radius\` and \`border-bottom-left-radius\` corners.
    * @param {string} borderWidth __ARGMS__`,
    group: PropGroup.BorderProps,
  },
  visibility: {
    comment: `\
    * Control the visibility of elements, without modifying their display, with visibility utilities.
    * @param {string} visibility __ARGMS__`,
    group: PropGroup.LayoutProps,
  },
  zIndex: {
    comment: `\
    * Use our low-level z-index utilities to quickly change the stack level of an element or component.
    * @param {string} zIndex __ARGMS__`,
    group: PropGroup.LayoutProps,
  },

  /**
   * Other CSS.Property...
   */
  bgAttachment: {
    comment: `\
    * The \`background-attachment\` property sets whether a background image scrolls with the rest of the page, or is fixed.
    * @param {__ARGMS__} bgAttachment __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgBlendMode: {
    comment: `\
    * The \`background-blend-mode\` property defines the blending mode of each background layer (color and/or image).
    * @param {__ARGMS__} bgBlendMode __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgClip: {
    comment: `\
    * The \`background-clip\` property defines how far the background (color or image) should extend within an element.
    * @param {__ARGMS__} bgClip __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgColor: {
    comment: `\
    * The \`background-color\` property sets the background color of an element.
    *
    * The background of an element is the total size of the element, including padding and border (but not the margin).
    * 
    * **Tip:** Use a background color and a text color that makes the text easy to read.
    * @param {__ARGMS__} bgColor __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgImage: {
    comment: `\
    * The \`background-image\` property sets one or more background images for an element.
    *
    * By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
    * 
    * **Tip:** The background of an element is the total size of the element, including padding and border (but not the margin).
    * 
    * **Tip:** Always set a background-color to be used if the image is unavailable.
    * @param {__ARGMS__} bgImage __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgOrigin: {
    comment: `\
    * The background-origin property specifies the origin position (the background positioning area) of a background image.
    *
    * **Note:** This property has no effect if \`background-attachment\` is "fixed".
    * @param {__ARGMS__} bgOrigin __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgPosition: {
    comment: `\
    * The \`background-position\` property sets the starting position of a background image.
    *
    * **Tip:** By default, a \`background-image\` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
    * @param {__ARGMS__} bgPosition __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgPositionX: {
    comment: `\
    * The \`background-position-x\` property sets the position of a background image on the x-axis.
    *
    * **Tip:** By default, a \`background-image\` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
    * @param {__ARGMS__} bgPositionX __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgPositionY: {
    comment: `\
    * The \`background-position-y\` property sets the position of a background image on the y-axis.
    *
    * **Tip:** By default, a \`background-image\` is placed at the top-left corner of an element, and repeated both vertically and horizontally.
    * @param {__ARGMS__} bgPositionY __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgRepeat: {
    comment: `\
    * The \`background-repeat\` property sets if/how a background image will be repeated.
    *
    * By default, a \`background-image\` is repeated both vertically and horizontally.
    * 
    * **Tip:** The background image is placed according to the \`background-position\` property. If no \`background-position\` is specified, the image is always placed at the element's top left corner.
    * @param {__ARGMS__} bgRepeat __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  bgSize: {
    comment: `\
    * The \`background-size\` property specifies the size of the background images.
    * @param {__ARGMS__} bgSize __ARGMS__`,
    group: PropGroup.BackgroundProps,
  },
  transform: {
    comment: `\
    * The \`transform\` property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
    * @param {__ARGMS__} transform __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  translate: {
    comment: `\
    * The \`translate\` property defines x- and y-coordinates of an element in 2D. You can also define the z-coordinate to change position in 3D.
    * @param {__ARGMS__} translate __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  rotate: {
    comment: `\
    * The \`rotate\` property defines a value for how much an element is rotated clockwise around z-axis. To rotate an element around x-axis or y-axis or in other ways, this must be defined.
    * @param {__ARGMS__} rotate __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  scale: {
    comment: `\
    * The \`scale\` property defines values for how much an element is scaled in x- and y-directions. You can also define how much an element is scaled in z-direction.
    * @param {__ARGMS__} scale __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  transition: {
    comment: `\
    * The \`transition\` property is a shorthand property for: \`transition-property\`, \`transition-duration\`, \`transition-timing-function\`, \`transition-delay\`
    * @param {__ARGMS__} transition __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  textIndent: {
    comment: `\
    * The \`text-indent\` property specifies the indentation of the first line in a text-block.
    *
    * **Note**: Negative values are allowed. The first line will be indented to the left if the value is negative.
    * @param {__ARGMS__} textIndent __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textJustify: {
    comment: `\
  * The \`text-justify\` property specifies the justification method of text when text-align is set to "justify".
  * @param {__ARGMS__} textJustify __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textOrientation: {
    comment: `\
  * The \`text-orientation\` property specifies the orientation of characters.
  * @param {__ARGMS__} textOrientation __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textOverflow: {
    comment: `\
  * The \`text-overflow\` property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.
  *
  * **Note:** Both of the following properties are required for text-overflow: \`white-space: nowrap\` and \`overflow: hidden\` .
  * @param {__ARGMS__} textOverflow __ARGMS__`,
    group: PropGroup.TextProps,
  },
  textShadow: {
    comment: `\
  * The \`text-shadow\` property adds shadow to text. This property accepts a comma-separated list of shadows to be applied to the text.
  * @param {__ARGMS__} textShadow __ARGMS__`,
    group: PropGroup.TextProps,
  },
  zoom: {
    comment: `\
  * The \`zoom\` property specifies the zoom factor for an element. An element can be zoomed in and out..
  * @param {__ARGMS__} zoom __ARGMS__`,
    group: PropGroup.TextProps,
  },
  scrollBehavior: {
    comment: `\
  * The \`CSS.Property.ScrollBehavior\` property specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable box.
  * @param {__ARGMS__} scrollBehavior __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  scrollMargin: {
    comment: `\
  * The \`scroll-margin\` property specifies the distance between the snap position and the container.
  *
  * This means that when you stop scrolling, the scrolling will quickly adjust and stop at a specified distance between the snap position and the container.
  * @param {__ARGMS__} scrollMargin __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  scrollPadding: {
    comment: `\
  * The \`scroll-padding\` property specifies the distance from the container to the snap position of child elements.
  * 
  * This means that when you stop scrolling, the scrolling will quickly adjust and stop at a specified distance from the container to the snap position of the child element in focus.
  * @param {__ARGMS__} scrollPadding __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  scrollbarColor: {
    comment: `\
  * The \`scrollbar-color\` property specifies the color of the scrollbar track (background) and thumb (the scroller).
  * @param {__ARGMS__} scrollbarColor __ARGMS__`,
    group: PropGroup.OtherProps,
  },
  font: {
    comment: `\
  * The \`font\` property is a shorthand property for: \`font-style\`, \`font-variant\`, \`font-weight\`, \`font-size/line-height\` and \`font-family\`.
  *
  * The font-size and font-family values are required. If one of the other values is missing, their default value are used.
  * 
  * **Note:** The line-height property sets the space between lines.
  * @param {__ARGMS__} font __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontFamily: {
    comment: `\
  * The \`font-family\` property specifies the font for an element.
  *
  * The \`font-family\` property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.
  * @param {__ARGMS__} fontFamily __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontKerning: {
    comment: `\
  * The \`font-kerning\` property controls the usage of the kerning information stored in a font.
  *
  * **Tip:** Kerning defines how letters are spaced.
  * 
  * **Note:** For fonts that do not include kerning data, this property will have no visible effect.
  * @param {__ARGMS__} fontKerning __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontSizeAdjust: {
    comment: `\
  * The \`font-size-adjust\` property gives you better control of the font size when the first selected font is not available.
  *
  * When a font is not available, the browser uses the second specified font. This could result in a big change for the font size. To prevent this, use the \`font-size-adjust\` property.
  * @param {__ARGMS__} fontSizeAdjust __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontStretch: {
    comment: `\
  * The \`font-stretch\` property allows you to make text narrower (condensed) or wider (expanded).
  *
  * **Note:** Some fonts provide additional faces; condensed faces and expanded faces. For these fonts, you can use the font-stretch property to select a normal, condensed, or expanded font face.
  * 
  * **Note:** This property has no effect if the selected font does not offer condensed or expanded faces!
  * @param {__ARGMS__} fontStretch __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontVariant: {
    comment: `\
  * In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.
  *
  * The \`font-variant\` property specifies whether or not a text should be displayed in a small-caps font.
  * @param {__ARGMS__} fontVariant __ARGMS__`,
    group: PropGroup.TextProps,
  },
  fontVariantCaps: {
    comment: `\
  * The \`font-variant-caps\` property controls the usage of alternate glyphs for capital letters.
  * @param {__ARGMS__} fontVariant __ARGMS__`,
    group: PropGroup.TextProps,
  },
  inset: {
    comment: `\
  * The \`inset\` property sets the distance between an element and the parent element.
  *
  * **Note:** For this property to take effect it has to have the position property specified.
  * @param {__ARGMS__} inset __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  insetBlock: {
    comment: `\
  * The \`inset-block\` property sets the distance between an element and the parent element in the block direction.
  *
  * **Note:** For this property to take effect it has to have the position property specified.
  * @param {__ARGMS__} insetBlock __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  insetInline: {
    comment: `\
  * The \`inset-inline\` property sets the distance between an element and the parent element in the inline direction.
  *
  * **Note:** For this property to take effect it has to have the position property specified.
  * @param {__ARGMS__} insetInline __ARGMS__`,
    group: PropGroup.PositionProps,
  },
  // Flex properties
  flexBasis: {
    comment: `\
    * The \`flex-basis\` property specifies the initial length of a flexible item.
    *
    * **Note:** If the element is not a flexible item, the \`flex-basis\` property has no effect.
    * @param {__ARGMS__} flexBasis __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  flexDirection: {
    comment: `\
    * The \`flex-direction\` property specifies the direction of the flexible items.
    * 
    * **Note:** If the element is not a flexible item, the \`flex-direction\` property has no effect.
    * @param {__ARGMS__} flexDirection __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  flexFlow: {
    comment: `\
    * The \`flex-flow\` property is a shorthand property for: \`flex-direction\` and \`flex-wrap\`
    *
    * Note: If the elements are not flexible items, the \`flex-flow\` property has no effect.
    * @param {__ARGMS__} flexFlow __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  flexGrow: {
    comment: `\
    * The \`flex-grow\` property specifies how much the item will grow relative to the rest of the flexible items inside the same container.
    *
    * **Note:** If the element is not a flexible item, the \`flex-grow\` property has no effect.
    * @param {__ARGMS__} flexGrow __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  flexShrink: {
    comment: `\
    * The \`flex-shrink\` property specifies how the item will shrink relative to the rest of the flexible items inside the same container.
    *
    * **Note:** If the element is not a flexible item, the \`flex-shrink\` property has no effect.
    * @param {__ARGMS__} flexShrink __ARGMS__`,
    group: PropGroup.FlexProps,
  },
  flexWrap: {
    comment: `\
    * The \`flex-wrap\` property specifies whether the flexible items should wrap or not.
    *
    * **Note:** If the elements are not flexible items, the \`flex-wrap\` property has no effect.
    * @param {__ARGMS__} flexWrap __ARGMS__`,
    group: PropGroup.FlexProps,
  },

  // =========== Component props verifying
  textLead: {
    group: PropGroup.TypographyProp,
    ownByComponent: true,
  },
  textLevel: {
    group: PropGroup.TypographyProp,
    ownByComponent: true,
  },
};

//=========================================
/**
 * @param {general_type_name} general_type_name Don't add general string type to the prop list
 * @param {hard_type_name} hard_type_name Use `hard_type_name` (comma seperation) as the props: hard_type_name="ThemeColor,`custom`"
 * @param {sole_type_name} sole_type_name This prop will allow only one type of `sole_type_name`: sole_type_name="boolean"
 * @param {sole_type_value} sole_type_value This prop will allow only one type of `sole_type_value`: sole_type_value="0,1,2,3,4,5"
 * @param {extend_type_name} eextend_type_value Extend the generated prop with `extend_type_name` type: extend_type_name="boolean"
 * @param {extend_type_value} extend_type_value Extend the generated prop with `extend_type_value` type: extend_type_value="true"
 * @param {debug} debug Trigger debugger for debugging
 */
type Block = {
  propName: string;
  css: string[];
  options?: {
    [key in
      | "debug"
      | "prefix"
      | "bookmark" // just a dummy block for bookmarking, skip parsing these blocks
      | "general_type_name"
      | "hard_type_name"
      | "sole_type_name"
      | "sole_type_value"
      | "extend_type_name"
      | "extend_type_value"
      | "expect_own_component"]: string;
  };
};
class Writer {
  currentDir(file: string) {
    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory
    return `${__dirname}/${file}`;
  }

  readFile(filePath: string) {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  loadTemplate(templates: string[]) {
    const result: Block[] = [];
    try {
      for (const lines of templates) {
        // Regex test link: https://regexr.com/
        const matches = lines.matchAll(/@START((?:(?!@END)(.|\s))*)@END/g);
        for (const str of matches) {
          // str[1], the content without keyword
          const arr = str[1].trim().split("\n");

          let propName,
            options: any = undefined;

          // argm options
          const argmRex = arr[0].match(/{(.*)}/);
          if (argmRex) {
            options = {};
            propName = arr[0].split("{")[0].trim();
            const argmPairs = argmRex[1].split(" ").filter((a) => Boolean(a));
            for (const pair of argmPairs) {
              // key only, trick as boolean: key=""
              const idx = pair.indexOf("=");
              if (idx == -1) {
                options[pair] = true;
              } else {
                // key=value
                const argmName = pair.slice(0, idx);
                const argmValue = pair.slice(idx + 1); // remove the equal sign `=`
                options[argmName] = argmValue.slice(1, argmValue.length - 1); // remove two double quote
              }
            }
          } else {
            propName = arr[0].trim();
          }

          result.push({
            propName,
            css: arr.splice(1).filter((a) => !a.startsWith("#")),
            options,
          });
        }
      }
    } catch (err) {
      console.error(err);
      throw err;
    }

    return result;
  }

  transpileTypeCode(code: string) {
    // Regex test link: https://regexr.com/
    return code.replaceAll(
      /@START_REMOVAL((?:(?!@END_REMOVAL)(.|\s))*)@END_REMOVAL/g,
      ""
    );
  }

  saveGenerate(
    genPropType: { [key in PropGroup]: string[] },
    elemenTypes: string,
    otherTypeSrc: string[],
    filePath: string
  ) {
    const buffer: string[] = [];

    for (const [k, v] of Object.entries(genPropType)) {
      if (!Object.values(v).length) continue;

      buffer.push(`\n\nexport type ${k} = Partial<{
        ${v.join("\n")}
        }>;`);
    }

    /*
     * TranspileTypeCode
     */
    let content = this.transpileTypeCode(elemenTypes);
    content = content.replace("/*__GENERAL_TYPES__*/", buffer.join("\n"));
    content = content.replace(
      "/*__COMPONENT_TYPES__*/",
      otherTypeSrc.join("\n")
    );

    try {
      fs.writeFileSync(filePath, content);
    } catch (err) {
      console.error(err);
    }
  }
}

export default function PropGenerator(
  templateSrc: string[],
  otherTypeSrc: string[]
) {
  const writer = new Writer();
  const blocks = writer.loadTemplate(templateSrc);

  // checking new props that has not been in the declaration list
  const supportedProps = Object.keys(PropNames).sort();
  const notImplementedProps = blocks
    .filter((a) => Boolean(!a.options?.bookmark)) // skip bookmarking block
    .filter((a) => supportedProps.indexOf(a.propName) == -1)
    .map((a) => a.propName);
  if (notImplementedProps.length) {
    const msg = `Error, Found props that haven't implemented: ${notImplementedProps.join(
      ", "
    )}`;
    console.error(msg);
    throw new Error(msg);
  }

  // in opposite, checking props in the declaration list but not in `blocks`
  for (const name of supportedProps) {
    if (!blocks.find((a) => a.propName == name)) {
      const msg = `Error, Found props that has been declared \`${name}\` but found not in the templateSrc`;
      console.error(msg);
      throw new Error(msg);
    }
  }

  // parsing props
  const PropGroups = Object.keys(PropGroup);
  for (const group of PropGroups) {
    const entries = Object.entries(PropNames)
      .filter((a) => a[1].group == group)
      .sort((a, b) => a[0].localeCompare(b[0]));
    for (const [propName, argm] of entries) {
      const tmpl = blocks.find((a) => a.propName == propName);
      if (!tmpl) continue;

      // own by component, just for overlapping testing, skip in generating
      if (argm.ownByComponent) continue;

      const typeGen: string[] = [];
      const { css, options } = tmpl;
      const generalStringType = Boolean(
        options?.general_type_name &&
          !options?.sole_type_name &&
          !options?.sole_type_value
      );

      if (options?.debug) {
        // eslint-disable-next-line no-debugger
        debugger;
      }

      // retreive type from template
      if (options?.hard_type_name) {
        typeGen.push(
          ...options.hard_type_name
            .split(",")
            .map((a) => a.trim())
            .filter((a) => Boolean(a))
        );
      }
      // this prop has only one type
      else if (options?.sole_type_name || options?.sole_type_value) {
        if (options?.sole_type_name) {
          typeGen.push(options?.sole_type_name);
        }
        if (options?.sole_type_value) {
          typeGen.push(options.sole_type_value.split(",").join("|"));
        }
      }
      // infer types from css
      else if (options?.prefix) {
        typeGen.push(
          ...css
            .map((a) => a.replace(`${options!.prefix}-`, "").trim())
            .filter((a) => Boolean(a))
            .map((a) => `"${a}"`)
        );

        // boolean type
        const idx = typeGen.indexOf(`"${options!.prefix}"`);
        if (idx > -1) {
          typeGen[idx] = "boolean";
        }
      }

      // add optional type, by type_name
      if (options?.extend_type_name) {
        typeGen.push(
          ...options.extend_type_name
            .split(",")
            .map((a) => a.trim())
            .filter((a) => Boolean(a))
            .map((a) =>
              a.startsWith("CSS.Property.")
                ? `(${a} & Record<never, never>)`
                : a
            )
        );
      }
      // add optional type, by type_value
      if (options?.extend_type_value) {
        typeGen.push(
          ...options.extend_type_value
            .split(",")
            .map((a) => a.trim())
            .filter((a) => Boolean(a))
            .map((a) => `"${a}"`)
        );
      }

      // expect_own_component
      if (options?.expect_own_component) {
        typeGen.push(
          ...options.expect_own_component
            .split(",")
            .map((a) => a.trim())
            .filter((a) => Boolean(a))
            .map((a) => `"${a}"`)
        );
      }

      // error checking, expect at prop type is not empty
      if (!typeGen.length) {
        const msg = `Error, failed generating prop type. propName = ${propName}`;
        console.error(msg);
        throw Error(msg);
      }

      // By default, add general string type for all prob type_name list
      if (generalStringType) {
        typeGen.push("CSSString");
      }

      PropGroupMap[argm.group].push(
        `\n/**
        ${(argm.comment || "").replaceAll("__ARGMS__", typeGen.join(", "))}
        */`,
        `${propName}: Responsive<${typeGen.join(" | ")}>;`
      );
    }
  }

  const elemenTypes = writer.readFile(writer.currentDir("../types.ts"));
  writer.saveGenerate(
    PropGroupMap,
    elemenTypes,
    otherTypeSrc,
    writer.currentDir("../../saigon.types.ts")
  );

  console.log(`\n\nGenerated types successfully.\n\n`);
  exit(1);
}
