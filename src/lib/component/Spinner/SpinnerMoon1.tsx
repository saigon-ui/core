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
    rotate: 0deg;
    animation: ${(p) =>
      `var(--${p.cssVarPrefix}spinner-animation-speed, 0.8s) linear infinite moon_1-anim-1`};
  }

  @keyframes moon_1-anim-1 {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerMoon1 = memo((props: any) => {
  const {
    theme: { cssVarPrefix },
  } = useContext(SaigonUIContext);

  return (
    <Wrapper {...props} cssVarPrefix={cssVarPrefix}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        stroke="currentColor"
        fill="currentColor"
      >
        <circle
          r="40"
          cy="50"
          cx="50"
          strokeWidth="10"
          strokeOpacity="0.2"
          fill="none"
        />
        <circle
          className="c-1"
          r="10"
          cy="10"
          cx="50"
          strokeWidth="0"
          transform-origin="50 50"
        />
      </svg>
    </Wrapper>
  );
});

export default SpinnerMoon1;
