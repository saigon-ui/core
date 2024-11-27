import { ClassAttributes, forwardRef } from "react";
import { createElement, usePropsDestructor } from "../../base";
import { ForwardRefComponent, SaigonProps } from "../../saigon.types";

type Props = {
  gap?: number;
};

type CardGroupProps = ClassAttributes<HTMLDivElement> &
  SaigonProps<"div", HTMLDivElement> &
  Props;

type CardGroupType = ForwardRefComponent<HTMLDivElement, CardGroupProps>;

const CardGroup: CardGroupType = forwardRef((props, ref) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, (next) => ["card-group", next]);

  return createElement(
    as || "div",
    { ref, className, style, css, ...remainedProps },
    children
  );
});

export default CardGroup;
