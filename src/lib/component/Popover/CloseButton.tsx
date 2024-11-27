import classNames from "classnames";
import { forwardRef, useContext } from "react";
import { PopoverCloseButtonProps, PopoverCloseButtonType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import PopoverContext from "./Context";

const Div: PopoverCloseButtonType = forwardRef<
  HTMLElement,
  PopoverCloseButtonProps
>((props, ref: any) => {
  const ctx = useContext(PopoverContext);
  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  className = classNames("btn-close");

  let { onClick: userClick, ...remainedProps } = rest;

  const onClick = (evt: any) => {
    ctx.getReferenceProps().onClick(evt);
    userClick && userClick(evt);
  };

  return createElement(
    as || "button",
    { ref, className, css, style, onClick, ...remainedProps },
    children
  );
});

export default Div;
