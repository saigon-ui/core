import {
  CardImgProp,
  CardProp,
  ForwardRefComponent,
  SaigonProps,
} from "../../saigon.types";
import BodyFC from "./Body";
import CardFC from "./Card";
import Group from "./CardGroup";
import FooterFC from "./Footer";
import HeaderFC from "./Header";
import LinkFC from "./Link";
import SubtitleFC from "./Subtitle";
import TextFC from "./Text";
import TitleFC from "./Title";
import ImgFC from "./Img";

export type CardProps = CardProp & SaigonProps<"div", HTMLElement>;

export type CardType = ForwardRefComponent<HTMLElement, CardProps>;

export type CardBodyProps = SaigonProps<"div", HTMLElement>;

export type CardBodyType = ForwardRefComponent<HTMLElement, CardBodyProps>;

export type CardHeaderProps = SaigonProps<"div", HTMLElement>;

export type CardHeaderType = ForwardRefComponent<HTMLElement, CardHeaderProps>;

export type CardFooterProps = SaigonProps<"div", HTMLElement>;

export type CardFooterType = ForwardRefComponent<HTMLElement, CardFooterProps>;

export type CardTitleProps = SaigonProps<"h5", HTMLElement>;

export type CardTitleType = ForwardRefComponent<HTMLElement, CardTitleProps>;

export type CardSubtitleProps = SaigonProps<"div", HTMLElement>;

export type CardSubtitleType = ForwardRefComponent<
  HTMLElement,
  CardSubtitleProps
>;

export type CardTextProps = SaigonProps<"p", HTMLElement>;

export type CardTextType = ForwardRefComponent<HTMLElement, CardTextProps>;

export type CardLinkProps = SaigonProps<"a", HTMLElement>;

export type CardLinkType = ForwardRefComponent<HTMLElement, CardLinkProps>;

export type CardImgProps = CardImgProp &
  SaigonProps<"img", HTMLImageElement> &
  React.ImgHTMLAttributes<HTMLImageElement>;

export type CardImgType = ForwardRefComponent<HTMLElement, CardImgProps>;

CardFC.displayName = "Card";
BodyFC.displayName = "Card.Body";
HeaderFC.displayName = "Card.Header";
FooterFC.displayName = "Card.Footer";
TitleFC.displayName = "Card.Title";
SubtitleFC.displayName = "Card.Subtitle";
LinkFC.displayName = "Card.Link";
TextFC.displayName = "Card.Text";
ImgFC.displayName = "Card.Img";

Group.displayName = "CardGroup";
export const CardGroup = Group;

const Card = Object.assign(CardFC, {
  Body: BodyFC,
  Header: HeaderFC,
  Footer: FooterFC,
  Title: TitleFC,
  Subtitle: SubtitleFC,
  Link: LinkFC,
  Text: TextFC,
  Img: ImgFC,
});
export default Card;
