import {
  FormFeedbackProp,
  ForwardRefComponent,
  SaigonProps,
  SwitchProp,
} from "../../saigon.types";
import SwitchFC from "./Switch";
import LabelFC from "./Label";
import FeedbackFC from "./Feedback";

export type SwitchProps = SwitchProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof SwitchProp>;
export type SwitchType = ForwardRefComponent<HTMLElement, SwitchProps>;

export type SwitchLabelProps = SaigonProps<"div", HTMLElement>;
export type SwitchLabelType = ForwardRefComponent<
  HTMLElement,
  SwitchLabelProps
>;

export type SwitchFeedbackProps = FormFeedbackProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;
export type SwitchFeedbackType = ForwardRefComponent<
  HTMLElement,
  SwitchFeedbackProps
>;

SwitchFC.displayName = "Switch";
LabelFC.displayName = "Switch.Label";
FeedbackFC.displayName = "Switch.Feedback";

const Switch = Object.assign(SwitchFC, {
  Feedback: FeedbackFC,
  Label: LabelFC,
});
export default Switch;
