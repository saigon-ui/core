import { forwardRef } from "react";
import { StaticDateTimePickerProps, StaticDateTimePickerType } from ".";
import { createElement, usePropsDestructor } from "../../base";
import MonoPicker from "./Picker/MonoPicker";

const StaticDateTimePicker: StaticDateTimePickerType = forwardRef<
  HTMLElement,
  StaticDateTimePickerProps
>((props, ref: any) => {
  const { className, css, style, children, remainedProps } =
    usePropsDestructor(props);

  return (
    <>
      {createElement(MonoPicker, {
        ref,
        className,
        css,
        style,
        ...remainedProps,
      })}
      {children}
    </>
  );
});

export default StaticDateTimePicker;
