import { useContext } from "react";
import { PopoverToggleProps, PopoverToggleType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import Button from "../Button";
import PopoverContext from "./Context";

const Toggle: PopoverToggleType = (props: PopoverToggleProps) => {
  const ctx = useContext(PopoverContext);
  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  // user's event callback
  let {
    onClick: userClick,
    onMouseDown: userMouseDown,
    onPointerDown: userPointerDown,
    onPointerMove: userPointerMove,
    onPointerEnter: userPointerEnter,
    ...remainedProps
  } = rest;

  // destruct to do event bridging if needed
  let {
    onClick: floatUIClick,
    onMouseDown: floatUIMouseDown,
    onPointerDown: floatUIPointerDown,
    onMouseMove: floatUIMouseMove,
    onPointerEnter: floatUIPointerEnter,
    ...floatUIProps
  } = ctx.getReferenceProps();

  // default props for Button
  as = as || Button;
  if (as.displayName === Button.displayName) {
    remainedProps["variant"] = remainedProps["variant"] || "primary";
  }

  // bridging the input events
  const onClick = (evt: any) => {
    // prevent toggle off if autoDismiss is false
    if (floatUIClick && (ctx.autoDismiss || !ctx.isOpen)) {
      floatUIClick(evt);
    }

    userClick && userClick(evt);
  };

  const onMouseDown = (evt: any) => {
    if (floatUIMouseDown && (ctx.autoDismiss || !ctx.isOpen)) {
      floatUIMouseDown(evt);
    }

    userMouseDown && userMouseDown(evt);
  };

  const onPointerDown = (evt: any) => {
    if (floatUIPointerDown && (ctx.autoDismiss || !ctx.isOpen)) {
      floatUIPointerDown(evt);
    }

    userPointerDown && userPointerDown(evt);
  };

  const onMouseMove = (evt: any) => {
    if (floatUIMouseMove && (ctx.autoDismiss || !ctx.isOpen)) {
      floatUIMouseMove(evt);
    }

    userPointerMove && userPointerMove(evt);
  };

  const onPointerEnter = (evt: any) => {
    if (floatUIPointerEnter && (ctx.autoDismiss || !ctx.isOpen)) {
      floatUIPointerEnter(evt);
    }

    userPointerEnter && userPointerEnter(evt);
  };

  return createElement(
    as,
    {
      ref: ctx.refs.setReference,
      className,
      css,
      style,
      onClick,
      onMouseDown,
      onPointerDown,
      onMouseMove,
      onPointerEnter,
      ...remainedProps,
      ...floatUIProps,
    },
    children
  );
};

export default Toggle;
