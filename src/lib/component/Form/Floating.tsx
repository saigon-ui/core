import { forwardRef } from "react";
import { FormFloatingProps, FormFloatingType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Floating: FormFloatingType = forwardRef<HTMLElement, FormFloatingProps>(
  (props, ref: any) => {
    const {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, (next) => ["form-floating", next]);

    let { label: title, placeholder, ...remainedProps } = rest;

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      <>
        {children}
        {title && <label>{title}</label>}
      </>
    );
  }
);

export default Floating;
