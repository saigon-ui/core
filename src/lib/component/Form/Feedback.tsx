import { forwardRef } from "react";
import { FormFeedbackProps, FormFeedbackType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: FormFeedbackProps
): [ClassNameFuncResult, RemainingProps] {
  let {
    isValid,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  if (isValid !== undefined) {
    classNames["valid-feedback"] = isValid;
    classNames["invalid-feedback"] = !isValid;
  } else {
    classNames["d-none"] = true;
  }

  return [["", classNames], rest];
}

const Feedback: FormFeedbackType = forwardRef<HTMLElement, FormFeedbackProps>(
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

export default Feedback;
