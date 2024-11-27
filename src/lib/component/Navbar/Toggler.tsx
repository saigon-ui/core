import classNames from "classnames";
import { forwardRef, useContext, useMemo } from "react";
import { NavbarTogglerProps, NavbarTogglerType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { NavbarContext } from "./Context";

const Toggler: NavbarTogglerType = forwardRef<HTMLElement, NavbarTogglerProps>(
  (props, ref: any) => {
    const ctx = useContext(NavbarContext);
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["navbar-toggler", next]);

    //  'collapsed'
    const clz = useMemo(() => {
      const obj = {
        collapsed: !ctx.show,
      } as any;

      return classNames("navbar-toggler", obj, className);
    }, [className, ctx.show]);

    return createElement(
      as || "div",
      { ref, className: clz, css, style, ...remainedProps },
      children
    );
  }
);

export default Toggler;
