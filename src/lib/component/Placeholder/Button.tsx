import classNames from "classnames";
import { PlaceholderButtonType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import ButtonComp from "../Button";

const Button: PlaceholderButtonType = (props) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  as = as || ButtonComp;
  className = classNames("placeholder", "disabled", className);

  return createElement(
    as,
    { className, css, style, ...remainedProps },
    children
  );
};

export default Button;
