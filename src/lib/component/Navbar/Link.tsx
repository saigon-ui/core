import { forwardRef } from "react";
import { NavbarLinkProps, NavbarLinkType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: NavbarLinkProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    active,
    disabled,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  if (active !== undefined) {
    classNames["active"] = Boolean(active);
    rest["aria-current"] = "page";
  }

  if (disabled !== undefined) {
    classNames["disabled"] = Boolean(disabled);
    rest["aria-disabled"] = "true";
  }

  return [["nav-link", classNames], rest];
}

const Link: NavbarLinkType = forwardRef<HTMLElement, NavbarLinkProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "a",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Link;
