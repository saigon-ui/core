import {
  CloseButtonProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import CloseButtonFC from "./CloseButton";

export type CloseButtonProps = CloseButtonProp &
  Omit<SaigonProps<"button", HTMLElement>, keyof CloseButtonProp>;
export type CloseButtonType = ForwardRefComponent<
  HTMLElement,
  CloseButtonProps
>;

const CloseButton = CloseButtonFC;
CloseButton.displayName = "CloseButton";

export default CloseButton;
