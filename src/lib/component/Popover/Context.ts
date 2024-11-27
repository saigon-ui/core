import { AnimationType } from "../../saigon.types";
import { createContext } from "react";

export type PopoverContextType = {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
  placement: string;
  animation: AnimationType;
  autoDismiss: boolean;
  refs: any;
  floatingStyles: any;
  getReferenceProps: any;
  getFloatingProps: any;
  getItemProps: any;
  context: any;
};

export const initData = {
  isOpen: false,
  setOpen: undefined as any,
  placement: "bottom-middle",
  animation: "fade" as AnimationType,
  autoDismiss: true,
  refs: undefined,
  floatingStyles: undefined,
  getReferenceProps: undefined,
  getFloatingProps: undefined,
  getItemProps: undefined,
  context: undefined,
};

const PopoverContext = createContext<PopoverContextType>(initData);
PopoverContext.displayName = "Popover.Context";

export default PopoverContext;
