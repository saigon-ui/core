import {
  ForwardRefComponent,
  SaigonProps,
  SelectProp,
} from "../../saigon.types";
import SelectFC from "./Select";
import OptionFC from "./Option";

export type SelectProps = SelectProp &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  Omit<SaigonProps<"select", HTMLSelectElement>, keyof SelectProp>;
export type SelectType = ForwardRefComponent<HTMLSelectElement, SelectProps>;

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement> &
  SaigonProps<"option", HTMLOptionElement>;
export type SelectOptionType = ForwardRefComponent<
  HTMLOptionElement,
  SelectOptionProps
>;

SelectFC.displayName = "Select";
OptionFC.displayName = "Select.Option";

const Select = Object.assign(SelectFC, {
  Option: OptionFC,
});
export default Select;
