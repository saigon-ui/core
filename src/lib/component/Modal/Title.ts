import classNames from "classnames";
import { forwardRef } from "react";
import { ModalTitleProps, ModalTitleType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Title: ModalTitleType = forwardRef<HTMLElement, ModalTitleProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "h5",
      {
        ref,
        className: classNames("modal-title", className),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Title;
