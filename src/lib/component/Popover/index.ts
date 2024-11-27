import {
  ButtonProp,
  ForwardRefComponent,
  PopoverProp,
  SaigonComponent,
  SaigonProps,
} from "../../saigon.types";
import PopoverFC from "./Popover";
import ToggleFC from "./Toggle";
import ModalFC from "./Modal";
import TitleFC from "./Title";
import BodyFC from "./Body";
import CloseButtonFC from "./CloseButton";

export type PopoverProps = PopoverProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof PopoverProp>;

export type PopoverRef = HTMLElement & {
  show: (relativeDom: HTMLElement) => void;
  close: () => void;
};

export type PopoverType = ForwardRefComponent<PopoverRef, PopoverProps>;

export type PopoverToggleProps = Omit<ButtonProp, "as"> &
  SaigonProps<"button", HTMLElement>;

export type PopoverToggleType = SaigonComponent<PopoverToggleProps>;

export type PopoverModalProps = SaigonProps<"div", HTMLElement>;

export type PopoverModalType = SaigonComponent<PopoverModalProps>;

export type PopoverTitleProps = SaigonProps<"h3", HTMLElement>;

export type PopoverTitleType = ForwardRefComponent<
  HTMLElement,
  PopoverTitleProps
>;

export type PopoverBodyProps = SaigonProps<"div", HTMLElement>;

export type PopoverBodyType = ForwardRefComponent<
  HTMLElement,
  PopoverBodyProps
>;

export type PopoverCloseButtonProps = SaigonProps<"button", HTMLElement>;

export type PopoverCloseButtonType = ForwardRefComponent<
  HTMLElement,
  PopoverCloseButtonProps
>;

PopoverFC.displayName = "Popover";
ToggleFC.displayName = "Popover.Toggle";
ModalFC.displayName = "Popover.Modal";
TitleFC.displayName = "Popover.Title";
BodyFC.displayName = "Popover.Body";
CloseButtonFC.displayName = "Popover.CloseButton";

const Popover = Object.assign(PopoverFC, {
  Toggle: ToggleFC,
  Modal: ModalFC,
  Title: TitleFC,
  Body: BodyFC,
  CloseButton: CloseButtonFC,
});

export default Popover;
