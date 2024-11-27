import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Div from "../../src/lib/component/Div";
import { BorderProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";

describe("border", () => {
  for (const key of [true, "0", "1px solid black"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" border={key as any}></Typography>);

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`border`);
      } else if (key === "1px solid black") {
        expectComputedStyle(elm, "border", key);
      } else expect(elm.classList).toContain(`border-0`);
    });
  }

  describeResp<BorderProps["border"]>(
    {
      xs: true,
      sm: undefined,
      md: "0",
      lg: "1px solid black",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border`),
      sm: (elm) => expect(elm.classList).toContain(`border`),
      md: (elm) => expect(elm.classList).toContain(`border-0`),
      lg: (elm) => expectComputedStyle(elm, "border", "1px solid black"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" border={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderBlock", () => {
  for (const key of ["double", "hotpink dashed 8px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderBlock={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "border-block", key);
    });
  }

  describeResp<BorderProps["borderBlock"]>(
    {
      xs: "double",
      sm: undefined,
      md: "hotpink dashed 8px",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "border-block", "double"),
      sm: (elm) => expectComputedStyle(elm, "border-block", "double"),
      md: (elm) =>
        expectComputedStyle(elm, "border-block", "hotpink dashed 8px"),
    },
    (props) => {
      render(<Typography data-testid="div" borderBlock={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderBottom", () => {
  for (const key of [true, "0", "1px solid black"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderBottom={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`border-bottom`);
      } else if (key === "1px solid black") {
        expectComputedStyle(elm, "border-bottom", key);
      } else expect(elm.classList).toContain(`border-bottom-0`);
    });
  }

  describeResp<BorderProps["borderBottom"]>(
    {
      xs: true,
      sm: undefined,
      md: "0",
      lg: "1px solid black",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-bottom`),
      sm: (elm) => expect(elm.classList).toContain(`border-bottom`),
      md: (elm) => expect(elm.classList).toContain(`border-bottom-0`),
      lg: (elm) => expectComputedStyle(elm, "border-bottom", "1px solid black"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderBottom={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderCollapse", () => {
  for (const key of ["separate", "unset", "collapse"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderCollapse={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "border-collapse", key);
    });
  }

  describeResp<BorderProps["borderCollapse"]>(
    {
      xs: "separate",
      sm: undefined,
      md: "unset",
      lg: "collapse",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expectComputedStyle(elm, "border-collapse", "separate"),
      sm: (elm) => expectComputedStyle(elm, "border-collapse", "separate"),
      md: (elm) => expectComputedStyle(elm, "border-collapse", "unset"),
      lg: (elm) => expectComputedStyle(elm, "border-collapse", "collapse"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(
        <Typography data-testid="div" borderCollapse={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("borderColor", () => {
  for (const key of ["primary", "black", "none", "red", "#ff0000"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" borderColor={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "primary" || key == "black" || key == "none") {
        expect(elm.classList).toContain(`border-${key}`);
      } else {
        expectComputedStyle(elm, "border-color", key, { isColor: true });
      }
    });
  }

  describeResp<BorderProps["borderColor"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "none",
      lg: "red",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-primary`),
      sm: (elm) => expect(elm.classList).toContain(`border-primary`),
      md: (elm) => expect(elm.classList).toContain(`border-none`),
      lg: (elm) =>
        expectComputedStyle(elm, "border-color", "red", { isColor: true }),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderColor={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderEnd", () => {
  for (const key of [true, "0", "1px solid black"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderEnd={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`border-end`);
      } else if (key === "1px solid black") {
        expectComputedStyle(elm, "border-right", key);
      } else expect(elm.classList).toContain(`border-end-0`);
    });
  }

  describeResp<BorderProps["borderEnd"]>(
    {
      xs: true,
      sm: undefined,
      md: "0",
      lg: "1px solid black",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-end`),
      sm: (elm) => expect(elm.classList).toContain(`border-end`),
      md: (elm) => expect(elm.classList).toContain(`border-end-0`),
      lg: (elm) => expectComputedStyle(elm, "border-right", "1px solid black"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderEnd={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderImage", () => {
  for (const key of [
    "url(border.png) 30 round",
    "unset",
    "url(border.png) 30% stretch",
  ]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderImage={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "border-image", key);
    });
  }

  describeResp<BorderProps["borderImage"]>(
    {
      xs: "url(border.png) 30 round",
      sm: undefined,
      md: "unset",
      lg: "url(border.png) 30% stretch",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) =>
        expectComputedStyle(elm, "border-image", "url(border.png) 30 round"),
      sm: (elm) =>
        expectComputedStyle(elm, "border-image", "url(border.png) 30 round"),
      md: (elm) => expectComputedStyle(elm, "border-image", "unset"),
      lg: (elm) =>
        expectComputedStyle(elm, "border-image", "url(border.png) 30% stretch"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderImage={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderInline", () => {
  for (const key of ["5px solid red", "unset", "double"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderInline={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "border-inline", key);
    });
  }

  describeResp<BorderProps["borderInline"]>(
    {
      xs: "5px solid red",
      sm: undefined,
      md: "unset",
      lg: "double",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expectComputedStyle(elm, "border-inline", "5px solid red"),
      sm: (elm) => expectComputedStyle(elm, "border-inline", "5px solid red"),
      md: (elm) => expectComputedStyle(elm, "border-inline", "unset"),
      lg: (elm) => expectComputedStyle(elm, "border-inline", "double"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderInline={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderOpacity", () => {
  for (const key of ["10", "75", "100", "none", 0.11]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderOpacity={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === 0.11) expect(elm.classList).length(1);
      else expect(elm.classList).toContain(`border-opacity-${key}`);
    });
  }

  describeResp<BorderProps["borderOpacity"]>(
    {
      xs: "10",
      sm: undefined,
      md: "none",
      lg: 0.11,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-opacity-10`),
      sm: (elm) => expect(elm.classList).toContain(`border-opacity-10`),
      md: (elm) => expect(elm.classList).toContain(`border-opacity-none`),
      lg: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderOpacity={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderRadius", () => {
  for (const key of [true, "0", "1", "pill", "none", "1px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderRadius={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`rounded`);
      } else if (key === "1px") {
        expectComputedStyle(elm, "border-radius", "1px");
      } else {
        expect(elm.classList).toContain(`rounded-${key}`);
      }
    });
  }

  describeResp<BorderProps["borderRadius"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "1px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`rounded-1`),
      sm: (elm) => expect(elm.classList).toContain(`rounded-1`),
      md: (elm) => expect(elm.classList).toContain(`rounded-none`),
      lg: (elm) => expectComputedStyle(elm, "border-radius", "1px"),
    },
    (props) => {
      render(<Typography data-testid="div" borderRadius={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderRadiusBottom", () => {
  for (const key of [true, "0", "1", "pill", "none", "1px"]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          borderRadiusBottom={key as any}
        ></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`rounded-bottom`);
      } else if (key === "1px") {
        expectComputedStyle(elm, "border-bottom-left-radius", "1px");
      } else {
        expect(elm.classList).toContain(`rounded-bottom-${key}`);
      }
    });
  }

  describeResp<BorderProps["borderRadiusBottom"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "1px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`rounded-bottom-1`),
      sm: (elm) => expect(elm.classList).toContain(`rounded-bottom-1`),
      md: (elm) => expect(elm.classList).toContain(`rounded-bottom-none`),
      lg: (elm) => expectComputedStyle(elm, "border-bottom-left-radius", "1px"),
    },
    (props) => {
      render(
        <Typography data-testid="div" borderRadiusBottom={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("borderRadiusEnd", () => {
  for (const key of [true, "0", "1", "pill", "none", "1px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderRadiusEnd={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`rounded-end`);
      } else if (key === "1px") {
        expectComputedStyle(elm, "border-top-right-radius", "1px");
      } else {
        expect(elm.classList).toContain(`rounded-end-${key}`);
      }
    });
  }

  describeResp<BorderProps["borderRadiusEnd"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "1px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`rounded-end-1`),
      sm: (elm) => expect(elm.classList).toContain(`rounded-end-1`),
      md: (elm) => expect(elm.classList).toContain(`rounded-end-none`),
      lg: (elm) => expectComputedStyle(elm, "border-top-right-radius", "1px"),
    },
    (props) => {
      render(
        <Typography data-testid="div" borderRadiusEnd={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("borderRadiusStart", () => {
  for (const key of [true, "0", "1", "pill", "none", "1px"]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          borderRadiusStart={key as any}
        ></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`rounded-start`);
      } else if (key === "1px") {
        expectComputedStyle(elm, "border-top-left-radius", "1px");
      } else {
        expect(elm.classList).toContain(`rounded-start-${key}`);
      }
    });
  }

  describeResp<BorderProps["borderRadiusStart"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "1px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`rounded-start-1`),
      sm: (elm) => expect(elm.classList).toContain(`rounded-start-1`),
      md: (elm) => expect(elm.classList).toContain(`rounded-start-none`),
      lg: (elm) => expectComputedStyle(elm, "border-top-left-radius", "1px"),
    },
    (props) => {
      render(
        <Typography data-testid="div" borderRadiusStart={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("borderRadiusTop", () => {
  for (const key of [true, "0", "1", "pill", "none", "1px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderRadiusTop={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`rounded-top`);
      } else if (key === "1px") {
        expectComputedStyle(elm, "border-top-left-radius", "1px");
      } else {
        expect(elm.classList).toContain(`rounded-top-${key}`);
      }
    });
  }

  describeResp<BorderProps["borderRadiusTop"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "1px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`rounded-top-1`),
      sm: (elm) => expect(elm.classList).toContain(`rounded-top-1`),
      md: (elm) => expect(elm.classList).toContain(`rounded-top-none`),
      lg: (elm) => expectComputedStyle(elm, "border-top-left-radius", "1px"),
    },
    (props) => {
      render(
        <Typography data-testid="div" borderRadiusTop={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("borderSpacing", () => {
  for (const key of ["15px", "unset", "15px 50px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderSpacing={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "border-spacing", key);
    });
  }

  describeResp<BorderProps["borderSpacing"]>(
    {
      xs: "15px",
      sm: undefined,
      md: "unset",
      lg: "15px 50px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expectComputedStyle(elm, "border-spacing", "15px"),
      sm: (elm) => expectComputedStyle(elm, "border-spacing", "15px"),
      md: (elm) => expectComputedStyle(elm, "border-spacing", "unset"),
      lg: (elm) => expectComputedStyle(elm, "border-spacing", "15px 50px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderSpacing={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderStart", () => {
  for (const key of [true, "0", "1px solid black"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderStart={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`border-start`);
      } else if (key === "1px solid black") {
        expectComputedStyle(elm, "border-left", key);
      } else expect(elm.classList).toContain(`border-start-0`);
    });
  }

  describeResp<BorderProps["borderStart"]>(
    {
      xs: true,
      sm: undefined,
      md: "0",
      lg: "1px solid black",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-start`),
      sm: (elm) => expect(elm.classList).toContain(`border-start`),
      md: (elm) => expect(elm.classList).toContain(`border-start-0`),
      lg: (elm) => expectComputedStyle(elm, "border-left", "1px solid black"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderStart={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderStyle", () => {
  for (const key of ["dotted", "unset", "solid"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderStyle={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "border-style", key);
    });
  }

  describeResp<BorderProps["borderStyle"]>(
    {
      xs: "dotted",
      sm: undefined,
      md: "unset",
      lg: "solid",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expectComputedStyle(elm, "border-style", "dotted"),
      sm: (elm) => expectComputedStyle(elm, "border-style", "dotted"),
      md: (elm) => expectComputedStyle(elm, "border-style", "unset"),
      lg: (elm) => expectComputedStyle(elm, "border-style", "solid"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderStyle={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderSubtle", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Typography
          data-testid="div"
          borderColor={"primary"}
          borderSubtle={key}
        ></Typography>
      );

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(
        key ? `border-primary-subtle` : `border-primary`
      );
    });
  }

  describeResp<BorderProps["borderSubtle"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-primary-subtle`),
      sm: (elm) => expect(elm.classList).toContain(`border-primary-subtle`),
      md: (elm) => expect(elm.classList).toContain(`border-primary`),
      lg: (elm) => expect(elm.classList).toContain(`border-primary-subtle`),
    },
    (props) => {
      render(
        <Typography
          data-testid="div"
          borderColor="primary"
          borderSubtle={props}
        ></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("borderTop", () => {
  for (const key of [true, "0", "1px solid black"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderTop={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === true) {
        expect(elm.classList).toContain(`border-top`);
      } else if (key === "1px solid black") {
        expectComputedStyle(elm, "border-top", key);
      } else expect(elm.classList).toContain(`border-top-0`);
    });
  }

  describeResp<BorderProps["borderTop"]>(
    {
      xs: true,
      sm: undefined,
      md: "0",
      lg: "1px solid black",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-top`),
      sm: (elm) => expect(elm.classList).toContain(`border-top`),
      md: (elm) => expect(elm.classList).toContain(`border-top-0`),
      lg: (elm) => expectComputedStyle(elm, "border-top", "1px solid black"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" borderTop={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("borderWidth", () => {
  for (const key of ["1", "5", "none", "5px"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" borderWidth={key as any}></Typography>
      );

      const elm = screen.getByTestId("div");
      if (key === "5px") expectComputedStyle(elm, "border-width", key);
      else expect(elm.classList).toContain(`border-${key}`);
    });
  }

  describeResp<BorderProps["borderWidth"]>(
    {
      xs: "5",
      sm: undefined,
      md: "none",
      lg: "5px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`border-5`),
      sm: (elm) => expect(elm.classList).toContain(`border-5`),
      md: (elm) => expect(elm.classList).toContain(`border-none`),
      lg: (elm) => expectComputedStyle(elm, "border-width", "5px"),
    },
    (props) => {
      render(<Typography data-testid="div" borderWidth={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
