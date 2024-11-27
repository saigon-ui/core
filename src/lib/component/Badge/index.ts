import BadgeFC from "./Badge";
import {
  BadgeProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";

export type BadgeProps = BadgeProp &
  Omit<SaigonProps<"span", HTMLElement>, keyof BadgeProp>;

export type BadgeType = ForwardRefComponent<HTMLElement, BadgeProps>;

/**
 * Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links.
 */
const Badge = BadgeFC;
Badge.displayName = "Badge";

export default Badge;
