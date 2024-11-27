import {
  ButtonProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import ButtonFC from "./Button";

export type ButtonProps = ButtonProp &
  Omit<SaigonProps<"button", HTMLElement>, keyof ButtonProp>;

export type ButtonType = ForwardRefComponent<HTMLElement, ButtonProps>;

const Button = ButtonFC;
Button.displayName = "Button";

export default Button;
