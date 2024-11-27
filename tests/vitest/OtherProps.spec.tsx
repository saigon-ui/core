import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Div from "../../src/lib/component/Div";
import { OtherProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";

describe("aspectRatio", () => {
  for (const key of ["1x1", "4x3", "16x9", "21x9", "none"]) {
    it(`${key}`, () => {
      render(
        <Div data-testid="div" aspectRatio={key as any}>
          DIV
        </Div>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`ratio-${key}`);
    });
  }

  describeResp<OtherProps["aspectRatio"]>(
    {
      xs: "1x1",
      sm: undefined,
      md: "none",
      lg: "21x9",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`ratio-1x1`),
      sm: (elm) => expect(elm.classList).toContain(`ratio-1x1`),
      md: (elm) => expect(elm.classList).toContain(`ratio-none`),
      lg: (elm) => expect(elm.classList).toContain(`ratio-21x9`),
    },
    (props) => {
      render(<Typography data-testid="div" aspectRatio={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("listStyle", () => {
  for (const key of ["unstyled", "inline", "inline-item", "none", "unset"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" listStyle={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "list-style", key);
      else expect(elm.classList).toContain(`list-${key}`);
    });
  }

  describeResp<OtherProps["listStyle"]>(
    {
      xs: "unstyled",
      sm: undefined,
      md: "none",
      lg: "unset",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`list-unstyled`),
      sm: (elm) => expect(elm.classList).toContain(`list-unstyled`),
      md: (elm) => expect(elm.classList).toContain(`list-none`),
      lg: (elm) => expectComputedStyle(elm, "list-style", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" listStyle={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("opacity", () => {
  for (const key of ["0", "25", "50", "75", "100", "none", 0.33]) {
    it(`${key}`, () => {
      render(
        <Div data-testid="div" opacity={key as any}>
          DIV
        </Div>
      );

      const elm = screen.getByTestId("div");
      if (key === 0.33) expectComputedStyle(elm, "opacity", "0.33");
      else expect(elm.classList).toContain(`opacity-${key}`);
    });
  }

  describeResp<OtherProps["opacity"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "0.33",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`opacity-25`),
      sm: (elm) => expect(elm.classList).toContain(`opacity-25`),
      md: (elm) => expect(elm.classList).toContain(`opacity-none`),
      lg: (elm) => expectComputedStyle(elm, "opacity", "0.33"),
    },
    (props) => {
      render(<Typography data-testid="div" opacity={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("pointerEvents", () => {
  for (const key of ["none", "auto"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" pointerEvents={key as any}></Div>);

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`pe-${key}`);
    });
  }

  describeResp<OtherProps["pointerEvents"]>(
    {
      xs: "auto",
      sm: undefined,
      md: "none",
      lg: "auto",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`pe-auto`),
      sm: (elm) => expect(elm.classList).toContain(`pe-auto`),
      md: (elm) => expect(elm.classList).toContain(`pe-none`),
      lg: (elm) => expect(elm.classList).toContain(`pe-auto`),
    },
    (props) => {
      render(<Typography data-testid="div" pointerEvents={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("scrollbarColor", () => {
  for (const key of ["pink lightblue", "auto"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" scrollbarColor={key as any}></Div>);
      const elm = screen.getByTestId("div");

      expectComputedStyle(elm, "scrollbar-color", key);
    });
  }

  describeResp<OtherProps["scrollbarColor"]>(
    {
      xs: "pink lightblue",
      sm: undefined,
      md: "auto",
      lg: "unset",
    },
    {
      xs: (elm) =>
        expectComputedStyle(elm, "scrollbar-color", "pink lightblue"),
      sm: (elm) =>
        expectComputedStyle(elm, "scrollbar-color", "pink lightblue"),
      md: (elm) => expectComputedStyle(elm, "scrollbar-color", "auto"),
      lg: (elm) => expectComputedStyle(elm, "scrollbar-color", "unset"),
    },
    (props) => {
      render(
        <Typography data-testid="div" scrollbarColor={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("scrollBehavior", () => {
  for (const key of ["smooth", "auto"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" scrollBehavior={key as any}></Div>);
      const elm = screen.getByTestId("div");

      expectComputedStyle(elm, "scroll-behavior", key);
    });
  }

  describeResp<OtherProps["scrollBehavior"]>(
    {
      xs: "smooth",
      sm: undefined,
      md: "auto",
      lg: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "scroll-behavior", "smooth"),
      sm: (elm) => expectComputedStyle(elm, "scroll-behavior", "smooth"),
      md: (elm) => expectComputedStyle(elm, "scroll-behavior", "auto"),
      lg: (elm) => expectComputedStyle(elm, "scroll-behavior", "unset"),
    },
    (props) => {
      render(
        <Typography data-testid="div" scrollBehavior={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("scrollMargin", () => {
  for (const key of ["0 0 0 30px", "20px", "0"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" scrollMargin={key as any}></Div>);
      const elm = screen.getByTestId("div");

      expectComputedStyle(elm, "scroll-margin", key);
    });
  }

  describeResp<OtherProps["scrollMargin"]>(
    {
      xs: "0 0 0 30px",
      sm: undefined,
      md: "20px",
      lg: "0",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "scroll-margin", "0 0 0 30px"),
      sm: (elm) => expectComputedStyle(elm, "scroll-margin", "0 0 0 30px"),
      md: (elm) => expectComputedStyle(elm, "scroll-margin", "20px"),
      lg: (elm) => expectComputedStyle(elm, "scroll-margin", "0"),
    },
    (props) => {
      render(<Typography data-testid="div" scrollMargin={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("scrollPadding", () => {
  for (const key of ["0 0 0 30px", "20px", "0"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" scrollPadding={key as any}></Div>);
      const elm = screen.getByTestId("div");

      expectComputedStyle(elm, "scroll-padding", key);
    });
  }

  describeResp<OtherProps["scrollPadding"]>(
    {
      xs: "0 0 0 30px",
      sm: undefined,
      md: "20px",
      lg: "0",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "scroll-padding", "0 0 0 30px"),
      sm: (elm) => expectComputedStyle(elm, "scroll-padding", "0 0 0 30px"),
      md: (elm) => expectComputedStyle(elm, "scroll-padding", "20px"),
      lg: (elm) => expectComputedStyle(elm, "scroll-padding", "0"),
    },
    (props) => {
      render(<Typography data-testid="div" scrollPadding={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("shadow", () => {
  for (const key of [
    true,
    "sm",
    "lg",
    "none",
    "5px 10px",
    "5px 10px #888888",
  ]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" shadow={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key === true) expect(elm.classList).toContain(`shadow`);
      else if (key === "5px 10px" || key === "5px 10px #888888")
        expectComputedStyle(elm, "box-shadow", key);
      else expect(elm.classList).toContain(`shadow-${key}`);
    });
  }

  describeResp<OtherProps["shadow"]>(
    {
      xs: true,
      sm: undefined,
      md: "none",
      lg: "sm",
      xl: "5px 10px #888888",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`shadow`),
      sm: (elm) => expect(elm.classList).toContain(`shadow`),
      md: (elm) => expect(elm.classList).toContain(`shadow-none`),
      lg: (elm) => expect(elm.classList).toContain(`shadow-sm`),
      xl: (elm) => expectComputedStyle(elm, "box-shadow", "5px 10px #888888"),
    },
    (props) => {
      render(<Typography data-testid="div" shadow={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("transition", () => {
  for (const key of ["width 2s", "width .35s ease-in-out"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" transition={key as any}></Div>);
      const elm = screen.getByTestId("div");

      expectComputedStyle(elm, "transition", key);
    });
  }

  describeResp<OtherProps["transition"]>(
    {
      xs: "width 2s",
      sm: undefined,
      md: "width .35s ease-in-out",
      lg: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "transition", "width 2s"),
      sm: (elm) => expectComputedStyle(elm, "transition", "width 2s"),
      md: (elm) =>
        expectComputedStyle(elm, "transition", "width .35s ease-in-out"),
      lg: (elm) => expectComputedStyle(elm, "transition", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" transition={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("userSelect", () => {
  for (const key of ["all", "auto", "none", "text"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" userSelect={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key === "text") expectComputedStyle(elm, "user-select", key);
      else expect(elm.classList).toContain(`user-select-${key}`);
    });
  }

  describeResp<OtherProps["userSelect"]>(
    {
      xs: "all",
      sm: undefined,
      md: "none",
      lg: "auto",
      xl: "text",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`user-select-all`),
      sm: (elm) => expect(elm.classList).toContain(`user-select-all`),
      md: (elm) => expect(elm.classList).toContain(`user-select-none`),
      lg: (elm) => expect(elm.classList).toContain(`user-select-auto`),
      xl: (elm) => expectComputedStyle(elm, "user-select", "text"),
    },
    (props) => {
      render(<Typography data-testid="div" userSelect={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
