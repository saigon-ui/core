import {
  ForwardRefComponent,
  SaigonProps,
  ToastProp,
} from "../../saigon.types";
import ToastFC from "./Toast";
import HeaderFC from "./Header";
import BodyFC from "./Body";
import CloseButtonFC from "./CloseButton";
import ContainerFC from "./Container";

export type ToastProps = ToastProp & SaigonProps<"div", HTMLElement>;
export type ToastType = ForwardRefComponent<ToastRef, ToastProps>;
export type ToastRef = {
  domRef: React.RefObject<HTMLElement>;
  closed: () => boolean;
  unmounted: () => boolean;
  close: () => void;
  translate: (val: string) => void;
};

export type ToastHeaderProps = SaigonProps<"div", HTMLElement>;
export type ToastHeaderType = ForwardRefComponent<
  HTMLElement,
  ToastHeaderProps
>;

export type ToastBodyProps = SaigonProps<"div", HTMLElement>;
export type ToastBodyType = ForwardRefComponent<HTMLElement, ToastBodyProps>;

export type ToastCloseButtonProps = SaigonProps<"button", HTMLElement>;
export type ToastCloseButtonType = ForwardRefComponent<
  HTMLElement,
  ToastCloseButtonProps
>;

ToastFC.displayName = "Toast";
HeaderFC.displayName = "Toast.Header";
BodyFC.displayName = "Toast.Body";
CloseButtonFC.displayName = "Toast.CloseButton";
ContainerFC.displayName = "Toast.Container";

const Toast = Object.assign(ToastFC, {
  Header: HeaderFC,
  Body: BodyFC,
  CloseButton: CloseButtonFC,
  Container: ContainerFC,
});

export default Toast;
