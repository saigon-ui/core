import { forwardRef } from "react";
import { ColProps, ColType } from ".";
import {
  ClassNameFuncResult,
  RemainingProps,
  createElement,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: ColProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    col,
    offset,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  if (col !== undefined) {
    const b = typeof col === "object" ? col : { xs: col };

    // xs
    b.xs !== undefined &&
      (typeof b.xs == "number"
        ? (classNames[`col-${b.xs}`] = true)
        : (classNames["col-auto"] = true));

    // sm
    b.sm !== undefined &&
      (typeof b.sm == "number"
        ? (classNames[`col-sm-${b.sm}`] = true)
        : (classNames["col-sm-auto"] = true));

    // md
    b.md !== undefined &&
      (typeof b.md == "number"
        ? (classNames[`col-md-${b.md}`] = true)
        : (classNames["col-md-auto"] = true));

    // lg
    b.md !== undefined &&
      (typeof b.md == "number"
        ? (classNames[`col-lg-${b.lg}`] = true)
        : (classNames["col-lg-auto"] = true));

    // xl
    b.xl !== undefined &&
      (typeof b.xl == "number"
        ? (classNames[`col-xl-${b.xl}`] = true)
        : (classNames["col-xl-auto"] = true));

    // xxl
    b.xxl !== undefined &&
      (typeof b.xxl == "number"
        ? (classNames[`col-xxl-${b.xxl}`] = true)
        : (classNames["col-xxl-auto"] = true));
  }

  offset !== undefined && (classNames[`offset-${offset}`] = true);

  return [["col", classNames], rest];
}

const Col: ColType = forwardRef<HTMLElement, ColProps>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  return createElement(
    as || "div",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Col;
