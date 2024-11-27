import { ForwardRefComponent, RowProp, SaigonProps } from "../../saigon.types";
import RowFC from "./Row";

export type RowProps = SaigonProps<"div", HTMLElement> & RowProp;

export type RowType = ForwardRefComponent<HTMLElement, RowProps>;

/**
 * Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.
 * @param {RowProps} props
 * @returns {RowType}
 */
const Row = RowFC;
Row.displayName = "Row";

export default Row;
