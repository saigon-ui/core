import classNames from "classnames";
import { SyntheticEvent } from "react";

type DateCellProps = {
  display: Date;
  active: boolean;
  highlight: boolean;
  min: Date;
  max: Date;
  outOfRange: string;
  onClick?: (val: Date, evt: SyntheticEvent) => void;
};

const DateCell: React.FC<DateCellProps> = ({
  display,
  active,
  highlight,
  min,
  max,
  outOfRange,
  onClick,
}) => {
  let isOutOfRange = false;
  if (
    display.getMonth() == min.getMonth() &&
    display.getDate() < min.getDate()
  ) {
    isOutOfRange = true;
  } else if (
    display.getMonth() == max.getMonth() &&
    display.getDate() >= max.getDate()
  ) {
    isOutOfRange = true;
  } else if (display.getMonth() != min.getMonth()) {
    isOutOfRange = true;
  }

  /*
    --sg-btn-color: #fff;
    --sg-btn-bg: #0d6efd;
    --sg-btn-border-color: #0d6efd;
    --sg-btn-hover-color: #fff;
    --sg-btn-hover-bg: rgb(11.05, 93.5, 215.05);
    --sg-btn-hover-border-color: rgb(10.4, 88, 202.4);
    --sg-btn-focus-shadow-rgb: 49, 132, 253;
    --sg-btn-active-color: #fff;
    --sg-btn-active-bg: rgb(10.4, 88, 202.4);
    --sg-btn-active-border-color: rgb(9.75, 82.5, 189.75);
    --sg-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sg-btn-disabled-color: #fff;
    --sg-btn-disabled-bg: #0d6efd;
    --sg-btn-disabled-border-color: #0d6efd;
*/
  const style = {
    gray: false,
    hide: false,
    active,
    highlight,
  };
  if (isOutOfRange)
    switch (outOfRange) {
      case "gray":
        style.gray = true;
        break;
      case "hide":
        style.hide = true;
        break;
    }

  return (
    <div
      className={classNames("cell", style)}
      onClick={(evt) => onClick && onClick(display, evt)}
    >
      {display.getDate()}
    </div>
  );
};

export default DateCell;
