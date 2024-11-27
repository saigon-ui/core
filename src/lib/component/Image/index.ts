import { ImgHTMLAttributes } from "react";
import {
  ForwardRefComponent,
  SaigonProps,
  ImageProp,
} from "../../saigon.types";
import ImageFC from "./Image";

export type ImageProps = ImageProp &
  ImgHTMLAttributes<Element> &
  Omit<SaigonProps<"img", HTMLImageElement>, keyof ImageProp>;

export type ImageType = ForwardRefComponent<HTMLImageElement, ImageProps>;

/**
 * Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 * @param {ImageProps} props
 * @returns {ImageType}
 */
const Image = ImageFC;
Image.displayName = "Image";

export default Image;
