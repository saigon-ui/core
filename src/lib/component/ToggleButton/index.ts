import {
  ForwardRefComponent,
  SaigonProps,
  ToggleButtonProp,
} from "../../saigon.types";
import ToggleButtonFC from "./ToggleButton";

export type ToggleButtonProps = ToggleButtonProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof ToggleButtonProp>;
export type ToggleButtonType = ForwardRefComponent<
  HTMLElement,
  ToggleButtonProps
>;

const ToggleButton = ToggleButtonFC;
ToggleButton.displayName = "ToggleButton";

export default ToggleButton;
