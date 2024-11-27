import classNames from "classnames";
import { forwardRef } from "react";
import { SwitchProps, SwitchType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: SwitchProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    inline,
    reverse,

    // The rest
    ...rest
  } = next;

  const classNames = {
    "form-switch": true,
  } as any;

  inline !== undefined && (classNames["form-check-inline"] = inline);
  reverse !== undefined && (classNames["form-check-reverse"] = reverse);

  return [["form-check", classNames], rest];
}

const Switch: SwitchType = forwardRef<HTMLElement, SwitchProps>(
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
          role="switch"
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

export default Switch;
