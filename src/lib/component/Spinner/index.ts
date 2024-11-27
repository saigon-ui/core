import {
  ForwardRefComponent,
  SaigonProps,
  SpinnerProp,
} from "../../saigon.types";
import SpinnerFC from "./Spinner";

export { default as SpinnerSync2 } from "./SpinnerSync2";

export type SpinnerProps = SpinnerProp & SaigonProps<"div", HTMLElement>;

export type SpinnerType = ForwardRefComponent<HTMLElement, SpinnerProps>;

const Spinner = SpinnerFC;
Spinner.displayName = "Spinner";

export default Spinner;
