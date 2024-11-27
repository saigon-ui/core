import classNames from "classnames";
import { forwardRef } from "react";
import { PopoverBodyProps, PopoverBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Div: PopoverBodyType = forwardRef<HTMLElement, PopoverBodyProps>(
  (props, ref: any) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props);

    className = classNames("popover-body");

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Div;
