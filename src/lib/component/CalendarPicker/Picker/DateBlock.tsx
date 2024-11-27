import classNames from "classnames";
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  IconArrowDropDown,
  IconChevronLeft,
  IconChevronRight,
} from "../../Icon";
import CalendarPickerContext from "./Context";
import DateSheet from "./DateSheet";
import { MonthNames } from "../constant";

const DateBlock: FC<{ animationTime: number }> = ({ animationTime }) => {
  const ctx = useContext(CalendarPickerContext);

  const [firstDateOfMonth, setFirstDateOfMonth] = useState<Date>(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });
  const [transition, setTransition] = useState({
    enable: false,
    nextPage: false,
  });
  const timer = useRef({ timerId: 0 });

  useEffect(() => {
    if (ctx.date) {
      const d = new Date(ctx.date.getTime());
      d.setDate(1);
      setFirstDateOfMonth(d);
    }
  }, [ctx.date]);

  useEffect(() => {
    if (!transition.enable) return;

    clearTimeout(timer.current.timerId);
    timer.current.timerId = setTimeout(() => {
      setTransition({ enable: false, nextPage: false });
    }, animationTime) as any;
  }, [transition.enable, animationTime]);

  const handleClickPrevMonth = useCallback(() => {
    const d = new Date(firstDateOfMonth.getTime());
    d.setMonth(d.getMonth() - 1);
    setFirstDateOfMonth(d);

    setTransition({ enable: true, nextPage: false });
  }, [firstDateOfMonth]);

  const handleClickNextMonth = useCallback(() => {
    const d = new Date(firstDateOfMonth.getTime());
    d.setMonth(d.getMonth() + 1);
    setFirstDateOfMonth(d);

    setTransition({ enable: true, nextPage: true });
  }, [firstDateOfMonth]);

  useEffect(() => {
    const handleClickToday = () => {
      const today = new Date();
      // do some animation when switching date
      const last = new Date(firstDateOfMonth);
      const d = new Date();
      d.setDate(1);
      setFirstDateOfMonth(d);

      // do transition when the two months are different
      if (today.getFullYear() == last.getFullYear()) {
        if (today.getMonth() > last.getMonth()) {
          setTransition({ enable: true, nextPage: true });
        } else if (today.getMonth() < last.getMonth()) {
          setTransition({ enable: true, nextPage: false });
        }
      } else if (today.getFullYear() > last.getFullYear()) {
        setTransition({ enable: true, nextPage: true });
      } else if (today.getFullYear() < last.getFullYear()) {
        setTransition({ enable: true, nextPage: false });
      }
    };
    ctx.eventTarget.addEventListener("click-today", handleClickToday);

    return () =>
      ctx.eventTarget.removeEventListener("click-today", handleClickToday);
  }, [firstDateOfMonth]);

  const style: any = transition.enable
    ? { "--date-time-picker-time": `${animationTime}ms` }
    : undefined;

  return (
    <div className="date-month-block" style={style}>
      <div className="header">
        <div>
          <h5>
            <span
              className="sec"
              onClick={() =>
                ctx.eventTarget.dispatchEvent(
                  new CustomEvent("click-header-month")
                )
              }
            >
              {MonthNames[firstDateOfMonth.getMonth()]}
            </span>
            &nbsp;
            <span
              className="sec"
              onClick={() =>
                ctx.eventTarget.dispatchEvent(
                  new CustomEvent("click-header-year")
                )
              }
            >
              {firstDateOfMonth.getFullYear()}
            </span>
          </h5>
          <button className={`btn btn-${ctx.variant} btn-sm ms-1`}>
            <IconArrowDropDown />
          </button>
        </div>
        <div>
          <button
            className={`btn btn-${ctx.variant} btn-sm`}
            onClick={handleClickPrevMonth}
          >
            <IconChevronLeft />
          </button>
          <button
            className={`btn btn-${ctx.variant} btn-sm ms-1`}
            onClick={handleClickNextMonth}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
      <div className="date-cont">
        <div className="day-list">
          <div className="day-item">Sun</div>
          <div className="day-item">Mon</div>
          <div className="day-item">Tue</div>
          <div className="day-item">Wed</div>
          <div className="day-item">Thu</div>
          <div className="day-item">Fri</div>
          <div className="day-item">Sat</div>
        </div>
        <div className="cell-container">
          {transition.enable ? (
            <div
              className={classNames("anim-container", {
                prev: !transition.nextPage,
                next: transition.nextPage,
              })}
            >
              <DateSheet
                firstDate={firstDateOfMonth}
                translateOffset={transition.nextPage ? -2 : 0}
                style={{ left: "-100%" }}
              />
              <DateSheet
                firstDate={firstDateOfMonth}
                translateOffset={transition.nextPage ? -1 : 1}
                style={{ left: "0" }}
              />
              <DateSheet
                firstDate={firstDateOfMonth}
                translateOffset={transition.nextPage ? 0 : 2}
                style={{ left: "100%" }}
              />
            </div>
          ) : (
            <DateSheet
              firstDate={firstDateOfMonth}
              translateOffset={0}
              handleClick={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DateBlock;
