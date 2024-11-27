import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { PositionProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";

describe("bottom", () => {
  for (const key of ["0", "50", "100", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bottom={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`bottom-${key}`);
    });
  }

  describeResp<PositionProps["bottom"]>(
    {
      xs: "50",
      sm: undefined,
      md: "none",
      lg: "0",
      xl: "50px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`bottom-50`),
      sm: (elm) => expect(elm.classList).toContain(`bottom-50`),
      md: (elm) => expect(elm.classList).toContain(`bottom-none`),
      lg: (elm) => expect(elm.classList).toContain(`bottom-0`),
      xl: (elm) => expectComputedStyle(elm, "bottom", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" bottom={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("end", () => {
  for (const key of ["0", "50", "100", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" end={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`end-${key}`);
    });
  }

  describeResp<PositionProps["end"]>(
    {
      xs: "50",
      sm: undefined,
      md: "none",
      lg: "0",
      xl: "50px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`end-50`),
      sm: (elm) => expect(elm.classList).toContain(`end-50`),
      md: (elm) => expect(elm.classList).toContain(`end-none`),
      lg: (elm) => expect(elm.classList).toContain(`end-0`),
      xl: (elm) => expectComputedStyle(elm, "right", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" end={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fixed", () => {
  for (const key of ["top", "bottom", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" fixed={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`fixed-${key}`);
    });
  }

  describeResp<PositionProps["fixed"]>(
    {
      xs: "top",
      sm: undefined,
      md: "none",
      lg: "bottom",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`fixed-top`),
      sm: (elm) => expect(elm.classList).toContain(`fixed-top`),
      md: (elm) => expect(elm.classList).toContain(`fixed-none`),
      lg: (elm) => expect(elm.classList).toContain(`fixed-bottom`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" fixed={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("float", () => {
  for (const key of ["start", "end", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" float={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`float-${key}`);
    });
  }

  describeResp<PositionProps["float"]>(
    {
      xs: "start",
      sm: undefined,
      md: "none",
      lg: "end",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`float-start`),
      sm: (elm) => expect(elm.classList).toContain(`float-start`),
      md: (elm) => expect(elm.classList).toContain(`float-none`),
      lg: (elm) => expect(elm.classList).toContain(`float-end`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" float={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("inset", () => {
  for (const key of ["5px", "1px 3px 6px 9px", "unset"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" inset={key as any}></Typography>);

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "inset", key);
    });
  }

  describeResp<PositionProps["inset"]>(
    {
      xs: "5px",
      sm: undefined,
      md: "1px 3px 6px 9px",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "inset", "5px"),
      sm: (elm) => expectComputedStyle(elm, "inset", "5px"),
      md: (elm) => expectComputedStyle(elm, "inset", "1px 3px 6px 9px"),
      xl: (elm) => expectComputedStyle(elm, "inset", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" inset={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("insetBlock", () => {
  for (const key of ["5px", "1px 3px 6px 9px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" insetBlock={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "inset-block", key);
    });
  }

  describeResp<PositionProps["insetBlock"]>(
    {
      xs: "5px",
      sm: undefined,
      md: "1px 3px 6px 9px",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "inset-block", "5px"),
      sm: (elm) => expectComputedStyle(elm, "inset-block", "5px"),
      md: (elm) => expectComputedStyle(elm, "inset-block", "1px 3px 6px 9px"),
      xl: (elm) => expectComputedStyle(elm, "inset-block", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" insetBlock={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("insetInline", () => {
  for (const key of ["5px", "1px 3px 6px 9px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" insetInline={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "inset-inline", key);
    });
  }

  describeResp<PositionProps["insetInline"]>(
    {
      xs: "5px",
      sm: undefined,
      md: "1px 3px 6px 9px",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "inset-inline", "5px"),
      sm: (elm) => expectComputedStyle(elm, "inset-inline", "5px"),
      md: (elm) => expectComputedStyle(elm, "inset-inline", "1px 3px 6px 9px"),
      xl: (elm) => expectComputedStyle(elm, "inset-inline", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" insetInline={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("left", () => {
  for (const key of ["0", "50", "100", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" left={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`start-${key}`);
    });
  }

  describeResp<PositionProps["left"]>(
    {
      xs: "50",
      sm: undefined,
      md: "none",
      lg: "0",
      xl: "50px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`start-50`),
      sm: (elm) => expect(elm.classList).toContain(`start-50`),
      md: (elm) => expect(elm.classList).toContain(`start-none`),
      lg: (elm) => expect(elm.classList).toContain(`start-0`),
      xl: (elm) => expectComputedStyle(elm, "left", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" left={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("position", () => {
  for (const key of [
    "static",
    "relative",
    "absolute",
    "fixed",
    "sticky",
    "none",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" position={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`position-${key}`);
    });
  }

  describeResp<PositionProps["position"]>(
    {
      xs: "static",
      sm: undefined,
      md: "none",
      lg: "relative",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`position-static`),
      sm: (elm) => expect(elm.classList).toContain(`position-static`),
      md: (elm) => expect(elm.classList).toContain(`position-none`),
      lg: (elm) => expect(elm.classList).toContain(`position-relative`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" position={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("right", () => {
  for (const key of ["0", "50", "100", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" right={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`end-${key}`);
    });
  }

  describeResp<PositionProps["right"]>(
    {
      xs: "50",
      sm: undefined,
      md: "none",
      lg: "0",
      xl: "50px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`end-50`),
      sm: (elm) => expect(elm.classList).toContain(`end-50`),
      md: (elm) => expect(elm.classList).toContain(`end-none`),
      lg: (elm) => expect(elm.classList).toContain(`end-0`),
      xl: (elm) => expectComputedStyle(elm, "right", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" right={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("rotate", () => {
  for (const key of ["1deg", "1rad", "unset"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" rotate={key as any}></Typography>);

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "rotate", key);
    });
  }

  describeResp<PositionProps["rotate"]>(
    {
      xs: "1deg",
      sm: undefined,
      md: "1rad",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "rotate", "1deg"),
      sm: (elm) => expectComputedStyle(elm, "rotate", "1deg"),
      md: (elm) => expectComputedStyle(elm, "rotate", "1rad"),
      xl: (elm) => expectComputedStyle(elm, "rotate", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" rotate={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("scale", () => {
  for (const key of ["1.2", "2.0"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" scale={key as any}></Typography>);

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "scale", key);
    });
  }

  describeResp<PositionProps["scale"]>(
    {
      xs: "1.2",
      sm: undefined,
      md: "2.0",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "scale", "1.2"),
      sm: (elm) => expectComputedStyle(elm, "scale", "1.2"),
      md: (elm) => expectComputedStyle(elm, "scale", "2.0"),
      xl: (elm) => expectComputedStyle(elm, "scale", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" scale={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("start", () => {
  for (const key of ["0", "50", "100", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" start={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`start-${key}`);
    });
  }

  describeResp<PositionProps["start"]>(
    {
      xs: "50",
      sm: undefined,
      md: "none",
      lg: "0",
      xl: "50px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`start-50`),
      sm: (elm) => expect(elm.classList).toContain(`start-50`),
      md: (elm) => expect(elm.classList).toContain(`start-none`),
      lg: (elm) => expect(elm.classList).toContain(`start-0`),
      xl: (elm) => expectComputedStyle(elm, "left", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" start={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("sticky", () => {
  for (const key of ["top", "bottom", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" sticky={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`sticky-${key}`);
    });
  }

  describeResp<PositionProps["sticky"]>(
    {
      xs: "top",
      sm: undefined,
      md: "none",
      lg: "bottom",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`sticky-top`),
      sm: (elm) => expect(elm.classList).toContain(`sticky-top`),
      md: (elm) => expect(elm.classList).toContain(`sticky-none`),
      lg: (elm) => expect(elm.classList).toContain(`sticky-bottom`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" sticky={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("top", () => {
  for (const key of ["0", "50", "100", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" top={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`top-${key}`);
    });
  }

  describeResp<PositionProps["top"]>(
    {
      xs: "50",
      sm: undefined,
      md: "none",
      lg: "0",
      xl: "50px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`top-50`),
      sm: (elm) => expect(elm.classList).toContain(`top-50`),
      md: (elm) => expect(elm.classList).toContain(`top-none`),
      lg: (elm) => expect(elm.classList).toContain(`top-0`),
      xl: (elm) => expectComputedStyle(elm, "top", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" top={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("transform", () => {
  for (const key of [
    "translate(1px, 5px)",
    "rotate(5deg)",
    "scale(1.5)",
    "translateX(2px)",
    "translateX(1rem) rotate(8deg)",
    "matrix(1, 0, 0, 1, 0, 0)",
  ]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" transform={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "transform", key);
    });
  }

  describeResp<PositionProps["transform"]>(
    {
      xs: "translate(1px, 5px)",
      sm: undefined,
      md: "rotate(5deg)",
      lg: "translateX(1rem) rotate(8deg)",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "transform", "translate(1px, 5px)"),
      sm: (elm) => expectComputedStyle(elm, "transform", "translate(1px, 5px)"),
      md: (elm) => expectComputedStyle(elm, "transform", "rotate(5deg)"),
      lg: (elm) =>
        expectComputedStyle(elm, "transform", "translateX(1rem) rotate(8deg)"),
      xl: (elm) => expectComputedStyle(elm, "transform", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" transform={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("translate", () => {
  for (const key of ["1px 20px", "1rem"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" translate={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "translate", key);
    });
  }

  describeResp<PositionProps["translate"]>(
    {
      xs: "1px 20px",
      sm: undefined,
      md: "1rem",
      xl: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "translate", "1px 20px"),
      sm: (elm) => expectComputedStyle(elm, "translate", "1px 20px"),
      md: (elm) => expectComputedStyle(elm, "translate", "1rem"),
      xl: (elm) => expectComputedStyle(elm, "translate", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" translate={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("translateMiddle", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" translateMiddle={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain(`translate-middle`);
      else expect(elm.classList).length(0);
    });
  }

  describeResp<PositionProps["translateMiddle"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`translate-middle`),
      sm: (elm) => expect(elm.classList).toContain(`translate-middle`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`translate-middle`),
    },
    (props) => {
      render(
        <Typography data-testid="div" translateMiddle={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("translateMiddleX", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          translateMiddleX={key as any}
        ></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain(`translate-middle-x`);
      else expect(elm.classList).length(0);
    });
  }

  describeResp<PositionProps["translateMiddleX"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`translate-middle-x`),
      sm: (elm) => expect(elm.classList).toContain(`translate-middle-x`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`translate-middle-x`),
    },
    (props) => {
      render(
        <Typography data-testid="div" translateMiddleX={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("translateMiddleY", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          translateMiddleY={key as any}
        ></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain(`translate-middle-y`);
      else expect(elm.classList).length(0);
    });
  }

  describeResp<PositionProps["translateMiddleY"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`translate-middle-y`),
      sm: (elm) => expect(elm.classList).toContain(`translate-middle-y`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`translate-middle-y`),
    },
    (props) => {
      render(
        <Typography data-testid="div" translateMiddleY={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("vAlign", () => {
  for (const key of ["baseline", "top", "middle", "bottom", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" vAlign={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`align-${key}`);
    });
  }

  describeResp<PositionProps["vAlign"]>(
    {
      xs: "top",
      sm: undefined,
      md: "none",
      lg: "bottom",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`align-top`),
      sm: (elm) => expect(elm.classList).toContain(`align-top`),
      md: (elm) => expect(elm.classList).toContain(`align-none`),
      lg: (elm) => expect(elm.classList).toContain(`align-bottom`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" vAlign={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
