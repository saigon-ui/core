/* eslint-disable prefer-const */
import { css as cssFunc, SerializedStyles } from "@emotion/react";
import { jsx } from "@emotion/react";
import classNames from "classnames";
import { CSSProperties, ReactNode, useContext, useMemo } from "react";
import { destructBackgroundProps } from "./destructBackgroundProps";
import { destructBorderProps } from "./destructBorderProps";
import { destructFlexProps } from "./destructFlexProps";
import { destructLayoutProps } from "./destructLayoutProps";
import { destructOtherProps } from "./destructOtherProps";
import { destructPositionProps } from "./destructPositionProps";
import { destructSpacingProps } from "./destructSpacingProps";
import { destructTextProps } from "./destructTextProps";
import {
  SaigonComponent,
  ThemeColor,
  AnimationType,
  PlacementType,
} from "../saigon.types";
import { SaigonUIContext, ThemeContext } from "./context";
import { FallbackProps, useMediaQuery } from "./theme";

/*
function shallowKeyOf(obj: any): string {
  if (typeof obj == "object") {
    return Object.entries(obj)
      .map(([k, v]) => k + ":" + v)
      .join(";");
  }

  return obj;
}
*/

export const ThemeColors: ThemeColor[] = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
];

export const BackgroundColors: (ThemeColor | string)[] = [
  ...ThemeColors,
  "black",
  "white",
  "body",
  "transparent",
  "body-secondary",
  "body-tertiary",
];

export const TextColors: (ThemeColor | string)[] = [
  ...ThemeColors,
  "black",
  "white",
  "body",
  "muted",
  "black-50",
  "white-50",
  "body-secondary",
  "body-tertiary",
  "body-emphasis",
];

export const Animations: AnimationType[] = [
  "fade",
  "clip",
  "blind",
  "bounce",
  "drop",
  "fold",
  "puff",
  "scale",
  "shake",
  "slide",
  "shift",
  "pulsate",
  "rotate",
];

export const Placements: PlacementType[] = [
  "top-middle",
  "top-start",
  "top-end",
  "right-middle",
  "right-start",
  "right-end",
  "bottom-middle",
  "bottom-start",
  "bottom-end",
  "left-middle",
  "left-start",
  "left-end",
];

const Global = {
  count: 0,
};

export function NextID(): string {
  Global.count += 1;
  return `_sg.${Global.count}_`;
}

export function createElement(
  as: any,
  props: any,
  children?: any
): React.DetailedReactHTMLElement<any, any> {
  // clean up undefined css
  if (!props.css) delete props.css;
  return jsx(as, props, children);
}

export type DestructorResult = {
  as?: any | SaigonComponent<any>;
  className?: string;
  css?: SerializedStyles;
  style?: CSSProperties;
  children?: ReactNode;
  remainedProps: object | any;
};
export type ClassNameFuncResult = string | Array<any> | object;
export type RemainingProps = object;

export type DestructorFunc = (
  val: object,
  ctx: ThemeContext,
  ...params: any
) => [
  {
    css?: SerializedStyles;
    className?: string;
  },
  RemainingProps
];

export type ClassNameFunc = (
  val: object,
  as?: string
) => [ClassNameFuncResult, RemainingProps];

export function usePropsDestructor(
  props: any,
  classNameFunc?: ClassNameFunc,
  descFunc?: DestructorFunc
): DestructorResult {
  const ctx = useContext(SaigonUIContext);
  const responsive = useMediaQuery();

  // destructing the props
  let {
    as,
    className,
    css,
    css_xs,
    css_sm,
    css_md,
    css_lg,
    css_xl,
    css_xxl,
    style,
    children,
    ...remainedProps
  } = props;

  ({ className, css, remainedProps } = useMemo<DestructorResult>(() => {
    const serializedStyles: any[] = [];

    // style component destructor
    const destructors: DestructorFunc[] = [
      destructSpacingProps,
      destructPositionProps,
      destructLayoutProps,
      destructBackgroundProps,
      destructBorderProps,
      destructTextProps,
      destructFlexProps,
      destructOtherProps,
    ];
    if (descFunc) destructors.push(descFunc);

    //
    for (const fn of destructors) {
      const [serialized, remained] = fn(remainedProps, ctx, responsive);
      remainedProps = remained;

      // serialized style
      serialized.css?.styles && serializedStyles.push(serialized.css);

      // class style
      serialized.className &&
        (className = className?.trim()
          ? className + " " + serialized.className
          : serialized.className);
    }

    // destructing className prop
    if (classNameFunc) {
      const [nameObj, remained] = classNameFunc(remainedProps, as);
      remainedProps = remained;

      if (Array.isArray(nameObj)) {
        className = classNames(className, ...nameObj);
      } else {
        className = classNames(className, nameObj);
      }

      // @emotion does't recognize blank className, but can understand undefined, fix it
      if (className.length == 0) className = undefined;
    }

    // final serialized styles object
    if (!css && !serializedStyles.length) css = undefined;
    else {
      css = cssFunc([responsive.getResponsive(css), serializedStyles]);
    }

    return { className, css, remainedProps };
  }, [
    className,
    css,
    remainedProps,
    ctx,
    responsive,
    classNameFunc,
    descFunc,
  ]));

  // responsive style
  css = useMemo(() => {
    let s;
    if (responsive.media.xs) s = css_xs;
    else if (responsive.media.sm) s = FallbackProps(css_sm, css_xs);
    else if (responsive.media.md) s = FallbackProps(css_md, css_sm, css_xs);
    else if (responsive.media.lg)
      s = FallbackProps(css_lg, css_md, css_sm, css_xs);
    else if (responsive.media.xl)
      s = FallbackProps(css_xl, css_lg, css_md, css_sm, css_xs);
    else s = FallbackProps(css_xxl, css_xl, css_lg, css_md, css_sm, css_xs);
    if (s) css = cssFunc([s, css]);

    return css;
  }, [css, css_xs, css_sm, css_md, css_lg, css_xl, css_xxl]);

  return { as, className, css, style, children, remainedProps };
}
