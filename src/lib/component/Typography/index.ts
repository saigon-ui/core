import {
  ForwardRefComponent,
  SaigonComponent,
  SaigonProps,
  TypographyProp,
} from "../../saigon.types";
import SpanFC, {
  AbbrFC,
  DelFC,
  EmFC,
  InsFC,
  MarkFC,
  SmallFC,
  StripFC,
  StrongFC,
  UnderlineFC,
} from "./Span";
import TypographyFC from "./Typography";

export type TypographyProps = TypographyProp &
  Omit<SaigonProps<"p", HTMLElement>, keyof TypographyProp>;

export type TypographyType = ForwardRefComponent<HTMLElement, TypographyProps>;

export type TypographySpanProps = SaigonProps<"span", HTMLElement>;

export type TypographyAbbrProps = SaigonProps<"abbr", HTMLElement>;

export type TypographySpanType = ForwardRefComponent<
  HTMLElement,
  TypographySpanProps
>;
export type TypographyAbbrType = ForwardRefComponent<
  HTMLElement,
  TypographyAbbrProps
>;
export type TypographyMarkType = SaigonComponent<
  SaigonProps<"mark", HTMLElement>
>;
export type TypographyDelType = SaigonComponent<
  SaigonProps<"del", HTMLElement>
>;
export type TypographyStripType = SaigonComponent<
  SaigonProps<"s", HTMLElement>
>;
export type TypographyInsType = SaigonComponent<
  SaigonProps<"ins", HTMLElement>
>;
export type TypographyUnderlineType = SaigonComponent<
  SaigonProps<"u", HTMLElement>
>;
export type TypographySmallType = SaigonComponent<
  SaigonProps<"small", HTMLElement>
>;
export type TypographyStrongType = SaigonComponent<
  SaigonProps<"strong", HTMLElement>
>;
export type TypographyEmType = SaigonComponent<SaigonProps<"em", HTMLElement>>;

/**
 * Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 * @param {ButtonProps} props
 * @returns {ButtonType}
 */
TypographyFC.displayName = "Typography";
SpanFC.displayName = "Typography.Span";
AbbrFC.displayName = "Typography.Abbr";
MarkFC.displayName = "Typography.Mark";
DelFC.displayName = "Typography.Del";
StripFC.displayName = "Typography.Strip";
InsFC.displayName = "Typography.Ins";
UnderlineFC.displayName = "Typography.Underline";
SmallFC.displayName = "Typography.Small";
StrongFC.displayName = "Typography.Strong";
EmFC.displayName = "Typography.Em";

const Typography = Object.assign(TypographyFC, {
  Span: SpanFC,
  Abbr: AbbrFC,
  Mark: MarkFC,
  Del: DelFC,
  Strip: StripFC,
  Ins: InsFC,
  Underline: UnderlineFC,
  Small: SmallFC,
  Strong: StrongFC,
  Em: EmFC,
});
export default Typography;
