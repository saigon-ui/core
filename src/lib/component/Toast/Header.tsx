import classNames from "classnames";
import { forwardRef } from "react";
import { ToastHeaderProps, ToastHeaderType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Header: ToastHeaderType = forwardRef<HTMLElement, ToastHeaderProps>(
  (props, ref: any) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    className = classNames("toast-header", className);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Header;
