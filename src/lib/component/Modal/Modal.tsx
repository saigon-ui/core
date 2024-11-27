import classNames from "classnames";
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ModalProps, ModalRef, ModalType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import Animation from "../Animation";
import { ModalContainerContext, ModalContext } from "./Context";

const Modal: ModalType = forwardRef<ModalRef, ModalProps>((props, ref) => {
  const containerCtx = useContext(ModalContainerContext);

  const domRef = useRef(null);
  const [isClosed, setClosed] = useState(false);
  const [isUnmount, setUnmount] = useState(false);
  const [isModalStatic, setModalStatic] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      domRef,
      closed: () => isClosed,
      unmounted: () => isUnmount,
      close: () => !isUnmount && !isClosed && setClosed(true),
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

  let {
    staticBackdrop,
    scrollable,
    verticalCentered,
    size,
    fullscreen,
    animation,

    ...remainedProps
  } = rest;

  remainedProps["tabIndex"] = "-1";
  const hasAnimation = animation && animation !== "none";

  const closeFunc = () => {
    setClosed(true);

    // unmount immediately when no animation applying
    if (!hasAnimation) {
      setUnmount(true);
      containerCtx.unmountModal();
    }
  };

  function clickOnMyChild(elm: HTMLElement) {
    let p = elm.parentElement;
    while (p) {
      if (p == domRef.current) return true;
      p = p.parentElement;
    }
    return false;
  }

  const handleClickBackdrop = (evt: any) => {
    if (clickOnMyChild(evt.target)) return;

    if (staticBackdrop) {
      setModalStatic(true);
      setTimeout(() => {
        setModalStatic(false);
      }, 100);
    } else {
      setClosed(true);

      // unmount immediately when no animation applying
      if (!hasAnimation) {
        setUnmount(true);
        containerCtx.unmountModal();
      }
    }
  };

  return isUnmount ? undefined : (
    <ModalContext.Provider
      value={{ closeFunc, verticalCentered, scrollable, size, fullscreen }}
    >
      {hasAnimation ? (
        <>
          <Animation
            open={!isClosed}
            animation={animation}
            onExit={() => {
              setUnmount(true);
              containerCtx.unmountModal();
            }}
            component={(p: any) => (
              <>
                {createElement(
                  as || "div",
                  {
                    ref: domRef,
                    className: classNames("modal", className, p.className, {
                      "modal-static": isModalStatic,
                    }),
                    css,
                    style: {
                      ...style,
                      display: "block",
                      overflowY: isModalStatic ? "hidden" : undefined,
                    }, // display: 'block' to fix working with Fade transition
                    onClick: handleClickBackdrop,
                    ...remainedProps,
                  },
                  children
                )}
              </>
            )}
          />
          <div className="modal-backdrop fade show"></div>
        </>
      ) : (
        <>
          {createElement(
            as || "div",
            {
              ref: domRef,
              className: classNames("modal", className, {
                "modal-static": isModalStatic,
              }),
              css,
              style: {
                ...style,
                display: "block",
                overflowY: isModalStatic ? "hidden" : undefined,
              }, // display: 'block' to fix working with Fade transition
              onClick: handleClickBackdrop,
              ...remainedProps,
            },
            children
          )}
          <div className="modal-backdrop show"></div>
        </>
      )}
    </ModalContext.Provider>
  );
});

export default Modal;
