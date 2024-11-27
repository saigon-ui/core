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
    scale: 0.7;
    rotate: 0deg;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 3.6s) linear infinite buddhism_1-anim-1`};
  }
  .c-2 {
    scale: 0.7;
    rotate: 0deg;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 3.6s) linear infinite buddhism_1-anim-1`};
  }

  @keyframes buddhism_1-anim-1 {
    to {
      rotate: 360deg;
    }
  }
`;

const SpinnerBuddhism1 = memo((props: any) => {
  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);

  return (
    <Wrapper {...props} cssVarPrefix={cssVarPrefix}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        stroke="currentColor"
        fill="none"
      >
        <path
          className="c-1"
          d="m0,10l50,0l0,80l50,0"
          strokeWidth="20"
          transform-origin="50 50"
        />
        <path
          className="c-2"
          d="m10,100l0,-50l80,0l0,-50"
          strokeWidth="20"
          transform-origin="50 50"
        />
      </svg>
    </Wrapper>
  );
});

export default SpinnerBuddhism1;
