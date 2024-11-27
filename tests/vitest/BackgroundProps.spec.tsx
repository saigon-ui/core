import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { BackgroundProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";
import { ThemeColors } from "../../src/lib/base";

describe("bg", () => {
  for (const key of [
    "black",
    "white",
    "body",
    "transparent",
    "body-secondary",
    "body-tertiary",
    "none",
    "red",
    "#fff",
    ...ThemeColors,
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bg={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "red" || key == "#fff")
        expectComputedStyle(elm, "background", key, { isColor: true });
      else expect(elm.classList).toContain(`bg-${key}`);
    });
  }

  describeResp<BackgroundProps["bg"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "none",
      lg: "red",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`bg-primary`),
      sm: (elm) => expect(elm.classList).toContain(`bg-primary`),
      md: (elm) => expect(elm.classList).toContain(`bg-none`),
      lg: (elm) =>
        expectComputedStyle(elm, "background", "red", { isColor: true }),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" bg={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgAttachment", () => {
  for (const key of ["scroll", "fixed", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bgAttachment={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-attachment", key);
    });
  }

  describeResp<BackgroundProps["bgAttachment"]>(
    {
      xs: "scroll",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-attachment", "scroll"),
      sm: (elm) => expectComputedStyle(elm, "background-attachment", "scroll"),
      md: (elm) => expectComputedStyle(elm, "background-attachment", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" bgAttachment={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgBlendMode", () => {
  for (const key of [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bgBlendMode={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-blend-mode", key);
    });
  }

  describeResp<BackgroundProps["bgBlendMode"]>(
    {
      xs: "screen",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-blend-mode", "screen"),
      sm: (elm) => expectComputedStyle(elm, "background-blend-mode", "screen"),
      md: (elm) => expectComputedStyle(elm, "background-blend-mode", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" bgBlendMode={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgClip", () => {
  for (const key of [
    "border-box",
    "padding-box",
    "content-box",
    "text",
    "reverse",
    "revert-layer",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bgClip={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-clip", key);
    });
  }

  describeResp<BackgroundProps["bgClip"]>(
    {
      xs: "border-box",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-clip", "border-box"),
      sm: (elm) => expectComputedStyle(elm, "background-clip", "border-box"),
      md: (elm) => expectComputedStyle(elm, "background-clip", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" bgClip={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

// Jest can not testing for: `background: linear-gradient(45deg, black, transparent);`
describe("bgColor", () => {
  for (const key of [
    "red",
    "#ff0000",
    "rgb(255, 0, 0)",
    "rgba(255,0,0, 255)",
    "linear-gradient(45deg, black, transparent)",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bgColor={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "linear-gradient(45deg, black, transparent)")
        expectComputedStyle(elm, "background-color", "rgba(0, 0, 0, 0)");
      else expectComputedStyle(elm, "background-color", key, { isColor: true });
    });
  }

  describeResp<BackgroundProps["bgColor"]>(
    {
      xs: "red",
      sm: undefined,
      md: "linear-gradient(45deg, black, transparent)",
    },
    {
      xs: (elm) =>
        expectComputedStyle(elm, "background-color", "red", { isColor: true }),
      sm: (elm) =>
        expectComputedStyle(elm, "background-color", "red", { isColor: true }),
      md: (elm) =>
        expectComputedStyle(elm, "background-color", "rgba(0, 0, 0, 0)"),
    },
    (props) => {
      render(<Typography data-testid="div" bgColor={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgGradient", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          bg="primary"
          bgGradient={key}
        ></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain(`bg-gradient`);
      else expect(elm.classList).toContain(`bg-primary`);
    });
  }

  describeResp<BackgroundProps["bgGradient"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`bg-gradient`),
      sm: (elm) => expect(elm.classList).toContain(`bg-gradient`),
      md: (elm) => expect(elm.classList).toContain(`bg-primary`),
    },
    (props) => {
      render(
        <Typography
          data-testid="div"
          bg="primary"
          bgGradient={props}
        ></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("bgImage", () => {
  for (const key of ["url(img_tree.gif)", "unset"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bgImage={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-image", key);
    });
  }

  describeResp<BackgroundProps["bgImage"]>(
    {
      xs: "url(img_tree.gif)",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) =>
        expectComputedStyle(elm, "background-image", "url(img_tree.gif)"),
      sm: (elm) =>
        expectComputedStyle(elm, "background-image", "url(img_tree.gif)"),
      md: (elm) => expectComputedStyle(elm, "background-image", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" bgImage={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgOpacity", () => {
  for (const key of ["10", "75", "100", "none", 0.11]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bgOpacity={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key === 0.11) expect(elm.classList).length(1);
      else expect(elm.classList).toContain(`bg-opacity-${key}`);
    });
  }

  describeResp<BackgroundProps["bgOpacity"]>(
    {
      xs: "75",
      sm: undefined,
      md: "none",
      lg: 0.11,
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`bg-opacity-75`),
      sm: (elm) => expect(elm.classList).toContain(`bg-opacity-75`),
      md: (elm) => expect(elm.classList).toContain(`bg-opacity-none`),
      lg: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" bgOpacity={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgOrigin", () => {
  for (const key of ["unset", "padding-box", "border-box"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bgOrigin={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-origin", key);
    });
  }

  describeResp<BackgroundProps["bgOrigin"]>(
    {
      xs: "padding-box",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-origin", "padding-box"),
      sm: (elm) => expectComputedStyle(elm, "background-origin", "padding-box"),
      md: (elm) => expectComputedStyle(elm, "background-origin", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" bgOrigin={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgPosition", () => {
  for (const key of ["left top", "left center", "center", "300px 100px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bgPosition={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-position", key);
    });
  }

  describeResp<BackgroundProps["bgPosition"]>(
    {
      xs: "left top",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-position", "left top"),
      sm: (elm) => expectComputedStyle(elm, "background-position", "left top"),
      md: (elm) => expectComputedStyle(elm, "background-position", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" bgPosition={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgPositionX", () => {
  for (const key of ["left", "right", "center", "50%", "100px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bgPositionX={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-position-x", key);
    });
  }

  describeResp<BackgroundProps["bgPositionX"]>(
    {
      xs: "left",
      sm: undefined,
      md: "100px",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-position-x", "left"),
      sm: (elm) => expectComputedStyle(elm, "background-position-x", "left"),
      md: (elm) => expectComputedStyle(elm, "background-position-x", "100px"),
    },
    (props) => {
      render(<Typography data-testid="div" bgPositionX={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgPositionY", () => {
  for (const key of ["left", "right", "center", "50%", "100px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bgPositionY={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-position-y", key);
    });
  }

  describeResp<BackgroundProps["bgPositionY"]>(
    {
      xs: "left",
      sm: undefined,
      md: "100px",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-position-y", "left"),
      sm: (elm) => expectComputedStyle(elm, "background-position-y", "left"),
      md: (elm) => expectComputedStyle(elm, "background-position-y", "100px"),
    },
    (props) => {
      render(<Typography data-testid="div" bgPositionY={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgRepeat", () => {
  for (const key of ["repeat", "repeat-x", "no-repeat"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bgRepeat={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-repeat", key);
    });
  }

  describeResp<BackgroundProps["bgRepeat"]>(
    {
      xs: "repeat",
      sm: undefined,
      md: "no-repeat",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-repeat", "repeat"),
      sm: (elm) => expectComputedStyle(elm, "background-repeat", "repeat"),
      md: (elm) => expectComputedStyle(elm, "background-repeat", "no-repeat"),
    },
    (props) => {
      render(<Typography data-testid="div" bgRepeat={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgSize", () => {
  for (const key of ["auto", "300px 100px"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" bgSize={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "background-size", key);
    });
  }

  describeResp<BackgroundProps["bgSize"]>(
    {
      xs: "auto",
      sm: undefined,
      md: "300px 100px",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "background-size", "auto"),
      sm: (elm) => expectComputedStyle(elm, "background-size", "auto"),
      md: (elm) => expectComputedStyle(elm, "background-size", "300px 100px"),
    },
    (props) => {
      render(<Typography data-testid="div" bgSize={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("bgSubtle", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" bg="primary" bgSubtle={key}></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain(`bg-primary-subtle`);
      else expect(elm.classList).toContain(`bg-primary`);
    });
  }

  describeResp<BackgroundProps["bgSubtle"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`bg-primary-subtle`),
      sm: (elm) => expect(elm.classList).toContain(`bg-primary-subtle`),
      md: (elm) => expect(elm.classList).toContain(`bg-primary`),
    },
    (props) => {
      render(
        <Typography
          data-testid="div"
          bg="primary"
          bgSubtle={props}
        ></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});
