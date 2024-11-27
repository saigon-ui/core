import { forwardRef } from "react";
import { TableProps, TableType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: TableProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    variant,
    theme,
    size,
    striped,
    bordered,
    borderless,
    active,
    hover,
    caption,
    responsive,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  typeof variant === "string" &&
    ThemeColors.indexOf(variant as any) > -1 &&
    (classNames[`table-${variant}`] = true);

  (theme === "light" || theme === "dark") &&
    (classNames[`table-${theme}`] = true);

  striped !== undefined && (classNames["table-striped"] = striped);
  bordered !== undefined && (classNames["table-bordered"] = bordered);
  borderless !== undefined && (classNames["table-borderless"] = borderless);
  active !== undefined && (classNames["table-active"] = active);
  hover !== undefined && (classNames["table-hover"] = hover);

  if (typeof responsive === "string") {
    classNames[`table-responsive-${responsive}`] = true;
  } else if (responsive === true) {
    classNames[`table-responsive`] = true;
  }

  return [["table", classNames], rest];
}

const Table: TableType = forwardRef<HTMLElement, TableProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "table",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Table;
