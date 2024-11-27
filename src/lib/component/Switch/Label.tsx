import { forwardRef } from "react";
import { SwitchLabelProps, SwitchLabelType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Label: SwitchLabelType = forwardRef<HTMLElement, SwitchLabelProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["form-check-label", next]);

    return createElement(
      as || "label",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Label;
