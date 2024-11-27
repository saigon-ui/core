import { forwardRef } from "react";
import { TypographyProps, TypographyType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { TypographyProp } from "../../saigon.types";

function PropsDestructor(
  next: TypographyProp
): [ClassNameFuncResult, RemainingProps] {
  const {
    textLevel,
    textLead,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  textLevel !== undefined && (classNames[`display-${textLevel}`] = true);
  textLead && (classNames[`lead`] = true);

  return [classNames, rest];
}

const Typography: TypographyType = forwardRef<HTMLElement, TypographyProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "p",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Typography;
