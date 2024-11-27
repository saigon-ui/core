import {
  RadioButtonProp,
  ForwardRefComponent,
  SaigonProps,
  FormFeedbackProp,
} from "../../saigon.types";
import RadioButtonFC from "./RadioButton";
import LabelFC from "./Label";
import FeedbackFC from "./Feedback";

export type RadioButtonProps = RadioButtonProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof RadioButtonProp>;
export type RadioButtonType = ForwardRefComponent<
  HTMLElement,
  RadioButtonProps
>;

export type RadioButtonLabelProps = SaigonProps<"div", HTMLElement>;
export type RadioButtonLabelType = ForwardRefComponent<
  HTMLElement,
  RadioButtonLabelProps
>;

export type RadioButtonFeedbackProps = FormFeedbackProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;
export type RadioButtonFeedbackType = ForwardRefComponent<
  HTMLElement,
  RadioButtonFeedbackProps
>;

RadioButtonFC.displayName = "RadioButton";
LabelFC.displayName = "RadioButton.Label";
FeedbackFC.displayName = "RadioButton.Feedback";

const RadioButton = Object.assign(RadioButtonFC, {
  Label: LabelFC,
  Feedback: FeedbackFC,
});

export default RadioButton;
