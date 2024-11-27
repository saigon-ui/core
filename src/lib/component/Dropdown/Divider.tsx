import { forwardRef } from "react";
import { DropdownDividerProps, DropdownDividerType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Divider: DropdownDividerType = forwardRef<
  HTMLElement,
  DropdownDividerProps
>((props, ref) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return (
    <li>
      {createElement(
        as || "hr",
        {
          ref,
          className,
          css,
          style,
          ...remainedProps,
        },
        children
      )}
    </li>
  );
});

export default Divider;
