import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FormControlWithIconProps, FormControlWithIconType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { useResponsiveSize } from "../../base/theme";

/**
export type FormControlProp = Partial<{
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
  isValid: boolean;

   * Use browser defaults validation feedback messages
   *
   * @default false
  required: boolean;

   * If added, the control will show an icon on the left.
   * @type React.ReactNode
  startIcon: Responsive<React.ReactNode>;

   * If added, the control will show an icon on the right.
   * @type React.ReactNode
  endIcon: Responsive<React.ReactNode>;

   * If added, the control will show an icon on the left when hovering.
   * @type React.ReactNode
  startHoverIcon: Responsive<React.ReactNode>;

   * If added, the control will show an icon on the right when hovering.
   * @type React.ReactNode
  endHoverIcon: Responsive<React.ReactNode>;
}>;
*/

function PropsDestructor(
  next: FormControlWithIconProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,
    isValid,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  typeof size === "string" && (classNames[`col-form-label-${size}`] = true);
  if (isValid !== undefined) {
    classNames["is-valid"] = isValid;
    classNames["is-invalid"] = !isValid;
  }

  return [["form-control", classNames], rest];
}

const ControlWithIcon: FormControlWithIconType = forwardRef<
  HTMLInputElement,
  FormControlWithIconProps
>((props, ref) => {
  const rps = useResponsiveSize();

  useImperativeHandle(ref, () => domRef.current!);

  const {
    as,
    className,
    css,
    style,
    remainedProps: rest,
  } = usePropsDestructor(props, PropsDestructor);

  // Bootstrap CSS required placeholder value for the floating label to work
  let {
    placeholder,
    required,

    // icons
    startIcon,
    endIcon,
    startHoverIcon,
    endHoverIcon,

    ...remainedProps
  } = rest;
  placeholder = typeof placeholder === "undefined" ? "" : placeholder;

  const domRef = useRef<HTMLInputElement>(null);
  const [domStyle, setDomStyle] = useState<string[]>([]);
  const [domHover, setDomHover] = useState(false);
  const startIconRef = useRef<HTMLDivElement>(null);
  const endIconRef = useRef<HTMLDivElement>(null);
  const startHoverIconRef = useRef<HTMLDivElement>(null);
  const endHoverIconRef = useRef<HTMLDivElement>(null);

  startIcon = rps.getResponsive(startIcon);
  endIcon = rps.getResponsive(endIcon);
  startHoverIcon = rps.getResponsive(startHoverIcon);
  endHoverIcon = rps.getResponsive(endHoverIcon);

  useEffect(() => {
    const inputCSS = [];
    if (startIconRef.current) {
      inputCSS.push(
        `padding-left: ${startIconRef.current.getBoundingClientRect().width}px;`
      );
    }
    if (endIconRef.current) {
      inputCSS.push(
        `padding-right: ${endIconRef.current.getBoundingClientRect().width}px;`
      );
    }
    setDomStyle(inputCSS);
  }, []);

  const onPointerEnter = () => setDomHover(true);

  const onPointerLeave = () => setDomHover(false);

  if (startIcon || endIcon || startHoverIcon || endHoverIcon) {
    return (
      <div
        className="ico-control"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        {createElement(
          as || "input",
          {
            ref: domRef,
            className,
            css: cssFunc([css, ...domStyle]),
            style,
            placeholder,
            required,
            ...remainedProps,
          },
          undefined
        )}
        {Boolean(startIcon) && (
          <div
            ref={startIconRef}
            className={classNames("ico start", {
              hover: startHoverIcon && domHover,
            })}
          >
            {startIcon}
          </div>
        )}

        {Boolean(endIcon) && (
          <div
            ref={endIconRef}
            className={classNames("ico end", {
              hover: endHoverIcon && domHover,
            })}
          >
            {endIcon}
          </div>
        )}

        {Boolean(startHoverIcon) && (
          <div
            ref={startHoverIconRef}
            className={classNames("ico start hoverable", {
              hover: startHoverIcon && domHover,
            })}
          >
            {startHoverIcon}
          </div>
        )}

        {Boolean(endHoverIcon) && (
          <div
            ref={endHoverIconRef}
            className={classNames("ico end hoverable", {
              hover: endHoverIcon && domHover,
            })}
          >
            {endHoverIcon}
          </div>
        )}
      </div>
    );
  }

  return createElement(
    as || "input",
    {
      ref,
      className,
      css,
      style,
      placeholder,
      required,
      ...remainedProps,
    },
    undefined
  );
});

export default ControlWithIcon;
