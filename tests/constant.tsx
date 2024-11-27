import tinycolor from "tinycolor2";
import { describe, expect, it } from "vitest";
import { Breakpoint, Responsive } from "../src/lib/saigon.types";
export { Typography } from "../lib/core";

export async function delay(seconds: number) {
  return new Promise<void>((rs) => setTimeout(rs, seconds * 1000.0));
}

export function setScreenSize(code: string) {
  switch (code) {
    case "":
    case "xs":
      window.innerWidth = 576 - 100;
      break;
    case "sm":
      window.innerWidth = 768 - 100;
      break;
    case "md":
      window.innerWidth = 992 - 100;
      break;
    case "lg":
      window.innerWidth = 1200 - 100;
      break;
    case "xl":
      window.innerWidth = 1400 - 100;
      break;
    case "xxl":
      window.innerWidth = 1400 + 100;
      break;
  }
}

export function expectComputedStyle(
  elm: HTMLElement,
  styleName: string,
  expected: string,
  options?: { isColor?: boolean }
) {
  for (const clz of elm.classList) {
    const styles = getComputedStyle(elm, clz);
    if (styles[styleName]) {
      if (options?.isColor) {
        return expect(tinycolor(expected).toHexString()).toEqual(
          tinycolor(styles[styleName]).toHexString()
        );
      }

      return expect(styles[styleName]).toEqual(expected);
    }

    // speical case 'unset'
    else if (expected == "unset" && !styles[styleName])
      return expect(true).toBeTruthy();
  }

  // try in @media query
  const styles = document.getElementsByTagName("style");
  for (const obj of styles) {
    if (
      obj.innerHTML.startsWith("@media") &&
      obj.innerHTML.indexOf(styleName) > -1
    ) {
      return expect(obj.innerHTML.indexOf(expected) > -1).toBeTruthy();
    }
  }

  return expect(
    !expected,
    `getComputedStyle, expected value is not found: ${expected}`
  ).toEqual(expected);
}

export function getResponsive<T = any>(
  code: keyof Breakpoint<T>,
  val: Breakpoint<T> | T
): T | undefined {
  function toBreakpoint(val: any): Breakpoint<any> {
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

  function fallbackProps<T>(...val: T[]): T {
    for (const i of val) if (i !== undefined && i !== null) return i;
    return val[val.length - 1];
  }

  val = toBreakpoint(val);

  if (code == "xs") return val.xs;
  if (code == "sm") return fallbackProps(val.sm, val.xs);
  if (code == "md") return fallbackProps(val.md, val.sm, val.xs);
  if (code == "lg") return fallbackProps(val.lg, val.md, val.sm, val.xs);
  if (code == "xl")
    return fallbackProps(val.xl, val.lg, val.md, val.sm, val.xs);
  return fallbackProps(val.xxl, val.xl, val.lg, val.md, val.sm, val.xs);
}

export function describeResp<T extends Responsive<unknown>>(
  props: T,
  expectMap: Breakpoint<(elm: HTMLElement) => void>,
  render: (props: any) => HTMLElement
) {
  describe(`Responsive`, () => {
    for (const k of ["xs", "sm", "md", "lg", "xl", "xxl"]) {
      const key = k as keyof Breakpoint<T>;
      it(`${k}: ${getResponsive(key, props)}`, () => {
        setScreenSize(key);
        const elm = render(props);
        if (expectMap[key]) expectMap[key](elm);
      });
    }
  });
}
