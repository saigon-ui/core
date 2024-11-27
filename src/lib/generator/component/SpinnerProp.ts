import * as CSS from "csstype";

export type SpinnerProp = Partial<{
  /**
   * Changes the animation style of the spinner.
   *
   * @default border
   */
  animation:
    | "border"
    | "grow"
    | "dots-1"
    | "dots-2"
    | "dots-3"
    | "dots-4"
    | "bars-1"
    | "bars-2"
    | "beat"
    | "bounce"
    | "clock"
    | "fade"
    | "hash"
    | "moon_1"
    | "moon_2"
    | "propagate"
    | "puff"
    | "pulse-1"
    | "pulse-2"
    | "skew"
    | "scale"
    | "sync-1"
    | "sync-2"
    | "square"
    | "buddhism_1";

  /**
   * Component size variations. Also works with `CSS.Property.Width` value.
   *
   * @default undefined
   */
  size: CSS.Property.Width;

  /**
   * An ARIA accessible role applied to the Menu component.
   *
   * @default 'status'
   */
  role: string;
}>;
