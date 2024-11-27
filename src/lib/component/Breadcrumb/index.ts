import BreadcrumbFC from "./Breadcrumb";
import ItemFC from "./Item";
import {
  ForwardRefComponent,
  SaigonProps,
  BreadcrumbProp,
  BreadcrumbItemProp,
} from "../../saigon.types";

export type BreadcrumbProps = BreadcrumbProp &
  Omit<SaigonProps<"nav", HTMLElement>, keyof BreadcrumbProp>;

export type BreadcrumbType = ForwardRefComponent<HTMLElement, BreadcrumbProps>;

export type BreadcrumbItemProps = BreadcrumbItemProp &
  Omit<SaigonProps<"li", HTMLElement>, keyof BreadcrumbItemProp>;

export type BreadcrumbItemType = ForwardRefComponent<
  HTMLElement,
  BreadcrumbItemProps
>;

BreadcrumbFC.displayName = "Breadcrumb";
ItemFC.displayName = "Breadcrumb.Item";

const Breadcrumb = Object.assign(BreadcrumbFC, { Item: ItemFC });
export default Breadcrumb;
