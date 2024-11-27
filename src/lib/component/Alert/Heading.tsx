import classNames from "classnames";
import { forwardRef } from "react";
import { AlertHeadingType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Heading: AlertHeadingType = forwardRef((props, ref) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  className = classNames("alert-heading", className);

  return createElement(
    as || "h4",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Heading;
