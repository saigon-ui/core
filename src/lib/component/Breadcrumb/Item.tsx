import classNames from "classnames";
import { forwardRef } from "react";
import { BreadcrumbItemType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Item: BreadcrumbItemType = forwardRef((props, ref) => {
  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  const { active, ...remainedProps } = rest;
  active && (remainedProps["aria-current"] = "page");

  className = classNames("breadcrumb-item", { active }, className);

  return createElement(
    as || "li",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Item;
