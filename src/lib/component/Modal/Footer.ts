import classNames from "classnames";
import { forwardRef } from "react";
import { ModalFooterProps, ModalFooterType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Footer: ModalFooterType = forwardRef<HTMLElement, ModalFooterProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "div",
      {
        ref,
        className: classNames("modal-footer", className),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Footer;
