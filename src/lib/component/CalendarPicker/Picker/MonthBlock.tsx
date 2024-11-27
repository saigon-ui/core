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
import { MonthNames, MonthNameShort } from "../constant";
import CalendarPickerContext from "./Context";

const Cell: FC<any> = ({ active, children, onClick }) => (
  <div className={`cell${active ? " active" : ""}`} onClick={onClick}>
    {children}
  </div>
);

const MonthSheet: FC<any> = ({
  displayYear,
  curYear,
  curMonth,
  translateOffset,
  style,
  onClick,
}) => {
  const isSameYear = displayYear + translateOffset == curYear;

  return (
    <div className="month-body" style={style}>
      <div className="month-row">
        <Cell
          active={isSameYear && curMonth == 0}
          onClick={() => onClick && onClick(0)}
        >
          {MonthNameShort[0]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 1}
          onClick={() => onClick && onClick(1)}
        >
          {MonthNameShort[1]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 2}
          onClick={() => onClick && onClick(2)}
        >
          {MonthNameShort[2]}
        </Cell>
      </div>
      <div className="month-row">
        <Cell
          active={isSameYear && curMonth == 3}
          onClick={() => onClick && onClick(3)}
        >
          {MonthNameShort[3]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 4}
          onClick={() => onClick && onClick(4)}
        >
          {MonthNameShort[4]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 5}
          onClick={() => onClick && onClick(5)}
        >
          {MonthNameShort[5]}
        </Cell>
      </div>
      <div className="month-row">
        <Cell
          active={isSameYear && curMonth == 6}
          onClick={() => onClick && onClick(6)}
        >
          {MonthNameShort[6]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 7}
          onClick={() => onClick && onClick(7)}
        >
          {MonthNameShort[7]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 8}
          onClick={() => onClick && onClick(8)}
        >
          {MonthNameShort[8]}
        </Cell>
      </div>
      <div className="month-row">
        <Cell
          active={isSameYear && curMonth == 9}
          onClick={() => onClick && onClick(9)}
        >
          {MonthNameShort[9]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 10}
          onClick={() => onClick && onClick(10)}
        >
          {MonthNameShort[10]}
        </Cell>
        <Cell
          active={isSameYear && curMonth == 11}
          onClick={() => onClick && onClick(11)}
        >
          {MonthNameShort[11]}
        </Cell>
      </div>
    </div>
  );
};

type MonthBlockProps = {
  animationTime: number;
  onSelected?: () => void;
};

const MonthBlock: FC<MonthBlockProps> = ({ animationTime, onSelected }) => {
  const ctx = useContext(CalendarPickerContext);

  const [displayYear, setDisplayYear] = useState(() => ctx.date.getFullYear());
  const [transition, setTransition] = useState({
    enable: false,
    nextPage: false,
  });
  const timer = useRef({ timerId: 0 });

  useEffect(() => {
    if (!transition.enable) return;

    clearTimeout(timer.current.timerId);
    timer.current.timerId = setTimeout(() => {
      setTransition({ enable: false, nextPage: false });
    }, animationTime) as any;
  }, [transition.enable, animationTime]);

  useEffect(() => {
    const handleClickToday = () => {
      // do some animation when switching date
      const today = new Date();
      ctx.setDate(today);
      setDisplayYear(today.getFullYear());

      if (onSelected) onSelected();
      else {
        // do transition when the two months are different
        if (today.getFullYear() > displayYear) {
          setTransition({ enable: true, nextPage: true });
        } else if (today.getFullYear() < displayYear) {
          setTransition({ enable: true, nextPage: false });
        }
      }
    };
    ctx.eventTarget.addEventListener("click-today", handleClickToday);

    return () =>
      ctx.eventTarget.removeEventListener("click-today", handleClickToday);
  }, [ctx.date, displayYear]);

  const handleClickPrevYear = useCallback(() => {
    setDisplayYear(displayYear - 1);
    setTransition({ enable: true, nextPage: false });
  }, [displayYear]);

  const handleClickNextYear = useCallback(() => {
    setDisplayYear(displayYear + 1);
    setTransition({ enable: true, nextPage: true });
  }, [displayYear]);

  const handleClickCell = useCallback(
    (month: number) => {
      const d = new Date(ctx.date);
      d.setMonth(month);
      d.setFullYear(displayYear);
      ctx.setDate(d);

      onSelected && onSelected();
    },
    [ctx.date, displayYear]
  );

  const curYear = ctx.date.getFullYear();
  const curMonth = ctx.date.getMonth();
  const style: any = transition.enable
    ? { "--date-time-picker-time": `${animationTime}ms` }
    : undefined;

  return (
    <div className="date-month-block" style={style}>
      <div className="header">
        <div>
          <h5>
            {MonthNames[ctx.date.getMonth()]} {ctx.date.getFullYear()}
          </h5>
          <button className={`btn btn-${ctx.variant} btn-sm ms-1`}>
            <IconArrowDropDown />
          </button>
        </div>
        <div>
          <button
            className={`btn btn-${ctx.variant} btn-sm`}
            onClick={handleClickPrevYear}
          >
            <IconChevronLeft />
          </button>
          <button
            className={`btn btn-${ctx.variant} btn-sm ms-1`}
            onClick={handleClickNextYear}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
      <div className="month-cont">
        {transition.enable ? (
          <div
            className={classNames("anim-container", {
              prev: !transition.nextPage,
              next: transition.nextPage,
            })}
          >
            <MonthSheet
              displayYear={displayYear}
              curYear={curYear}
              curMonth={curMonth}
              style={{ left: "-100%" }}
              translateOffset={transition.nextPage ? -2 : 0}
            />
            <MonthSheet
              displayYear={displayYear}
              curYear={curYear}
              curMonth={curMonth}
              style={{ left: "0" }}
              translateOffset={transition.nextPage ? -1 : 1}
            />
            <MonthSheet
              displayYear={displayYear}
              curYear={curYear}
              curMonth={curMonth}
              style={{ left: "100%" }}
              translateOffset={transition.nextPage ? 0 : 2}
            />
          </div>
        ) : (
          <MonthSheet
            displayYear={displayYear}
            curYear={curYear}
            curMonth={curMonth}
            translateOffset={0}
            onClick={handleClickCell}
          />
        )}
      </div>
    </div>
  );
};

export default MonthBlock;
