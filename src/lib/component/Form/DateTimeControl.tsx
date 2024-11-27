import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import moment from "moment";
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DateTimeControlProps, DateTimeControlType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";
import { IconCalendarMonth, IconClose } from "../Icon";

type FieldHL = "Y" | "M" | "D" | "H" | "m" | "s" | "unset";
type SelectionRangeFmtType = {
  from: number;
  to: number;
  fmt: string;
  prev: FieldHL;
  next: FieldHL;
  clearFunc: (val: moment.Moment) => void;
};

function InitSelectionRangeFmt(format: string): {
  good: boolean;
  ranger: { [key in FieldHL]: SelectionRangeFmtType };
} {
  const ranger = {
    Y: {
      from: 0,
      to: 0,
      fmt: "YYYY",
      prev: "unset" as FieldHL,
      next: "M" as FieldHL,
      clearFunc: (m: moment.Moment) => m.year(0),
    },
    M: {
      from: 0,
      to: 0,
      fmt: "MM",
      prev: "Y" as FieldHL,
      next: "D" as FieldHL,
      clearFunc: (m: moment.Moment) => m.month(0), // Accepts numbers from 0 to 11
    },
    D: {
      from: 0,
      to: 0,
      fmt: "DD",
      prev: "M" as FieldHL,
      next: "H" as FieldHL,
      clearFunc: (m: moment.Moment) => m.date(1), // Accepts numbers from 1 to 31
    },
    H: {
      from: 0,
      to: 0,
      fmt: "HH",
      prev: "D" as FieldHL,
      next: "m" as FieldHL,
      clearFunc: (m: moment.Moment) => m.hour(0), // Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
    },
    m: {
      from: 0,
      to: 0,
      fmt: "mm",
      prev: "H" as FieldHL,
      next: "s" as FieldHL,
      clearFunc: (m: moment.Moment) => m.minute(0), // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hour.
    },
    s: {
      from: 0,
      to: 0,
      fmt: "ss",
      prev: "m" as FieldHL,
      next: "unset" as FieldHL,
      clearFunc: (m: moment.Moment) => m.second(0), // // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minute.
    },
    unset: {
      from: 9999,
      to: -9999,
      fmt: "",
      prev: "unset" as FieldHL,
      next: "unset" as FieldHL,
      clearFunc: () => {},
    },
  };
  let good = false;
  if (/^YYYY.*MM.*DD(.*HH.*mm(.*ss)?)?$/.test(format)) {
    good = true;

    ranger.Y.next = "M";
    ranger.M.next = "D";
    ranger.D.next = "H";
    ranger.H.next = "m";
    ranger.m.next = "s";
    ranger.s.next = "unset";

    ranger.Y.prev = "unset";
    ranger.M.prev = "Y";
    ranger.D.prev = "M";
    ranger.H.prev = "D";
    ranger.m.prev = "H";
    ranger.s.prev = "m";
  } else if (/^MM.*DD.*YYYY(.*HH.*mm(.*ss)?)?$/.test(format)) {
    good = true;

    ranger.M.next = "D";
    ranger.D.next = "Y";
    ranger.Y.next = "H";
    ranger.H.next = "m";
    ranger.m.next = "s";
    ranger.s.next = "unset";

    ranger.M.next = "unset";
    ranger.D.next = "M";
    ranger.Y.next = "D";
    ranger.H.prev = "Y";
    ranger.m.prev = "H";
    ranger.s.prev = "m";
  } else if (/^DD.*MM.*YYYY(.*HH.*mm(.*ss)?)?$/.test(format)) {
    good = true;

    ranger.D.next = "M";
    ranger.M.next = "Y";
    ranger.Y.next = "H";
    ranger.H.next = "m";
    ranger.m.next = "s";
    ranger.s.next = "unset";

    ranger.D.prev = "unset";
    ranger.M.prev = "D";
    ranger.Y.prev = "M";
    ranger.H.prev = "Y";
    ranger.m.prev = "H";
    ranger.s.prev = "s";
  } else if (/^YYYY.*MMM$/.test(format)) {
    good = true;

    ranger.Y.next = "M";
    ranger.M.next = "unset";
    ranger.D.next = "unset";
    ranger.H.next = "unset";
    ranger.m.next = "unset";
    ranger.s.next = "unset";

    ranger.Y.prev = "unset";
    ranger.M.prev = "Y";
    ranger.D.prev = "unset";
    ranger.H.prev = "unset";
    ranger.m.prev = "unset";
    ranger.s.prev = "unset";

    ranger.M.fmt = "MMM";
  } else if (/^MMM.*YYYY$/.test(format)) {
    good = true;

    ranger.M.next = "Y";
    ranger.Y.next = "unset";
    ranger.D.next = "unset";
    ranger.H.next = "unset";
    ranger.m.next = "unset";
    ranger.s.next = "unset";

    ranger.M.prev = "unset";
    ranger.Y.prev = "M";
    ranger.D.prev = "unset";
    ranger.H.prev = "unset";
    ranger.m.prev = "unset";
    ranger.s.prev = "unset";

    ranger.M.fmt = "MMM";
  }

  if (good) {
    for (const [k, obj] of Object.entries(ranger)) {
      if (k == "unset") continue;

      let idx = format.indexOf(obj.fmt);
      if (idx == -1) {
        obj.from = format.length;
        obj.to = format.length;
      } else {
        obj.from = idx;
        obj.to = idx + obj.fmt.length;
      }
    }
  }
  return { good, ranger };
}

function NumDateOfMonth(year: number, month: number) {
  if (month == 2) {
    const leapYear = year % 4 == 0 && year % 100 != 0;
    return leapYear ? 29 : 28;
  }

  return [1, 3, 5, 7, 8, 10, 12].indexOf(month) > 0 ? 31 : 30;
}

function Clamp(val: number, min: number, max: number) {
  return Math.max(Math.min(val, max), min);
}

function PropsDestructor(
  next: DateTimeControlProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    size,
    isValid,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  typeof size === "string" && (classNames[`col-form-label-${size}`] = true);
  if (isValid !== undefined) {
    classNames["is-valid"] = isValid;
    classNames["is-invalid"] = !isValid;
  }

  return [["form-control", classNames], rest];
}

const DateTimeControl: DateTimeControlType = forwardRef<
  HTMLElement,
  DateTimeControlProps
>((props, ref: any) => {
  const {
    as,
    className,
    css,
    style,
    remainedProps: rest,
  } = usePropsDestructor(props, PropsDestructor);

  // Bootstrap CSS required placeholder value for the floating label to work
  let {
    value,
    defaultValue,
    format,
    required,
    placeholder,
    onChange,
    onClear,
    onClick,

    ...remainedProps
  } = rest;

  placeholder = typeof placeholder === "undefined" ? "" : placeholder;
  format = format || "YYYY-MM-DD";
  required = required === undefined ? true : required;

  const domRef = useRef<HTMLInputElement>(null);

  const initStateDate = value || defaultValue || new Date();
  const [date, setDate] = useState<Date>(initStateDate);
  const [inputValue, setInputValue] = useState(
    required ? moment(initStateDate).format(format) : ""
  );
  // highlight field for direct typing mode
  const [fieldHL, setFieldHL] = useState<FieldHL>("unset");
  const [valueHL, setValueHL] = useState("");
  const lastKeyDown = useRef(0);

  useEffect(() => {
    if (value) {
      const d = moment(value);
      setDate(d.toDate());
      setInputValue(d.format(format));
    }
  }, [value]);

  const selectionRangeFmt = useMemo(
    () => InitSelectionRangeFmt(format),
    [format]
  );

  const isActiveTypingHelper = useMemo(
    () => inputValue == moment(date).format(format),
    [date, format, inputValue]
  );

  const handleSetUndefined = useCallback(() => {
    if (required) {
      const d = moment();
      setDate(d.toDate());
      setInputValue(d.format(format));

      onClear && onClear(d.toDate());
      onChange && onChange(d.toDate());
    } else {
      setInputValue("");

      onClear && onClear(undefined);
      onChange && onChange(undefined);
    }
  }, [required]);

  const setSelectionRage = useCallback(
    (range: SelectionRangeFmtType) => {
      if (
        !domRef.current ||
        !selectionRangeFmt.good ||
        !isActiveTypingHelper ||
        domRef.current.selectionStart == null // don't mix between 0 and null
      )
        return;

      setTimeout(() => {
        const len = inputValue.length;
        const from = Math.min(range.from, len);
        const to = Math.min(range.to, len);
        domRef.current!.setSelectionRange(from, to);
      }, 33);
    },
    [inputValue, isActiveTypingHelper, selectionRangeFmt]
  );

  const handleInputChange = useCallback(
    (evt: any) => {
      const old = moment(date);
      const setFunc = (d: moment.Moment, moveNextField: boolean = false) => {
        setDate(d.toDate());
        setInputValue(d.format(format));

        let fd = moveNextField
          ? selectionRangeFmt.ranger[fieldHL].next
          : fieldHL;
        if (moveNextField) {
          setValueHL("");
          setFieldHL(fd);
        }
        setSelectionRage(selectionRangeFmt.ranger[fd]);

        onChange && onChange(d.toDate());
      };

      let n, s;
      switch (fieldHL) {
        case "Y":
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 4);
          n = Clamp(Number(s), 0, 9999);

          old.year(n);
          setValueHL(s);
          setFunc(old, s.length >= 4);
          break;
        case "M": // Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the year.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 1, 12);

          old.month(n - 1);
          setValueHL(String(lastKeyDown.current));
          setFunc(old, s.length >= 2);
          break;
        case "D": // Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the months.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 1, NumDateOfMonth(old.year(), old.month() + 1));

          old.date(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;
        case "H": // Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 0, 23);

          old.hour(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;

        case "m": // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hour.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 0, 59);

          old.minute(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;
        case "s": // Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minute.
          s = `${valueHL}${lastKeyDown.current}`.substring(0, 2);
          n = Clamp(Number(s), 0, 59);

          old.second(n);
          setValueHL(s);
          setFunc(old, s.length >= 2);
          break;
        case "unset":
        default:
          if (evt.target.value?.length === format.length) {
            const customDate = moment(evt.target.value, format);
            if (customDate.isValid()) {
              setDate(customDate.toDate());

              setValueHL("");
              setFieldHL("Y");

              setSelectionRage(selectionRangeFmt.ranger["Y"]);

              onChange && onChange(customDate.toDate());
            }
          }

          setInputValue(evt.target.value);
          break;
      }
    },
    [fieldHL, valueHL, date, selectionRangeFmt]
  );

  const handleInputKeyDown = useCallback(
    (evt: any) => {
      if (!isActiveTypingHelper) return;

      const key = evt.key.toUpperCase();

      if ((key == "C" || key == "V") && (evt.metaKey || evt.ctrlKey)) {
        return; // shortcut to copy & paste
      }
      // Short cut ctrl + a
      else if (key == "A" && (evt.metaKey || evt.ctrlKey)) {
        setValueHL("");
        setFieldHL("unset");
      }
      // move to the next field
      else if (key == "ENTER") {
        const fd = selectionRangeFmt.ranger[fieldHL].next;
        setValueHL("");
        setFieldHL(fd);
        setSelectionRage(selectionRangeFmt.ranger[fd]);
      }
      // moving left right
      else if (key == "TAB") {
        if (evt.shiftKey) {
          const prev = selectionRangeFmt.ranger[fieldHL].prev;
          if (prev !== "unset") {
            setValueHL("");
            setFieldHL(prev);
            setSelectionRage(selectionRangeFmt.ranger[prev]);

            evt.preventDefault();
            evt.stopPropagation();
          }
        } else {
          const next = selectionRangeFmt.ranger[fieldHL].next;
          if (next !== "unset") {
            setValueHL("");
            setFieldHL(next);
            setSelectionRage(selectionRangeFmt.ranger[next]);

            evt.preventDefault();
            evt.stopPropagation();
          }
        }
      } else if (key == "HOME") {
        setValueHL("");
        setFieldHL("Y");
        setSelectionRage(selectionRangeFmt.ranger["Y"]);
      }
      // clean up field
      else if (key == "DELETE" || key == "BACKSPACE") {
        // when fieldHL == "unset", trick as normal input like text field
        if (fieldHL != "unset") {
          const old = moment(date);
          selectionRangeFmt.ranger[fieldHL].clearFunc(old);

          setDate(old.toDate());
          setInputValue(old.format(format));

          setValueHL("");
          setSelectionRage(selectionRangeFmt.ranger[fieldHL]);

          onChange && onChange(old.toDate());

          evt.preventDefault();
          evt.stopPropagation();
        }
      }
      // allow number digit number
      else if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(evt.key) > -1
      ) {
        lastKeyDown.current = Number(evt.key);
      }
      // allow custom cursor moving by arrow keys
      else if (key == "ARROWLEFT" || key == "ARROWRIGHT") {
        setValueHL("");
        setFieldHL("unset");
      } else {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    [fieldHL, date, selectionRangeFmt, isActiveTypingHelper]
  );

  const handleInputFocus = useCallback(() => {
    if (!domRef.current || !selectionRangeFmt.good || !isActiveTypingHelper)
      return;

    const start = domRef.current.selectionEnd || 0;

    for (const [k, v] of Object.entries(selectionRangeFmt.ranger)) {
      const fd = k as FieldHL;
      if (fd != "unset" && fieldHL != fd && start >= v.from && start <= v.to) {
        setFieldHL(fd);
        setSelectionRage(selectionRangeFmt.ranger[fd]);
        setValueHL("");
        break;
      }
    }
  }, [isActiveTypingHelper, fieldHL, selectionRangeFmt]);

  useEffect(() => {
    const inputCSS = [];
    if (endIconRef.current) {
      inputCSS.push(
        `padding-right: ${endIconRef.current.getBoundingClientRect().width}px;`
      );
    }
    setDomStyle(inputCSS);
  }, []);
  const endIconRef = useRef<HTMLDivElement>(null);
  const [domStyle, setDomStyle] = useState<string[]>([]);
  const [domHover, setDomHover] = useState(false);
  const handleOnBlur = useCallback(() => {
    if (!isActiveTypingHelper) {
      const d = moment(date);
      if (required) {
        setDate(d.toDate());
        setInputValue(d.format(format));

        onChange && onChange(d.toDate());
      } else {
        const val = moment(inputValue, format);
        onChange && onChange(val.isValid() ? d.toDate() : undefined);
      }
    }
    setDomHover(false);
  }, [required, inputValue, date, isActiveTypingHelper]);

  const handleOnPaste = useCallback(
    (evt: any) => {
      const clipboardData: DataTransfer =
        evt.clipboardData || (window as any).clipboardData;
      if (clipboardData && clipboardData.types.indexOf("text/plain") >= 0) {
        const str = clipboardData.getData("Text");
        const d = moment(str || "", format);
        if (d.isValid()) {
          setDate(d.toDate());
          setInputValue(d.format(format));

          onChange && onChange(d.toDate());

          evt.preventDefault();
          evt.stopPropagation();
        }

        setValueHL("");
        setFieldHL("unset");
      }
    },
    [format]
  );

  return (
    <div
      ref={ref}
      className="ico-control"
      onClick={onClick}
      onFocus={() => setDomHover(true)}
      onBlur={handleOnBlur}
    >
      {createElement(as || "input", {
        ref: domRef,
        className,
        css: cssFunc([css, ...domStyle, "width: 100%"]),
        style,
        placeholder: format,
        required,
        ...remainedProps,
        // onFocus={handleInputFocus} working not well on selectionEnd, onPointerUp yield more precise selectionEnd
        value: inputValue,
        onChange: handleInputChange,
        onPointerUp: handleInputFocus,
        onKeyDown: handleInputKeyDown,
        onPaste: handleOnPaste,
      })}
      {Boolean(domRef.current) && [
        <div
          key="ico1"
          ref={endIconRef}
          className={classNames("ico end", {
            hover: domHover,
          })}
        >
          <IconCalendarMonth />
        </div>,
        <div
          key="ico2"
          className={classNames("ico end hoverable", {
            hover: domHover,
          })}
          onClick={handleSetUndefined}
          style={{ cursor: "pointer" }}
        >
          <IconClose />
        </div>,
      ]}
    </div>
  );
});

export default DateTimeControl;
