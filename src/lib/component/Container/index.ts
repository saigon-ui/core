import {
  ForwardRefComponent,
  SaigonProps,
  ContainerProp,
} from "../../saigon.types";
import ContainerFC from "./Container";

export type ContainerProps = ContainerProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof ContainerProp>;
export type ContainerType = ForwardRefComponent<HTMLElement, ContainerProps>;

/**
 * Containers center and horizontally pad your content. Use .container for a responsive pixel width, .container-fluid for width: 100% across all viewports and devices, or a responsive container (e.g., .container-md) for a combination of fluid and pixel widths.
 * @param {ContainerProps} props
 * @returns {ContainerType}
 */
const Container = ContainerFC;
Container.displayName = "Container";

export default Container;
