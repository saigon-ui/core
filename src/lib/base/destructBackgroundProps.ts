/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc, ThemeColors } from ".";
import { BackgroundProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructBackgroundProps: DestructorFunc = <
  T extends BackgroundProps
>(
  next: T,
  ctx: ThemeContext,
  { getResponsive, solveProp: { mixed, style } }: MediaBreakingType
) => {
  const {
    bg,
    bgAttachment,
    bgBlendMode,
    bgClip,
    bgColor,
    bgGradient,
    bgImage,
    bgOpacity,
    bgOrigin,
    bgPosition,
    bgPositionX,
    bgPositionY,
    bgRepeat,
    bgSize,
    bgSubtle,

    // The rest
    ...rest
  } = next;

  const className: any = {};
  const template = [] as string[];
  const { cssVarPrefix } = ctx.theme;

  /*
   * Bootstrap properties
   */
  if (bg !== undefined) {
    const subtle = getResponsive(bgSubtle);
    mixed(className, template, bg, {
      match: [
        "black",
        "white",
        "body",
        "transparent",
        "body-secondary",
        "body-tertiary",
        "none",
        ...ThemeColors,
      ],
      classname: subtle ? "bg-#-subtle" : "bg-#",
      style: `background: #;`,
    });
  }

  mixed(className, template, bgOpacity, {
    match: ["10", "25", "50", "75", "100", "none"],
    classname: "bg-opacity-#",
    style: `--${cssVarPrefix}bg-opacity: ${bgOpacity}!important;`,
  });

  // those two are difficult to process breakpoint options
  if (bgGradient !== undefined && getResponsive(bg) !== undefined) {
    className[`bg-gradient`] = Boolean(getResponsive(bgGradient));
  }

  // bg-opacity variable
  if (bg !== undefined && bgOpacity === undefined) {
    template.push(`--${cssVarPrefix}bg-opacity: 1;`);
  }

  /*
   * CSS Properties
   */
  style(template, bgAttachment, "background-attachment: #;");

  style(template, bgBlendMode, "background-blend-mode: #;");

  style(template, bgClip, "background-clip: #;");

  style(template, bgColor, "background-color: #;");

  style(template, bgImage, "background-image: #;");

  style(template, bgOrigin, "background-origin: #;");

  style(template, bgPosition, "background-position: #;");

  style(template, bgPositionX, "background-position-x: #;");

  style(template, bgPositionY, "background-position-y: #;");

  style(template, bgRepeat, "background-repeat: #;");

  style(template, bgSize, "background-size: #;");

  return [
    { className: classNames(className), css: cssFunc(template.join("\n")) },
    rest,
  ];
};
