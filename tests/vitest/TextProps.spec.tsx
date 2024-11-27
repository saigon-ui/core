import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { TextProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";
import { ThemeColors } from "../../src/lib/base";

describe("color", () => {
  for (const key of ["red", "unset", "#fff"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" color={key}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "color", key, { isColor: key != "unset" });
    });
  }

  describeResp<TextProps["color"]>(
    {
      xs: "red",
      sm: undefined,
      md: "unset",
      lg: "#fff",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "color", "red", { isColor: true }),
      sm: (elm) => expectComputedStyle(elm, "color", "red", { isColor: true }),
      md: (elm) => expectComputedStyle(elm, "color", "unset"),
      lg: (elm) => expectComputedStyle(elm, "color", "#fff", { isColor: true }),
    },
    (props) => {
      render(<Typography data-testid="div" color={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("focusRing", () => {
  for (const key of ["primary", "none", "secondary"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" focusRing={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`focus-ring-${key}`);
    });
  }

  describeResp<TextProps["focusRing"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "none",
      lg: "secondary",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`focus-ring-primary`),
      sm: (elm) => expect(elm.classList).toContain(`focus-ring-primary`),
      md: (elm) => expect(elm.classList).toContain(`focus-ring-none`),
      lg: (elm) => expect(elm.classList).toContain(`focus-ring-secondary`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" focusRing={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("font", () => {
  for (const key of [
    "Arial,sans-serif 15px 15px",
    "bold italic small-caps bold",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" font={key as any}></Typography>);

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font", key);
    });
  }

  describeResp<TextProps["fontFamily"]>(
    {
      xs: "Arial,sans-serif 15px 15px",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) =>
        expectComputedStyle(elm, "font", "Arial,sans-serif 15px 15px"),
      sm: (elm) =>
        expectComputedStyle(elm, "font", "Arial,sans-serif 15px 15px"),
      md: (elm) => expectComputedStyle(elm, "font", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" font={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontFamily", () => {
  for (const key of ["serif", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontFamily={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font-family", key);
    });
  }

  describeResp<TextProps["fontFamily"]>(
    {
      xs: "serif",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "font-family", "serif"),
      sm: (elm) => expectComputedStyle(elm, "font-family", "serif"),
      md: (elm) => expectComputedStyle(elm, "font-family", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" fontFamily={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontKerning", () => {
  for (const key of ["normal", "auto", "none"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontKerning={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font-kerning", key);
    });
  }

  describeResp<TextProps["fontKerning"]>(
    {
      xs: "normal",
      sm: undefined,
      md: "none",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "font-kerning", "normal"),
      sm: (elm) => expectComputedStyle(elm, "font-kerning", "normal"),
      md: (elm) => expectComputedStyle(elm, "font-kerning", "none"),
    },
    (props) => {
      render(<Typography data-testid="div" fontKerning={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontMonospace", () => {
  for (const key of [true, false, undefined]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" fontMonospace={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain("font-monospace");
      else expect(elm.classList).length(0);
    });
  }

  describeResp<TextProps["fontMonospace"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`font-monospace`),
      sm: (elm) => expect(elm.classList).toContain(`font-monospace`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`font-monospace`),
    },
    (props) => {
      render(<Typography data-testid="div" fontMonospace={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontSize", () => {
  for (const key of ["1", "32pt", "none", "x-large"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" fontSize={key as any}></Typography>);
      const elm = screen.getByTestId("div");

      if (key == "1" || key == "none")
        expect(elm.classList).toContain(`fs-${key}`);
      else expectComputedStyle(elm, "font-size", key);
    });
  }

  describeResp<TextProps["fontSize"]>(
    { xs: "1", md: "none", lg: "x-large", xl: "32pt" },
    {
      xs: (elm) => expect(elm.classList).toContain(`fs-1`),
      sm: (elm) => expect(elm.classList).toContain(`fs-1`),
      md: (elm) => expect(elm.classList).toContain(`fs-none`),
      lg: (elm) => expectComputedStyle(elm, "font-size", "x-large"),
      xl: (elm) => expectComputedStyle(elm, "font-size", "32pt"),
    },
    (props) => {
      render(<Typography data-testid="div" fontSize={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontSizeAdjust", () => {
  for (const key of ["0.545", "none"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontSizeAdjust={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font-size-adjust", key);
    });
  }

  describeResp<TextProps["fontSizeAdjust"]>(
    { xs: "0.545", md: "unset", lg: "none" },
    {
      xs: (elm) => expectComputedStyle(elm, "font-size-adjust", "0.545"),
      sm: (elm) => expectComputedStyle(elm, "font-size-adjust", "0.545"),
      md: (elm) => expectComputedStyle(elm, "font-size-adjust", "unset"),
      lg: (elm) => expectComputedStyle(elm, "font-size-adjust", "none"),
    },
    (props) => {
      render(
        <Typography data-testid="div" fontSizeAdjust={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("fontStretch", () => {
  for (const key of ["expanded", "condensed", "normal", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontStretch={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font-stretch", key);
    });
  }

  describeResp<TextProps["fontStretch"]>(
    { xs: "expanded", md: "unset", lg: "normal" },
    {
      xs: (elm) => expectComputedStyle(elm, "font-stretch", "expanded"),
      sm: (elm) => expectComputedStyle(elm, "font-stretch", "expanded"),
      md: (elm) => expectComputedStyle(elm, "font-stretch", "unset"),
      lg: (elm) => expectComputedStyle(elm, "font-stretch", "normal"),
    },
    (props) => {
      render(<Typography data-testid="div" fontStretch={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontStyle", () => {
  for (const key of ["italic", "normal"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontStyle={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`fst-${key}`);
    });
  }

  describeResp<TextProps["fontStyle"]>(
    { xs: "italic", md: "none", lg: "normal" },
    {
      xs: (elm) => expect(elm.classList).toContain(`fst-italic`),
      sm: (elm) => expect(elm.classList).toContain(`fst-italic`),
      md: (elm) => expect(elm.classList).toContain(`fst-none`),
      lg: (elm) => expect(elm.classList).toContain(`fst-normal`),
    },
    (props) => {
      render(<Typography data-testid="div" fontStyle={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontVariant", () => {
  for (const key of ["small-caps", "normal", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontVariant={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font-variant", key);
    });
  }

  describeResp<TextProps["fontVariant"]>(
    { xs: "small-caps", md: "unset", lg: "normal" },
    {
      xs: (elm) => expectComputedStyle(elm, "font-variant", "small-caps"),
      sm: (elm) => expectComputedStyle(elm, "font-variant", "small-caps"),
      md: (elm) => expectComputedStyle(elm, "font-variant", "unset"),
      lg: (elm) => expectComputedStyle(elm, "font-variant", "normal"),
    },
    (props) => {
      render(<Typography data-testid="div" fontVariant={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("fontVariantCaps", () => {
  for (const key of ["small-caps", "petite-caps", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontVariantCaps={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "font-variant-caps", key);
    });
  }

  describeResp<TextProps["fontVariantCaps"]>(
    { xs: "small-caps", md: "unset", lg: "petite-caps" },
    {
      xs: (elm) => expectComputedStyle(elm, "font-variant-caps", "small-caps"),
      sm: (elm) => expectComputedStyle(elm, "font-variant-caps", "small-caps"),
      md: (elm) => expectComputedStyle(elm, "font-variant-caps", "unset"),
      lg: (elm) => expectComputedStyle(elm, "font-variant-caps", "petite-caps"),
    },
    (props) => {
      render(
        <Typography data-testid="div" fontVariantCaps={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("fontWeight", () => {
  for (const key of [
    "lighter",
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "bolder",
  ]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" fontWeight={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`fw-${key}`);
    });
  }

  describeResp<TextProps["fontWeight"]>(
    { xs: "lighter", md: "none", lg: "medium", xl: 500 },
    {
      xs: (elm) => expect(elm.classList).toContain(`fw-lighter`),
      sm: (elm) => expect(elm.classList).toContain(`fw-lighter`),
      md: (elm) => expect(elm.classList).toContain(`fw-none`),
      lg: (elm) => expect(elm.classList).toContain(`fw-medium`),
      xl: (elm) => expectComputedStyle(elm, "font-weight", "500"),
    },
    (props) => {
      render(<Typography data-testid="div" fontWeight={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("lineHeight", () => {
  for (const key of ["1", "sm", "base", "lg", "32px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" lineHeight={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key == "32px") expectComputedStyle(elm, "line-height", "32px");
      else expect(elm.classList).toContain(`lh-${key}`);
    });
  }

  describeResp<TextProps["lineHeight"]>(
    {
      xs: "1",
      sm: undefined,
      md: "sm",
      lg: "none",
      xl: "32px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`lh-1`),
      sm: (elm) => expect(elm.classList).toContain(`lh-1`),
      md: (elm) => expect(elm.classList).toContain(`lh-sm`),
      lg: (elm) => expect(elm.classList).toContain(`lh-none`),
      xl: (elm) => expectComputedStyle(elm, "line-height", "32px"),
    },
    (props) => {
      render(<Typography data-testid="div" lineHeight={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("linkColor", () => {
  for (const key of ["body-emphasis", ...ThemeColors]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" linkColor={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`link-${key}`);
    });
  }

  describeResp<TextProps["linkColor"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "none",
      lg: "body-emphasis",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`link-primary`),
      sm: (elm) => expect(elm.classList).toContain(`link-primary`),
      md: (elm) => expect(elm.classList).toContain(`link-none`),
      lg: (elm) => expect(elm.classList).toContain(`link-body-emphasis`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" linkColor={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("linkOffset", () => {
  for (const key of ["1", "2", "3px", "none"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" linkOffset={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");

      if (key == "3px")
        expectComputedStyle(elm, "text-underline-offset", "3px");
      else expect(elm.classList).toContain(`link-offset-${key}`);
    });
  }

  describeResp<TextProps["linkOffset"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "3px",
      xl: "2",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`link-offset-1`),
      sm: (elm) => expect(elm.classList).toContain(`link-offset-1`),
      md: (elm) => expect(elm.classList).toContain(`link-offset-none`),
      lg: (elm) => expectComputedStyle(elm, "text-underline-offset", "3px"),
      xl: (elm) => expect(elm.classList).toContain(`link-offset-2`),
    },
    (props) => {
      render(<Typography data-testid="div" linkOffset={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("linkOpacity", () => {
  for (const key of ["10", "25", "50", 0.11]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" linkOpacity={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");

      if (key === 0.11) expect(true).toBeTruthy();
      else expect(elm.classList).toContain(`link-opacity-${key}`);
    });
  }

  describeResp<TextProps["linkOpacity"]>(
    {
      xs: "10",
      sm: undefined,
      md: "none",
      lg: 0.11,
      xl: "50",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`link-opacity-10`),
      sm: (elm) => expect(elm.classList).toContain(`link-opacity-10`),
      md: (elm) => expect(elm.classList).toContain(`link-opacity-none`),
      lg: (elm) => expect(elm.classList).length(1),
      xl: (elm) => expect(elm.classList).toContain(`link-opacity-50`),
    },
    (props) => {
      render(<Typography data-testid="div" linkOpacity={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("linkUnderline", () => {
  for (const key of ThemeColors) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" linkUnderline={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`link-underline-${key}`);
    });
  }
  it(`boolean`, () => {
    render(<Typography data-testid="div" linkUnderline={true}></Typography>);

    const elm = screen.getByTestId("div");
    expect(elm.classList).toContain(`link-underline`);
  });

  describeResp<TextProps["linkUnderline"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "none",
      lg: true,
      xl: "secondary",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`link-underline-primary`),
      sm: (elm) => expect(elm.classList).toContain(`link-underline-primary`),
      md: (elm) => expect(elm.classList).toContain(`link-underline-none`),
      lg: (elm) => expect(elm.classList).toContain(`link-underline`),
      xl: (elm) => expect(elm.classList).toContain(`link-underline-secondary`),
    },
    (props) => {
      render(<Typography data-testid="div" linkUnderline={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("linkUnderlineOpacity", () => {
  for (const key of ["0", "10", "25", 0.11]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          linkUnderlineOpacity={key as any}
        ></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key === 0.11) expect(elm.classList).length(1);
      else expect(elm.classList).toContain(`link-underline-opacity-${key}`);
    });
  }

  describeResp<TextProps["linkUnderlineOpacity"]>(
    {
      xs: "0",
      sm: undefined,
      md: "none",
      lg: 0.11,
      xl: "25",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`link-underline-opacity-0`),
      sm: (elm) => expect(elm.classList).toContain(`link-underline-opacity-0`),
      md: (elm) =>
        expect(elm.classList).toContain(`link-underline-opacity-none`),
      lg: (elm) => expect(elm.classList).length(1),
      xl: (elm) => expect(elm.classList).toContain(`link-underline-opacity-25`),
    },
    (props) => {
      render(
        <Typography data-testid="div" linkUnderlineOpacity={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("stretchedLink", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" stretchedLink={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain("stretched-link");
      else expect(elm.classList).length(0);
    });
  }

  describeResp<TextProps["stretchedLink"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`stretched-link`),
      sm: (elm) => expect(elm.classList).toContain(`stretched-link`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`stretched-link`),
    },
    (props) => {
      render(<Typography data-testid="div" stretchedLink={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textAlign", () => {
  for (const key of ["start", "end", "center"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textAlign={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`text-${key}`);
    });
  }

  describeResp<TextProps["textAlign"]>(
    {
      xs: "start",
      sm: undefined,
      md: "none",
      lg: "center",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-start`),
      sm: (elm) => expect(elm.classList).toContain(`text-start`),
      md: (elm) => expect(elm.classList).toContain(`text-none`),
      lg: (elm) => expect(elm.classList).toContain(`text-center`),
    },
    (props) => {
      render(<Typography data-testid="div" textAlign={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textBg", () => {
  for (const key of ThemeColors) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" textBg={key}></Typography>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`text-bg-${key}`);
    });
  }

  describeResp<TextProps["textBg"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "none",
      lg: "success",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-bg-primary`),
      sm: (elm) => expect(elm.classList).toContain(`text-bg-primary`),
      md: (elm) => expect(elm.classList).toContain(`text-bg-none`),
      lg: (elm) => expect(elm.classList).toContain(`text-bg-success`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" textBg={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textBreak", () => {
  it(`true`, () => {
    render(<Typography data-testid="div" textBreak></Typography>);

    const elm = screen.getByTestId("div");
    expect(elm.classList).toContain("text-break");
  });

  describeResp<TextProps["textBreak"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-break`),
      sm: (elm) => expect(elm.classList).toContain(`text-break`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`text-break`),
    },
    (props) => {
      render(<Typography data-testid="div" textBreak={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textColor", () => {
  for (const key of [
    "black",
    "white",
    "body",
    "muted",
    "black-50",
    "white-50",
    "body-secondary",
    "body-tertiary",
    "body-emphasis",
    ...ThemeColors,
  ]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textColor={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`text-${key}`);
    });
  }

  describeResp<TextProps["textColor"]>(
    {
      xs: "body-secondary",
      sm: undefined,
      md: "none",
      lg: "#fff",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-body-secondary`),
      sm: (elm) => expect(elm.classList).toContain(`text-body-secondary`),
      md: (elm) => expect(elm.classList).toContain(`text-none`),
      lg: (elm) => expect(elm).toBeTruthy(),
    },
    (props) => {
      render(<Typography data-testid="div" textColor={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textDecoration", () => {
  for (const key of ["none", "underline", "line-through"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textDecoration={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`text-decoration-${key}`);
    });
  }

  describeResp<TextProps["textDecoration"]>(
    {
      xs: "underline",
      sm: undefined,
      md: "none",
      lg: "line-through",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-decoration-underline`),
      sm: (elm) => expect(elm.classList).toContain(`text-decoration-underline`),
      md: (elm) => expect(elm.classList).toContain(`text-decoration-none`),
      lg: (elm) =>
        expect(elm.classList).toContain(`text-decoration-line-through`),
    },
    (props) => {
      render(
        <Typography data-testid="div" textDecoration={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("textEmphasis", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          textColor="primary"
          textEmphasis={key}
        ></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain("text-primary-emphasis");
      else expect(elm.classList).toContain("text-primary");
    });
  }

  describeResp<TextProps["textEmphasis"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-primary-emphasis`),
      sm: (elm) => expect(elm.classList).toContain(`text-primary-emphasis`),
      md: (elm) => expect(elm.classList).toContain(`text-primary`),
      lg: (elm) => expect(elm.classList).toContain(`text-primary-emphasis`),
    },
    (props) => {
      render(
        <Typography
          data-testid="div"
          textColor="primary"
          textEmphasis={props}
        ></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("textIndent", () => {
  for (const key of ["50px", "10%", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textIndent={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "text-indent", key);
    });
  }

  describeResp<TextProps["textIndent"]>(
    { xs: "50px", md: "unset", lg: "normal" },
    {
      xs: (elm) => expectComputedStyle(elm, "text-indent", "50px"),
      sm: (elm) => expectComputedStyle(elm, "text-indent", "50px"),
      md: (elm) => expectComputedStyle(elm, "text-indent", "unset"),
      lg: (elm) => expectComputedStyle(elm, "text-indent", "normal"),
    },
    (props) => {
      render(<Typography data-testid="div" textIndent={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textJustify", () => {
  for (const key of ["inter-word", "auto", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textJustify={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "text-justify", key);
    });
  }

  describeResp<TextProps["textJustify"]>(
    { xs: "inter-word", md: "unset", lg: "auto" },
    {
      xs: (elm) => expectComputedStyle(elm, "text-justify", "inter-word"),
      sm: (elm) => expectComputedStyle(elm, "text-justify", "inter-word"),
      md: (elm) => expectComputedStyle(elm, "text-justify", "unset"),
      lg: (elm) => expectComputedStyle(elm, "text-justify", "auto"),
    },
    (props) => {
      render(<Typography data-testid="div" textJustify={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textOpacity", () => {
  for (const key of ["25", "50", "75", "100", 0.11]) {
    it(`textOpacity: ${key}`, () => {
      render(
        <Typography data-testid="div" textOpacity={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === 0.11) expect(elm).toBeTruthy();
      else expect(elm.classList).toContain(`text-opacity-${key}`);
    });
  }

  describeResp<TextProps["textOpacity"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: 0.11,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-opacity-25`),
      sm: (elm) => expect(elm.classList).toContain(`text-opacity-25`),
      md: (elm) => expect(elm.classList).toContain(`text-opacity-none`),
      lg: (elm) => expect(elm).toBeTruthy(),
    },
    (props) => {
      render(<Typography data-testid="div" textOpacity={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textOrientation", () => {
  for (const key of ["mixed", "upright", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textOrientation={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "text-orientation", key);
    });
  }

  describeResp<TextProps["textOrientation"]>(
    { xs: "mixed", md: "unset", lg: "upright" },
    {
      xs: (elm) => expectComputedStyle(elm, "text-orientation", "mixed"),
      sm: (elm) => expectComputedStyle(elm, "text-orientation", "mixed"),
      md: (elm) => expectComputedStyle(elm, "text-orientation", "unset"),
      lg: (elm) => expectComputedStyle(elm, "text-orientation", "upright"),
    },
    (props) => {
      render(
        <Typography data-testid="div" textOrientation={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("textOverflow", () => {
  for (const key of ["clip", "ellipsis", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textOverflow={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "text-overflow", key);
    });
  }

  describeResp<TextProps["textOverflow"]>(
    { xs: "clip", md: "unset", lg: "ellipsis" },
    {
      xs: (elm) => expectComputedStyle(elm, "text-overflow", "clip"),
      sm: (elm) => expectComputedStyle(elm, "text-overflow", "clip"),
      md: (elm) => expectComputedStyle(elm, "text-overflow", "unset"),
      lg: (elm) => expectComputedStyle(elm, "text-overflow", "ellipsis"),
    },
    (props) => {
      render(<Typography data-testid="div" textOverflow={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textReset", () => {
  it(`true`, () => {
    render(<Typography data-testid="div" textReset></Typography>);

    const elm = screen.getByTestId("div");
    expect(elm.classList).toContain("text-reset");
  });

  describeResp<TextProps["textReset"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-reset`),
      sm: (elm) => expect(elm.classList).toContain(`text-reset`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`text-reset`),
    },
    (props) => {
      render(<Typography data-testid="div" textReset={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textShadow", () => {
  for (const key of [
    "2px 2px rgb(200, 0, 0)",
    "0 0 3px rgb(200, 0, 0),0 0 5px rgb(0, 0, 200)",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textShadow={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "text-shadow", key);
    });
  }

  describeResp<TextProps["textShadow"]>(
    {
      xs: "2px 2px rgb(200, 0, 0)",
      md: "unset",
      lg: "0 0 3px rgb(200, 0, 0),0 0 5px rgb(0, 0, 200)",
    },
    {
      xs: (elm) =>
        expectComputedStyle(elm, "text-shadow", "2px 2px rgb(200, 0, 0)"),
      sm: (elm) =>
        expectComputedStyle(elm, "text-shadow", "2px 2px rgb(200, 0, 0)"),
      md: (elm) => expectComputedStyle(elm, "text-shadow", "unset"),
      lg: (elm) =>
        expectComputedStyle(
          elm,
          "text-shadow",
          "0 0 3px rgb(200, 0, 0),0 0 5px rgb(0, 0, 200)"
        ),
    },
    (props) => {
      render(<Typography data-testid="div" textShadow={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textTransform", () => {
  for (const key of ["lowercase", "uppercase", "capitalize", "none"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" textTransform={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`text-${key}`);
    });
  }

  describeResp<TextProps["textTransform"]>(
    {
      xs: "lowercase",
      sm: undefined,
      md: "none",
      lg: "unset",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-lowercase`),
      sm: (elm) => expect(elm.classList).toContain(`text-lowercase`),
      md: (elm) => expect(elm.classList).toContain(`text-none`),
      lg: (elm) => expectComputedStyle(elm, "text-transform", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" textTransform={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textTrunc", () => {
  it(`true`, () => {
    render(<Typography data-testid="div" textTrunc></Typography>);
    const elm = screen.getByTestId("div");
    expect(elm.classList).toContain("text-truncate");
  });

  describeResp<TextProps["textTrunc"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-truncate`),
      sm: (elm) => expect(elm.classList).toContain(`text-truncate`),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expect(elm.classList).toContain(`text-truncate`),
    },
    (props) => {
      render(<Typography data-testid="div" textTrunc={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("textWrap", () => {
  for (const key of ["wrap", "nowrap", "none"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" textWrap={key as any}></Typography>);

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`text-${key}`);
    });
  }

  describeResp<TextProps["textWrap"]>(
    {
      xs: "wrap",
      sm: undefined,
      md: "none",
      lg: "nowrap",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-wrap`),
      sm: (elm) => expect(elm.classList).toContain(`text-wrap`),
      md: (elm) => expect(elm.classList).toContain(`text-none`),
      lg: (elm) => expect(elm.classList).toContain(`text-nowrap`),
    },
    (props) => {
      render(<Typography data-testid="div" textWrap={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("vTextAlign", () => {
  for (const key of ["bottom", "top"]) {
    it(`${key}`, () => {
      render(<Typography vTextAlign={key as any}>Typography</Typography>);

      const card = screen.getByText("Typography");
      expect(card.classList).toContain(`align-text-${key}`);
    });
  }

  describeResp<TextProps["vTextAlign"]>(
    {
      xs: "bottom",
      sm: undefined,
      md: "none",
      lg: "top",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`align-text-bottom`),
      sm: (elm) => expect(elm.classList).toContain(`align-text-bottom`),
      md: (elm) => expect(elm.classList).toContain(`align-text-none`),
      lg: (elm) => expect(elm.classList).toContain(`align-text-top`),
      xl: (elm) => expect(elm.classList).length(0),
    },
    (props) => {
      render(<Typography data-testid="div" vTextAlign={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
