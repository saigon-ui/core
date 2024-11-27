import { forwardRef } from "react";
import { CardImgProps, CardImgType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
} from "../../base";

function PropsDestructor(
  next: CardImgProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    variant,
    placeholder,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;
  classNames["bd-placeholder-img"] = Boolean(placeholder);
  let basedClz;
  switch (variant) {
    case "top":
      basedClz = "card-img-top";
      break;
    case "bottom":
      basedClz = "card-img-bottom";
      break;
    default:
      basedClz = "card-img";
      break;
  }

  return [[basedClz, classNames], rest];
}

const Img: CardImgType = forwardRef<HTMLElement, CardImgProps>((props, ref) => {
  let { as, className, css, style, children, remainedProps } =
    usePropsDestructor(props, PropsDestructor);

  if (className && className.indexOf("bd-placeholder-img") > -1)
    return (
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <g
          style={{ transform: "translate(calc(50% - 16px), calc(50% - 16px))" }}
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

  return createElement(
    as || "img",
    { ref, className, style, css, ...remainedProps },
    children
  );
});

export default Img;
