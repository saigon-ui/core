/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-prototype-builtins */
import { useContext, useEffect, useState } from "react";
import { Breakpoint, ThemeOptions } from "../saigon.types";
import {
  Breakpoints,
  DeepPartial,
  DefaultTheme,
  mergeTheme,
} from "./constants";
import { SaigonUIContext, ThemeEvents } from "./context";

export const defaultThemeValue = (path: string, defaultVal: string = "") => {
  const keys = path.split(".");
  let entry = DefaultTheme as any;
  for (const key of keys) {
    if (!entry.hasOwnProperty(key)) return defaultVal;

    entry = entry[key];
  }

  return entry;
};

export function toBreakpoint(val: any): Breakpoint<any> {
  if (
    typeof val == "object" &&
    ("xs" in val ||
      "sm" in val ||
      "md" in val ||
      "lg" in val ||
      "xl" in val ||
      "xxl" in val)
  )
    return val;

  return { xs: val };
}

export function FallbackProps<T>(...val: T[]): T {
  for (const i of val) if (i !== undefined && i !== null) return i;
  return val[val.length - 1];
}

export type GetResponsiveFunction = <T = any>(
  val: Breakpoint<T> | T | undefined
) => T;

export type MediaBreakingType = {
  media: Required<Breakpoint<boolean>>;
  getResponsive: GetResponsiveFunction;
  solveProp: {
    mixed: (
      outClassName: Record<string, boolean>,
      outStyle: string[],
      p: any,
      pattern: {
        match?: string[];
        classname?: string;
        style?: string;
      }
    ) => void;
    bool: (
      outClassName: Record<string, boolean>,
      p: any,
      className: string
    ) => void;
    style: (outStyle: string[], p: any, cssPattern: string) => void;
    boolMixed: (
      outClassName: Record<string, boolean>,
      p: any,
      className: string,
      match: string[],
      pattern: string,
      outStyle?: string[],
      style?: string
    ) => void;
    boolStyle: (outStyle: string[], p: any, cssPattern: string) => void;
  };
};

export function useMediaQuery(): MediaBreakingType {
  const getObject = (): MediaBreakingType => {
    const w = window.innerWidth || window.screen.width;
    const media = {
      xs: w < Breakpoints.sm,
      sm: w >= Breakpoints.sm && w < Breakpoints.md,
      md: w >= Breakpoints.md && w < Breakpoints.lg,
      lg: w >= Breakpoints.lg && w < Breakpoints.xl,
      xl: w >= Breakpoints.xl && w < Breakpoints.xxl,
      xxl: w >= Breakpoints.xxl,
    };

    const getResponsive = (val: Breakpoint<any> | any): any => {
      val = toBreakpoint(val);

      if (media.xs) return val.xs;
      if (media.sm) return FallbackProps(val.sm, val.xs);
      if (media.md) return FallbackProps(val.md, val.sm, val.xs);
      if (media.lg) return FallbackProps(val.lg, val.md, val.sm, val.xs);
      if (media.xl)
        return FallbackProps(val.xl, val.lg, val.md, val.sm, val.xs);
      return FallbackProps(val.xxl, val.xl, val.lg, val.md, val.sm, val.xs);
    };

    const mixed = (
      outClassName: Record<string, boolean>,
      outStyle: string[],
      p: any,
      pattern: {
        match?: string[];
        classname?: string;
        style?: string;
      }
    ) => {
      if (p === undefined || p == null) return;

      const val = getResponsive(p);
      pattern.classname && pattern.match?.includes(val)
        ? (outClassName[pattern.classname.replaceAll("#", val)] = true)
        : // when pattern.style is not provided, also means turn off styling (see lineHeight TextProps)
          pattern.style && outStyle.push(pattern.style.replaceAll("#", val));
    };

    const bool = (
      outClassName: Record<string, boolean>,
      p: any,
      className: string
    ) => {
      if (p === undefined || p == null) return;
      outClassName[className] = !!getResponsive(p);
    };

    const boolMixed = (
      outClassName: Record<string, boolean>,
      p: any,
      className: string,
      match: string[],
      pattern: string,
      outStyle?: string[],
      style?: string
    ) => {
      if (p === undefined || p == null) return;
      const val = getResponsive(p);
      if (typeof val === "boolean") outClassName[className] = val;
      else if (match.includes(val))
        outClassName[pattern.replaceAll("#", val)] = true;
      else if (outStyle != undefined && style)
        outStyle.push(style.replaceAll("#", val));
    };

    const boolStyle = (outStyle: string[], p: any, cssPattern: string) => {
      if (p === undefined || p == null) return;
      getResponsive(p) && outStyle.push(cssPattern.replaceAll("#", p));
    };

    const style = (outStyle: string[], p: any, cssPattern: string) => {
      if (p === undefined || p == null) return;
      outStyle.push(cssPattern.replaceAll("#", getResponsive(p)));
    };

    return {
      media,
      getResponsive,
      solveProp: { mixed, bool, style, boolMixed, boolStyle },
    };
  };

  const [hooks, setHooks] = useState<MediaBreakingType>(getObject());
  useEffect(() => {
    const onResize = () => setHooks(getObject());
    ThemeEvents.addEventListener("resize", onResize);
    return () => ThemeEvents.removeEventListener("resize", onResize);
  }, []);

  return hooks;
}

export type UseResponsiveSizeType = {
  media: Required<Breakpoint<boolean>>;
  getResponsive: GetResponsiveFunction;
};

export const useResponsiveSize = (): UseResponsiveSizeType => {
  function getObject(): UseResponsiveSizeType {
    const w = window.innerWidth || window.screen.width;
    const media = {
      xs: w < Breakpoints.sm,
      sm: w >= Breakpoints.sm && w < Breakpoints.md,
      md: w >= Breakpoints.md && w < Breakpoints.lg,
      lg: w >= Breakpoints.lg && w < Breakpoints.xl,
      xl: w >= Breakpoints.xl && w < Breakpoints.xxl,
      xxl: w >= Breakpoints.xxl,
    };

    return {
      media,
      getResponsive: (val: Breakpoint<any> | any): any => {
        val = toBreakpoint(val);

        if (media.xs) return val.xs;
        if (media.sm) return FallbackProps(val.sm, val.xs);
        if (media.md) return FallbackProps(val.md, val.sm, val.xs);
        if (media.lg) return FallbackProps(val.lg, val.md, val.sm, val.xs);
        if (media.xl)
          return FallbackProps(val.xl, val.lg, val.md, val.sm, val.xs);
        return FallbackProps(val.xxl, val.xl, val.lg, val.md, val.sm, val.xs);
      },
    };
  }

  const [hooks, setHooks] = useState<UseResponsiveSizeType>(getObject());

  useEffect(() => {
    const onResize = () => setHooks(getObject());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return hooks;
};

export const extendTheme = (theme: DeepPartial<ThemeOptions>) => {
  return mergeTheme(DefaultTheme, theme);
};

export const useThemeColor = () => {
  const ctx = useContext(SaigonUIContext);

  const setColorMode = (_mode: "light" | "dark") => {};

  return {
    theme: ctx.theme,
    setColorMode,
  };
};
