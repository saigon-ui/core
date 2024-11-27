import { forwardRef } from "react";
import { TableTBodyProps, TableTBodyType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: TableTBodyProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    divider,
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
  divider !== undefined && (classNames["table-group-divider"] = divider);

  return [["", classNames], rest];
}

const TBody: TableTBodyType = forwardRef<HTMLElement, TableTBodyProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "tbody",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default TBody;
