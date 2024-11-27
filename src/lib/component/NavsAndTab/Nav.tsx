import { forwardRef } from "react";
import { NavProps, NavType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: NavProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    vertical,
    tabs,
    pills,
    underline,
    fill,
    justified,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  tabs !== undefined && (classNames["nav-tabs"] = true);
  pills !== undefined && (classNames["nav-pills"] = true);
  underline !== undefined && (classNames["nav-underline"] = true);
  fill !== undefined && (classNames["nav-fill"] = true);
  justified !== undefined && (classNames["nav-justified"] = true);

  return [["nav", classNames], rest];
}

const Nav: NavType = forwardRef<HTMLElement, NavProps>((props, ref: any) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  return createElement(
    as || "nav",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Nav;
