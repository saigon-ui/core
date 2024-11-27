/* eslint-disable @typescript-eslint/no-unused-vars */
import { Interpolation, Theme } from "@emotion/react";
import { OffsetOptions } from "@floating-ui/react";
import * as CSS from "csstype";

export interface ColorValue {
  hex: string;
  rgb: { r: number; g: number; b: number; a: number };
}

export type ThemeOptions = {
  cssVarPrefix: string;
  direction: "ltr" | "rtl";
  colors: {
    white: string;
    gray: {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
    };
    black: string;
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
  };
  variants: {
    primary: ColorValue;
    secondary: ColorValue;
    success: ColorValue;
    info: ColorValue;
    warning: ColorValue;
    danger: ColorValue;
    light: ColorValue;
    dark: ColorValue;
  };
  breakpoints: Breakpoint<string>;
  spacer: {
    base: string;
    spacers: {
      "0": string;
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
    };
  };
};

export type ThemeColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

// A strick to keep Typescript intellisense survival from add string to all props
export type CSSString = string & Record<never, never>;

/**
 * Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.
 * xs: 540px
 * sm: 540px
 * md: 720px
 * lg: 960px
 * xl: 1140px
 * xxl: 1320px
 */
export type Breakpoint<T> = {
  /**
   * Apply property on viewports sized XS (extra small) or wider.
   * @NOTE: xs = 0px
   */
  xs?: T;

  /**
   * Apply property on viewports sized SM (small) or wider.
   * @NOTE: sm =  540px
   */
  sm?: T;

  /**
   * Apply property on viewports sized MD (medium) or wider.
   * @NOTE: md =  720px
   */
  md?: T;

  /**
   * Apply property on viewports sized LG (large) or wider.
   * @NOTE: lg = 960px
   */
  lg?: T;

  /**
   * Apply property on viewports sized XL (extra large)) or wider.
   * @NOTE: xl = 1140px
   */
  xl?: T;

  /**
   * Apply property on viewports sized XXL (extra extra large) or wider.
   * @NOTE: xxl = 1320px
   */
  xxl?: T;
};

export type Responsive<Props> = Props | Breakpoint<Props>;

// Generated code insertion start here
/*__GENERAL_TYPES__*/
// End generated code

//@START_REMOVAL Will be remove by generator, searching for `TranspileTypeCode`
type SpacingProps = Record<never, never>;
type PositionProps = Record<never, never>;
type LayoutProps = Record<never, never>;
type TextProps = Record<never, never>;
type BackgroundProps = Record<never, never>;
type BorderProps = Record<never, never>;
type FlexProps = Record<never, never>;
type OtherProps = Record<never, never>;
//@END_REMOVAL

export type As = React.ElementType;

export type BaseResponsiveProps<T extends As> = {
  as?: T | keyof JSX.IntrinsicElements | React.FunctionComponent<any>;
  css?: Responsive<Interpolation<Theme>>;

  /**
   * Responsive style shortcuts
   */
  css_xs?: Interpolation<Theme>;
  css_sm?: Interpolation<Theme>;
  css_md?: Interpolation<Theme>;
  css_lg?: Interpolation<Theme>;
  css_xl?: Interpolation<Theme>;
  css_xxl?: Interpolation<Theme>;
};

export type SaigonProps<T extends As, E extends HTMLElement> =
  /**
   * @param {HTMLAttributes} HTMLAttributes Standard react HTML Attributes
   * @param {as} As slot, depend on component, some allow `as` with ReactElement
   * @param {css} CSS @emotion/react styles patterns
   * @param {SpacingProps} SpacingProps Saigon UI spacing props
   * @param {TextProps} TextProps Saigon UI spacing props
   * @param {BackgroundProps} BackgroundProps Saigon UI spacing props
   */
  React.HTMLAttributes<E> &
    BaseResponsiveProps<T> &
    SpacingProps &
    PositionProps &
    LayoutProps &
    TextProps &
    BackgroundProps &
    BorderProps &
    FlexProps &
    OtherProps;

export interface SaigonComponent<PropsType> {
  (
    props: React.PropsWithChildren<React.PropsWithoutRef<PropsType>>
  ): React.ReactNode;

  displayName?: string;

  // Support for defaultProps will be removed from function components in a future major release! Since React 17
  // defaultProps?: object;
}

export interface ForwardRefComponent<RefType, PropsType>
  extends React.ForwardRefExoticComponent<
    Omit<PropsType, "ref"> & React.RefAttributes<RefType>
  > {
  displayName?: string;
}

export type PlacementType =
  | "top-middle"
  | "top-start"
  | "top-end"
  | "right-middle"
  | "right-start"
  | "right-end"
  | "bottom-middle"
  | "bottom-start"
  | "bottom-end"
  | "left-middle"
  | "left-start"
  | "left-end";

/*__COMPONENT_TYPES__*/
