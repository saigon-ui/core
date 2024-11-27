import { forwardRef } from "react";
import { OffcanvasTitleProps, OffcanvasTitleType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Title: OffcanvasTitleType = forwardRef<HTMLElement, OffcanvasTitleProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["offcanvas-title", next]);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Title;
