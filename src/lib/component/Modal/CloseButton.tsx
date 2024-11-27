import classNames from "classnames";
import { forwardRef, useContext } from "react";
import { ModalCloseButtonProps, ModalCloseButtonType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { ModalContext } from "./Context";

const CloseButton: ModalCloseButtonType = forwardRef<
  HTMLElement,
  ModalCloseButtonProps
>((props, ref: any) => {
  const ctx = useContext(ModalContext);
  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  let { btnCloseWhite, ...remainedProps } = rest;

  // use regular close-button
  as = as || "button";
  if (as === "button") {
    const clz: any = {
      "btn-close": true,
      "me-2": true,
      "m-auto": true,
    };
    if (btnCloseWhite) clz["btn-close-white"] = true;
    className = classNames(clz, className);
  }

  let originalClick = remainedProps["onClick"];
  const onClick = (evt: any) => {
    ctx.closeFunc();

    originalClick && originalClick(evt);
  };

  return createElement(
    as,
    { ref, className, css, style, onClick, ...remainedProps },
    children
  );
});

export default CloseButton;
