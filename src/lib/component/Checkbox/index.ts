import {
  CheckboxProp,
  FormFeedbackProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import CheckboxFC from "./Checkbox";
import LabelFC from "./Label";
import FeedbackFC from "./Feedback";

export type CheckboxProps = CheckboxProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof CheckboxProp>;
export type CheckboxType = ForwardRefComponent<HTMLElement, CheckboxProps>;

export type CheckboxLabelProps = SaigonProps<"div", HTMLElement>;
export type CheckboxLabelType = ForwardRefComponent<
  HTMLElement,
  CheckboxLabelProps
>;

export type CheckboxFeedbackProps = FormFeedbackProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof FormFeedbackProp>;
export type CheckboxFeedbackType = ForwardRefComponent<
  HTMLElement,
  CheckboxFeedbackProps
>;

CheckboxFC.displayName = "Checkbox";
LabelFC.displayName = "Checkbox.Label";
FeedbackFC.displayName = "Checkbox.Feedback";

const Checkbox = Object.assign(CheckboxFC, {
  Label: LabelFC,
  Feedback: FeedbackFC,
});

export default Checkbox;
