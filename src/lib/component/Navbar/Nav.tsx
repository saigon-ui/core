import classNames from "classnames";
import { forwardRef, useContext } from "react";
import { NavbarNavProps, NavbarNavType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { NavbarContext } from "./Context";

const Nav: NavbarNavType = forwardRef<HTMLElement, NavbarNavProps>(
  (props, ref: any) => {
    const ctx = useContext(NavbarContext);
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["navbar-nav", next]);
    className = classNames({ "navbar-nav-scroll": ctx.scroll }, className);

    return createElement(
      as || "div",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Nav;
