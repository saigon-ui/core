import { createContext } from "react";

export type ProgressContextType = {
  now: number;
  min: number;
  max: number;
  variant: any;
  striped: boolean;
  animated: boolean;
  multiple: boolean;
};

export const initData: ProgressContextType = {
  now: 0,
  min: 0,
  max: 0,
  variant: "primary",
  striped: false,
  animated: false,
  multiple: false,
};

const ProgressContext = createContext<ProgressContextType>(initData);
ProgressContext.displayName = "Progress.Context";

export default ProgressContext;
