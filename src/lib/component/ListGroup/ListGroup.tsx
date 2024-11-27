import { forwardRef } from "react";
import { ListGroupProps, ListGroupType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: ListGroupProps
): [ClassNameFuncResult, RemainingProps] {
  let {
    flush,
    numbered,
    horizontal,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  classNames["list-group-flush"] = !!flush;
  classNames["list-group-numbered"] = !!numbered;
  classNames["list-group-horizontal"] = !!horizontal;

  return [["list-group", classNames], rest];
}
const ListGroup: ListGroupType = forwardRef<HTMLElement, ListGroupProps>(
  (props, ref) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "ul",
      {
        ref,
        className,
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default ListGroup;
