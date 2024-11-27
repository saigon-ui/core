import { css as cssFunc } from "@emotion/react";
import { forwardRef } from "react";
import { InputGroupProps, InputGroupType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { useThemeColor } from "../../base/theme";

function PropsDestructor(
  next: InputGroupProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,
    hasValidation,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  typeof size === "string" && (classNames[`input-group-${size}`] = true);
  hasValidation !== undefined && (classNames["has-validation"] = true);

  return [["input-group", classNames], rest];
}

const InputGroup: InputGroupType = forwardRef<HTMLElement, InputGroupProps>(
  (props, ref: any) => {
    const { theme } = useThemeColor();

    let {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);

    const { noBackground, ...remainedProps } = rest;
    if (noBackground) {
      css = cssFunc(css, {
        ".input-group-text": {
          backgroundColor: `var(--${theme.cssVarPrefix}body-bg)`,
        },
        ".form-control": {
          borderLeft: "none",
          borderRight: "none",
        },
      });
    }

    return createElement(
      as || "div",
      {
        ref,
        className,
        css: cssFunc(
          css,
          noBackground &&
            `
           {
          
        }
      `
        ),
        style,
        ...remainedProps,
      },
      children
    );
  }
);

export default InputGroup;
