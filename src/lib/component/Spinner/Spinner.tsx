import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { forwardRef } from "react";
import { SpinnerProps, SpinnerType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import SpinnerBar1 from "./SpinnerBar1";
import SpinnerBar2 from "./SpinnerBar2";
import SpinnerBuddhism1 from "./SpinnerBuddhism1";
import SpinnerDot1 from "./SpinnerDot1";
import SpinnerDot2 from "./SpinnerDot2";
import SpinnerDot3 from "./SpinnerDot3";
import SpinnerDot4 from "./SpinnerDot4";
import SpinnerMoon1 from "./SpinnerMoon1";
import SpinnerMoon2 from "./SpinnerMoon2";
import SpinnerPulse1 from "./SpinnerPulse1";
import SpinnerPulse2 from "./SpinnerPulse2";
import SpinnerSync1 from "./SpinnerSync1";
import SpinnerSync2 from "./SpinnerSync2";

const Spinner: SpinnerType = forwardRef<HTMLElement, SpinnerProps>(
  (props, ref: any) => {
    let {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props);

    let { animation, size, role, ...remainedProps } = rest;
    role = role || "status";
    animation = animation || "border";

    switch (animation) {
      case "dots-1":
        as = SpinnerDot1;
        break;
      case "dots-2":
        as = SpinnerDot2;
        break;
      case "dots-3":
        as = SpinnerDot3;
        break;
      case "dots-4":
        as = SpinnerDot4;
        break;
      case "bars-1":
        as = SpinnerBar1;
        break;
      case "bars-2":
        as = SpinnerBar2;
        break;
      case "pulse-1":
        as = SpinnerPulse1;
        break;
      case "pulse-2":
        as = SpinnerPulse2;
        break;
      case "moon_1":
        as = SpinnerMoon1;
        break;
      case "moon_2":
        as = SpinnerMoon2;
        break;
      case "buddhism_1":
        as = SpinnerBuddhism1;
        break;
      case "sync-1":
        as = SpinnerSync1;
        break;
      case "sync-2":
        as = SpinnerSync2;
        break;
      case "border":
      case "grow":
        className = classNames(`spinner-${animation}`, className);
        break;
      default:
        className = classNames(`spinner-border`, className);
        break;
    }

    // size props
    if (size) {
      css = cssFunc(css, { width: size, height: size });
    }

    // no children allow
    children = undefined;

    return createElement(
      as || "div",
      { ref, className, css, style, role, ...remainedProps },
      children
    );
  }
);

export default Spinner;
