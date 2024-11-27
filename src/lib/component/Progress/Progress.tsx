import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { forwardRef, useContext, useMemo } from "react";
import { ProgressProps, ProgressType } from ".";
import { createElement, usePropsDestructor, ThemeColors } from "../../base";
import { SaigonUIContext } from "../../base/context";
import ProgressContext from "./Context";

const Progress: ProgressType = forwardRef<HTMLElement, ProgressProps>(
  (props, ref: any) => {
    let {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props);

    const ctx = useContext(ProgressContext);
    const {
      theme: { cssVarPrefix },
    } = useContext(SaigonUIContext);

    let {
      now,
      min,
      max,
      variant,
      striped,
      animated,
      multiple,
      ...remainedProps
    } = rest;
    now = typeof now == "number" ? now : 50;
    min = typeof min == "number" ? min : 0;
    max = typeof max == "number" ? max : 100;

    now = Math.min(Math.max(min, now), max);

    // for .progress-bar
    const barClassName = useMemo(() => {
      const cln = { "progress-bar": true } as any;

      if (
        typeof variant == "string" &&
        ThemeColors.indexOf(variant as any) > -1
      )
        cln[`bg-${variant}`] = true;

      typeof striped !== "undefined" && (cln[`progress-bar-striped`] = striped);

      typeof animated !== "undefined" &&
        (cln[`progress-bar-animated`] = animated);

      return classNames(cln);
    }, [variant, striped, animated]);

    remainedProps["role"] = "progressbar";
    typeof children == "string" && (remainedProps["aria-label"] = children);

    remainedProps["aria-valuenow"] = now.toFixed(1);
    remainedProps["aria-valuemin"] = min.toFixed(1);
    remainedProps["aria-valuemax"] = max.toFixed(1);

    className = classNames(
      multiple ? "progress-stacked" : "progress",
      className
    );

    if (multiple) {
      return (
        <ProgressContext.Provider
          value={{ now, min, max, variant, striped, animated, multiple }}
        >
          {createElement(
            as || "div",
            { ref, className, css, style, ...remainedProps },
            children
          )}
        </ProgressContext.Provider>
      );
    } else {
      // fix .theme-color
      const bgOpacity =
        typeof props.bgOpacity == "number" ? props.bgOpacity : 1;
      const barCSS: any = {};
      barCSS[`--${cssVarPrefix}bg-opacity`] = `${bgOpacity} !important;`;
      if (props.bg !== undefined) {
        ThemeColors.indexOf(props.bg as any) > -1
          ? (barCSS["background"] = `var(--${cssVarPrefix}${props.bg})`)
          : (barCSS["background"] = props.bg);
      }

      const BarStyle = ctx.multiple ? {} : { width: `${now}%` };
      const Bar = createElement(
        "div",
        {
          className: barClassName,
          css: cssFunc(barCSS),
          style: BarStyle,
        },
        children
      );

      return createElement(
        as || "div",
        { ref, className, css, style, ...remainedProps },
        Bar
      );
    }
  }
);

export default Progress;
