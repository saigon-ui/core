import classNames from "classnames";
import { forwardRef } from "react";
import { ToastBodyProps, ToastBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Toast: ToastBodyType = forwardRef<HTMLElement, ToastBodyProps>(
  (props, ref: any) => {
    let {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props);

    className = classNames("toast-body", className);
    const { closeBtn, ...remainedProps } = rest;

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Toast;
