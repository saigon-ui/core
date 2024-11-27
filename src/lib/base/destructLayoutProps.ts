/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc } from ".";
import { LayoutProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructLayoutProps: DestructorFunc = <T extends LayoutProps>(
  next: T,
  _: ThemeContext,
  { solveProp: { mixed, boolStyle } }: MediaBreakingType
) => {
  const {
    display,
    displayPrint,
    height,
    hstack,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    overflow,
    overflowX,
    overflowY,
    visibility,
    vstack,
    width,
    zIndex,

    ...rest
  } = next;

  const className: any = {};
  const template = [] as string[];

  /**
   * Start props stacking
   */
  boolStyle(
    template,
    hstack,
    "display: flex; flex-direction: row; align-items: center; align-self: stretch;"
  );

  boolStyle(
    template,
    vstack,
    "display: flex; flex: 1 1 auto; flex-direction: column; align-self: stretch;"
  );

  const OverflowOp = ["auto", "hidden", "visible", "scroll", "none"];

  mixed(className, template, overflow, {
    match: OverflowOp,
    classname: "overflow-#",
    style: `overflow: #;`,
  });

  mixed(className, template, overflowX, {
    match: OverflowOp,
    classname: "overflow-x-#",
    style: `overflow-x: #;`,
  });

  mixed(className, template, overflowY, {
    match: OverflowOp,
    classname: "overflow-y-#",
    style: `overflow-y: #;`,
  });

  const DisplayOp = [
    "inline",
    "inline-block",
    "block",
    "grid",
    "inline-grid",
    "table",
    "table-row",
    "table-cell",
    "flex",
    "inline-flex",
    "none",
  ];

  mixed(className, template, display, {
    match: DisplayOp,
    classname: "d-#",
    style: `display: #;`,
  });

  mixed(className, template, displayPrint, {
    match: DisplayOp,
    classname: "d-print-#",
    style: `display: #;`,
  });

  const WidthHeightOp = ["25", "50", "75", "100", "auto", "none"];

  mixed(className, template, width, {
    match: WidthHeightOp,
    classname: "w-#",
    style: `width: #;`,
  });

  mixed(className, template, maxWidth, {
    match: WidthHeightOp,
    classname: "mw-#",
    style: `max-width: #;`,
  });

  mixed(className, template, minWidth, {
    match: WidthHeightOp,
    classname: "minw-#",
    style: `min-width: #;`,
  });

  mixed(className, template, height, {
    match: WidthHeightOp,
    classname: "h-#",
    style: `height: #;`,
  });

  mixed(className, template, maxHeight, {
    match: WidthHeightOp,
    classname: "mh-#",
    style: `max-height: #;`,
  });

  mixed(className, template, minHeight, {
    match: WidthHeightOp,
    classname: "minh-#",
    style: `min-height: #;`,
  });

  mixed(className, template, visibility, {
    match: ["visible", "invisible", "none"],
    classname: "visibility-#",
    style: `visibility: #;`,
  });

  mixed(className, template, zIndex, {
    match: ["n1", "0", "1", "2", "3", "none"],
    classname: "z-#",
    style: `z-index: #;`,
  });

  return [
    { className: classNames(className), css: cssFunc(template.join("\n")) },
    rest,
  ];
};
