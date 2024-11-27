import { forwardRef } from "react";
import { BadgeProps, BadgeType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: BadgeProps
): [ClassNameFuncResult, RemainingProps] {
  let {
    badgeColor,
    roundedPill,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  badgeColor = badgeColor || "primary";
  ThemeColors.indexOf(badgeColor) > -1 &&
    (classNames["text-bg-" + badgeColor] = true);

  classNames["rounded-pill"] = !!roundedPill;

  return [["badge", classNames], rest];
}

const Badge: BadgeType = forwardRef((props, ref) => {
  const { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  return createElement(
    as || "span",
    { ref, className, css, style, ...remainedProps },
    children
  );
});

export default Badge;
