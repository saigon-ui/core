import { ThemeColor } from "../../../saigon.types";
import { createContext } from "react";

export type CalendarPickerContextType = {
  eventTarget: EventTarget;
  variant: ThemeColor;
  outline: boolean;
  size: string;
  date: Date;
  setDate: (val: Date) => void;
};

export const initData = {
  eventTarget: undefined as any,
  variant: "primary" as ThemeColor,
  outline: true,
  size: "sm",
  date: undefined as any,
  setDate: undefined as any,
};

const CalendarPickerContext =
  createContext<CalendarPickerContextType>(initData);
CalendarPickerContext.displayName = "CalendarPicker.Context";

export default CalendarPickerContext;
