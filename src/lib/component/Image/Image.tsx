import { css as cssFunc } from "@emotion/react";
import classNames from "classnames";
import { forwardRef } from "react";
import { ImageProps, ImageType } from ".";
import { createElement, DestructorFunc, usePropsDestructor } from "../../base";
import { ThemeContext } from "../../base/context";
import { useResponsiveSize } from "../../base/theme";
import { Breakpoint } from "../../saigon.types";

const PropsDestructor: DestructorFunc = (
  next: ImageProps,
  ctx: ThemeContext,
  screen: Required<Breakpoint<boolean>>
) => {
  const {
    objectFit,
    objectPosition,
    imgFluid,
    imgThumbnail,

    // The rest
    ...rest
  } = next;

  const template = [] as string[];
  const className = {} as any;
  const breakpoints = ctx.theme.breakpoints!;

  function jsClassing(b: Breakpoint<any>, c: string) {
    b.xs !== undefined &&
      (screen.xs ||
        screen.sm ||
        screen.md ||
        screen.lg ||
        screen.xl ||
        screen.xxl) &&
      (className[c] = true);
    b.sm !== undefined &&
      (screen.sm || screen.md || screen.lg || screen.xl || screen.xxl) &&
      (className[c] = true);
    b.md !== undefined &&
      (screen.md || screen.lg || screen.xl || screen.xxl) &&
      (className[c] = true);
    b.lg !== undefined && (screen.lg || screen.xxl) && (className[c] = true);
    b.xl !== undefined && (screen.xl || screen.xxl) && (className[c] = true);
    b.xxl !== undefined && screen.xxl && (className[c] = true);
  }

  function templating(b: Breakpoint<any>, t: string) {
    b.xs !== undefined && template.push(t.replace("#", b.xs));

    b.sm !== undefined &&
      template.push(
        `@media (min-width: ${breakpoints.sm}){ ${t.replace("#", b.sm)} }`
      );

    b.md !== undefined &&
      template.push(
        `@media (min-width: ${breakpoints.md}){ ${t.replace("#", b.md)} }`
      );

    b.lg !== undefined &&
      template.push(
        `@media (min-width: ${breakpoints.lg}){ ${t.replace("#", b.lg)} }`
      );

    b.xl !== undefined &&
      template.push(
        `@media (min-width: ${breakpoints.xl}){ ${t.replace("#", b.xl)} }`
      );

    b.xxl !== undefined &&
      template.push(
        `@media (min-width: ${breakpoints.xxl}){ ${t.replace("#", b.xxl)} }`
      );
  }

  objectFit !== undefined &&
    templating(
      typeof objectFit === "object" ? objectFit : { xs: objectFit },
      "object-fit: #;"
    );

  objectPosition !== undefined &&
    templating(
      typeof objectPosition === "object"
        ? objectPosition
        : { xs: objectPosition },
      "object-position: #;"
    );

  imgFluid !== undefined &&
    jsClassing(
      typeof imgFluid === "object" ? imgFluid : { xs: imgFluid },
      "img-fluid"
    );

  imgThumbnail !== undefined &&
    jsClassing(
      typeof imgThumbnail === "object" ? imgThumbnail : { xs: imgThumbnail },
      "img-thumbnail"
    );

  return [
    { className: classNames(className), css: cssFunc(template.join("\n")) },
    rest,
  ];
};

const Image: ImageType = forwardRef<HTMLImageElement, ImageProps>(
  (props, ref: any) => {
    const { media } = useResponsiveSize();

    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, undefined, (next, ctx) =>
        PropsDestructor(next, ctx, media)
      );

    return createElement(
      as || "img",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default Image;
