import { forwardRef } from "react";
import { FormColLabelProps, FormColLabelType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: FormColLabelProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  typeof size === "string" && (classNames[`col-form-label-${size}`] = true);

  return [["col-form-label", classNames], rest];
}

const ColLabel: FormColLabelType = forwardRef<HTMLElement, FormColLabelProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "label",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default ColLabel;
