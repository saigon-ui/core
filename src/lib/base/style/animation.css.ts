import { css } from "@emotion/react";

// 0.15s = fade css variable value
const AnimationCSS = css`
  .anim {
    &.clip {
      &.show {
        clip-path: unset;
      }

      &.entering {
        clip-path: unset;
        animation: anim-clip-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        clip-path: inset(50% 0% 50% 0%);
        animation: anim-clip-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-clip-exiting {
        from {
          clip-path: inset(0% 0% 0% 0%);
        }
        to {
          clip-path: inset(50% 0% 50% 0%);
        }
      }

      @keyframes anim-clip-entering {
        from {
          clip-path: inset(50% 0% 50% 0%);
        }
        to {
          clip-path: inset(0% 0% 0% 0%);
        }
      }
    }

    &.blind {
      &.show {
        clip-path: unset;
      }

      &.entering {
        clip-path: unset;
        animation: anim-blind-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        clip-path: inset(0% 0% 100% 0%);
        animation: anim-blind-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-blind-entering {
        from {
          clip-path: inset(0% 0% 100% 0%);
        }
        to {
          clip-path: inset(0% 0% 0% 0%);
        }
      }

      @keyframes anim-blind-exiting {
        from {
          clip-path: inset(0% 0% 0% 0%);
        }
        to {
          clip-path: inset(0% 0% 100% 0%);
        }
      }
    }

    &.bounce {
      &.show {
        transform: translateY(0);
      }

      &.entering {
        transform: translateY(-50%);
        opacity: 0;
        animation: anim-bounce-entering var(--anim-duration, 0.4s) ease-in-out
          0s 1 normal forwards;
      }

      &.exiting {
        transform: translateY(0);
        opacity: 1;
        animation: anim-bounce-exiting var(--anim-duration, 0.4s) ease-in-out 0s
          1 normal forwards;
      }

      @keyframes anim-bounce-entering {
        from {
          transform: translateY(-50%);
          opacity: 0;
        }
        40% {
          transform: translateY(0);
          opacity: 1;
        }
        80% {
          transform: translateY(-10%);
          opacity: 1;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes anim-bounce-exiting {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(-50%);
          opacity: 0;
        }
      }
    }

    &.drop {
      &.show {
        clip-path: unset;
        transform: translateY(0);
        opacity: 1;
      }

      &.entering {
        clip-path: unset;
        transform: translateY(0);
        opacity: 1;
        animation: anim-drop-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        clip-path: inset(0% 0% 50% 0%);
        transform: translateY(50%);
        opacity: 0;
        animation: anim-drop-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-drop-entering {
        from {
          clip-path: inset(50% 0% 0% 0%);
          transform: translateY(-50%);
          opacity: 0;
        }
        to {
          clip-path: inset(0% 0% 0% 0%);
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes anim-drop-exiting {
        from {
          clip-path: inset(0% 0% 0% 0%);
          transform: translateY(0);
          opacity: 1;
        }
        to {
          clip-path: inset(0% 0% 50% 0%);
          transform: translateY(50%);
          opacity: 0;
        }
      }
    }

    &.fade {
      &.show {
        opacity: 1;
      }

      &.entering {
        opacity: 0;
        animation: anim-fade-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        opacity: 1;
        animation: anim-fade-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-fade-entering {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes anim-fade-exiting {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }

    &.fold {
      &.show {
        clip-path: unset;
      }

      &.entering {
        clip-path: unset;
        animation: anim-fold-entering var(--anim-duration, 0.4s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        clip-path: inset(0% 99% 90% 0%);
        animation: anim-fold-exiting var(--anim-duration, 0.4s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-fold-entering {
        from {
          clip-path: inset(0% 99% 90% 0%);
        }
        50% {
          clip-path: inset(0% 0% 90% 0%);
        }
        to {
          clip-path: inset(0% 0% 0% 0%);
        }
      }

      @keyframes anim-fold-exiting {
        from {
          clip-path: inset(0% 0% 0% 0%);
        }
        50% {
          clip-path: inset(0% 0% 90% 0%);
        }
        to {
          clip-path: inset(0% 99% 90% 0%);
        }
      }
    }

    &.puff {
      &.show {
        transform: scale(1);
      }

      &.entering {
        transform: scale(1.2);
        opacity: 0;
        animation: anim-puff-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        transform: scale(1);
        opacity: 1;
        animation: anim-puff-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-puff-entering {
        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      @keyframes anim-puff-exiting {
        to {
          transform: scale(1.2);
          opacity: 0;
        }
      }
    }

    &.scale {
      &.show {
        transform: scale(1);
      }

      &.entering {
        transform: scale(0.8);
        opacity: 0;
        animation: anim-scale-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        transform: scale(1);
        opacity: 1;
        animation: anim-scale-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-scale-entering {
        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      @keyframes anim-scale-exiting {
        to {
          transform: scale(0.8);
          opacity: 0;
        }
      }
    }

    &.shake {
      &.show {
        transform: translateX(0);
      }

      &.entering {
        transform: translateX(0);
        opacity: 1;
        animation: anim-shake-entering var(--anim-duration, 0.4s) ease-in-out 0s
          1 normal forwards;
      }

      &.exiting {
        transform: translateX(0);
        opacity: 0;
        animation: anim-shake-exiting var(--anim-duration, 0.4s) ease-in-out 0s
          1 normal forwards;
      }

      @keyframes anim-shake-entering {
        from {
          transform: translateX(5%);
          opacity: 0;
        }
        20% {
          transform: translateX(-5%);
        }
        40% {
          transform: translateX(5%);
        }
        60% {
          transform: translateX(-5%);
        }
        80% {
          transform: translateX(5%);
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes anim-shake-exiting {
        from {
          transform: translateX(5%);
          opacity: 1;
        }
        20% {
          transform: translateX(-5%);
        }
        40% {
          transform: translateX(5%);
        }
        60% {
          transform: translateX(-5%);
        }
        80% {
          transform: translateX(5%);
        }
        to {
          transform: translateX(0);
          opacity: 0;
        }
      }
    }

    &.slide {
      &.show {
        clip-path: unset;
        transform: translateX(0);
        opacity: 1;
      }

      &.entering {
        clip-path: unset;
        transform: translateX(0);
        opacity: 1;
        animation: anim-slide-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        clip-path: inset(0% 50% 0% 0%);
        transform: translateX(50%);
        opacity: 0;
        animation: anim-slide-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-slide-entering {
        from {
          clip-path: inset(0% 0% 0% 50%);
          transform: translateX(-50%);
          opacity: 0;
        }
        to {
          clip-path: inset(0% 0% 0% 0%);
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes anim-slide-exiting {
        from {
          clip-path: inset(0% 0% 0% 0%);
          transform: translateX(0);
          opacity: 1;
        }
        to {
          clip-path: inset(0% 50% 0% 0%);
          transform: translateX(50%);
          opacity: 0;
        }
      }
    }

    &.shift {
      &.show {
        clip-path: unset;
        transform: translateX(0);
        opacity: 1;
      }

      &.entering {
        clip-path: unset;
        transform: translateX(0);
        opacity: 1;
        animation: anim-shift-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        clip-path: inset(0% 50% 0% 0%);
        transform: translateX(50%);
        opacity: 0;
        animation: anim-shift-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-shift-entering {
        from {
          clip-path: inset(0% 50% 0% 0%);
          transform: translateX(50%);
          opacity: 0;
        }
        to {
          clip-path: inset(0% 0% 0% 0%);
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes anim-shift-exiting {
        from {
          clip-path: inset(0% 0% 0% 0%);
          transform: translateX(0);
          opacity: 1;
        }
        to {
          clip-path: inset(0% 0% 0% 50%);
          transform: translateX(-50%);
          opacity: 0;
        }
      }
    }

    &.pulsate {
      &.show {
        opacity: 1;
      }

      &.entering {
        opacity: 1;
        animation: anim-pulsate-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        opacity: 0;
        animation: anim-pulsate-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-pulsate-entering {
        from {
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        20% {
          opacity: 0.2;
        }
        30% {
          opacity: 1;
        }
        40% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
        }
        60% {
          opacity: 0.6;
        }
        70% {
          opacity: 1;
        }
        80% {
          opacity: 0.8;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes anim-pulsate-exiting {
        from {
          opacity: 1;
        }
        10% {
          opacity: 0.8;
        }
        20% {
          opacity: 1;
        }
        30% {
          opacity: 0.6;
        }
        40% {
          opacity: 1;
        }
        50% {
          opacity: 0.4;
        }
        60% {
          opacity: 1;
        }
        70% {
          opacity: 0.2;
        }
        80% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }

    &.rotate {
      &.show {
        rotate: 0deg;
        scale: 1;
        opacity: 1;
      }

      &.entering {
        rotate: 0deg;
        scale: 1;
        opacity: 1;
        animation: anim-rotate-entering var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      &.exiting {
        rotate: 10deg;
        scale: 0.5;
        opacity: 0;
        animation: anim-rotate-exiting var(--anim-duration, 0.2s) linear 0s 1
          normal forwards;
      }

      @keyframes anim-rotate-entering {
        from {
          rotate: 10deg;
          scale: 0.5;
          opacity: 0;
        }
        to {
          rotate: 0;
          scale: 1;
          opacity: 1;
        }
      }

      @keyframes anim-rotate-exiting {
        from {
          rotate: 0deg;
          scale: 1;
          opacity: 1;
        }
        to {
          rotate: 10deg;
          scale: 0.5;
          opacity: 0;
        }
      }
    }
  }
`;

export default AnimationCSS;
