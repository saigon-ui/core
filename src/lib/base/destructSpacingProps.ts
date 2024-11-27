/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc } from ".";
import { SpacingProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructSpacingProps: DestructorFunc = <T extends SpacingProps>(
  next: T,
  _: ThemeContext,
  { solveProp: { mixed } }: MediaBreakingType
) => {
  const {
    m,
    mb,
    me,
    ms,
    mt,
    mx,
    my,
    p,
    pb,
    pe,
    ps,
    pt,
    px,
    py,

    // The rest
    ...rest
  } = next;

  const template = [] as string[];
  const className = {} as any;

  const mMatch = ["0", "1", "2", "3", "4", "5", "auto", "none"];
  const pMatch = ["0", "1", "2", "3", "4", "5", "none"];

  /**
   * Start props stacking
   */
  mixed(className, template, m, {
    match: mMatch,
    classname: "m-#",
    style: "margin: #;",
  });

  // margin - mx
  mixed(className, template, mx, {
    match: mMatch,
    classname: "mx-#",
    style: "margin-left: #; margin-right: #;",
  });

  // margin - my
  mixed(className, template, my, {
    match: mMatch,
    classname: "my-#",
    style: "margin-top: #; margin-bottom: #;",
  });

  // margin - mt
  mixed(className, template, mt, {
    match: mMatch,
    classname: "mt-#",
    style: "margin-top: #;",
  });

  // margin - mb
  mixed(className, template, mb, {
    match: mMatch,
    classname: "mb-#",
    style: "margin-bottom: #;",
  });

  // margin - ms
  mixed(className, template, ms, {
    match: mMatch,
    classname: "ms-#",
    style: "margin-left: #;",
  });

  // margin - me
  mixed(className, template, me, {
    match: mMatch,
    classname: "me-#",
    style: "margin-right: #;",
  });

  //================================================

  // padding - p
  mixed(className, template, p, {
    match: pMatch,
    classname: "p-#",
    style: "padding: #;",
  });

  // padding - px
  mixed(className, template, px, {
    match: pMatch,
    classname: "px-#",
    style: "padding-left: #; padding-right: #;",
  });

  // padding - py
  mixed(className, template, py, {
    match: pMatch,
    classname: "py-#",
    style: "padding-top: #; padding-bottom: #;",
  });

  // padding - pt
  mixed(className, template, pt, {
    match: pMatch,
    classname: "pt-#",
    style: "padding-top: #;",
  });

  // padding - pb
  mixed(className, template, pb, {
    match: pMatch,
    classname: "pb-#",
    style: "padding-bottom: #;",
  });

  // padding - ps
  mixed(className, template, ps, {
    match: pMatch,
    classname: "ps-#",
    style: "padding-left: #;",
  });

  // padding - pe
  mixed(className, template, pe, {
    match: pMatch,
    classname: "pe-#",
    style: "padding-right: #;",
  });

  return [
    {
      css: cssFunc(template.join("\n")),
      className: classNames(className),
    },
    rest,
  ];
};
