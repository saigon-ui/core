import { Responsive } from "../types";

export type CheckboxProp = Partial<{
  /**
   * Default checked state value
   */
  defaultValue: boolean;

  /**
   * Checked state value
   */
  value: boolean;

  /**
   * utilize the :indeterminate pseudo class for the checkbox
   *
   * @default false
   */
  indeterminate: boolean;

  /**
   * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Callback when checked state changes.
   *
   * @param checked true if selected
   * @param evt native Event object
   */
  onChange: (checked: boolean, evt: Event) => void;

  /**
   * ref object to the input element
   */
  inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
   *
   * @default false
   */
  inline: boolean;

  /**
   * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
   *
   * @default false
   */
  reverse: boolean;
}>;

export type SwitchProp = Partial<{
  /**
   * Default checked state value
   */
  defaultValue: boolean;

  /**
   * Checked state value
   */
  value: boolean;

  /**
   * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Callback when checked state changes.
   *
   * @param checked true if selected
   * @param evt native Event object
   */
  onChange: (checked: boolean, evt: Event) => void;

  /**
   * ref object to the input element
   */
  inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
   *
   * @default false
   */
  inline: boolean;

  /**
   * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
   *
   * @default false
   */
  reverse: boolean;
}>;

export type RadioButtonProp = Partial<{
  /**
   * Default checked state value
   */
  defaultValue: boolean;

  /**
   * Checked state value
   */
  value: boolean;

  /**
   * Add the disabled attribute and the associated <label>s are automatically styled to match with a lighter color to help indicate the input’s state.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Callback when checked state changes.
   *
   * @param checked true if selected
   * @param evt native Event object
   */
  onChange: (checked: boolean, evt: Event) => void;

  /**
   * ref object to the input element
   */
  inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Group checkboxes or radios on the same horizontal row by adding `.form-check-inline`.
   *
   * @default false
   */
  inline: boolean;

  /**
   * Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
   *
   * @default false
   */
  reverse: boolean;

  /**
   * Set the `name` attribute for input
   */
  name: string;
}>;

export type SelectProp = Partial<{
  /**
   * Default selected value
   */
  defaultValue: boolean;

  /**
   * Controlling selected value
   */
  value: boolean;

  /**
   * You may also choose from small and large custom selects to match our similarly sized text inputs.
   *
   * @default undefined
   */
  size: "sm" | "lg";

  /**
   * Allow multiple selection
   *
   * @default false
   */
  multiple: boolean;

  /**
   * The size attribute of the underlying HTML element. Specifies the number of visible options.
   *
   * @default undefined
   */
  htmlSize: number;

  /**
   * Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.
   *
   * @default false
   */
  disabled: boolean;
}>;

export type RangeProp = Partial<{
  /**
   * The range label
   */
  label: string;

  /**
   * Default checked state value
   */
  defaultValue: number;

  /**
   * Checked state value
   */
  value: number;

  /**
   * The mininum value of the range
   *
   * @default 0
   */
  min: number;

  /**
   * The maximum value of the range
   *
   * @default 100
   */
  max: number;

  /**
   * The step on increasement
   *
   * @default 1
   */
  step: number;

  /**
   * Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.
   *
   * @default false
   */
  disabled: boolean;

  /**
   * Callback when the value changes.
   *
   * @param value
   * @param evt native Event object
   */
  onChange: (value: number, evt: Event) => void;
}>;

export type InputGroupProp = Partial<{
  /**
   * You may also choose from small and large custom selects to match our similarly sized text inputs.
   *
   * @default undefined
   */
  size: "sm" | "lg";

  /**
   * Apply validation effect depends on the classnames of the directly child `input`.
   *
   * @default false
   */
  hasValidation: boolean;

  /**
   * Set to `true` to make add-on background color will be the same as input background color
   */
  noBackground: boolean;
}>;

export type FormControlProp = Partial<{
  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Use browser defaults validation feedback messages
   *
   * @default false
   */
  required: boolean;
}>;

export type FormControlWithIconProp = Partial<
  FormControlProp & {
    /**
     * Left icon
     * @default undefined
     */
    startIcon: Responsive<React.ReactNode>;

    /**
     * Right icon
     * @default undefined
     */
    endIcon: Responsive<React.ReactNode>;

    /**
     * Left icon when hover
     * @default undefined
     */
    startHoverIcon: Responsive<React.ReactNode>;

    /**
     * Right icon when hover
     * @default undefined
     */
    endHoverIcon: Responsive<React.ReactNode>;
  }
>;

export type DateTimeControlProp = Partial<{
  /**
   * Uncontrolled state value
   * @default 'new Date()'
   */
  defaultValue: Date;

  /**
   * Controlled state value
   * @default 'new Date()'
   */
  value: Date;

  /**
   * Date time format. For the complete list of formats, please visit [momentjs](https://momentjs.com/docs/#/displaying/format/)
   * @default 'YYYY-MM-DD'
   */
  format: string;

  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;

  /**
   * Use browser defaults validation feedback messages
   *
   * @default false
   */
  required: boolean;

  /**
   * Callback when form state value changing
   * @returns Possibly returns `undefined` when `required` is false.
   */
  onChange: (val: Date | undefined) => void;

  /**
   * Callback when user click on clear button
   * @returns Possibly returns `undefined` when `required` is false.
   */
  onClear: (val: Date | undefined) => void;
}>;

export type FormFeedbackProp = Partial<{
  /**
   * Indicate invalid and valid form fields with `.is-invalid` and `.is-valid` for validation.
   *
   * @default false
   */
  isValid: boolean;
}>;

export type FormColLabelProp = Partial<{
  /**
   * You may also choose from small and large custom selects to match our similarly sized text inputs.
   *
   * @default undefined
   */
  size: "sm" | "lg";
}>;

export type FormFloatingProp = Partial<{
  /**
   * The floating label
   *
   * @default undefined
   */
  label: string;
}>;
