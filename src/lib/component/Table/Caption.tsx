import { forwardRef } from "react";
import { TableCaptionProps, TableCaptionType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Caption: TableCaptionType = forwardRef<HTMLElement, TableCaptionProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "caption",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Caption;
