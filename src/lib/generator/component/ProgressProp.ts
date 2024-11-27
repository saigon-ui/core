import { ThemeColor } from "../../saigon.types";

export type ProgressProp = Partial<{
  /**
   * Use background utility classes to change the appearance of individual progress bars.
   *
   * @default undefined
   */
  variant: ThemeColor;

  /**
   * Current value of progress
   *
   * @default 0
   */
  now: number;

  /**
   * Minimum value progress can begin from
   *
   * @default 0
   */
  min: number;

  /**
   * 	Maximum value progress can reac
   *
   * @default 100
   */
  max: number;

  /**
   * Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.
   *
   * @default false
   */
  striped: boolean;

  /**
   * The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.
   *
   * @default false
   */
  animated: boolean;

  /**
   * You can include multiple progress components inside a container with `.progress-stacked` to create a single stacked progress bar.
   *
   * @default false
   */
  multiple: boolean;
}>;
