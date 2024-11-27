// eslint-disable-next-line react-refresh/only-export-components
const ArrowSize = 8; // 8px
const OffsetOption: any = {
  ArrowSize,
  "top-start": {
    bsClass: "top",
    style: {
      left: `${ArrowSize}px`,
      transform: "translate3d(0px, -1px, 0px)",
    },
  },
  "top-middle": {
    bsClass: "top",
    style: {
      left: `calc(50% - ${ArrowSize}px)`,
      transform: "translate3d(0px, -1px, 0px)",
    },
  },
  "top-end": {
    bsClass: "top",
    style: {
      left: `calc(100% - ${ArrowSize * 3}px)`,
      transform: "translate3d(0px, -1px, 0px)",
    },
  },
  //
  "right-start": {
    bsClass: "end",
    style: { top: `${ArrowSize}px`, transform: "translate3d(1px, 0px, 0px)" },
  },
  "right-middle": {
    bsClass: "end",
    style: {
      top: `calc(50% - ${ArrowSize}px)`,
      transform: "translate3d(1px, 0px, 0px)",
    },
  },
  "right-end": {
    bsClass: "end",
    style: {
      top: `calc(100% - ${ArrowSize * 3}px)`,
      transform: "translate3d(1px, 0px, 0px)",
    },
  },
  //
  "bottom-start": {
    bsClass: "bottom",
    style: { left: `${ArrowSize}px`, transform: "translate3d(0px, 1px, 0px)" },
  },
  "bottom-middle": {
    bsClass: "bottom",
    style: {
      left: `calc(50% - ${ArrowSize}px)`,
      transform: "translate3d(0px, 1px, 0px)",
    },
  },
  "bottom-end": {
    bsClass: "bottom",
    style: {
      left: `calc(100% - ${ArrowSize * 3}px)`,
      transform: "translate3d(0px, 1px, 0px)",
    },
  },
  //
  "left-start": {
    bsClass: "start",
    style: { top: `${ArrowSize}px`, transform: "translate3d(-1px, 0px, 0px)" },
  },
  "left-middle": {
    bsClass: "start",
    style: {
      top: `calc(50% - ${ArrowSize}px)`,
      transform: "translate3d(-1px, 0px, 0px)",
    },
  },
  "left-end": {
    bsClass: "start",
    style: {
      top: `calc(100% - ${ArrowSize * 3}px)`,
      transform: "translate3d(-1px, 0px, 0px)",
    },
  },
};

export default OffsetOption;
