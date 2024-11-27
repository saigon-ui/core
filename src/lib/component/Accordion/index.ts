import {
  AccordionProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import AccordionFC from "./Accordion";
import BodyFC from "./Body";
import ButtonFC from "./Button";
import CollapseFC from "./Collapse";
import HeaderFC from "./Header";
import ItemFC from "./Item";

export type AccordionRef = {
  domRef: React.Ref<HTMLDivElement>;
  expand: () => void;
  close: () => void;
  currentActiveKey: () => string[] | number[];
};

export type AccordionProps = AccordionProp &
  Omit<SaigonProps<"div", HTMLDivElement>, keyof AccordionProp>;

export type AccordionCollapseRef = {
  domRef: React.Ref<HTMLDivElement>;
  close: () => void;
  show: () => void;
};

export type AccordionType = ForwardRefComponent<AccordionRef, AccordionProps>;

export type AccordionCollapseProps = SaigonProps<"div", HTMLDivElement> & {
  _internal?: KeyType;
};

export type AccordionCollapseType = ForwardRefComponent<
  HTMLDivElement,
  AccordionCollapseProps
>;

export type AccordionBodyProps = SaigonProps<"div", HTMLElement>;

export type AccordionBodyType = ForwardRefComponent<
  HTMLElement,
  AccordionBodyProps
>;

type AccordionButtonProps = SaigonProps<"button", HTMLButtonElement> & {
  _internal?: KeyType;
};

export type AccordionButtonType = ForwardRefComponent<
  HTMLButtonElement,
  AccordionButtonProps
>;

export type AccordionItemProps = SaigonProps<"div", HTMLElement>;

export type AccordionItemType = ForwardRefComponent<
  HTMLElement,
  AccordionItemProps
>;

export type AccordionHeaderProps = SaigonProps<"h2", HTMLElement>;

export type AccordionHeaderType = ForwardRefComponent<
  HTMLHeadingElement,
  AccordionHeaderProps
>;

AccordionFC.displayName = "Accordion";
CollapseFC.displayName = "Accordion.Collapse";
HeaderFC.displayName = "Accordion.Header";
BodyFC.displayName = "Accordion.Body";
ButtonFC.displayName = "Accordion.Button";
ItemFC.displayName = "Accordion.Item";

const Accordion = Object.assign(AccordionFC, {
  Collapse: CollapseFC,
  Header: HeaderFC,
  Body: BodyFC,
  Button: ButtonFC,
  Item: ItemFC,
});

export default Accordion;
