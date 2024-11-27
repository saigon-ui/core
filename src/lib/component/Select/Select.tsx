import { forwardRef } from "react";
import { SelectProps, SelectType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: SelectProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  typeof size === "string" && (classNames[`form-select-${size}`] = true);

  return [["form-select", classNames], rest];
}

const Select: SelectType = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref: any) => {
    const {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);

    const { htmlSize, size, ...remainedProps } = rest;

    return createElement(
      as || "select",
      {
        ref,
        className,
        css,
        size: htmlSize,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Select;
