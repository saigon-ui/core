import classNames from "classnames";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { AccordionItemType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import AccordionContext from "./Context";

const Item: AccordionItemType = forwardRef((props, ref) => {
  const ctx = useContext(AccordionContext);
  const domRef = useRef<HTMLElement>(null);
  const [eventKey, setEventKey] = useState(-1);
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  useImperativeHandle(ref, () => domRef.current!);

  useEffect(() => {
    // acquire eventKey if has not
    if (eventKey == -1) {
      setEventKey(ctx.generateKey());
    }
  }, [eventKey]);

  // override props
  className = classNames("accordion-item", className);
  remainedProps[`data-eventkey`] = eventKey;

  return createElement(
    as || "div",
    { ref: domRef, className, css, style, ...remainedProps },
    children
  );
});

export default Item;
