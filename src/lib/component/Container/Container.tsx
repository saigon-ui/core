import { forwardRef } from "react";
import { ContainerProps, ContainerType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: ContainerProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    breakpoint,
    fluid,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  breakpoint
    ? (classNames[`container-${breakpoint}`] = true)
    : (classNames[`container`] = true);

  fluid !== undefined && (classNames[`container-fluid`] = true);

  return [classNames, rest];
}

const Container: ContainerType = forwardRef<HTMLElement, ContainerProps>(
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

export default Container;
