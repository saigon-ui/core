import { createContext } from "react";
import { ModalRef } from ".";

type ToastContainerType = {
  createModal: (
    alloc: (ref: React.RefObject<ModalRef>) => React.ReactElement
  ) => void;
  unmountModal: () => void;
};

export const initData1 = {
  createModal: () => {},
  unmountModal: () => {},
};

export const ModalContainerContext =
  createContext<ToastContainerType>(initData1);
ModalContainerContext.displayName = "ModalContainer.Context";

type ModalType = {
  verticalCentered: boolean;
  scrollable: boolean;
  size: string;
  fullscreen: boolean | string;
  closeFunc: () => void;
};

export const initData2 = {
  verticalCentered: false,
  scrollable: false,
  size: "",
  fullscreen: false,
  closeFunc: () => {},
};

export const ModalContext = createContext<ModalType>(initData2);
ModalContext.displayName = "Modal.Context";
