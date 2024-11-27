import {
  ButtonProp,
  CloseButtonProp,
  ForwardRefComponent,
  OffcanvasProp,
  SaigonProps,
} from "../../saigon.types";
import OffcanvasFC from "./Offcanvas";
import HeaderFC from "./Header";
import TitleFC from "./Title";
import BodyFC from "./Body";
import CloseButtonFC from "./CloseButton";

export type OffcanvasRef = {
  domRef: React.Ref<HTMLElement>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
  isShowed: () => boolean;
  unmounted: () => boolean;
};

export type OffcanvasProps = OffcanvasProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof OffcanvasProp>;
export type OffcanvasType = ForwardRefComponent<OffcanvasRef, OffcanvasProps>;

export type OffcanvasHeaderProps = SaigonProps<"div", HTMLElement>;
export type OffcanvasHeaderType = ForwardRefComponent<
  HTMLElement,
  OffcanvasHeaderProps
>;

export type OffcanvasTitleProps = SaigonProps<"div", HTMLElement>;
export type OffcanvasTitleType = ForwardRefComponent<
  HTMLElement,
  OffcanvasTitleProps
>;

export type OffcanvasBodyProps = SaigonProps<"div", HTMLElement>;
export type OffcanvasBodyType = ForwardRefComponent<
  HTMLElement,
  OffcanvasBodyProps
>;

export type OffcanvasCloseButtonProps = CloseButtonProp &
  Omit<SaigonProps<"button", HTMLElement>, keyof CloseButtonProp>;
export type OffcanvasCloseButtonType = ForwardRefComponent<
  HTMLElement,
  OffcanvasCloseButtonProps
>;

export type OffcanvasToggleProps = ButtonProp &
  Omit<SaigonProps<"button", HTMLElement>, keyof ButtonProp>;
export type OffcanvasToggleType = ForwardRefComponent<
  HTMLElement,
  OffcanvasToggleProps
>;

OffcanvasFC.displayName = "Offcanvas";
HeaderFC.displayName = "Offcanvas.Header";
TitleFC.displayName = "Offcanvas.Title";
BodyFC.displayName = "Offcanvas.Body";
CloseButtonFC.displayName = "Offcanvas.CloseButton";

const Offcanvas = Object.assign(OffcanvasFC, {
  Header: HeaderFC,
  Title: TitleFC,
  Body: BodyFC,
  CloseButton: CloseButtonFC,
});
export default Offcanvas;
