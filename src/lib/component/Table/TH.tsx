import { forwardRef } from "react";
import { TableTHProps, TableTHType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: TableTHProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    variant,
    theme,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  typeof variant === "string" &&
    ThemeColors.indexOf(variant as any) > -1 &&
    (classNames[`table-${variant}`] = true);

  (theme === "light" || theme === "dark") &&
    (classNames[`table-${theme}`] = true);

  return [["", classNames], rest];
}

const TH: TableTHType = forwardRef<HTMLElement, TableTHProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "th",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default TH;
