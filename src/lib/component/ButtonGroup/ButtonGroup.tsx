import { forwardRef } from "react";
import { ButtonGroupProps, ButtonGroupType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: ButtonGroupProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  size && (classNames[`btn-group-${size}`] = true);

  return [["btn-group", classNames], rest];
}

const ButtonGroup: ButtonGroupType = forwardRef<HTMLElement, ButtonGroupProps>(
  (props, ref: any) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    remainedProps["role"] = "group";

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default ButtonGroup;
