import {
  ForwardRefComponent,
  InputGroupProp,
  SaigonProps,
} from "../../saigon.types";
import InputGroupFC from "./InputGroup";
import TextFC from "./Text";

export type InputGroupProps = InputGroupProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof InputGroupProp>;
export type InputGroupType = ForwardRefComponent<HTMLElement, InputGroupProps>;

export type InputGroupTextProps = SaigonProps<"span", HTMLElement>;
export type InputGroupTextType = ForwardRefComponent<
  HTMLElement,
  InputGroupTextProps
>;

InputGroupFC.displayName = "InputGroup";
TextFC.displayName = "InputGroup.Text";

const InputGroup = Object.assign(InputGroupFC, {
  Text: TextFC,
});

export default InputGroup;
