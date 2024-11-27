import { forwardRef } from "react";
import { CloseButtonProps, CloseButtonType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: CloseButtonProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    disabled,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  disabled !== undefined && (classNames["disabled"] = Boolean(disabled));

  return [["btn-close", classNames], rest];
}

const CloseButton: CloseButtonType = forwardRef<HTMLElement, CloseButtonProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    remainedProps["aria-label"] = "Close";
    return createElement(
      as || "button",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default CloseButton;
