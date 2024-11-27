/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { DestructorFunc } from ".";
import { FlexProps } from "../saigon.types";
import { ThemeContext } from "./context";
import { MediaBreakingType } from "./theme";

export const destructFlexProps: DestructorFunc = <T extends FlexProps>(
  next: T,
  _: ThemeContext,
  { solveProp: { mixed, style, boolMixed } }: MediaBreakingType
) => {
  const {
    alignContent,
    alignItems,
    alignSelf,
    columnGap,
    flex,
    flexBasis,
    flexDirection,
    flexFlow,
    flexGrow,
    flexShrink,
    flexWrap,
    gap,
    justifyContent,
    order,
    rowGap,

    // The rest
    ...rest
  } = next;

  const className: any = {};
  const template = [] as string[];

  /*
   * Bootstrap properties
   */
  mixed(className, template, flex, {
    match: [
      "fill",
      "row",
      "column",
      "row-reverse",
      "column-reverse",
      "grow-0",
      "grow-1",
      "shrink-0",
      "shrink-1",
      "wrap",
      "nowrap",
      "wrap-reverse",
      "none",
    ],
    classname: "flex-#",
    style: `flex: #;`,
  });

  mixed(className, template, justifyContent, {
    match: ["start", "end", "center", "between", "around", "evenly", "none"],
    classname: "justify-content-#",
    style: `justify-content: #;`,
  });

  mixed(className, template, alignItems, {
    match: ["start", "end", "center", "baseline", "stretch", "none"],
    classname: "align-items-#",
    style: `align-items: #;`,
  });

  mixed(className, template, alignContent, {
    match: ["start", "end", "center", "between", "around", "stretch", "none"],
    classname: "align-content-#",
    style: `align-content: #;`,
  });

  mixed(className, template, alignSelf, {
    match: ["auto", "start", "end", "center", "baseline", "stretch", "none"],
    classname: "align-self-#",
    style: `align-self: #;`,
  });

  mixed(className, template, order, {
    match: ["first", "0", "1", "2", "3", "4", "5", "last", "none"],
    classname: "order-#",
    style: `order: #;`,
  });

  const NumberOp = ["0", "1", "2", "3", "4", "5", "none"];

  mixed(className, template, gap, {
    match: NumberOp,
    classname: "gap-#",
    style: `gap: #;`,
  });

  mixed(className, template, rowGap, {
    match: NumberOp,
    classname: "row-gap-#",
    style: `row-gap: #;`,
  });

  mixed(className, template, columnGap, {
    match: NumberOp,
    classname: "column-gap-#",
    style: `column-gap: #;`,
  });

  // CSS properties
  style(template, flexBasis, "flex-basis: #;");

  style(template, flexDirection, "flex-direction: #;");

  style(template, flexFlow, "flex-flow: #;");

  style(template, flexGrow, "flex-grow: #;");

  style(template, flexShrink, "flex-shrink: #;");

  boolMixed(
    className,
    flexWrap,
    "flex-wrap",
    ["wrap", "nowrap", "wrap-reverse", "none"],
    "flex-#",
    template,
    "flex-wrap: #;"
  );

  return [
    { className: classNames(className), css: cssFunc(template.join("\n")) },
    rest,
  ];
};
