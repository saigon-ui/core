import classNames from "classnames";
import { forwardRef } from "react";
import { ModalHeaderProps, ModalHeaderType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Header: ModalHeaderType = forwardRef<HTMLElement, ModalHeaderProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "div",
      {
        ref,
        className: classNames("modal-header", className),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Header;
