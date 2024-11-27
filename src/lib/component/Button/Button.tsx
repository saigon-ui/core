import * as CSS from "csstype";
import {
  forwardRef,
  isValidElement,
  ReactNode,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { ButtonProps, ButtonType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  ThemeColors,
  usePropsDestructor,
} from "../../base";
import { SaigonUIContext } from "../../base/context";
import { GetResponsiveFunction, useResponsiveSize } from "../../base/theme";
import { Responsive, ThemeColor } from "../../saigon.types";
import Spinner from "../Spinner";
import propClickEffect from "./Effect";

const ThemeColorWithLink = [...ThemeColors, "link"];

function PropsDestructor(
  next: ButtonProps,
  getResponsive: GetResponsiveFunction
): [ClassNameFuncResult, RemainingProps] {
  let {
    variant,
    outline,
    size,
    noTextWrap,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  const cssPrefix =
    variant == "link"
      ? "btn-"
      : getResponsive(outline)
      ? "btn-outline-"
      : "btn-";

  // variant
  variant = getResponsive<ThemeColor | "link">(variant);
  ThemeColorWithLink.indexOf(variant) > -1 &&
    (classNames[cssPrefix + variant] = true);

  // size
  if (size !== undefined) {
    const rps = getResponsive<"lg" | "sm">(size);
    rps && (classNames[`btn-${rps}`] = true);
  }

  // noTextWrap
  if (noTextWrap !== undefined) {
    const rps = getResponsive<boolean>(noTextWrap);
    classNames[`text-nowrap`] = rps;
  }

  return [["btn", classNames], rest];
}

export function useButtonIcons(
  children: ReactNode,
  startIcon: ReactNode,
  endIcon: ReactNode,
  iconSpacing: CSS.Property.Gap
) {
  const rps = useResponsiveSize();
  return useMemo(() => {
    const gap = rps.getResponsive(iconSpacing || "5px");
    const sico = rps.getResponsive(startIcon);
    const eico = rps.getResponsive(endIcon);
    const hasStartIcon = isValidElement(sico);
    const hasEndIcon = isValidElement(eico);
    if (hasStartIcon && hasEndIcon) {
      return (
        <span style={{ display: "flex", gap }}>
          {sico}
          {children}
          {eico}
        </span>
      );
    } else if (hasStartIcon && !hasEndIcon) {
      return (
        <span style={{ display: "flex", gap }}>
          {sico}
          {children}
        </span>
      );
    } else if (!hasStartIcon && hasEndIcon) {
      return (
        <span style={{ display: "flex", gap }}>
          {children}
          {eico}
        </span>
      );
    }

    return children;
  }, [rps, children, startIcon, endIcon, iconSpacing]);
}

export function useLoadingIcon(
  children: ReactNode,
  isLoading: boolean,
  loadingText: ReactNode,
  loadingSpinner: ReactNode,
  spinnerPlacement: Responsive<"start" | "end">
) {
  const rps = useResponsiveSize();
  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);

  return useMemo(() => {
    if (isLoading) {
      // default spinner placement at 'end'
      const placement = rps.getResponsive(spinnerPlacement || "end");
      let spinner: any = rps.getResponsive(loadingSpinner);

      // special case
      if (spinner === false) spinner = undefined;
      // fallback spinner icon
      else if (spinner === "" || !isValidElement(spinner)) {
        spinner = (
          <Spinner
            as="span"
            animation={typeof spinner == "string" ? (spinner as any) : "border"}
            css={{
              display: "block",
              width: `calc(var(--${cssVarPrefix}btn-font-size) * var(--${cssVarPrefix}btn-line-height))`,
              height: `calc(var(--${cssVarPrefix}btn-font-size) * var(--${cssVarPrefix}btn-line-height))`,
            }}
          />
        );
      }

      // loading text
      if (loadingText) {
        const txt = rps.getResponsive(loadingText);
        children =
          placement == "end" ? (
            <span style={{ display: "flex" }}>
              {txt}
              <>&nbsp;</>
              {spinner}
            </span>
          ) : (
            <span style={{ display: "flex" }}>
              {spinner}
              <>&nbsp;</>
              {txt}
            </span>
          );
      } else children = spinner;
    }

    return children;
  }, [rps, children, isLoading, loadingText, loadingSpinner, spinnerPlacement]);
}

const Button: ButtonType = forwardRef<HTMLElement, ButtonProps>(
  (props, ref: any) => {
    const rps = useResponsiveSize();

    let {
      as,
      className,
      css: cssInput,
      style,
      children: children_1,
      remainedProps: rest,
    } = usePropsDestructor(props, (next) =>
      PropsDestructor(next, rps.getResponsive)
    );

    let {
      disabled,
      // button icons
      startIcon,
      endIcon,
      iconSpacing,
      // loading button
      isLoading,
      loadingText,
      loadingSpinner,
      spinnerPlacement,
      // ripple effect
      clickEffect,
      ...remainedProps
    } = rest;

    const btnRef = useRef<HTMLElement>(null);

    // expose ref object to outside
    useImperativeHandle(ref, () => btnRef.current);

    // button start-end icons, will be override when isLoading is on
    const children_2 = useButtonIcons(
      children_1,
      startIcon,
      endIcon,
      iconSpacing
    );

    let {
      css,
      children: children_3,
      onPointerUp,
    } = propClickEffect(
      btnRef,
      "primary", //props.variant,
      clickEffect,
      cssInput,
      children_2
    );

    // normal button with loading state is on
    const children_4 = useLoadingIcon(
      children_3,
      isLoading,
      loadingText,
      loadingSpinner,
      spinnerPlacement
    );

    if (isLoading) {
      // loading button will be not clickable
      disabled = true;
    }

    // role attr for links
    let role: string | undefined = undefined;
    if (as == "a") {
      role = "button";

      // Disable link mode
      if (disabled) {
        // <a>s don’t support the disabled attribute, so you must add the .disabled class to make it visually appear disabled.
        className = className + " disabled";

        // Disabled buttons using <a> should include the aria-disabled="true" attribute to indicate the state of the element to assistive technologies.
        remainedProps["aria-disabled"] = "true";

        // Disabled buttons using <a> should not include the href attribute.
        remainedProps["href"] = undefined;

        // also include a tabindex="-1" attribute on these links to prevent them from receiving keyboard focus
        remainedProps["tabIndex"] = -1;
      } else remainedProps["href"] = remainedProps["href"] || "#";
    }

    // pass disabled attr to the node
    else if (disabled) remainedProps["disabled"] = disabled;

    // special rendering: input tag
    const value =
      as == "input" && typeof children_4 == "string" ? children_4 : undefined;

    return createElement(
      as || "button",
      {
        ref: btnRef,
        className,
        css,
        style,
        role,
        value,
        onPointerUp,
        ...remainedProps,
      },
      as == "input" ? undefined : children_4
    );
  }
);

export default Button;
