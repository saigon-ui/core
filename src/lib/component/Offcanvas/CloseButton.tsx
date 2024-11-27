import { forwardRef, useContext } from "react";
import { OffcanvasCloseButtonProps, OffcanvasCloseButtonType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import CloseButtonComp from "../CloseButton";
import { OffcanvasContext } from "./Context";

const CloseButton: OffcanvasCloseButtonType = forwardRef<
  HTMLElement,
  OffcanvasCloseButtonProps
>((props, ref: any) => {
  const ctx = useContext(OffcanvasContext);
  const {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  let { onClick: userOnClick, ...remainedProps } = rest;
  const onClick = (evt: any) => {
    ctx.setShow(false);
    userOnClick && userOnClick(evt);
  };

  return createElement(
    as || CloseButtonComp,
    { ref, className, css, style, onClick, ...remainedProps },
    children
  );
});

export default CloseButton;
