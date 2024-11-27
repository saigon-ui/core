import { forwardRef } from "react";
import { SelectOptionProps, SelectOptionType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Option: SelectOptionType = forwardRef<
  HTMLOptionElement,
  SelectOptionProps
>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return createElement(
    as || "option",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Option;
