import { forwardRef } from "react";
import { RangeProps, RangeType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Range: RangeType = forwardRef<HTMLInputElement, RangeProps>(
  (props, ref: any) => {
    const {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, (next) => ["form-range", next]);

    let {
      label: title,
      defaultValue,
      value,
      min,
      max,
      step,
      disabled,
      onChange: userOnChange,
      ...remainedProps
    } = rest;

    min = typeof min === "undefined" ? 0 : min;
    max = typeof max === "undefined" ? 100 : max;
    step = typeof step === "undefined" ? 1 : step;
    const onChange = (evt: any) => {
      const val = evt.target.value;
      userOnChange && userOnChange(val, evt);
    };

    return (
      <>
        {title && <label className="form-label">${title}</label>}
        {createElement(
          as || "input",
          {
            ref,
            className,
            css,
            style,
            type: "range",
            defaultValue,
            value,
            min,
            max,
            step,
            onChange,
            disabled,
            ...remainedProps,
          },
          children
        )}
      </>
    );
  }
);

export default Range;
