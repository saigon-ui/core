import {
  ForwardRefComponent,
  ImageProp,
  SaigonProps,
} from "../../saigon.types";
import FigureFC from "./Figure";
import ImgFC from "./Img";
import CaptionFC from "./Caption";

export type FigureProps = SaigonProps<"figure", HTMLElement>;
export type FigureType = ForwardRefComponent<HTMLElement, FigureProps>;

export type FigureImgProps = React.ImgHTMLAttributes<HTMLElement> &
  ImageProp &
  Omit<SaigonProps<"img", HTMLElement>, keyof ImageProp>;
export type FigureImgType = ForwardRefComponent<HTMLElement, FigureImgProps>;

export type FigureCaptionProps = SaigonProps<"figcaption", HTMLElement>;
export type FigureCaptionType = ForwardRefComponent<
  HTMLElement,
  FigureCaptionProps
>;

FigureFC.displayName = "Figure";
ImgFC.displayName = "Figure.Img";
CaptionFC.displayName = "Figure.Caption";

const Figure = Object.assign(FigureFC, {
  Img: ImgFC,
  Caption: CaptionFC,
});

export default Figure;
