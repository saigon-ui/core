import classNames from "classnames";
import { forwardRef } from "react";
import { CheckboxProps, CheckboxType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: CheckboxProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    inline,
    reverse,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  inline !== undefined && (classNames["form-check-inline"] = inline);
  reverse !== undefined && (classNames["form-check-reverse"] = reverse);

  return [["form-check", classNames], rest];
}

const Checkbox: CheckboxType = forwardRef<HTMLElement, CheckboxProps>(
  (props, ref: any) => {
    const {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);

    const {
      defaultValue,
      value,
      indeterminate,
      isValid,
      disabled,
      onChange,
      inputRef,
      ...remainedProps
    } = rest;

    const clz = {} as any;
    if (isValid !== undefined) {
      clz["is-valid"] = isValid;
      clz["is-invalid"] = !isValid;
    }

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      <>
        <input
          ref={inputRef}
          className={classNames("form-check-input", clz)}
          type="checkbox"
          defaultChecked={defaultValue}
          checked={value}
          disabled={disabled}
          onChange={(evt) => {
            const checked = evt.target.value;
            onChange && onChange(checked, evt);
          }}
        />
        {children}
      </>
    );
  }
);

export default Checkbox;
