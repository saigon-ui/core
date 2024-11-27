import tinycolor from "tinycolor2";
import { ColorValue, ThemeOptions } from "../saigon.types";

export const toColorValue = (val: string): ColorValue => {
  var color = tinycolor(val);
  if (!color.isValid()) {
    throw Error(`Error invalid color value: ${val}`);
  }
  const { r, g, b, a } = color.toRgb();

  return {
    hex: color.toHexString(),
    rgb: { r, g, b, a },
  };
};

export const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const DefaultTheme: ThemeOptions = mergeTheme(
  {
    cssVarPrefix: "sg-",
    direction: "ltr",
    variants: {
      primary: toColorValue("#0d6efd"),
      secondary: toColorValue("#6c757d"),
      success: toColorValue("#198754"),
      info: toColorValue("#0dcaf0"),
      warning: toColorValue("#ffc107"),
      danger: toColorValue("#dc3545"),
      light: toColorValue("#f8f9fa"),
      dark: toColorValue("#212529"),
    },

    // copy from _variables.scss / $grid-breakpoints
    breakpoints: {
      xs: "0",
      sm: `${Breakpoints.sm}px`,
      md: `${Breakpoints.md}px`,
      lg: `${Breakpoints.lg}px`,
      xl: `${Breakpoints.xl}px`,
      xxl: `${Breakpoints.xxl}px`,
    },
    spacer: {
      base: "1rem",
    },
  },
  {}
);

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export function mergeTheme(
  ogirinal: DeepPartial<ThemeOptions>,
  theme: DeepPartial<ThemeOptions>
): ThemeOptions {
  function deepMerge(from: any, to: any) {
    if (from === undefined) return;

    for (const [key, val] of Object.entries(from)) {
      if (!to.hasOwnProperty(key)) continue;

      if (typeof val === "object") deepMerge(val, to[key]);
      else to[key] = val;
    }
  }

  theme.cssVarPrefix !== undefined &&
    (ogirinal.cssVarPrefix = theme.cssVarPrefix);

  theme.direction !== undefined && (ogirinal.direction = theme.direction);

  deepMerge(theme.breakpoints, ogirinal.breakpoints);
  return ogirinal as any;
}
