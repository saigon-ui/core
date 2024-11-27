import styled from "@emotion/styled";
import { memo, useContext } from "react";
import { SaigonUIContext } from "../../base/context";

const Wrapper = styled.div<{ cssVarPrefix: string }>`
  display: inline-block;
  width: ${(p) => `var(--${p.cssVarPrefix}spinner-width, 2rem)`};
  height: ${(p) => `var(--${p.cssVarPrefix}spinner-height, 2rem)`};
  vertical-align: ${(p) =>
    `var(--${p.cssVarPrefix}spinner-vertical-align, -0.125em)`};

  svg {
    vertical-align: unset;
  }

  .g-1 {
    rotate: 45deg;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.6s) ease-in-out infinite dots_5-anim-g1`};
  }

  .c-1 {
    translate: 0;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.6s) ease-out infinite dots_5-anim-c1`};
  }

  .c-2 {
    translate: 0;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.6s) ease-out infinite dots_5-anim-c2`};
  }

  .c-3 {
    translate: 0;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.6s) ease-out infinite dots_5-anim-c3`};
  }

  .c-4 {
    translate: 0;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.6s) ease-out infinite dots_5-anim-c4`};
  }

  @keyframes dots_5-anim-g1 {
    to {
      rotate: 405deg;
    }
  }

  @keyframes dots_5-anim-c1 {
    from {
      translate: 0;
    }
    30% {
      translate: 0 -10px;
    }
    70% {
      translate: 0 -10px;
    }
    to {
      translate: 0;
    }
  }

  @keyframes dots_5-anim-c2 {
    from {
      translate: 0;
    }
    30% {
      translate: 10px 0;
    }
    70% {
      translate: 10px 0;
    }
    to {
      translate: 0;
    }
  }

  @keyframes dots_5-anim-c3 {
    from {
      translate: 0;
    }
    30% {
      translate: 0 10px;
    }
    70% {
      translate: 0 10px;
    }
    to {
      translate: 0;
    }
  }

  @keyframes dots_5-anim-c4 {
    from {
      translate: 0;
    }
    30% {
      translate: -10px 0;
    }
    70% {
      translate: -10px 0;
    }
    to {
      translate: 0;
    }
  }
`;

const SpinnerSync2 = memo((props: any) => {
  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);

  return (
    <Wrapper {...props} cssVarPrefix={cssVarPrefix}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <g className="g-1" transform-origin="50 50">
          <circle
            className="c-1"
            cx="50"
            cy="25"
            r="15"
            transform-origin="50 25"
          />
          <circle
            className="c-2"
            cx="75"
            cy="50"
            r="15"
            transform-origin="75 50"
          />
          <circle
            className="c-3"
            cx="50"
            cy="75"
            r="15"
            transform-origin="50 75"
          />
          <circle
            className="c-4"
            cx="25"
            cy="50"
            r="15"
            transform-origin="25 50"
          />
        </g>
      </svg>
    </Wrapper>
  );
});

export default SpinnerSync2;
