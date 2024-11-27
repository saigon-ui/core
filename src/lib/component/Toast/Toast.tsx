import classNames from "classnames";
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ToastProps, ToastRef, ToastType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import Animation from "../Animation";
import { ToastContainerContext, ToastContext } from "./Context";

const Toast: ToastType = forwardRef<ToastRef, ToastProps>((props, ref: any) => {
  const containerCtx = useContext(ToastContainerContext);

  const domRef = useRef<any>(null);
  const [isClosed, setClosed] = useState(false);
  const [isUnmount, setUnmount] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      domRef,
      closed: () => isClosed,
      unmounted: () => isUnmount,
      close: () => !isUnmount && !isClosed && setClosed(true),
      translate: (val: string) => {
        if (!domRef.current) return;
        domRef.current.style.translate = val;
      },
    }),
    [isClosed, isUnmount]
  );

  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  let { animation, autoHide, delay, btnCloseWhite, ...remainedProps } = rest;

  autoHide = typeof autoHide !== "undefined" ? autoHide : true;
  delay = typeof delay !== "undefined" ? Math.max(delay, 200) : 3600;

  animation = typeof animation === "undefined" ? "shift" : animation;
  const hasAnimation = Boolean(animation && animation !== "none");

  if (hasAnimation) style = { ...style, display: "block" }; // display:block is need for animation

  // auto dismiss
  useEffect(() => {
    let id: any = 0;
    if (autoHide) {
      id = setTimeout(() => {
        setClosed(true);
      }, delay);
    }
    return () => clearTimeout(id);
  }, [autoHide, delay]);

  className = classNames("toast", className);
  remainedProps["role"] = "alert";
  remainedProps["aria-live"] = "assertive";
  remainedProps["aria-atomic"] = "true";

  useEffect(() => {
    isUnmount && containerCtx.unmountToast();
  }, [isUnmount]);

  useEffect(() => {
    isClosed && hasAnimation && containerCtx.closingToast();
  }, [isClosed, hasAnimation]);

  const closeFunc = useCallback(() => {
    setClosed(true);

    // unmount immediately when no animation applying
    if (!hasAnimation) setUnmount(true);
  }, [hasAnimation]);

  return isUnmount ? undefined : (
    <ToastContext.Provider value={{ btnCloseWhite, closeFunc }}>
      {hasAnimation ? (
        <Animation
          open={!isClosed}
          animation={animation}
          onExit={() => {
            setUnmount(true);
          }}
          component={(p: any) =>
            createElement(
              as || "div",
              {
                ref: domRef,
                className: classNames(className, p.className),
                css,
                style,
                ...remainedProps,
              },
              children
            )
          }
        />
      ) : (
        createElement(
          as || "div",
          {
            ref: domRef,
            className: classNames(className, { show: !isClosed }),
            css,
            style,
            ...remainedProps,
          },
          children
        )
      )}
    </ToastContext.Provider>
  );
});

export default Toast;
