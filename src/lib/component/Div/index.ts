import { ForwardRefComponent, SaigonProps } from "../../saigon.types";
import DivFC from "./Div";

export type DivProps = SaigonProps<"div", HTMLElement>;
export type DivType = ForwardRefComponent<HTMLElement, DivProps>;

/**
 * Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 * @param {DivProps} props
 * @returns {DivType}
 */
const Div = DivFC;
Div.displayName = "Div";

export default Div;
