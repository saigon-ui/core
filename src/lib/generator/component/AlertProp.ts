import { Responsive, ThemeColor, AnimationType } from "../../saigon.types";

export type AlertProp = Partial<{
  /**
   * Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.
   * @default
   * @param {ThemeColor} variant
   */
  variant: Responsive<ThemeColor>;

  /**
   * Renders a properly aligned dismiss button.
   * @default false
   * @param {boolean} dismissible
   */
  dismissible: boolean;

  /**
   * Animate the alert dismissal. Defaults to using <Fade> animation or use false to disable
   * @default 'fade'
   */
  animation: AnimationType;

  /**
   * Callback fired when alert is closed after transitioning.
   */
  onClose: () => void;

  /**
   * Callback fired when alert is showed after transitioning.
   */
  onOpen: () => void;
}>;
