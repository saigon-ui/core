import { forwardRef } from "react";
import { FormTextProps, FormTextType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Text: FormTextType = forwardRef<HTMLElement, FormTextProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["form-text", next]);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Text;
