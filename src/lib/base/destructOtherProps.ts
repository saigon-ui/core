/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc } from ".";
import { OtherProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructOtherProps: DestructorFunc = <T extends OtherProps>(
  next: T,
  _: ThemeContext,
  { getResponsive, solveProp: { mixed, style } }: MediaBreakingType
) => {
  const {
    aspectRatio,
    listStyle,
    opacity,
    pointerEvents,
    scrollbarColor,
    scrollBehavior,
    scrollMargin,
    scrollPadding,
    shadow,
    transition,
    userSelect,

    // The rest
    ...rest
  } = next;

  const template = [] as string[];
  const className = {} as any;

  //
  // props stacking
  //

  if (aspectRatio !== undefined) {
    // base class must have when using `aspectRatio`
    className["ratio"] = true;

    // then the ratio value
    mixed(className, template, aspectRatio, {
      match: ["1x1", "4x3", "16x9", "21x9", "none"],
      classname: "ratio-#",
    });
  }

  mixed(className, template, pointerEvents, {
    match: ["auto", "none"],
    classname: "pe-#",
  });

  mixed(className, template, listStyle, {
    match: ["unstyled", "inline", "inline-item", "none"],
    classname: "list-#",
    style: `list-style: #;`,
  });

  mixed(className, template, opacity, {
    match: ["0", "25", "50", "75", "100", "none"],
    classname: "opacity-#",
    style: `opacity: #;`,
  });

  mixed(className, template, userSelect, {
    match: ["all", "auto", "none"],
    classname: "user-select-#",
    style: `user-select: #;`,
  });

  // fixed: shadow props name conflict between `shadow-sm` (xs) vs `shadown-sm` (true/false in sm mode)
  if (shadow !== undefined) {
    const val = getResponsive(shadow);
    if (typeof val === "boolean") className["shadow"] = val;
    else
      mixed(className, template, shadow, {
        match: ["sm", "lg", "none"],
        classname: "shadow-#",
        style: `box-shadow: #;`,
      });
  }

  //
  // responsive on custom style
  //

  style(template, transition, "transition: #;");

  style(template, scrollBehavior, "scroll-behavior: #;");

  style(template, scrollMargin, "scroll-margin: #;");

  style(template, scrollPadding, "scroll-padding: #;");

  style(template, scrollbarColor, "scrollbar-color: #;");

  return [
    {
      css: cssFunc(template.join("\n")),
      className: classNames(className),
    },
    rest,
  ];
};
