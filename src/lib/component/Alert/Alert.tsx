import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { AlertProps, AlertRef, AlertType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  ThemeColors,
  usePropsDestructor,
} from "../../base";
import { GetResponsiveFunction, useResponsiveSize } from "../../base/theme";
import { ThemeColor } from "../../saigon.types";
import Animation from "../Animation/Animation";

function PropsDestructor(
  next: AlertProps,
  getResponsive: GetResponsiveFunction
): [ClassNameFuncResult, RemainingProps] {
  let {
    variant,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  // Alert theme variant
  variant = getResponsive<ThemeColor>(variant || "primary");
  ThemeColors.indexOf(variant) > -1 && (classNames["alert-" + variant] = true);

  // Dismissing
  classNames["alert-dismissible"] = rest.dismissible;

  return [["alert", classNames], rest];
}

const Alert: AlertType = forwardRef<AlertRef, AlertProps>((props, ref) => {
  const rps = useResponsiveSize();

  const {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props, (next) =>
    PropsDestructor(next, rps.getResponsive)
  );

  const { dismissible, animation, onClose, onOpen, ...remainedProps } = rest;

  const domRef = useRef(null);
  const [show, showSet] = useState(true);
  const hasTransition = animation && animation !== "none";

  useImperativeHandle(ref, () => ({
    domRef,
    close: handleDismiss,
    show: handleShow,
  }));

  useEffect(() => {
    if (!hasTransition) onOpen && onOpen();
  }, [hasTransition]);

  const handleDismiss = useCallback(() => {
    showSet(false);

    if (!hasTransition) onClose && onClose();
  }, [hasTransition, onClose]);

  const handleShow = useCallback(() => {
    showSet(true);

    if (!hasTransition) onOpen && onOpen();
  }, [hasTransition, onOpen]);

  return hasTransition ? (
    <Animation
      open={show}
      animation={animation}
      onExit={() => onClose && onClose()}
      onEnter={() => onOpen && onOpen()}
      component={(transitionProps: any) =>
        createElement(
          as || "div",
          {
            ref: domRef,
            className: classNames(className, transitionProps.className),
            css: cssFunc(css, transitionProps.css),
            style,
            ...remainedProps,
          },
          <>
            {children}

            {/* Dismissing */}
            {dismissible && (
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleDismiss}
              ></button>
            )}
          </>
        )
      }
    />
  ) : show ? (
    createElement(
      as || "div",
      { ref: domRef, className, css, style, ...remainedProps },
      <>
        {children}

        {/* Dismissing */}
        {dismissible && (
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleDismiss}
          ></button>
        )}
      </>
    )
  ) : undefined;
});

export default Alert;
