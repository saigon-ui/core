import { forwardRef } from "react";
import {
  TypographyAbbrProps,
  TypographyAbbrType,
  TypographyDelType,
  TypographyEmType,
  TypographyInsType,
  TypographyMarkType,
  TypographySmallType,
  TypographySpanProps,
  TypographySpanType,
  TypographyStripType,
  TypographyStrongType,
  TypographyUnderlineType,
} from ".";
import { createElement, usePropsDestructor } from "../../base";

const SpanFC: TypographySpanType = forwardRef<HTMLElement, TypographySpanProps>(
  (props, ref: any) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "span",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export const AbbrFC: TypographyAbbrType = forwardRef<
  HTMLElement,
  TypographyAbbrProps
>((props, ref: any) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    as || "abbr",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export const MarkFC: TypographyMarkType = ({ children }: any) => {
  return <mark>{children}</mark>;
};

export const DelFC: TypographyDelType = ({ children }: any) => {
  return <del>{children}</del>;
};

export const StripFC: TypographyStripType = ({ children }: any) => {
  return <s>{children}</s>;
};

export const InsFC: TypographyInsType = ({ children }: any) => {
  return <ins>{children}</ins>;
};

export const UnderlineFC: TypographyUnderlineType = ({ children }: any) => {
  return <u>{children}</u>;
};

export const SmallFC: TypographySmallType = ({ children }: any) => {
  return <small>{children}</small>;
};

export const StrongFC: TypographyStrongType = ({ children }: any) => {
  return <strong>{children}</strong>;
};

export const EmFC: TypographyEmType = ({ children }: any) => {
  return <em>{children}</em>;
};

export default SpanFC;
