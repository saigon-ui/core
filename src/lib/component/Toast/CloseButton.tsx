import classNames from "classnames";
import { forwardRef, useContext } from "react";
import { ToastCloseButtonProps, ToastCloseButtonType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { ToastContext } from "./Context";

const CloseButton: ToastCloseButtonType = forwardRef<
  HTMLElement,
  ToastCloseButtonProps
>((props, ref: any) => {
  const ctx = useContext(ToastContext);
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  // use regular close-button
  as = as || "button";
  if (as === "button") {
    const clz: any = {
      "btn-close": true,
      "me-2": true,
      "m-auto": true,
    };
    if (ctx.btnCloseWhite) clz["btn-close-white"] = true;
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
