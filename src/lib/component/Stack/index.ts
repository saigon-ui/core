import {
  ForwardRefComponent,
  SaigonProps,
  StackProp,
} from "../../saigon.types";
import StackFC from "./Stack";

export type StackProps = SaigonProps<"div", HTMLElement> & StackProp;

export type StackType = ForwardRefComponent<HTMLElement, StackProps>;

/**
 * Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
 * @param {StackProps} props
 * @returns {StackType}
 */
const Stack = StackFC;
Stack.displayName = "Stack";

export default Stack;
