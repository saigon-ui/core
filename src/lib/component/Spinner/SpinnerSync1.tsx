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
    translate: 0;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.2s) linear infinite sync_1-anim-1`};
  }

  .c-2 {
    translate: 0 -20px;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.2s) linear infinite sync_1-anim-2`};
  }

  .c-3 {
    translate: 0;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 1.2s) linear infinite sync_1-anim-3`};
  }

  @keyframes sync_1-anim-1 {
    0% {
      translate: 0;
    }
    25% {
      translate: 0 -20px;
    }
    75% {
      translate: 0 20px;
    }
    85% {
      translate: 0 20px;
    }
    to {
      translate: 0;
    }
  }

  @keyframes sync_1-anim-2 {
    0% {
      translate: 0 -20px;
    }
    50% {
      translate: 0 20px;
    }
    60% {
      translate: 0 20px;
    }
    85% {
      translate: 0;
    }
    to {
      translate: 0 -20px;
    }
  }

  @keyframes sync_1-anim-3 {
    0% {
      translate: 0;
    }
    25% {
      translate: 0 20px;
    }
    35% {
      translate: 0 20px;
    }
    60% {
      translate: 0;
    }
    85% {
      translate: 0 -20px;
    }
    to {
      translate: 0;
    }
  }
`;

const SpinnerSync1 = memo((props: any) => {
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

export default SpinnerSync1;
