/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { PlaceholderSpanProps, PlaceholderSpanType } from ".";
import {
  createElement,
  DestructorFunc,
  usePropsDestructor,
  ThemeColors,
} from "../../base";
import { ThemeContext } from "../../base/context";

const PropsDestructor: DestructorFunc = <T extends PlaceholderSpanProps>(
  next: T,
  ctx: ThemeContext
) => {
  const {
    col,
    offset,
    size,
    variant,

    // The rest
    ...rest
  } = next;

  const template = [] as string[];
  const className = {} as any;
  const { cssVarPrefix } = ctx.theme;

  if (col !== undefined) {
    const b = typeof col === "object" ? col : { xs: col };

    // xs
    b.xs !== undefined &&
      (typeof b.xs == "number"
        ? (className[`col-${b.xs}`] = true)
        : (className["col-auto"] = true));

    // sm
    b.sm !== undefined &&
      (typeof b.sm == "number"
        ? (className[`col-sm-${b.sm}`] = true)
        : (className["col-sm-auto"] = true));

    // md
    b.md !== undefined &&
      (typeof b.md == "number"
        ? (className[`col-md-${b.md}`] = true)
        : (className["col-md-auto"] = true));

    // lg
    b.md !== undefined &&
      (typeof b.md == "number"
        ? (className[`col-lg-${b.lg}`] = true)
        : (className["col-lg-auto"] = true));

    // xl
    b.xl !== undefined &&
      (typeof b.xl == "number"
        ? (className[`col-xl-${b.xl}`] = true)
        : (className["col-xl-auto"] = true));

    // xxl
    b.xxl !== undefined &&
      (typeof b.xxl == "number"
        ? (className[`col-xxl-${b.xxl}`] = true)
        : (className["col-xxl-auto"] = true));
  }

  offset !== undefined && (className[`offset-${offset}`] = true);
  size !== undefined && (className[`placeholder-${size}`] = true);
  if (variant !== undefined && ThemeColors.indexOf(variant) > -1) {
    template.push(`--${cssVarPrefix}bg-opacity: 1 !important`);
    className[`bg-${variant}`] = true;
  }

  return [
    {
      css: cssFunc(template.join("\n")),
      className: classNames("placeholder", className),
    },
    rest,
  ];
};

const Span: PlaceholderSpanType = (props) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, undefined, PropsDestructor);

  return createElement(
    as || "span",
    { className, css, style, ...remainedProps },
    children
  );
};

export default Span;
