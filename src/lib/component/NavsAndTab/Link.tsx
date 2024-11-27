import { forwardRef } from "react";
import { NavLinkProps, NavLinkType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: NavLinkProps
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

const Link: NavLinkType = forwardRef<HTMLElement, NavLinkProps>(
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
