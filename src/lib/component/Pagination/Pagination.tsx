import { forwardRef } from "react";
import { PaginationProps, PaginationType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: PaginationProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  size !== undefined && (classNames[`pagination-${size}`] = true);

  return [["pagination", classNames], rest];
}

const Pagination: PaginationType = forwardRef<HTMLElement, PaginationProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "ul",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Pagination;
