import classNames from "classnames";
import { forwardRef } from "react";
import { AlertLinkType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Link: AlertLinkType = forwardRef((props, ref) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  className = classNames("alert-link", className);

  return createElement(
    as || "a",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Link;
