import { css as cssFunc, SerializedStyles } from "@emotion/react";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { ToggleButtonProps, ToggleButtonType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";
import { SaigonUIContext } from "../../base/context";
import propClickEffect from "../Button/Effect";

function PropsDestructor(
  next: ToggleButtonProps
): [ClassNameFuncResult, RemainingProps] {
  let {
    variant,
    outline,
    size,
    noTextWrap,
    active,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  const cssPrefix = `btn-${outline ? "outline-" : ""}`;

  variant = typeof variant !== "undefined" ? variant : "primary";
  ThemeColors.indexOf(variant as any) > -1 &&
    (classNames[cssPrefix + variant] = true);

  size !== undefined && (classNames[`btn-${size}`] = true);
  active !== undefined && (classNames["active"] = true);
  noTextWrap !== undefined && (classNames["text-nowrap"] = true);

  // pass `active` props for later access
  (rest as any)["active"] = active;

  return [["btn", classNames], rest];
}

function propActiveState(
  active: boolean,
  classNameInput?: string,
  cssInput?: SerializedStyles,
  onClickInput?: (evt: any) => void,
  onChangeInput?: (active: boolean, evt: any) => void
) {
  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);
  const [activeState, activeStateSet] = useState(active);

  // control state
  useEffect(() => activeStateSet(active), [active]);

  const onClick = useMemo(
    () => (evt: any) => {
      activeStateSet(!activeState);

      // reserve original click callback
      onClickInput && onClickInput(evt);

      // fire onChange callback
      onChangeInput && onChangeInput(!activeState, evt);
    },
    [activeState, onClickInput, onChangeInput]
  );

  const others = useMemo(() => {
    let className = classNameInput,
      css = cssInput;

    // override the className with `active` value
    if (activeState) {
      classNameInput!.indexOf("active") == -1 &&
        (className = classNameInput + " active");
      css = cssFunc(cssInput, {
        "&:hover": {
          color: `var(--${cssVarPrefix}btn-hover-color) !important`,
          backgroundColor: `var(--${cssVarPrefix}btn-hover-bg) !important`,
          borderColor: `var(--${cssVarPrefix}btn-hover-border-color) !important`,
        },
      });
    } else {
      className = classNameInput!.replace("active", "").trim();
    }

    return { className, css };
  }, [activeState, classNameInput, cssInput]);

  return { onClick, ...others };
}

const ToggleButton: ToggleButtonType = forwardRef<
  HTMLElement,
  ToggleButtonProps
>((props, ref: any) => {
  let {
    as,
    className: classNameInput1,
    css: cssInput1,
    style,
    children: childrenInput1,
    remainedProps: rest,
  } = usePropsDestructor(props, PropsDestructor);

  const btnRef = useRef<HTMLElement>(null);
  useImperativeHandle(ref, () => btnRef);

  const {
    active,
    onClick: onClickInput1,
    onChange,
    // ripple effect
    clickEffect,
    ...remainedProps
  } = rest;

  const {
    onClick,
    className,
    css: cssInput2,
  } = propActiveState(
    active,
    classNameInput1,
    cssInput1,
    onClickInput1,
    onChange
  );

  const { css, children, onPointerUp } = propClickEffect(
    btnRef,
    props.variant,
    clickEffect,
    cssInput2,
    childrenInput1
  );

  return createElement(
    as || "button",
    {
      ref: btnRef,
      className,
      css,
      style,
      onClick,
      onPointerUp,
      ...remainedProps,
    },
    children
  );
});

export default ToggleButton;
