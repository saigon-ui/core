import { forwardRef } from "react";
import { PaginationItemProps, PaginationItemType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: PaginationItemProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    active,
    disabled,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  active !== undefined && (classNames[`active`] = Boolean(active));
  disabled !== undefined && (classNames[`disabled`] = Boolean(disabled));

  return [["page-item", classNames], rest];
}

const Item: PaginationItemType = forwardRef<HTMLElement, PaginationItemProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "li",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Item;
