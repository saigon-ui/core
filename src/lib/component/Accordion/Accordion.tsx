import { forwardRef, useEffect, useRef, useState } from "react";
import { AccordionProps, AccordionType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import AccordionContext from "./Context";

function AccordionDestructor(next: any): [ClassNameFuncResult, RemainingProps] {
  const {
    flush,

    // The rest
    ...rest
  } = next;

  const props = {
    flush,
  } as AccordionProps;

  const theme = {} as any;

  if (props.flush) {
    theme["accordion-flush"] = true;
  }

  return [["accordion", theme], rest];
}

/*
function DrillingEventKey(
  children: React.ReactNode | any,
  eventKey: number
): React.ReactNode {
  children = Array.isArray(children) ? children : [children];
  const result: any[] = [];
  for (const idx in children) {
    let ch = children[idx];
    if (ch.type.displayName == "Accordion.Button") {
      let { children, ...newProps } = ch.props;
      // pass `eventKey` to the Accordion.Button
      newProps.eventKey = eventKey;
      newProps.key = idx; // fix the `key` prop problem
      result.push(cloneElement(ch, newProps, children));
    }
  }

  return result;
}
*/

const Accordion: AccordionType = forwardRef((props, ref) => {
  const [activeKey, activeKeySet] = useState<{ [key: number]: boolean }>({});
  const [collapsingState, collapsingStateSet] = useState(0);
  const lastActiveKey = useRef<{ [key: number]: boolean }>({});

  const [listKeys, setListKeys] = useState<number[]>([]);
  const listEventKey = useRef<number[]>([]);

  const {
    as,
    className,
    css,
    style,
    children,
    remainedProps: rest,
  } = usePropsDestructor(props, AccordionDestructor);

  const { defaultActiveKey, alwaysOpen, expanded, onSelect, ...remainedProps } =
    rest;

  const generateKey = () => {
    const newKey = Math.max(-1, ...listEventKey.current) + 1;
    listEventKey.current.push(newKey);
    setListKeys([...listEventKey.current]);
    return newKey;
  };

  // unmoute DOM after the transition
  useEffect(() => {
    if (collapsingState == 1) {
      setTimeout(() => {
        collapsingStateSet(0);
      }, 350);
      collapsingStateSet(2);
    }
  }, [collapsingState]);

  const updateCollapsing = (toggleKey: number, evt: any) => {
    // save the previous state
    Object.assign(lastActiveKey.current, activeKey);

    // toggle new active key
    activeKey[toggleKey] = !activeKey[toggleKey];

    // toggling mode
    if (!alwaysOpen) {
      for (const k in activeKey)
        if (Number(k) != toggleKey) activeKey[k] = false;
    }
    activeKeySet({ ...activeKey });

    // start the transition effect
    collapsingStateSet(1);

    // callback
    onSelect && onSelect(toggleKey, evt);
  };

  // expand all tab
  useEffect(() => {
    if (expanded) {
      const active = {} as { [key: number]: boolean };
      for (const i in listEventKey.current) {
        active[i] = true;
      }
      activeKeySet(active);
    }
  }, [expanded, listEventKey.current]);

  return (
    <AccordionContext.Provider
      value={{
        listKeys,
        generateKey,
        activeKey,
        lastActiveKey: lastActiveKey.current,
        toggleKey: updateCollapsing,
        collapsingState,
      }}
    >
      {createElement(
        as || "div",
        { ref, className, style, css, ...remainedProps },
        children
      )}
    </AccordionContext.Provider>
  );
});

export default Accordion;
