import { forwardRef } from "react";
import { FormControlProps, FormControlType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: FormControlProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,
    isValid,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  typeof size === "string" && (classNames[`col-form-label-${size}`] = true);
  if (isValid !== undefined) {
    classNames["is-valid"] = isValid;
    classNames["is-invalid"] = !isValid;
  }

  return [["form-control", classNames], rest];
}

const Control: FormControlType = forwardRef<HTMLInputElement, FormControlProps>(
  (props, ref) => {
    const {
      as,
      className,
      css,
      style,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);

    // Bootstrap CSS required placeholder value for the floating label to work
    let { placeholder, required, ...remainedProps } = rest;
    placeholder = typeof placeholder === "undefined" ? "" : placeholder;

    return createElement(
      as || "input",
      {
        ref,
        className,
        css,
        style,
        placeholder,
        required,
        ...remainedProps,
      },
      undefined
    );
  }
);

export default Control;
