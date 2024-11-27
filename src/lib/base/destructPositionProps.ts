/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc } from ".";
import { PositionProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructPositionProps: DestructorFunc = <T extends PositionProps>(
  next: T,
  _: ThemeContext,
  { solveProp: { mixed, bool, style } }: MediaBreakingType
) => {
  const {
    bottom,
    end,
    fixed,
    float,
    inset,
    insetBlock,
    insetInline,
    left,
    position,
    right,
    rotate,
    scale,
    start,
    sticky,
    top,
    transform,
    translate,
    translateMiddle,
    translateMiddleX,
    translateMiddleY,
    vAlign,

    // The rest
    ...rest
  } = next;

  const template = [] as string[];
  const className = {} as any;

  /**
   * Start props stacking
   */
  mixed(className, template, fixed, {
    match: ["top", "bottom", "none"],
    classname: "fixed-#",
  });

  mixed(className, template, sticky, {
    match: ["top", "bottom", "none"],
    classname: "sticky-#",
  });

  mixed(className, template, vAlign, {
    match: ["baseline", "top", "middle", "bottom", "none"],
    classname: "align-#",
  });

  mixed(className, template, float, {
    match: ["start", "end", "none"],
    classname: "float-#",
  });

  mixed(className, template, position, {
    match: ["static", "relative", "absolute", "fixed", "sticky", "none"],
    classname: "position-#",
  });

  mixed(className, template, top, {
    match: ["0", "50", "100", "none"],
    classname: "top-#",
    style: `top: #;`,
  });

  mixed(className, template, bottom, {
    match: ["0", "50", "100", "none"],
    classname: "bottom-#",
    style: `bottom: #;`,
  });

  mixed(className, template, start, {
    match: ["0", "50", "100", "none"],
    classname: "start-#",
    style: `left: #;`,
  });

  mixed(className, template, end, {
    match: ["0", "50", "100", "none"],
    classname: "end-#",
    style: `right: #;`,
  });

  mixed(className, template, left, {
    match: ["0", "50", "100", "none"],
    classname: "start-#",
    style: `left: #;`,
  });

  mixed(className, template, right, {
    match: ["0", "50", "100", "none"],
    classname: "end-#",
    style: `right: #;`,
  });

  bool(className, translateMiddle, "translate-middle");

  bool(className, translateMiddleX, "translate-middle-x");

  bool(className, translateMiddleY, "translate-middle-y");

  // custom style, allow templating
  style(template, transform, "transform: #;");

  style(template, translate, "translate: #;");

  style(template, rotate, "rotate: #;");

  style(template, scale, "scale: #;");

  style(template, inset, "inset: #;");

  style(template, insetBlock, "inset-block: #;");

  style(template, insetInline, "inset-inline: #;");

  return [
    {
      css: cssFunc(template.join("\n")),
      className: classNames(className),
    },
    rest,
  ];
};
