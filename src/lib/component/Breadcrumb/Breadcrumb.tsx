import { css as cssFunc } from "@emotion/react";
import { forwardRef, useContext } from "react";
import { BreadcrumbType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import { SaigonUIContext } from "../../base/context";

const Breadcrumb: BreadcrumbType = forwardRef((props, ref) => {
  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);
  const { divider, ...remainedProps } = rest;
  remainedProps["aria-label"] = "breadcrumb";

  css = cssFunc([
    css,
    `--${cssVarPrefix}breadcrumb-divider: ${divider || `'>'`};`,
  ]);

  return createElement(
    as || "span",
    { ref, className, css, style, ...remainedProps },
    <ol className="breadcrumb">{children}</ol>
  );
});

export default Breadcrumb;
