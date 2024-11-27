import { forwardRef, useContext } from "react";
import { DropdownItemProps, DropdownItemType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import DropdownContext from "./Context";

function PropsDestructor(
  next: any,
  as?: string
): [ClassNameFuncResult, RemainingProps] {
  const {
    active,
    disabled,

    // The rest
    ...rest
  } = next;

  const classNames = {
    active: active,
  } as any;

  // special .disabled for the <a> tag
  if (as == "a" && disabled) classNames["disabled"] = true;

  // pass some props for later use
  rest["disabled"] = disabled;

  return [["dropdown-item", classNames], rest];
}

const Item: DropdownItemType = forwardRef<HTMLElement, DropdownItemProps>(
  (props, ref) => {
    let { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    const ctx = useContext(DropdownContext);
    as = as || "button";

    // default props for as = <a>
    if (as == "a") remainedProps.href = remainedProps.href || "#";
    // default props for as = <button>
    else if (as == "button")
      remainedProps.type = remainedProps.type || "button";

    return (
      <li>
        {createElement(
          as,
          {
            ref,
            className,
            css,
            style,

            // user props
            ...remainedProps,

            // floating-ui props for closing the dropdown
            ...ctx.getItemProps({
              onClick() {
                ctx.setOpen(false);
              },
            }),
          },
          children
        )}
      </li>
    );
  }
);

export default Item;
