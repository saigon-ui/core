import classNames from "classnames";
import { forwardRef } from "react";
import { AccordionHeaderType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Header: AccordionHeaderType = forwardRef((props, ref) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  className = classNames("accordion-header", className);

  return createElement(
    as || "h2",
    { ref, className, css, style, ...remainedProps },
    children
  );
});
Header.displayName = "Accordion.Header";

export default Header;
