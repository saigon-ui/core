/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc, ThemeColors } from ".";
import { TextProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructTextProps: DestructorFunc = <T extends TextProps>(
  next: T,
  ctx: ThemeContext,
  {
    getResponsive,
    solveProp: { mixed, bool, style, boolMixed },
  }: MediaBreakingType
) => {
  const {
    color,
    focusRing,
    font,
    fontFamily,
    fontKerning,
    fontMonospace,
    fontSize,
    fontSizeAdjust,
    fontStretch,
    fontStyle,
    fontVariant,
    fontVariantCaps,
    fontWeight,
    lineHeight,
    linkColor,
    linkOffset,
    linkOpacity,
    linkUnderline,
    linkUnderlineOpacity,
    stretchedLink,
    textAlign,
    textBg,
    textBreak,
    textColor,
    textDecoration,
    textEmphasis,
    textIndent,
    textJustify,
    textOpacity,
    textOrientation,
    textOverflow,
    textReset,
    textShadow,
    textTransform,
    textTrunc,
    textWrap,
    vTextAlign,
    zoom,

    // The rest
    ...rest
  } = next;

  const template = [] as string[];
  const className = {} as any;
  const { cssVarPrefix } = ctx.theme;

  /**
   * Start props stacking
   */
  style(template, color, "color: #;");

  mixed(className, template, focusRing, {
    match: [...ThemeColors, "none"],
    classname: "focus-ring-#",
  });

  style(template, font, "font: #;");

  style(template, fontFamily, "font-family: #;");

  style(template, fontKerning, "font-kerning: #;");

  bool(className, fontMonospace, "font-monospace");

  mixed(className, template, fontSize, {
    match: ["1", "2", "3", "4", "5", "6", "none"],
    classname: "fs-#",
    style: `font-size: #;`,
  });

  style(template, fontSizeAdjust, "font-size-adjust: #;");

  style(template, fontStretch, "font-stretch: #;");

  mixed(className, template, fontStyle, {
    match: ["italic", "normal", "none"],
    classname: "fst-#",
    style: `font-style: #;`,
  });

  style(template, fontVariant, "font-variant: #;");

  style(template, fontVariantCaps, "font-variant-caps: #;");

  mixed(className, template, fontWeight, {
    match: [
      "light",
      "normal",
      "medium",
      "lighter",
      "semibold",
      "bold",
      "bolder",
      "none",
    ],
    classname: "fw-#",
    style: `font-weight: #;`,
  });

  mixed(className, template, lineHeight, {
    match: ["1", "sm", "base", "lg", "none"],
    classname: "lh-#",
    style: `line-height: #;`,
  });

  mixed(className, template, linkColor, {
    match: [...ThemeColors, "body-emphasis", "none"],
    classname: "link-#",
  });

  mixed(className, template, linkOffset, {
    match: ["1", "2", "3", "none"],
    classname: "link-offset-#",
    style: "text-underline-offset: #;",
  });

  mixed(className, template, linkOpacity, {
    match: ["10", "25", "50", "75", "100", "none"],
    classname: "link-opacity-#",
    style: `--${cssVarPrefix}link-opacity: #;`,
  });

  boolMixed(
    className,
    linkUnderline,
    "link-underline",
    [...ThemeColors, "none"],
    "link-underline-#"
  );

  mixed(className, template, linkUnderlineOpacity, {
    match: ["0", "10", "25", "50", "75", "100", "none"],
    classname: "link-underline-opacity-#",
    style: `--${cssVarPrefix}link-underline-opacity: #;`,
  });

  bool(className, stretchedLink, "stretched-link");

  mixed(className, template, textAlign, {
    match: ["start", "end", "center", "none"],
    classname: "text-#",
  });

  mixed(className, template, textBg, {
    match: [...ThemeColors, "none"],
    classname: "text-bg-#",
  });

  bool(className, textBreak, "text-break");

  if (getResponsive<boolean>(textEmphasis as any)) {
    mixed(className, template, textColor, {
      match: [
        ...ThemeColors,
        "black",
        "white",
        "body",
        "muted",
        "black-50",
        "white-50",
        "body-secondary",
        "body-tertiary",
        "body-emphasis",
        "none",
      ],
      classname: "text-#-emphasis",
    });
  } else
    mixed(className, template, textColor, {
      match: [
        ...ThemeColors,
        "black",
        "white",
        "body",
        "muted",
        "black-50",
        "white-50",
        "body-secondary",
        "body-tertiary",
        "body-emphasis",
        "none",
      ],
      classname: "text-#",
      style: `--${cssVarPrefix}text-opacity: 1; color: rgba(#, var(--${cssVarPrefix}text-opacity));`,
    });

  mixed(className, template, textDecoration, {
    match: ["none", "underline", "line-through"],
    classname: "text-decoration-#",
    style: "text-decoration: #;",
  });

  style(template, textIndent, "text-indent: #;");

  style(template, textJustify, "text-justify: #;");

  mixed(className, template, textOpacity, {
    match: ["25", "50", "75", "100", "none"],
    classname: "text-opacity-#",
    style: `--${cssVarPrefix}text-opacity: #;`,
  });

  style(template, textOrientation, "text-orientation: #;");

  style(template, textOverflow, "text-overflow: #;");

  bool(className, textReset, "text-reset");

  style(template, textShadow, "text-shadow: #;");

  mixed(className, template, textTransform, {
    match: ["lowercase", "uppercase", "capitalize", "none"],
    classname: "text-#",
    style: `text-transform: #;`,
  });

  bool(className, textTrunc, "text-truncate");

  mixed(className, template, textWrap, {
    match: ["wrap", "nowrap", "none"],
    classname: "text-#",
  });

  mixed(className, template, vTextAlign, {
    match: ["bottom", "top", "none"],
    classname: "align-text-#",
  });

  style(template, zoom, "zoom: #;");

  return [
    { css: cssFunc(template.join("\n")), className: classNames(className) },
    rest,
  ];
};
