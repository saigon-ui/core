import { forwardRef } from "react";
import { InputGroupTextProps, InputGroupTextType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Text: InputGroupTextType = forwardRef<HTMLElement, InputGroupTextProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["input-group-text", next]);

    return createElement(
      as || "span",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Text;
