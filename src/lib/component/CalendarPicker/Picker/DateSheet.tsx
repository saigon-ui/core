import { CSSProperties, useContext, useMemo } from "react";
import CalendarPickerContext from "./Context";
import DateCell from "./DateCell";

type CellSheetProps = {
  firstDate: Date;
  translateOffset: number;
  style?: CSSProperties;
  handleClick?: boolean;
};

const DateSheet: React.FC<CellSheetProps> = ({
  firstDate,
  translateOffset,
  style,
  handleClick,
}) => {
  const ctx = useContext(CalendarPickerContext);

  const cells = useMemo(() => {
    const now = new Date();
    const d = new Date(firstDate);
    d.setMonth(d.getMonth() + translateOffset);

    const from = new Date(d);
    const to = new Date(d);
    to.setMonth(to.getMonth() + 1);

    const dayVal = d.getDay();
    const dateVal = d.getDate();
    const cells: any[] = [];
    for (let i = 0; i < 42; i++) {
      const c = new Date(d);
      c.setDate(dateVal + (i - dayVal));

      const active =
        ctx.date.getFullYear() == c.getFullYear() &&
        ctx.date.getMonth() == c.getMonth() &&
        ctx.date.getDate() == c.getDate();
      const highlight =
        now.getFullYear() == c.getFullYear() &&
        now.getMonth() == c.getMonth() &&
        now.getDate() == c.getDate();

      cells.push(
        <DateCell
          key={i}
          active={active}
          highlight={highlight}
          display={c}
          min={from}
          max={to}
          outOfRange="gray"
          onClick={(val: Date) => {
            val.setHours(ctx.date.getHours());
            val.setMinutes(ctx.date.getMinutes());
            val.setSeconds(ctx.date.getSeconds());

            handleClick && ctx.setDate(val);
          }}
        />
      );
    }

    return cells;
  }, [ctx.date, firstDate, handleClick]);

  return (
    <div className="cell-sheet" style={style}>
      {cells}
    </div>
  );
};

export default DateSheet;
