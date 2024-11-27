import { forwardRef } from "react";
import { TableTFootProps, TableTFootType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: TableTFootProps
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

const TFoot: TableTFootType = forwardRef<HTMLElement, TableTFootProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "tfoot",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default TFoot;
