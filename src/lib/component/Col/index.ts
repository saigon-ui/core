import { ForwardRefComponent, SaigonProps, ColProp } from "../../saigon.types";
import ColFC from "./Col";

export type ColProps = SaigonProps<"div", HTMLElement> & ColProp;

/**
 * Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.
 * @param {ColProps} props
 * @returns {ColType}
 */
export type ColType = ForwardRefComponent<HTMLElement, ColProps>;

const Col = ColFC;
Col.displayName = "Col";

export default Col;
