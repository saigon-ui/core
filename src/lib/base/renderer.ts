/** @jsxImportSource @emotion/react */
import { css, jsx, SerializedStyles } from "@emotion/react";

type BreakpointCSS = Partial<SerializedStyles> & React.CSSProperties;

export function Breakpoint(props: {
  as?: string;
  sx?: BreakpointCSS;
  md?: BreakpointCSS;
  lg?: BreakpointCSS;
  xl?: BreakpointCSS;
  xxl?: BreakpointCSS;
  className?: string;
  style?: BreakpointCSS;
  children?: any;
}) {
  /*
      sm: 540px
      md: 720px
      lg: 960px
      xl: 1140px
      xxl: 1320px 
    */

  function isSerializedStyles(val: any) {
    return (
      val &&
      val.name &&
      val.styles &&
      typeof val.name === "string" &&
      typeof val.styles === "string"
    );
  }

  let cssObj = [] as any[];
  if (props.xxl) {
    if (isSerializedStyles(props.xxl)) {
      cssObj.push(`@media (max-width: 1320px) { ${props.xxl.styles} }`);
    } else {
      cssObj.push({ "@media (max-width: 1320px)": { ...props.xxl } });
    }
  }
  if (props.xl) {
    if (isSerializedStyles(props.xl)) {
      cssObj.push(`@media (max-width: 1140px) { ${props.xl.styles} }`);
    } else {
      cssObj.push({ "@media (max-width: 1140px)": { ...props.xl } });
    }
  }
  if (props.lg) {
    if (isSerializedStyles(props.lg)) {
      cssObj.push(`@media (max-width: 960px) { ${props.lg.styles} }`);
    } else {
      cssObj.push({ "@media (max-width: 960px)": { ...props.lg } });
    }
  }
  if (props.md) {
    if (isSerializedStyles(props.md)) {
      cssObj.push(`@media (max-width: 720px) { ${props.md.styles} }`);
    } else {
      cssObj.push({ "@media (max-width: 720px)": { ...props.md } });
    }
  }
  if (props.sx) {
    if (isSerializedStyles(props.sx)) {
      cssObj.push(`@media (max-width: 540px) { ${props.sx.styles} }`);
    } else {
      cssObj.push({ "@media (max-width: 540px)": { ...props.sx } });
    }
  }

  const as = props.as || "div";
  const className = props.className;
  let style = props.style as any;

  // is the SerializedStyles?
  if (isSerializedStyles(style)) {
    cssObj.unshift(style.styles);
    style = undefined;
  }

  return jsx<any>(as, { className, style, css: css(cssObj) }, props.children);
}
