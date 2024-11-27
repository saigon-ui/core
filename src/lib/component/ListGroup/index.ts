import {
  ForwardRefComponent,
  ListGroupItemProp,
  ListGroupProp,
  SaigonProps,
} from "../../saigon.types";
import ItemFC from "./Item";
import ListGroupFC from "./ListGroup";

export type ListGroupProps = ListGroupProp &
  Omit<SaigonProps<"ul", HTMLElement>, keyof ListGroupProp>;

export type ListGroupType = ForwardRefComponent<HTMLElement, ListGroupProps>;

export type ListGroupItemProps = ListGroupItemProp &
  Omit<SaigonProps<"li" | "a", HTMLElement>, keyof ListGroupItemProp>;

export type ListGroupItemType = ForwardRefComponent<
  HTMLElement,
  ListGroupItemProps
>;

ListGroupFC.displayName = "ListGroup";
ItemFC.displayName = "ListGroup.Item";

const ListGroup = Object.assign(ListGroupFC, {
  Item: ItemFC,
});
export default ListGroup;
