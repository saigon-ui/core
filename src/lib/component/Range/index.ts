import {
  ForwardRefComponent,
  RangeProp,
  SaigonProps,
} from "../../saigon.types";
import RangeFC from "./Range";

export type RangeProps = RangeProp &
  React.InputHTMLAttributes<HTMLInputElement> &
  Omit<SaigonProps<"input", HTMLInputElement>, keyof RangeProp>;
export type RangeType = ForwardRefComponent<HTMLInputElement, RangeProps>;

const Range = RangeFC;
Range.displayName = "Range";

export default Range;
