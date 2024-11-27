import {
  ButtonGroupProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import ButtonGroupFC from "./ButtonGroup";

export type ButtonGroupProps = ButtonGroupProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof ButtonGroupProp>;

export type ButtonGroupType = ForwardRefComponent<
  HTMLElement,
  ButtonGroupProps
>;

const ButtonGroup = ButtonGroupFC;
ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
