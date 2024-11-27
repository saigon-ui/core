import { forwardRef } from "react";
import { PaginationLinkProps, PaginationLinkType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Link: PaginationLinkType = forwardRef<HTMLElement, PaginationLinkProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, (next) => ["page-link", next]);

    return createElement(
      as || "a",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Link;
