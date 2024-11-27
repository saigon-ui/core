import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CalendarPickerContext from "./Context";

type TimeBlockProps = {
  clock12Hour: boolean;
  disabledHour: boolean;
  disabledMinute: boolean;
  disabledSecond: boolean;
};

const TimeBlock: FC<TimeBlockProps> = ({
  clock12Hour,
  disabledHour,
  disabledMinute,
  disabledSecond,
}) => {
  const ctx = useContext(CalendarPickerContext);
  const bodyRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [periodAM, setPeriodAM] = useState(ctx.date.getHours() < 12);

  const { spanHeight, cellHeight } = useMemo(() => {
    let spanHeight = 1,
      cellHeight = 1;
    if (bodyRef.current && hourRef.current) {
      const cells = Array.from(hourRef.current.getElementsByClassName("cell"));
      cellHeight = Math.max(
        ...cells
          .filter((a) => a.className == "cell") // filter .active cuz it make incorrect height due to CSS-border
          .map((a) => a.getBoundingClientRect().height)
      );
      spanHeight = bodyRef.current.getBoundingClientRect().height - cellHeight;
    }
    return { spanHeight, cellHeight };
  }, [bodyRef.current, hourRef.current]);

  useEffect(() => {
    if (hourRef.current) {
      let hours = ctx.date.getHours();
      hours = clock12Hour ? hours % 12 : hours;
      const top = cellHeight * hours;
      hourRef.current.scroll({ top, behavior: "smooth" });
    }

    if (minuteRef.current) {
      const top = cellHeight * ctx.date.getMinutes();
      minuteRef.current.scroll({ top, behavior: "smooth" });
    }

    if (secondRef.current) {
      const top = cellHeight * ctx.date.getSeconds();
      secondRef.current.scroll({ top, behavior: "smooth" });
    }
  }, [ctx.date]);

  const handleClickCell = useCallback(
    (code: string, val: number) => {
      const d = new Date(ctx.date);
      if (code == "h" && !disabledHour) {
        val = clock12Hour ? (periodAM ? val : val + 12) : val;
        d.setHours(val);

        if (hourRef.current) {
          const top = cellHeight * val;
          hourRef.current.scroll({ top, behavior: "smooth" });
        }
      } else if (code == "m" && !disabledMinute) {
        d.setMinutes(val);

        if (minuteRef.current) {
          const top = cellHeight * val;
          minuteRef.current.scroll({ top, behavior: "smooth" });
        }
      } else if (code == "s" && !disabledSecond) {
        d.setSeconds(val);

        if (secondRef.current) {
          const top = cellHeight * val;
          secondRef.current.scroll({ top, behavior: "smooth" });
        }
      }
      ctx.setDate(d);
    },
    [
      ctx.date,
      cellHeight,
      clock12Hour,
      periodAM,
      disabledHour,
      disabledMinute,
      disabledSecond,
    ]
  );

  const handleClickPeriodFmt = useCallback(() => {
    const d = new Date(ctx.date);

    let hours = d.getHours();
    if (hours < 12) hours += 12;
    else hours -= 12;
    d.setHours(hours);

    ctx.setDate(d);
    setPeriodAM(hours < 12);
  }, [ctx.date]);

  function printTime(val: number) {
    let str = val.toFixed(0);
    return str.length == 1 ? "0" + str : str;
  }

  function Clock(props: {
    _12H: boolean;
    periodAM: boolean;
    onClick: () => void;
  }) {
    if (props._12H) {
      const hours = ctx.date.getHours() % 12 || 12;

      return (
        <h5 className="hour12" onClick={props.onClick}>
          <span>
            {`${printTime(hours)}:${printTime(ctx.date.getMinutes())}`}
          </span>
          <label>{props.periodAM ? "AM" : "PM"}</label>
        </h5>
      );
    }

    return (
      <h5>{`${printTime(ctx.date.getHours())}:${printTime(
        ctx.date.getMinutes()
      )}:${printTime(ctx.date.getSeconds())}`}</h5>
    );
  }

  const curHour = clock12Hour ? ctx.date.getHours() % 12 : ctx.date.getHours();
  const curMinute = ctx.date.getMinutes();
  const curSecond = ctx.date.getSeconds();

  return (
    <div className="time-block">
      <div className="header">
        <Clock
          _12H={clock12Hour}
          periodAM={periodAM}
          onClick={handleClickPeriodFmt}
        />
      </div>
      <div ref={bodyRef} className="time-body">
        <div
          ref={hourRef}
          className={`time-col${disabledHour ? " disabled" : ""}`}
        >
          {Array.from(new Array(clock12Hour ? 12 : 24).keys()).map((i) => (
            <div
              key={i}
              className={`cell${i == curHour ? " active" : ""}`}
              onClick={() => handleClickCell("h", i)}
            >
              {printTime(i)}
            </div>
          ))}
          <div style={{ pointerEvents: "none", height: `${spanHeight}px` }} />
        </div>
        <div
          ref={minuteRef}
          className={`time-col bcenter${disabledMinute ? " disabled" : ""}`}
        >
          {Array.from(new Array(60).keys()).map((i) => (
            <div
              key={i}
              className={`cell${i == curMinute ? " active" : ""}`}
              onClick={() => handleClickCell("m", i)}
            >
              {printTime(i)}
            </div>
          ))}
          <div style={{ pointerEvents: "none", height: `${spanHeight}px` }} />
        </div>
        <div
          ref={secondRef}
          className={`time-col${disabledSecond ? " disabled" : ""}`}
        >
          {Array.from(new Array(60).keys()).map((i) => (
            <div
              key={i}
              className={`cell${i == curSecond ? " active" : ""}`}
              onClick={() => handleClickCell("s", i)}
            >
              {printTime(i)}
            </div>
          ))}
          <div style={{ pointerEvents: "none", height: `${spanHeight}px` }} />
        </div>
      </div>
    </div>
  );
};

export default TimeBlock;
