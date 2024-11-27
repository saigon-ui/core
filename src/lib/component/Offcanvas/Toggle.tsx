import { forwardRef, useContext } from "react";
import { OffcanvasToggleProps, OffcanvasToggleType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import Button from "../Button";
import { OffcanvasContext } from "./Context";

const Toggle: OffcanvasToggleType = forwardRef<
  HTMLElement,
  OffcanvasToggleProps
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
    ctx.setShow(!ctx.state.isShow);
    userOnClick && userOnClick(evt);
  };

  return createElement(
    as || Button,
    { ref, className, css, style, onClick, ...remainedProps },
    children
  );
});

export default Toggle;
