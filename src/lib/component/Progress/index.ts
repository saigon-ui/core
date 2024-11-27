import {
  ForwardRefComponent,
  ProgressProp,
  SaigonProps,
} from "../../saigon.types";
import ProgressFC from "./Progress";

export type ProgressProps = ProgressProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof ProgressProp>;

export type ProgressType = ForwardRefComponent<HTMLElement, ProgressProps>;

const Progress = ProgressFC;
Progress.displayName = "Progress";

export default Progress;
