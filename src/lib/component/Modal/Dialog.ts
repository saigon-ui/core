import classNames from "classnames";
import { forwardRef, useContext } from "react";
import { ModalBodyProps, ModalBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { ModalContext } from "./Context";

const Body: ModalBodyType = forwardRef<HTMLElement, ModalBodyProps>(
  (props, ref: any) => {
    const ctx = useContext(ModalContext);
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    const clz = {
      "modal-dialog": true,
      "modal-sm": ctx.size === "sm",
      "modal-lg": ctx.size === "lg",
      "modal-xl": ctx.size === "smxl",
      "modal-fullscreen": ctx.fullscreen === true,
      "modal-fullscreen-sm-down": ctx.fullscreen === "sm-down",
      "modal-fullscreen-md-down": ctx.fullscreen === "md-down",
      "modal-fullscreen-lg-down": ctx.fullscreen === "lg-down",
      "modal-fullscreen-xl-down": ctx.fullscreen === "xl-down",
      "modal-fullscreen-xxl-down": ctx.fullscreen === "xxl-down",
      "modal-dialog-centered": ctx.verticalCentered,
      "modal-dialog-scrollable": ctx.scrollable,
    };
    return createElement(
      as || "div",
      {
        ref,
        className: classNames(clz, className),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Body;
