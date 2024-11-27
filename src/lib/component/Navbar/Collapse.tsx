import classNames from "classnames";
import { forwardRef, useContext, useMemo } from "react";
import { NavbarCollapseProps, NavbarCollapseType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { NavbarContext } from "./Context";

const Collapse: NavbarCollapseType = forwardRef<
  HTMLElement,
  NavbarCollapseProps
>((props, ref: any) => {
  const ctx = useContext(NavbarContext);
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  const clz = useMemo(() => {
    const obj = {} as any;
    if (ctx.collapsing) obj["collapsing"] = true;
    else if (ctx.show) {
      obj["collapse"] = true;
      obj["show"] = true;
    }

    return classNames("navbar-collapse", obj, className);
  }, [className, ctx.show, ctx.collapsing]);

  return createElement(
    as || "div",
    { ref, className: clz, css, style, ...remainedProps },
    children
  );
});

export default Collapse;
