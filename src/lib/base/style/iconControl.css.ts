import { css } from "@emotion/react";

const IconControl = () => css`
  .ico-control {
    position: relative;

    .ico {
      position: absolute;
      top: 0;
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 5px;
      opacity: 1;
      transition: opacity 0.2s ease-in-out;

      &.start {
        left: 0;
      }

      &.end {
        right: 0;
      }

      &.hoverable {
        opacity: 0;
      }

      &.hover {
        opacity: 1;
      }

      &.hover:not(.hoverable) {
        opacity: 0;
      }
    }
  }
`;

export default IconControl;
