import {
  ForwardRefComponent,
  ModalProp,
  SaigonProps,
} from "../../saigon.types";
import ModalFC from "./Modal";
import DialogFC from "./Dialog";
import ContentFC from "./Content";
import HeaderFC from "./Header";
import TitleFC from "./Title";
import BodyFC from "./Body";
import FooterFC from "./Footer";
import CloseButtonFC from "./CloseButton";

export type ModalProps = ModalProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof ModalProp>;

export type ModalRef = {
  domRef: React.RefObject<HTMLElement>;
  closed: () => boolean;
  unmounted: () => boolean;
  close: () => void;
};

export type ModalType = ForwardRefComponent<ModalRef, ModalProps>;

export type ModalDialogProps = SaigonProps<"div", HTMLElement>;
export type ModalDialogType = ForwardRefComponent<
  HTMLElement,
  ModalDialogProps
>;

export type ModalContentProps = SaigonProps<"div", HTMLElement>;
export type ModalContentType = ForwardRefComponent<
  HTMLElement,
  ModalContentProps
>;

export type ModalHeaderProps = SaigonProps<"div", HTMLElement>;
export type ModalHeaderType = ForwardRefComponent<
  HTMLElement,
  ModalHeaderProps
>;

export type ModalTitleProps = SaigonProps<"h5", HTMLElement>;
export type ModalTitleType = ForwardRefComponent<HTMLElement, ModalTitleProps>;

export type ModalBodyProps = SaigonProps<"div", HTMLElement>;
export type ModalBodyType = ForwardRefComponent<HTMLElement, ModalBodyProps>;

export type ModalFooterProps = SaigonProps<"div", HTMLElement>;
export type ModalFooterType = ForwardRefComponent<
  HTMLElement,
  ModalFooterProps
>;

export type ModalCloseButtonProps = { btnCloseWhite?: boolean } & SaigonProps<
  "button",
  HTMLElement
>;
export type ModalCloseButtonType = ForwardRefComponent<
  HTMLElement,
  ModalCloseButtonProps
>;

ModalFC.displayName = "Modal";
DialogFC.displayName = "Modal.Dialog";
ContentFC.displayName = "Modal.Content";
HeaderFC.displayName = "Modal.Header";
TitleFC.displayName = "Modal.Title";
BodyFC.displayName = "Modal.Body";
FooterFC.displayName = "Modal.Footer";
CloseButtonFC.displayName = "Modal.CloseButton";

const Modal = Object.assign(ModalFC, {
  Dialog: DialogFC,
  Content: ContentFC,
  Header: HeaderFC,
  Title: TitleFC,
  Body: BodyFC,
  Footer: FooterFC,
  CloseButton: CloseButtonFC,
});
export default Modal;
