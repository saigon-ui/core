/** @jsxImportSource @emotion/react */
import { css, css as cssFunc, SerializedStyles } from "@emotion/react";
import { ButtonProp } from "../../saigon.types";
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";
import { useResponsiveSize, useThemeColor } from "../../base/theme";

type RippleType = {
  variant: string;
  x: number;
  y: number;
  w: number;
  h: number;
  m: number;
};

const RippleWrapper = styled.span`
  position: absolute;
  transform: scale(0);
  opacity: 0.3;
  background: var(--ripple-color, white);
  pointer-events: none;
  animation: 400ms linear btn-ripple;
  @keyframes btn-ripple {
    to {
      opacity: 0;
      transform: scale(2.5);
    }
  }
`;
const Ripple = ({ x, y, m }: RippleType) => {
  return (
    <RippleWrapper
      className="btn-effect-ripple"
      aria-hidden={true}
      style={{
        left: `${x - m * 0.5}px`,
        top: `${y - m * 0.5}px`,
        width: `${m}px`,
        height: `${m}px`,
        borderRadius: `${m}px`,
      }}
    />
  );
};

const PuffWrapper = styled.span`
  position: absolute;
  transform: scale(2.5);
  opacity: 0;
  background: var(--ripple-color, white);
  pointer-events: none;
  animation: 300ms linear btn-puff;
  @keyframes btn-puff {
    to {
      opacity: 0.3;
      transform: scale(0);
    }
  }
`;

const Puff = ({ x, y, m }: RippleType) => {
  return (
    <PuffWrapper
      className="btn-effect-puff"
      aria-hidden={true}
      style={{
        left: `${x - m * 0.5}px`,
        top: `${y - m * 0.5}px`,
        width: `${m}px`,
        height: `${m}px`,
        borderRadius: `${m}px`,
      }}
    />
  );
};

const BoxShadowWrapper = styled.span`
  position: absolute;
  top: -1px;
  left: -1px;
  background: transparent !important;
  box-shadow: 0px 0px 0px 0px var(--ripple-color-1);
  pointer-events: none;
  animation: 400ms linear btn-shadow;
  @keyframes btn-shadow {
    to {
      box-shadow: 0px 0px 0px 5px var(--ripple-color-2);
    }
  }
`;

const BoxShadow = ({ w, h, variant }: RippleType) => {
  const color = useThemeColor();
  //const { r, g, b } =
  //  (color.theme.variants as any)[variant]?.rgb ??
  //  color.theme.variants.primary.rgb;

  return (
    <BoxShadowWrapper
      className={`btn btn-${variant || "primary"} btn-effect-box-shadow`}
      aria-hidden={true}
      css={css`
        --ripple-color-1: rgba(
          var(--${color.theme.cssVarPrefix}${variant}-rgb),
          0.75
        );
        --ripple-color-2: rgba(
          var(--${color.theme.cssVarPrefix}${variant}-rgb),
          0.1
        );
      `}
      style={{
        width: `${w}px`,
        height: `${h}px`,
      }}
    />
  );
};

const SlideWrapper = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  transform: scaleY(0);
  transform-origin: 0 0;
  opacity: 0.3;
  background: var(--ripple-color, white);
  pointer-events: none;
  animation: 300ms linear btn-slide;
  @keyframes btn-slide {
    to {
      opacity: 0;
      transform: scaleY(1.5);
    }
  }
`;

const Slide = ({ w, h }: RippleType) => {
  return (
    <SlideWrapper
      className="btn-effect-slide"
      aria-hidden={true}
      style={{
        width: `${w}px`,
        height: `${h}px`,
      }}
    />
  );
};

const StripeWrapper = styled.span`
  position: absolute;
  transform: scaleX(0);
  transform-origin: 0 0;
  opacity: 0.3;
  background: var(--ripple-color, white);
  pointer-events: none;
  animation-duration: 400ms;
  animation-timing-function: linear;
  @keyframes btn-stripe1 {
    to {
      opacity: 0;
      transform: scaleX(1);
    }
  }
  @keyframes btn-stripe2 {
    to {
      opacity: 0;
      transform: scaleX(-1);
    }
  }
`;

const Stripe = ({ w, h }: RippleType) => {
  return (
    <>
      <StripeWrapper
        className="btn-effect-stripe"
        aria-hidden={true}
        style={{
          left: `${w * 0.5}px`,
          top: `${h * 0.5 - h * 0.25}px`,
          animationName: "btn-stripe1",
          width: `${w}px`,
          height: `${h * 0.1}px`,
        }}
      />
      <StripeWrapper
        className="btn-effect-stripe"
        aria-hidden={true}
        style={{
          left: `${w * 0.5}px`,
          top: `${h * 0.5 - h * 0.05}px`,
          animationName: "btn-stripe1",
          width: `${w}px`,
          height: `${h * 0.1}px`,
        }}
      />
      <StripeWrapper
        className="btn-effect-stripe"
        aria-hidden={true}
        style={{
          left: `${w * 0.5}px`,
          top: `${h * 0.5 + h * 0.15}px`,
          animationName: "btn-stripe1",
          width: `${w}px`,
          height: `${h * 0.1}px`,
        }}
      />

      <StripeWrapper
        className="btn-effect-stripe"
        aria-hidden={true}
        style={{
          left: `${w * 0.5}px`,
          top: `${h * 0.5 - h * 0.25}px`,
          animationName: "btn-stripe2",
          width: `${w}px`,
          height: `${h * 0.1}px`,
        }}
      />
      <StripeWrapper
        className="btn-effect-stripe"
        aria-hidden={true}
        style={{
          left: `${w * 0.5}px`,
          top: `${h * 0.5 - h * 0.05}px`,
          animationName: "btn-stripe2",
          width: `${w}px`,
          height: `${h * 0.1}px`,
        }}
      />
      <StripeWrapper
        className="btn-effect-stripe"
        aria-hidden={true}
        style={{
          left: `${w * 0.5}px`,
          top: `${h * 0.5 + h * 0.15}px`,
          animationName: "btn-stripe2",
          width: `${w}px`,
          height: `${h * 0.1}px`,
        }}
      />
    </>
  );
};

const Effects: { [key: string]: any } = {
  ripple: {
    Span: Ripple,
    Duration: 400,
    Multiple: true,
    Style: { position: "relative", overflow: "hidden" } as CSSProperties,
  },
  puff: {
    Span: Puff,
    Duration: 300,
    Multiple: true,
    Style: { position: "relative", overflow: "hidden" } as CSSProperties,
  },
  "box-shadow": {
    Span: BoxShadow,
    Duration: 400,
    Multiple: true,
    Style: { position: "relative", overflow: "visible" } as CSSProperties,
  },
  slide: {
    Span: Slide,
    Duration: 300,
    Multiple: true,
    Style: { position: "relative", overflow: "hidden" } as CSSProperties,
  },
  stripe: {
    Span: Stripe,
    Duration: 400,
    Multiple: true,
    Style: { position: "relative", overflow: "hidden" } as CSSProperties,
  },
};

const RingRing = styled.span`
  display: block;
  transform: translate(0, 0);
  animation: 200ms linear btn-ringring;
  @keyframes btn-ringring {
    to {
      transform: translate(0.5px, 1px);
    }
  }
`;

export default function propClickEffect(
  ref: React.RefObject<HTMLElement>,
  variant: string | undefined,
  clickEffect: Exclude<ButtonProp["clickEffect"], undefined>,
  cssInput: SerializedStyles | undefined,
  childrenInput: ReactNode
) {
  const rps = useResponsiveSize();
  const [effect, setEffect] = useState<ReactNode[]>([]);
  const rippleRef = useRef<any>({ timerId: 0 });

  // ripple effect
  const onPointerUp = useCallback(
    (evt: React.PointerEvent) => {
      if (!clickEffect) return;

      const UE = Effects[rps.getResponsive(clickEffect)];
      if (ref.current) {
        const clientRect = ref.current?.getBoundingClientRect();
        const x = evt.clientX - clientRect.left;
        const y = evt.clientY - clientRect.top;

        if (UE.Multiple)
          setEffect((ls) => [
            ...ls,
            <UE.Span
              key={ls.length}
              variant={variant}
              w={clientRect.width}
              h={clientRect.height}
              m={Math.max(clientRect.height, clientRect.width)}
              x={x}
              y={y}
            />,
          ]);
        else
          setEffect([
            <UE.Span
              variant={variant}
              w={clientRect.width}
              h={clientRect.height}
              m={Math.max(clientRect.height, clientRect.width)}
              x={x}
              y={y}
            />,
          ]);
      }

      clearTimeout(rippleRef.current.timerId);
      rippleRef.current.timerId = setTimeout(() => {
        setEffect([]);
      }, UE.Duration);
    },
    [clickEffect, rps]
  );

  // override css and children prop with click effect elements
  const others = useMemo(() => {
    let css = cssInput,
      children = childrenInput;
    if (clickEffect) {
      const UE = Effects[rps.getResponsive(clickEffect)];
      css = cssFunc(cssInput, UE.Style);

      children = effect.length ? (
        <>
          {effect}
          <RingRing>{childrenInput}</RingRing>
        </>
      ) : (
        childrenInput
      );
    }
    return { css, children };
  }, [effect, rps, clickEffect, cssInput, childrenInput]);

  return { onPointerUp, ...others };
}
