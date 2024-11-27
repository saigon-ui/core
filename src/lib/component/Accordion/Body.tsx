import classNames from "classnames";
import { forwardRef } from "react";
import { AccordionBodyType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Body: AccordionBodyType = forwardRef((props, ref) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  className = classNames("accordion-body", className);

  return createElement(
    as || "div",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Body;
