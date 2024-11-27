import {
  ForwardRefComponent,
  PaginationItemProp,
  PaginationProp,
  SaigonProps,
} from "../../saigon.types";
import PaginationFC from "./Pagination";
import ItemFC from "./Item";
import LinkFC from "./Link";
import { AnchorHTMLAttributes } from "react";

export type PaginationProps = PaginationProp &
  Omit<SaigonProps<"ul", HTMLElement>, keyof PaginationProp>;
export type PaginationType = ForwardRefComponent<HTMLElement, PaginationProps>;

export type PaginationItemProps = PaginationItemProp &
  Omit<SaigonProps<"li", HTMLElement>, keyof PaginationItemProp>;
export type PaginationItemType = ForwardRefComponent<
  HTMLElement,
  PaginationItemProps
>;

export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  SaigonProps<"a", HTMLElement>;
export type PaginationLinkType = ForwardRefComponent<
  HTMLElement,
  PaginationLinkProps
>;

PaginationFC.displayName = "Pagination";
ItemFC.displayName = "Pagination.Item";
LinkFC.displayName = "Pagination.Link";

const Pagination = Object.assign(PaginationFC, {
  Item: ItemFC,
  Link: LinkFC,
});

export default Pagination;
