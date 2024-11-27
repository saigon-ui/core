import { createContext } from "react";
import { OffcanvasRef } from ".";

type OffcanvasContainerType = {
  createOffcanvas: (
    alloc: (ref: React.RefObject<OffcanvasRef>) => React.ReactElement
  ) => void;
  unmountOffcanvas: () => void;
};

export const OffcanvasContainerContext = createContext<OffcanvasContainerType>({
  createOffcanvas: () => {},
  unmountOffcanvas: () => {},
});
OffcanvasContainerContext.displayName = "OffcanvasContainer.Context";

export type OffcanvasContextType = {
  state: {
    isShow: boolean;
    isShowing: boolean;
    isExisting: boolean;
  };
  setShow: (val: boolean) => void;
};

export const OffcanvasContext = createContext<OffcanvasContextType>({
  state: undefined as any,
  setShow: undefined as any,
});
OffcanvasContext.displayName = "Offcanvas.Context";
