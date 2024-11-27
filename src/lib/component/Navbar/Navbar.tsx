import { forwardRef, useCallback, useRef, useState } from "react";
import { NavbarProps, NavbarType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { NavbarContext } from "./Context";

function PropsDestructor(
  next: NavbarProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    expand,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  typeof expand === "string" && (classNames["navbar-expand-" + expand] = true);

  return [["navbar", classNames], rest];
}

const Navbar: NavbarType = forwardRef<HTMLElement, NavbarProps>(
  (props, ref: any) => {
    const [show, setOpen] = useState(false);
    const [collapsing, setCollapsing] = useState(false);
    const store = useRef<{ id: any }>({ id: 0 });

    const setShow = useCallback((val: boolean) => {
      clearTimeout(store.current.id);

      setCollapsing(true);
      setOpen(val);
      store.current.id = setTimeout(() => {
        setCollapsing(false);
      }, 300); // 0.3s of animation
    }, []);

    const {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);
    const { scroll, ...remainedProps } = rest;

    return (
      <NavbarContext.Provider value={{ show, scroll, collapsing, setShow }}>
        {createElement(
          as || "nav",
          { ref, className, css, style, ...remainedProps },
          children
        )}
      </NavbarContext.Provider>
    );
  }
);

export default Navbar;
