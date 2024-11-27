import classNames from "classnames";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { OffcanvasProps, OffcanvasRef, OffcanvasType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { OffcanvasContext } from "./Context";

function PropsDestructor(
  next: OffcanvasProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    placement,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  classNames[`offcanvas-${placement || "start"}`] = true;

  return [["offcanvas", classNames], rest];
}

const Offcanvas: OffcanvasType = forwardRef<OffcanvasRef, OffcanvasProps>(
  (props, ref) => {
    const [state, setShowState] = useState({
      isShow: false,
      isShowing: false,
      isExisting: false,
    });
    const store = useRef<{ id: any; domRef: any }>({
      id: 0,
      domRef: undefined,
    });
    const domRef = useRef<HTMLElement>(null);

    let {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);

    let {
      show,
      backdrop,
      keyboard,
      bodyScroll,
      autoFocus,
      enforceFocus,
      restoreFocus,
      onShow,
      onHide,
      onDisplay,
      onEscapeKeyDown,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      ...remainedProps
    } = rest;

    const setShow = useCallback(
      (val: boolean) => {
        let { isShow, isShowing, isExisting } = state;
        if (!isShow && val) {
          isShowing = true;
          isShow = true;
          clearTimeout(store.current.id);
          store.current.id = setTimeout(
            () =>
              setShowState((p) => {
                p.isShowing = false;
                return { ...p };
              }),
            300
          ); // 0.3s is the showing animation duration

          setShowState({ isShow, isShowing, isExisting });
        } else if (isShow && !val) {
          isExisting = true;
          isShow = false;

          clearTimeout(store.current.id);
          store.current.id = setTimeout(
            () =>
              setShowState((p) => {
                p.isExisting = false;
                return { ...p };
              }),
            300
          ); // 0.3s is the showing animation duration

          setShowState({ isShow, isShowing, isExisting });

          if (isShow) onShow && onShow();
          else onHide && onHide();
        }
      },
      [state, onShow, onHide]
    );

    useImperativeHandle(
      ref,
      () => ({
        domRef,
        show: () => setShow(true),
        hide: () => setShow(false),
        toggle: () => setShow(state.isShow),
        isShowed: () => state.isShow,
        unmounted: () => false,
      }),
      [setShow, state]
    );

    useEffect(() => {
      if (
        show !== undefined && // process only `show` props is in controlled state
        state.isShow != show
      ) {
        setShow(show);
      }
    }, [state, show, setShow, onShow, onHide]);

    useEffect(() => {
      console.log(`show: ${show}`);
    }, [show]);

    // show/hide state
    remainedProps["tabIndex"] = "-1";
    if (state.isExisting) {
      className = classNames(className, "show", "hiding");
    } else if (state.isShow) {
      className = classNames(className, state.isShowing ? "showing" : "show");

      // backdrop
      backdrop = typeof backdrop === "undefined" ? true : backdrop;
    }

    // body scrolling
    if (!bodyScroll) {
      // only disable scrolling when having backdrop is enabled
      document.body.style.overflow = state.isShow && backdrop ? "hidden" : "";
    }

    const onClickBackdrop = () => {
      if (backdrop == "static") return;

      // hide on click backdrop
      setShow(false);
    };

    return (
      <OffcanvasContext.Provider value={{ state, setShow }}>
        {createElement(
          as || "div",
          { ref: domRef, className, css, style, ...remainedProps },
          children
        )}
        {state.isShow && backdrop && (
          <div
            onClick={onClickBackdrop}
            className={classNames({
              "offcanvas-backdrop": true,
              fade: true,
              show: !state.isShowing,
            })}
          ></div>
        )}
      </OffcanvasContext.Provider>
    );
  }
);

export default Offcanvas;
