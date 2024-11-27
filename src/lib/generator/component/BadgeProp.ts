import { ThemeColor } from "../../saigon.types";

export type BadgeProp = Partial<{
  /**
   * The badge background color
   * @default primary
   */
  badgeColor: ThemeColor;

  /**
   * Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.
   * @default false
   */
  roundedPill: boolean;
}>;
