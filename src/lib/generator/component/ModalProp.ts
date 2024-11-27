import { AnimationType } from "./AnimationProps";

export type ModalProp = Partial<{
  /**
   * Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
   *
   * | Size | Class | Modal max-width
   * | -------- | ------- | -------
   * | Small | .modal-sm | 300px
   * | Default | None | 500px
   * | Large | .modal-lg | 800px
   * | Extra large | .modal-xl | 1140px
   *
   * @default undefined
   */
  size: "sm" | "lg" | "xl";

  /**
   * Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a `.modal-dialog`.
   */
  fullscreen:
    | boolean
    | "sm-down"
    | "md-down"
    | "lg-down"
    | "xl-down"
    | "xxl-down";

  /**
   * When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.
   *
   * @default false
   */
  staticBackdrop: boolean;

  /**
   * When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
   *
   * @default false
   */
  scrollable: boolean;

  /**
   * Add .modal-dialog-centered to .modal-dialog to vertically center the modal.
   *
   * @default false
   */
  verticalCentered: boolean;

  /**
   * Apply a CSS fade transition to the toast.
   *
   * @default 'fade'
   */
  animation: AnimationType;
}>;
