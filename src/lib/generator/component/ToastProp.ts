import { AnimationType } from "./AnimationProps";

export type ToastProp = Partial<{
  /**
   * Apply a CSS fade transition to the toast.
   *
   * @default Fade
   */
  animation: AnimationType;

  /**
   * Automatically hide the toast after the delay.
   *
   * @default true
   */
  autoHide: boolean;

  /**
   * Delay in milliseconds before hiding the toast.
   * @default 3600ms
   */
  delay: number;

  /**
   * Set white text color with `.btn-close-white`
   *
   * @default false
   */
  btnCloseWhite: boolean;
}>;

export type ToastContainerProp = Partial<{
  /**
   * Building on the above example, you can create different toast color schemes with our color and background utilities
   *
   * @default undefined
   */
  placement:
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-start"
    | "middle-center"
    | "middle-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";

  /**
   * Specify the positioning method for the container.
   *
   * @default fixed
   */
  containerPosition: "static" | "fixed";
}>;
