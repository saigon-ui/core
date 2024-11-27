import classNames from "classnames";
import { forwardRef } from "react";
import { FigureImgProps, FigureImgType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: FigureImgProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    imgFluid,
    imgThumbnail,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  imgFluid !== undefined && (classNames["img-fluid"] = imgFluid);
  imgThumbnail !== undefined && (classNames["img-thumbnail"] = imgThumbnail);

  return [["figure-img", classNames], rest];
}

const Img: FigureImgType = forwardRef<HTMLElement, FigureImgProps>(
  (props, ref: any) => {
    const {
      as,
      className,
      css,
      style,
      children,
      remainedProps: rest,
    } = usePropsDestructor(props, PropsDestructor);

    let { src, ...remainedProps } = rest;
    if (!src) {
      return (
        <svg
          className={classNames("bd-placeholder-img", className)}
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          css={css}
          style={style}
        >
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <g
            style={{
              transform: "translate(calc(50% - 16px), calc(50% - 16px))",
            }}
          >
            <rect height="32" width="32" y="0" x="0" fill="#dee2e6" />
            <path
              d="m1.375,20.9375l8.0625,-11.1875l9.9375,15.3125l5.625,-7.625l5.625,7.625l0,-23.75l-29.25,0.0"
              fill="#868e96"
            />
            <ellipse rx="3" id="svg_4" cy="8" cx="19" fill="#dee2e6" />
          </g>
        </svg>
      );
    }

    return createElement(
      as || "img",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Img;
