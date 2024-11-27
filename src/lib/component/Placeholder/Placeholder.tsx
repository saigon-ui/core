import { forwardRef } from "react";
import { PlaceholderProps, PlaceholderType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: PlaceholderProps
): [ClassNameFuncResult, RemainingProps] {
  let {
    animation,

    // The rest
    ...rest
  } = next;

  animation = animation || "glow";

  return [`placeholder-${animation}`, rest];
}

const Placeholder: PlaceholderType = forwardRef<HTMLElement, PlaceholderProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Placeholder;
