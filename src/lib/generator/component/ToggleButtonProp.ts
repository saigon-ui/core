import { ThemeColor, SpinnerProp } from "../../saigon.types";
import * as CSS from "csstype";

export type ToggleButtonProp = Partial<{
  /**
   * The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).
   * @default button
   */
  as: "button" | "input" | React.ComponentType;

  /**
   * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
   * @param {ThemeColor | 'link'} primary
   */
  variant: ThemeColor | "link";

  /**
   * In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.
   */
  outline: boolean;

  /**
   * Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
   */
  size: "lg" | "sm";

  /**
   * If you don’t want the button text to wrap, you can add the .text-nowrap class to the button. In Sass, you can set $btn-white-space: nowrap to disable text wrapping for each button.
   */
  noTextWrap: boolean;

  /**
   * Active state, for toogle button style
   */
  active: boolean;

  /**
   * Make buttons look inactive by adding the disabled boolean attribute to any <button> element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.
   */
  disabled: boolean;

  /**
   * Callback fire when toggling
   * @param selected
   * @param event
   * @returns
   */
  onChange: (selected: boolean, event: object) => void;

  /**
   * When rendering using <input> tag, type need to be specified, by default is 'button'
   */
  type: "button" | "submit" | "reset" | string;

  /**
   * If `true`, disabling the button and showing a spinner.
   * @default false
   */
  isLoading: boolean;

  /**
   * The label to show in the button when `isLoading` is true
   */
  loadingText: React.ReactElement | string;

  /**
   * Replace the spinner component when `isLoading` is set to `true`
   *
   * @type React.ReactElement or one of value from SpinnerProp["animation"], such as, 'dots-1', 'dots-2'...
   */
  loadingSpinner: React.ReactElement | SpinnerProp["animation"];

  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "end"
   */
  spinnerPlacement: "start" | "end";

  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */
  startIcon: React.ReactElement;

  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactElement
   */
  endIcon: React.ReactElement;

  /**
   * The space between the button icon and label.
   * @type string
   * @default "5px"
   */
  iconSpacing: CSS.Property.Gap;

  /**
   * Button click effect when pointer-up
   *
   * @default slide
   */
  clickEffect: "ripple" | "puff" | "box-shadow" | "slide" | "stripe";
}>;
