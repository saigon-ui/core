import classNames from "classnames";
import { forwardRef } from "react";
import { PopoverTitleProps, PopoverTitleType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Div: PopoverTitleType = forwardRef<HTMLElement, PopoverTitleProps>(
  (props, ref: any) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    return createElement(
      as || "h3",
      {
        ref,
        className: classNames(className, "popover-header"),
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Div;
