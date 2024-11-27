import {
  DateTimeControlProp,
  FormColLabelProp,
  FormControlProp,
  FormControlWithIconProp,
  FormFeedbackProp,
  FormFloatingProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import ColLabelFC from "./ColLabel";
import ControlFC from "./Control";
import ControlWithIconFC from "./ControlWithIcon";
import DateTimeControlFC from "./DateTimeControl";
import FeedbackFC from "./Feedback";
import FloatingFC from "./Floating";
import FormFC from "./Form";
import LabelFC from "./Label";
import TextFC from "./Text";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> &
  SaigonProps<"form", HTMLFormElement>;
export type FormType = ForwardRefComponent<HTMLFormElement, FormProps>;

export type FormLabelProps = SaigonProps<"label", HTMLElement>;
export type FormLabelType = ForwardRefComponent<HTMLElement, FormLabelProps>;

export type FormColLabelProps = FormColLabelProp &
  Omit<SaigonProps<"label", HTMLElement>, keyof FormColLabelProp>;
export type FormColLabelType = ForwardRefComponent<
  HTMLElement,
  FormColLabelProps
>;

export type FormControlProps = FormControlProp &
  React.InputHTMLAttributes<HTMLInputElement> &
  SaigonProps<"input", HTMLInputElement>;
export type FormControlType = ForwardRefComponent<
  HTMLInputElement,
  FormControlProps
>;

export type FormControlWithIconProps = FormControlWithIconProp &
  React.InputHTMLAttributes<HTMLInputElement> &
  SaigonProps<"input", HTMLInputElement>;
export type FormControlWithIconType = ForwardRefComponent<
  HTMLInputElement,
  FormControlWithIconProps
>;

export type DateTimeControlProps = DateTimeControlProp &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "defaultValue" | "onChange"
  > &
  SaigonProps<"input", HTMLInputElement>;
export type DateTimeControlType = ForwardRefComponent<
  HTMLElement,
  DateTimeControlProps
>;

export type FormTextProps = SaigonProps<"div", HTMLElement>;
export type FormTextType = ForwardRefComponent<HTMLElement, FormTextProps>;

export type FormFeedbackProps = FormFeedbackProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;
export type FormFeedbackType = ForwardRefComponent<
  HTMLElement,
  FormFeedbackProps
>;

export type FormFloatingProps = FormFloatingProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof FormFloatingProp>;
export type FormFloatingType = ForwardRefComponent<
  HTMLElement,
  FormFloatingProps
>;

FormFC.displayName = "Form";
LabelFC.displayName = "Form.Label";
ColLabelFC.displayName = "Form.ColLabel";
ControlFC.displayName = "Form.Control";
TextFC.displayName = "Form.Text";
FeedbackFC.displayName = "Form.Feedback";
FloatingFC.displayName = "Form.Floating";
ControlWithIconFC.displayName = "Form.ControlWithIcon";
DateTimeControlFC.displayName = "Form.DateTimeControl";

const Form = Object.assign(FormFC, {
  Label: LabelFC,
  Control: ControlFC,
  ColLabel: ColLabelFC,
  Text: TextFC,
  Feedback: FeedbackFC,
  Floating: FloatingFC,
  ControlWithIcon: ControlWithIconFC,
  DateTimeControl: DateTimeControlFC,
});

export default Form;
