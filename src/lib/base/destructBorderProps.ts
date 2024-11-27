/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc, ThemeColors } from ".";
import { BorderProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructBorderProps: DestructorFunc = <T extends BorderProps>(
  next: T,
  ctx: ThemeContext,
  { getResponsive, solveProp: { mixed, style, boolMixed } }: MediaBreakingType
) => {
  const {
    border,
    borderBlock,
    borderBottom,
    borderCollapse,
    borderColor,
    borderEnd,
    borderImage,
    borderInline,
    borderOpacity,
    borderRadius,
    borderRadiusBottom,
    borderRadiusEnd,
    borderRadiusStart,
    borderRadiusTop,
    borderSpacing,
    borderStart,
    borderStyle,
    borderSubtle,
    borderTop,
    borderWidth,

    // The rest
    ...rest
  } = next;

  const className: any = {};
  const template = [] as string[];
  const { cssVarPrefix } = ctx.theme;

  /*
   * Bootstrap properties
   */
  boolMixed(
    className,
    border,
    "border",
    ["0", "none"],
    "border-#",
    template,
    "border: #;"
  );

  boolMixed(
    className,
    borderEnd,
    "border-end",
    ["0", "none"],
    "border-end-#",
    template,
    "border-right: #;"
  );

  boolMixed(
    className,
    borderBottom,
    "border-bottom",
    ["0", "none"],
    "border-bottom-#",
    template,
    "border-bottom: #;"
  );

  boolMixed(
    className,
    borderStart,
    "border-start",
    ["0", "none"],
    "border-start-#",
    template,
    "border-left: #;"
  );

  if (borderColor !== undefined) {
    const subtle = getResponsive(borderSubtle);
    mixed(className, template, borderColor, {
      match: ["black", "white", "none", ...ThemeColors],
      classname: subtle ? "border-#-subtle" : "border-#",
      style: `border-color: #;`,
    });
  }

  boolMixed(
    className,
    borderTop,
    "border-top",
    ["0", "none"],
    "border-top-#",
    template,
    "border-top: #;"
  );

  mixed(className, template, borderWidth, {
    match: ["1", "2", "3", "4", "5", "none"],
    classname: "border-#",
    style: `border-width: #;`,
  });

  mixed(className, template, borderOpacity, {
    match: ["10", "25", "50", "75", "100", "none"],
    classname: "border-opacity-#",
    style: `--${cssVarPrefix}border-opacity: #!important;`,
  });

  const BorderOp = ["0", "1", "2", "3", "4", "5", "circle", "pill", "none"];

  boolMixed(
    className,
    borderRadius,
    "rounded",
    BorderOp,
    "rounded-#",
    template,
    "border-radius: #;"
  );

  boolMixed(
    className,
    borderRadiusTop,
    "rounded-top",
    BorderOp,
    "rounded-top-#",
    template,
    "border-top-left-radius: #; border-top-right-radius: #;"
  );

  boolMixed(
    className,
    borderRadiusEnd,
    "rounded-end",
    BorderOp,
    "rounded-end-#",
    template,
    "border-top-right-radius: #; border-bottom-right-radius: #;"
  );

  boolMixed(
    className,
    borderRadiusBottom,
    "rounded-bottom",
    BorderOp,
    "rounded-bottom-#",
    template,
    "border-bottom-left-radius: #; border-bottom-right-radius: #;"
  );

  boolMixed(
    className,
    borderRadiusStart,
    "rounded-start",
    BorderOp,
    "rounded-start-#",
    template,
    "border-top-left-radius: #; border-bottom-left-radius: #;"
  );

  // CSS properties
  style(template, borderBlock, "border-block: #;");

  style(template, borderImage, "border-image: #;");

  style(template, borderSpacing, "border-spacing: #;");

  style(template, borderStyle, "border-style: #;");

  style(template, borderInline, "border-inline: #;");

  style(template, borderCollapse, "border-collapse: #;");

  return [
    { className: classNames(className), css: cssFunc(template.join("\n")) },
    rest,
  ];
};
