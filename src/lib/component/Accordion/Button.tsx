import classNames from "classnames";
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { AccordionButtonType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import AccordionContext from "./Context";

const Button: AccordionButtonType = forwardRef((props, ref) => {
  const ctx = useContext(AccordionContext);
  const domRef = useRef<HTMLButtonElement>(null);
  const [eventKey, setEventKey] = useState(-1);

  let {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props);

  let { type, onClick: userOnClick, ...remainedProps } = rest;

  useImperativeHandle(ref, () => domRef.current!);

  // read out eventKey from parent node html attr
  useEffect(() => {
    const p1 = domRef.current?.parentElement;
    const p2 = domRef.current?.parentElement?.parentElement;
    let k = p1?.hasAttribute("data-eventkey")
      ? p1.getAttribute("data-eventkey") ?? "-1"
      : p2?.getAttribute("data-eventkey") ?? "-1";
    setEventKey(Number(k));
  }, [ctx.listKeys]);

  const onClick = useCallback(
    (event: object) => {
      ctx.toggleKey(eventKey, event);
      if (userOnClick) userOnClick(event);
    },
    [userOnClick, eventKey]
  );

  ({ className, type } = useMemo(() => {
    return {
      className: classNames(
        "accordion-button",
        { collapsed: !ctx.activeKey[eventKey!] },
        className
      ),
      type: type || "button",
    };
  }, [className, type]));

  return createElement(
    as || "button",
    {
      ref: domRef,
      className,
      css,
      style,
      type,
      onClick,
      ...remainedProps,
    },
    children
  );
});

export default Button;
