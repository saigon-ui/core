import { usePropsDestructor } from "../../../base";
import classNames from "classnames";
import React, {
  createElement,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { DateTimePickerProps } from "..";
import { useResponsiveSize } from "../../../base/theme";
import { ThemeColor } from "../../../saigon.types";
import CalendarPickerContext from "./Context";
import DateBlock from "./DateBlock";
import MonthBlock from "./MonthBlock";
import TimeBlock from "./TimeBlock";
import YearSheet from "./YearBlock";

export type MonoPickerProp = DateTimePickerProps;
export type MonoPickerRef = {
  setDate: (val: Date) => void;
  setMode: (mode: string) => void;
};

const MonoPicker = forwardRef<MonoPickerRef, MonoPickerProp>(
  (props, ref: any) => {
    const rps = useResponsiveSize();

    const {
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props);

    let {
      // CalendarPickerProp
      variant,
      outline,
      size,
      dismissible,
      disabled,
      disabledDate,
      enableDate,
      extraHeader,
      extraFooter,
      animation,
      animationTime,
      // DateTimePickerProp
      todayButton,
      pickerMode,
      clock12Hour,
      disabledHour,
      disabledMinute,
      disabledSecond,
      value,
      defaultValue,

      // callbacks
      onChange,
      onOkay,
      ...remainedProps
    } = rest;

    animationTime = animationTime || 400;
    pickerMode = pickerMode || "Date";
    variant = rps.getResponsive<ThemeColor>(variant || "primary");
    outline = rps.getResponsive<boolean>(
      outline === undefined ? true : outline
    );

    const [mode, setMode] = useState(pickerMode);
    const [date, setDate] = useState<Date>(defaultValue || new Date());
    const eventTarget = useRef({ dispatcher: new EventTarget() });

    useImperativeHandle(ref, () => ({
      setDate,
      setMode,
    }));

    useEffect(() => {
      value && setDate(new Date(value));
    }, [value]);

    useEffect(() => setMode(pickerMode), [pickerMode]);

    useEffect(() => {
      const handleClickHeaderMonth = () => {
        setMode("Month");
      };
      const handleClickHeaderYear = () => {
        setMode("Year");
      };

      eventTarget.current.dispatcher.addEventListener(
        "click-header-month",
        handleClickHeaderMonth
      );
      eventTarget.current.dispatcher.addEventListener(
        "click-header-year",
        handleClickHeaderYear
      );

      return () => {
        eventTarget.current.dispatcher.removeEventListener(
          "click-header-month",
          handleClickHeaderMonth
        );
        eventTarget.current.dispatcher.removeEventListener(
          "click-header-year",
          handleClickHeaderYear
        );
      };
    }, []);

    const handleSetDate = useCallback(
      (val: Date) => {
        setDate(new Date(val));
        onChange && onChange(new Date(val));
      },
      [onChange]
    );

    const handleClickToday = useCallback(() => {
      const today = new Date();
      if (today.getTime() != date.getTime()) {
        handleSetDate(today);
      }

      eventTarget.current.dispatcher.dispatchEvent(
        new CustomEvent("click-today")
      );
    }, [date]);

    const handleClickOkay = useCallback(
      (event: any) => {
        onOkay && onOkay(date, event);
      },
      [onOkay, date]
    );

    return (
      <CalendarPickerContext.Provider
        value={{
          eventTarget: eventTarget.current.dispatcher,
          variant,
          outline,
          size: rps.getResponsive(size),
          date,
          setDate: handleSetDate,
        }}
      >
        {createElement(
          "div",
          {
            className: classNames(className, `date-time-picker btn-${variant}`),
            css,
            style,
            ...remainedProps,
          },
          [
            <div key="body" className="body-block">
              {
                /* Date Block */
                (mode == "DateTime" || mode == "Date") && (
                  <DateBlock animationTime={animationTime} />
                )
              }

              {
                /* Month Block */
                mode == "Month" && (
                  <MonthBlock
                    animationTime={animationTime}
                    onSelected={() => {
                      if (mode != pickerMode) setMode(pickerMode);
                    }}
                  />
                )
              }

              {
                /* Time Block */
                mode == "Year" && (
                  <YearSheet
                    onSelected={() => {
                      if (mode != pickerMode) setMode(pickerMode);
                    }}
                  />
                )
              }

              {
                /* Time Block */
                (mode == "DateTime" || mode == "Time") && (
                  <TimeBlock
                    clock12Hour={Boolean(clock12Hour)}
                    disabledHour={Boolean(disabledHour)}
                    disabledMinute={Boolean(disabledMinute)}
                    disabledSecond={Boolean(disabledSecond)}
                  />
                )
              }
            </div>,
            <div key="footer" className="footer">
              <button
                className={`btn btn${outline ? "-outline" : ""}-${variant} ${
                  size ? "btn-" + size : ""
                }`}
                onClick={handleClickToday}
              >
                Today
              </button>
              <button
                className={`btn btn${outline ? "-outline" : ""}-${variant} ${
                  size ? "btn-" + size : ""
                }`}
                onClick={handleClickOkay}
              >
                OK
              </button>
            </div>,
            <React.Fragment key="children">{children}</React.Fragment>,
          ]
        )}
      </CalendarPickerContext.Provider>
    );
  }
);

export default MonoPicker;
