export type CloseButtonProp = Partial<{
  /**
   * Disabled close buttons change their opacity. We’ve also applied pointer-events: none and user-select: none to preventing hover and active states from triggering.
   *
   * @default false
   */
  disabled: boolean;
}>;
