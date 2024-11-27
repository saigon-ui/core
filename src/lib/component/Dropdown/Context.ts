import { AnimationType } from "../../saigon.types";
import { createContext } from "react";

export type DropdownContextType = {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
  animation: AnimationType;
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
  animation: "fade" as AnimationType,
  refs: undefined,
  floatingStyles: undefined,
  getReferenceProps: undefined,
  getFloatingProps: undefined,
  getItemProps: undefined,
  context: undefined,
};

const DropdownContext = createContext<DropdownContextType>(initData);
DropdownContext.displayName = "Dropdown.Context";

export default DropdownContext;
