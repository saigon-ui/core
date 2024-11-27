import {
  AlertProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import AlertFC from "./Alert";
import HeadingFC from "./Heading";
import LinkFC from "./Link";

export type AlertProps = AlertProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof AlertProp>;

export type AlertType = ForwardRefComponent<AlertRef, AlertProps>;

export type AlertRef = {
  domRef: React.Ref<HTMLDivElement>;
  close: () => void;
  show: () => void;
};

export type AlertHeadingProp = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type AlertHeadingProps = AlertHeadingProp &
  Omit<SaigonProps<"h4", HTMLHeadingElement>, keyof AlertHeadingProp>;

export type AlertHeadingType = ForwardRefComponent<
  HTMLHeadingElement,
  AlertHeadingProps
>;

export type AlertLinkProps = SaigonProps<"a", HTMLAnchorElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type AlertLinkType = ForwardRefComponent<
  HTMLAnchorElement,
  AlertLinkProps
>;

AlertFC.displayName = "Alert";
HeadingFC.displayName = "Alert.Heading";
LinkFC.displayName = "Alert.Link";

export const Alert = Object.assign(AlertFC, {
  Link: LinkFC,
  Heading: HeadingFC,
});
