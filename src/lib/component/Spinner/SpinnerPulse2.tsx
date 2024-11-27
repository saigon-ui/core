import styled from "@emotion/styled";
import { SaigonUIContext } from "../../base/context";
import { memo, useContext } from "react";

const Wrapper = styled.div<{ cssVarPrefix: string }>`
  display: inline-block;
  width: ${(p) => `var(--${p.cssVarPrefix}spinner-width, 2rem)`};
  height: ${(p) => `var(--${p.cssVarPrefix}spinner-height, 2rem)`};
  vertical-align: ${(p) =>
    `var(--${p.cssVarPrefix}spinner-vertical-align, -0.125em)`};

  svg {
    vertical-align: unset;
  }

  .l-1 {
    scale: 1 1;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 0.8s) linear infinite pulse_2-anim-1`};
  }

  .l-2 {
    scale: 1 0.2;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 0.8s) linear infinite pulse_2-anim-2`};
  }

  .l-3 {
    scale: 1 1;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 0.8s) linear infinite pulse_2-anim-3`};
  }

  @keyframes pulse_2-anim-1 {
    33% {
      scale: 1 0.2;
    }
    66% {
      scale: 1 1;
    }
    99% {
      scale: 1 1;
    }
  }

  @keyframes pulse_2-anim-2 {
    0% {
      scale: 1 0.2;
    }
    33% {
      scale: 1 1;
    }
    66% {
      scale: 1 1;
    }
  }

  @keyframes pulse_2-anim-3 {
    33% {
      scale: 1 1;
    }
    66% {
      scale: 1 0.2;
    }
    99% {
      scale: 1 1;
    }
  }
`;

const SpinnerPulse2 = memo((props: any) => {
  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);

  return (
    <Wrapper {...props} cssVarPrefix={cssVarPrefix}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        stroke="currentColor"
      >
        <line
          strokeWidth="20"
          className="l-1"
          y2="90"
          x2="10"
          y1="10"
          x1="10"
          transform-origin="10 50"
        />
        <line
          strokeWidth="20"
          className="l-2"
          y2="90"
          x2="50"
          y1="10"
          x1="50"
          transform-origin="50 50"
        />
        <line
          strokeWidth="20"
          className="l-3"
          y2="90"
          x2="90"
          y1="10"
          x1="90"
          transform-origin="90 50"
        />
      </svg>
    </Wrapper>
  );
});

export default SpinnerPulse2;
