import { forwardRef } from "react";
import { ListGroupItemProps, ListGroupItemType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: ListGroupItemProps
): [ClassNameFuncResult, RemainingProps] {
  let {
    variant,
    active,
    action,
    disabled,
    flexFill,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  variant !== undefined &&
    ThemeColors.indexOf(variant) > -1 &&
    (classNames[`list-group-item-${variant}`] = true);

  classNames["active"] = !!active;

  classNames["list-group-item-action"] = !!action;

  classNames["disabled"] = !!disabled;

  classNames["flex-fill"] = !!flexFill;

  return [["list-group-item", classNames], rest];
}

const Item: ListGroupItemType = forwardRef<HTMLElement, ListGroupItemProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    // override as='li' with <a> when href was given
    if (remainedProps["href"] && typeof as == "string") as = "a";

    return createElement(
      as || "li",
      {
        ref,
        className,
        css,
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default Item;
