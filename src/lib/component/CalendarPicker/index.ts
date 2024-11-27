import { DateTimePickerProp, ForwardRefComponent } from "../../saigon.types";
import { DivProps } from "../Div";
import { DateTimeControlProps } from "../Form";
import DateTimePickerFC from "./DateTimePicker";
import StaticDateTimePickerFC from "./StaticDateTimePicker";

export type DateTimePickerProps = Omit<DateTimePickerProp, "onChange"> &
  DateTimeControlProps;

export type DateTimePickerRef = {
  show: () => void;
  hide: () => void;
};

export type DateTimePickerType = ForwardRefComponent<
  DateTimePickerRef,
  DateTimePickerProps
>;

export type StaticDateTimePickerProps = DateTimePickerProp & DivProps;

export type StaticDateTimePickerType = ForwardRefComponent<
  HTMLElement,
  StaticDateTimePickerProps
>;

const DateTimePicker = DateTimePickerFC;
DateTimePicker.displayName = "DateTimePicker";

const StaticDateTimePicker = StaticDateTimePickerFC;
StaticDateTimePicker.displayName = "StaticDatePicker";

export { DateTimePicker, StaticDateTimePicker };
