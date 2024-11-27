import { forwardRef } from "react";
import { RowProps, RowType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: RowProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    rowCols,
    g,
    gx,
    gy,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  rowCols !== undefined &&
    (typeof rowCols == "number"
      ? (classNames[`row-cols-${rowCols}`] = true)
      : (classNames["row-cols-auto"] = true));

  g !== undefined && (classNames[`g-${g}`] = true);
  gx !== undefined && (classNames[`gx-${gx}`] = true);
  gy !== undefined && (classNames[`gy-${gy}`] = true);

  return [["row", classNames], rest];
}

const Row: RowType = forwardRef<HTMLElement, RowProps>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  return createElement(
    as || "div",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Row;
