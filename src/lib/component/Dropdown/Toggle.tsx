import { useContext } from "react";
import { DropdownToggleProps, DropdownToggleType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";
import DropdownContext from "./Context";

function PropsDestructor(next: any): [ClassNameFuncResult, RemainingProps] {
  let {
    variant,
    split,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  variant !== undefined &&
    ThemeColors.indexOf(variant) > -1 &&
    (classNames["btn-" + variant] = true);

  classNames["dropdown-toggle"] = true;

  classNames["dropdown-toggle-split"] = Boolean(split);

  return [["btn", classNames], rest];
}

const Toggle: DropdownToggleType = (props: DropdownToggleProps) => {
  const ctx = useContext(DropdownContext);
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  as == "a" && (remainedProps["type"] = "button");

  return createElement(
    as || "button",
    {
      ref: ctx.refs.setReference,
      className,
      css,
      style,
      ...remainedProps,
      ...ctx.getReferenceProps(),
    },
    children
  );
};

export default Toggle;
