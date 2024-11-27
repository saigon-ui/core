import { forwardRef } from "react";
import { CardProps, CardType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: CardProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    cardBg,
    cardBorder,
    cardBgTransparent,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  typeof cardBg === "string" &&
    ThemeColors.indexOf(cardBg as any) > -1 &&
    (classNames["text-bg-" + cardBg] = true);

  typeof cardBorder === "string" &&
    ThemeColors.indexOf(cardBorder as any) > -1 &&
    (classNames["text-bg-" + cardBorder] = true);

  classNames["bg-transparent"] = Boolean(cardBgTransparent);

  return [["card", classNames], rest];
}

const Card: CardType = forwardRef((props, ref) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  return createElement(
    as || "div",
    { ref, className, style, css, ...remainedProps },
    children
  );
});

export default Card;
