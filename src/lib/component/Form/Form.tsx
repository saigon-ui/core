import { forwardRef } from "react";
import { FormProps, FormType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Form: FormType = forwardRef<HTMLFormElement, FormProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "form",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Form;
