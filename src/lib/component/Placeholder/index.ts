import {
  ForwardRefComponent,
  PlaceholderProp,
  PlaceholderSpanProp,
  PlaceholderButtonProp,
  SaigonComponent,
  SaigonProps,
} from "../../saigon.types";
import PlaceholderFC from "./Placeholder";
import SpanFC from "./Span";
import CircleFC from "./Circle";
import ButtonFC from "./Button";
import ButtonComp from "../Button";

export type PlaceholderProps = PlaceholderProp &
  Omit<SaigonProps<"div", HTMLElement>, keyof PlaceholderProp>;
export type PlaceholderType = ForwardRefComponent<
  HTMLElement,
  PlaceholderProps
>;

export type PlaceholderSpanProps = PlaceholderSpanProp &
  Omit<SaigonProps<"span", HTMLElement>, keyof PlaceholderSpanProp>;
export type PlaceholderSpanType = SaigonComponent<PlaceholderSpanProps>;

export type PlaceholderCircleProps = SaigonProps<"div", HTMLElement>;
export type PlaceholderCircleType = SaigonComponent<PlaceholderCircleProps>;

export type PlaceholderButtonProps = PlaceholderButtonProp &
  Omit<
    SaigonProps<typeof ButtonComp, HTMLElement>,
    keyof PlaceholderButtonProp
  >;
export type PlaceholderButtonType = SaigonComponent<PlaceholderButtonProps>;

PlaceholderFC.displayName = "Placeholder";
SpanFC.displayName = "Placeholder.Span";
CircleFC.displayName = "Placeholder.Circle";
ButtonFC.displayName = "Placeholder.Button";

const Placeholder = Object.assign(PlaceholderFC, {
  Span: SpanFC,
  Circle: CircleFC,
  Button: ButtonFC,
});

export default Placeholder;
