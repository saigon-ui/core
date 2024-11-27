import { forwardRef } from "react";
import { StackProps, StackType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { Breakpoint } from "../../saigon.types";

function PropsDestructor(
  next: StackProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    fill,
    row,
    column,
    rowReverse,
    columnReverse,
    grow0,
    grow1,
    shrink0,
    shrink1,
    wrap,
    nowrap,
    wrapReverse,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  function styling(b: Breakpoint<any>, c: string) {
    classNames[`flex-${c}`] = Boolean(b.xs);
    classNames[`flex-sm-${c}`] = Boolean(b.sm);
    classNames[`flex-md-${c}`] = Boolean(b.md);
    classNames[`flex-lg-${c}`] = Boolean(b.lg);
    classNames[`flex-xl-${c}`] = Boolean(b.xl);
    classNames[`flex-xxl-${c}`] = Boolean(b.xxl);
  }

  fill !== undefined &&
    styling(typeof fill === "object" ? fill : { xs: fill }, "fill");

  row !== undefined &&
    styling(typeof row === "object" ? row : { xs: row }, "row");

  column !== undefined &&
    styling(typeof column === "object" ? column : { xs: column }, "column");

  rowReverse !== undefined &&
    styling(
      typeof rowReverse === "object" ? rowReverse : { xs: rowReverse },
      "row-reverse"
    );

  columnReverse !== undefined &&
    styling(
      typeof columnReverse === "object" ? columnReverse : { xs: columnReverse },
      "column-reverse"
    );

  grow0 !== undefined &&
    styling(typeof grow0 === "object" ? grow0 : { xs: grow0 }, "grow-0");

  grow1 !== undefined &&
    styling(typeof grow1 === "object" ? grow1 : { xs: grow1 }, "grow-1");

  shrink0 !== undefined &&
    styling(
      typeof shrink0 === "object" ? shrink0 : { xs: shrink0 },
      "shrink-0"
    );

  shrink1 !== undefined &&
    styling(
      typeof shrink1 === "object" ? shrink1 : { xs: shrink1 },
      "shrink-1"
    );

  wrap !== undefined &&
    styling(typeof wrap === "object" ? wrap : { xs: wrap }, "wrap");

  nowrap !== undefined &&
    styling(typeof nowrap === "object" ? nowrap : { xs: nowrap }, "nowrap");

  wrapReverse !== undefined &&
    styling(
      typeof wrapReverse === "object" ? wrapReverse : { xs: wrapReverse },
      "wrap-reverse"
    );

  return [[column ? "vstack" : "hstack", classNames], rest];
}

const Stack: StackType = forwardRef<HTMLElement, StackProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Stack;
