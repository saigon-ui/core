import { forwardRef } from "react";
import { FormLabelProps, FormLabelType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Label: FormLabelType = forwardRef<HTMLElement, FormLabelProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["form-label", next]);

    return createElement(
      as || "label",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Label;
