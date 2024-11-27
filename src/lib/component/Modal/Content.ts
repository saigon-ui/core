import classNames from "classnames";
import { forwardRef } from "react";
import { ModalContentProps, ModalContentType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Content: ModalContentType = forwardRef<HTMLElement, ModalContentProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "div",
      {
        ref,
        className: classNames("modal-content", className),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Content;
