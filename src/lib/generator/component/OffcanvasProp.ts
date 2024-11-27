export type OffcanvasProp = Partial<{
  /**
   * The offcanvas will show itself.
   *
   * @default false
   */
  show: boolean;

  /**
   * When backdrop is set to static, the offcanvas will not close when clicking outside of it.
   *
   * @default true
   */
  backdrop: "static" | boolean;

  /**
   * Closes the offcanvas when escape key is pressed.
   *
   * @default true
   */
  keyboard: boolean;

  /**
   * Scrolling the <body> element is disabled when an offcanvas and its backdrop are visible
   *
   * @default false
   */
  bodyScroll: boolean;

  /**
   * There’s no default placement for offcanvas components, so you must add one of the modifier classes below
   *
   * @default start
   */
  placement: "start" | "end" | "top" | "bottom";

  /**
   * When true The offcanvas will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.
   *
   * @default true
   */
  autoFocus: boolean;

  /**
   * When true The offcanvas will prevent focus from leaving the offcanvas while open. Consider leaving the default value here, as it is necessary to make the offcanvas work well with assistive technologies, such as screen readers.
   *
   * @default true
   */
  enforceFocus: boolean;

  /**
   * When true The offcanvas will restore focus to previously focused element once offcanvas is hidden
   *
   * @default true
   */
  restoreFocus: boolean;

  /**
   * A callback fired when the offcanvas is opening.
   *
   * @default undefined
   */
  onShow: () => void;

  /**
   * A callback fired when the header closeButton or backdrop is clicked. Required if either are specified.
   *
   * @default undefined
   */
  onHide: () => void;

  /**
   * A callback fired when the offcanvas after showing or hiding.
   *
   * @param show true when showing, false when hiding
   * @default undefined
   */
  onDisplay: (show: boolean) => void;

  /**
   * A callback fired when the escape key, if specified in keyboard, is pressed.
   *
   * @default undefined
   */
  onEscapeKeyDown: () => void;

  /**
   * Callback fired before the offcanvas transitions in
   *
   * @default undefined
   */
  onEnter: () => void;

  /**
   * Callback fired as the offcanvas begins to transition in
   *
   * @default undefined
   */
  onEntering: () => void;

  /**
   * Callback fired after the offcanvas finishes transitioning in
   *
   * @default undefined
   */
  onEntered: () => void;

  /**
   * Callback fired right before the offcanvas transitions out
   *
   * @default undefined
   */
  onExit: () => void;

  /**
   * Callback fired as the offcanvas begins to transition out
   *
   * @default undefined
   */
  onExiting: () => void;

  /**
   * Callback fired after the offcanvas finishes transitioning out
   *
   * @default undefined
   */
  onExited: () => void;
}>;
