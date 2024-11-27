import { PlaceholderCircleType } from ".";
import { createElement, usePropsDestructor } from "../../base";

const Circle: PlaceholderCircleType = (props) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, (next) => ["placeholder", next]);

  return createElement(
    as || "div",
    { className, css, style, ...remainedProps },
    children
  );
};

export default Circle;
