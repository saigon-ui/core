/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-prototype-builtins */
import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { NextID } from ".";
import { ModalRef } from "../component/Modal";
import { ModalContainerContext } from "../component/Modal/Context";
import { OffcanvasRef } from "../component/Offcanvas";
import { OffcanvasContainerContext } from "../component/Offcanvas/Context";
import { ToastRef } from "../component/Toast";
import ToastContainer from "../component/Toast/Container";
import { ToastContainerContext } from "../component/Toast/Context";
import { ThemeOptions } from "../saigon.types";
import { DefaultTheme } from "./constants";
import CSSWrapper from "./CSSWrapper";
import { validateToastRef } from "./runtimeCheck";
import { extendTheme } from "./theme";

export const ThemeEvents = new EventTarget();

export type ThemeContext = {
  theme: ThemeOptions;
  _internal: {
    themeUpdate: (val: ThemeOptions) => void;
  };
};

export const SaigonUIContext = createContext<ThemeContext>({
  theme: DefaultTheme,
  _internal: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    themeUpdate: (_val: ThemeOptions) => {},
  },
});

type SaigonProviderType = FC<{ theme?: ThemeOptions; children?: any }>;

export const SaigonProvider: SaigonProviderType = (props) => {
  const [theme, themeUpdate] = useState(extendTheme(DefaultTheme));

  useEffect(() => {
    const onResize = (event: any) => {
      ThemeEvents.dispatchEvent(new CustomEvent(event.type));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // modal compoments
  const [toastList, setToastList] = useState<
    {
      ref: React.RefObject<ToastRef>;
      dom: React.ReactElement;
    }[]
  >([]);
  const [modalList, setModalList] = useState<
    {
      ref: React.RefObject<ModalRef>;
      dom: React.ReactElement;
    }[]
  >([]);
  const [offcanvasList, setOffcanvasList] = useState<
    {
      ref: React.RefObject<OffcanvasRef>;
      dom: React.ReactElement;
    }[]
  >([]);

  //======================================
  // Toasts
  //======================================
  const createToast = useCallback(
    (alloc: (ref: React.RefObject<ToastRef>) => React.ReactElement) => {
      const ref = React.createRef<ToastRef>();
      setToastList((state) => [
        ...state,
        {
          ref,
          dom: <React.Fragment key={NextID()}>{alloc(ref)}</React.Fragment>,
        },
      ]);
    },
    []
  );

  const unmountToast = useCallback(() => {
    // remove toast that's at the end of life
    setToastList((state) => [
      ...state.filter((e) => {
        const keep = !e.ref.current?.unmounted();
        if (keep) e.ref.current?.translate("");
        return keep;
      }),
    ]);
  }, []);

  const closingToast = useCallback(() => {
    let translateY = 0;
    for (const e of toastList) {
      const ref = e.ref.current!;
      if (ref) {
        if (translateY > 0) {
          ref.translate(`0 -${translateY}px`);
        }
        if (ref.closed() && ref.domRef.current) {
          translateY += ref.domRef.current.getBoundingClientRect().height + 24;
        }
      }
    }
  }, [toastList]);

  //======================================
  // Modals
  //======================================
  const createModal = useCallback(
    (alloc: (ref: React.RefObject<ModalRef>) => React.ReactElement) => {
      const ref = React.createRef<ModalRef>();
      setModalList((state) => [
        ...state,
        {
          ref,
          dom: <React.Fragment key={NextID()}>{alloc(ref)}</React.Fragment>,
        },
      ]);
    },
    []
  );

  const unmountModal = useCallback(() => {
    // remove toast that's at the end of life
    setModalList((state) => [
      ...state.filter((e) => !e.ref.current?.unmounted()),
    ]);
  }, []);

  //======================================
  // Offcanvas
  //======================================
  const createOffcanvas = useCallback(
    (alloc: (ref: React.RefObject<OffcanvasRef>) => React.ReactElement) => {
      const ref = React.createRef<OffcanvasRef>();
      setOffcanvasList((state) => [
        ...state,
        {
          ref,
          dom: <React.Fragment key={NextID()}>{alloc(ref)}</React.Fragment>,
        },
      ]);
    },
    []
  );

  const unmountOffcanvas = useCallback(() => {
    // remove toast that's at the end of life
    setOffcanvasList((state) => [
      ...state.filter((e) => !e.ref.current?.unmounted()),
    ]);
  }, []);

  // do additional runtime check
  useEffect(() => {
    toastList.forEach(validateToastRef);
    modalList.forEach(validateToastRef);
    offcanvasList.forEach(validateToastRef);
  }, [toastList, modalList, offcanvasList]);

  return (
    // Saigon's theme global context
    <SaigonUIContext.Provider value={{ theme, _internal: { themeUpdate } }}>
      {/* Toasts global context */}
      <ToastContainerContext.Provider
        value={{ createToast, unmountToast, closingToast }}
      >
        <ModalContainerContext.Provider value={{ createModal, unmountModal }}>
          <OffcanvasContainerContext.Provider
            value={{ createOffcanvas, unmountOffcanvas }}
          >
            {/* Shared css for transition across the page */}
            <CSSWrapper theme={theme}>
              {props.children}

              {/* Global toast container */}
              <ToastContainer placement="top-end">
                {toastList.map((a) => a.dom)}
              </ToastContainer>

              {/* Global toast container */}
              <div>{modalList.map((a) => a.dom)}</div>

              {/* Global Offcanvas container */}
              <div>{offcanvasList.map((a) => a.dom)}</div>
            </CSSWrapper>
          </OffcanvasContainerContext.Provider>
        </ModalContainerContext.Provider>
      </ToastContainerContext.Provider>
    </SaigonUIContext.Provider>
  );
};
