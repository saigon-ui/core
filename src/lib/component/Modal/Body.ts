import classNames from "classnames";
import { forwardRef } from "react";
import { ModalBodyProps, ModalBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Body: ModalBodyType = forwardRef<HTMLElement, ModalBodyProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "div",
      {
        ref,
        className: classNames("modal-body", className),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Body;
