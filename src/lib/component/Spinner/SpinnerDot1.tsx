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

  .c-1 {
    opacity: 0.2;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.2s) linear infinite dots_1-anim-1`};
  }

  .c-2 {
    opacity: 0.2;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.2s) linear infinite dots_1-anim-2`};
  }

  .c-3 {
    opacity: 0.2;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.2s) linear infinite dots_1-anim-3`};
  }

  @keyframes dots_1-anim-1 {
    0% {
      opacity: 0.2;
    }
    11% {
      opacity: 1;
    }
    88% {
      opacity: 1;
    }
    99% {
      opacity: 0.2;
    }
  }

  @keyframes dots_1-anim-2 {
    0% {
      opacity: 0.2;
    }
    33% {
      opacity: 0.2;
    }
    44% {
      opacity: 1;
    }
    88% {
      opacity: 1;
    }
    99% {
      opacity: 0.2;
    }
  }

  @keyframes dots_1-anim-3 {
    0% {
      opacity: 0.2;
    }
    66% {
      opacity: 0.2;
    }
    77% {
      opacity: 1;
    }
    88% {
      opacity: 1;
    }
    99% {
      opacity: 0.2;
    }
  }
`;

const SpinnerDot1 = memo((props: any) => {
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
        <circle
          className="c-1"
          cx="15"
          cy="50"
          r="15"
          transform-origin="15 50"
        />
        <circle
          className="c-2"
          cx="50"
          cy="50"
          r="15"
          transform-origin="50 50"
        />
        <circle
          className="c-3"
          cx="85"
          cy="50"
          r="15"
          transform-origin="85 50"
        />
      </svg>
    </Wrapper>
  );
});

export default SpinnerDot1;
