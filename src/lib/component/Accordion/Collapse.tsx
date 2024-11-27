import { createElement, usePropsDestructor } from "../../base";
import classNames from "classnames";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { AccordionCollapseType } from ".";
import AccordionContext from "./Context";

const Collapse: AccordionCollapseType = forwardRef((props, ref) => {
  const ctx = useContext(AccordionContext);
  const domRef = useRef<HTMLDivElement>(null);
  const [eventKey, setEventKey] = useState(-1);
  const [contentHeight, contentHeightSet] = useState(0);

  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  useImperativeHandle(ref, () => domRef.current!);

  // read out eventKey from parent node html attr
  useEffect(() => {
    if (domRef.current?.parentElement) {
      const k =
        domRef.current.parentElement.getAttribute("data-eventkey") || "-1";
      setEventKey(Number(k));
    }
  }, [ctx.listKeys]);

  // compute real DOM height when expanded `accordion-collapse`
  useEffect(() => {
    if (domRef.current) {
      const originalCN = domRef.current.className;

      domRef.current.className = "accordion-collapse";
      const height = domRef.current.getBoundingClientRect().height;
      contentHeightSet(height);

      domRef.current.className = originalCN;
    }
  }, [domRef.current]);

  // changing collapsing state
  useEffect(() => {
    // null ref, or nothing change, skip
    if (!domRef.current || eventKey == -1) return;

    const lastState = ctx.lastActiveKey[eventKey];
    const nextState = ctx.activeKey[eventKey];
    const transitioning = lastState != nextState;

    // NOT in transitioning, or the height will be not correct
    if (transitioning) {
      let height: string = "unset";
      if (nextState) {
        if (ctx.collapsingState == 1)
          // set to full height
          height = "0";
        else if (ctx.collapsingState == 2)
          // remove the height value to trigger transition effect
          height = `${contentHeight}px`;
      } else {
        if (ctx.collapsingState == 1)
          // mount full height
          height = `${contentHeight}px`;
        else if (ctx.collapsingState == 2)
          // remove the height value to trigger transition effect
          height = "0";
      }

      domRef.current.style.height = height;
    }
  }, [
    eventKey,
    contentHeight,
    ctx.collapsingState,
    ctx.lastActiveKey,
    ctx.activeKey,
  ]);

  // internal prop
  className = useMemo(() => {
    const accordionClz = {} as any;
    if (eventKey != -1) {
      const lastState = ctx.lastActiveKey[eventKey];
      const nextState = ctx.activeKey[eventKey];
      const transitioning = lastState != nextState;
      if (transitioning && ctx.collapsingState) {
        accordionClz.collapsing = true;
      } else {
        accordionClz.collapse = true;
        accordionClz.show = ctx.activeKey[eventKey];
      }
    }

    return classNames("accordion-collapse", accordionClz, className);
  }, [
    className,
    eventKey,
    ctx.collapsingState,
    ctx.lastActiveKey,
    ctx.activeKey,
  ]);

  return createElement(
    as || "div",
    {
      ref: domRef,
      className,
      css,
      style,
      ...remainedProps,
    },
    children
  );
});

export default Collapse;
