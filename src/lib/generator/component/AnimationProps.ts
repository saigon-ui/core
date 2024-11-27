export type AnimationType =
  | "fade"
  | "clip"
  | "blind"
  | "bounce"
  | "drop"
  | "fold"
  | "puff"
  | "scale"
  | "shake"
  | "slide"
  | "shift"
  | "pulsate"
  | "rotate"
  | "none";

export type AnimationProp = Partial<{
  /**
   * Child component
   */
  component: React.FunctionComponent<any>;

  /**
   * Start the animation
   */
  open: boolean;

  /**
   * Animation type
   *
   * @default 'fade'
   */
  animation: Omit<AnimationType, "none">;

  /**
   * The animation duration `var(--anim-duration)` in miliseconds
   *
   * @default 400ms
   */
  duration: number;

  /**
   * Run the fade in animation when the component mounts, if it is initially shown
   * @default false
   */
  appear: boolean;

  /**
   * Callback when the animation is finished
   */
  onExit: () => void;

  /**
   * Callback when the animation is started
   */
  onEnter: () => void;

  /**
   * Callback after calling onExit and onEnter
   */
  onChange: (isShow: boolean) => void;
}>;
