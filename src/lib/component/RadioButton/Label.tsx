import { forwardRef } from "react";
import { RadioButtonLabelProps, RadioButtonLabelType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Label: RadioButtonLabelType = forwardRef<
  HTMLElement,
  RadioButtonLabelProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, (next) => ["form-check-label", next]);

  return createElement(
    as || "label",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Label;
