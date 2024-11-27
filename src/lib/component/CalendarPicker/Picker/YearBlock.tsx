import { FC, useCallback, useContext, useState } from "react";
import { MonthNames } from "../constant";
import CalendarPickerContext from "./Context";
import {
  IconArrowDropDown,
  IconChevronLeft,
  IconChevronRight,
} from "../../Icon";

type YearSheetProps = {
  onSelected?: () => void;
};
const YearSheet: FC<YearSheetProps> = ({ onSelected }) => {
  const ctx = useContext(CalendarPickerContext);
  const [startYear, setStartYear] = useState(() => ctx.date.getFullYear() - 12);
  const [endYear, setEndYear] = useState(() => ctx.date.getFullYear() + 12);

  const handleClickPrevYear = useCallback(() => {
    const d = new Date(ctx.date);
    d.setFullYear(ctx.date.getFullYear() - 1);
    ctx.setDate(d);

    onSelected && onSelected();
  }, [ctx.date]);

  const handleClickNextYear = useCallback(() => {
    const d = new Date(ctx.date);
    d.setFullYear(ctx.date.getFullYear() + 1);
    ctx.setDate(d);

    onSelected && onSelected();
  }, [ctx.date]);

  const handleShowMoreEarlier = useCallback(() => {
    setStartYear(
      ctx.date.getFullYear() - (ctx.date.getFullYear() - startYear) * 2
    );
  }, [startYear]);

  const handleShowMoreLater = useCallback(() => {
    setEndYear(ctx.date.getFullYear() + (endYear - ctx.date.getFullYear()) * 2);
  }, [endYear]);

  const handleClickCell = useCallback(
    (year: number) => {
      const d = new Date(ctx.date);
      d.setFullYear(year);
      ctx.setDate(d);

      onSelected && onSelected();
    },
    [ctx.date]
  );

  const curYear = ctx.date.getFullYear();
  const numRows = Math.trunc((endYear - startYear) / 3);

  return (
    <div className="date-month-block">
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
      <div className="year-cont">
        <div className="year-body">
          <div className="year-row">
            <button
              className="btn btn-primary w-100 p-1"
              onClick={handleShowMoreEarlier}
            >
              Show more
            </button>
          </div>
          {Array.from(new Array(numRows).keys()).map((i) => (
            <div key={i} className="year-row">
              {Array.from(new Array(3).keys()).map((j) => {
                const year = i * 3 + j + startYear;
                return (
                  <div
                    key={j}
                    className={`cell${year == curYear ? " active" : ""}`}
                    onClick={() => handleClickCell(year)}
                  >
                    {year}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="year-row">
            <button
              className="btn btn-primary w-100 p-1"
              onClick={handleShowMoreLater}
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearSheet;
