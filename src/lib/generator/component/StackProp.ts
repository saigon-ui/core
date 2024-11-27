import { Responsive } from "../../saigon.types";
import * as CSS from "csstype";

/**
 * `justify-content` is set on the container and distributes the elements along the main axis (for flex-direction:row, that is the horizontal axis).
 *
 * `align-items` is also set on the container and distributes the elements along the cross axis (for flex-direction:row, that is the vertical axis).
 *
 * `justify-items` has no effect on a flex-container, it’s used to distribute the elements in a grid container along the main axis within their cells.
 *
 * `align-content` only applies when a flex-container has multiple rows (when flex-wrap is set to wrap), and defines how the rows of elements are distributed along the cross-axis.
 *
 */
export type StackProp = Partial<{
  direction?: Responsive<"row" | "column" | "horizontal" | "vertical">;

  /**
   * Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, around, or evenly.
   * @param {string} justifyContent "start", "end", "center", "between", "around", "evenly", CSS.Property.JustifyContent
   */
  justifyContent: Responsive<
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | CSS.Property.JustifyContent
  >;

  /**
   * Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).
   * @param {string} alignItems "start", "end", "center", "baseline", "stretch", CSS.Property.AlignItems
   */
  alignItems: Responsive<
    | "start"
    | "end"
    | "center"
    | "baseline"
    | "stretch"
    | CSS.Property.AlignItems
  >;

  /**
   * Use align-content utilities on flexbox containers to align flex items together on the cross axis. Choose from start (browser default), end, center, between, around, or stretch. To demonstrate these utilities, we’ve enforced flex-wrap: wrap and increased the number of flex items.
   * *Heads up!* This property has no effect on single rows of flex items  (always no effect when `flex-wrap` is set to `no-wrap`).
   * @param {string} alignContent "start", "end", "center", "between", "around", "stretch", CSS.Property.AlignContent
   */
  alignContent: Responsive<
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "stretch"
    | CSS.Property.AlignContent
  >;

  /**
   * When using `display: grid` or `display: flex`, you can make use of gap utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via our utilities API, based on the `$spacers` Sass map.
   * @param {string} gap "0", "1", "2", "3", "4", "5", CSS.Property.Gap
   */
  gap: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | CSS.Property.Gap>;
}>;
