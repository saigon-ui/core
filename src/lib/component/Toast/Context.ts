import { createContext } from "react";
import { ToastRef } from ".";

type ToastContainerType = {
  createToast: (
    alloc: (ref: React.RefObject<ToastRef>) => React.ReactElement
  ) => void;
  unmountToast: () => void;
  closingToast: () => void;
};

export const initData1 = {
  createToast: () => {},
  unmountToast: () => {},
  closingToast: () => {},
};

export const ToastContainerContext =
  createContext<ToastContainerType>(initData1);
ToastContainerContext.displayName = "ToastContainer.Context";

type ToastType = {
  btnCloseWhite: boolean;
  closeFunc: () => void;
};

export const initData2 = {
  btnCloseWhite: false,
  closeFunc: () => {},
};

export const ToastContext = createContext<ToastType>(initData2);
ToastContext.displayName = "Toast.Context";
