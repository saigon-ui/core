import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Div from "../../src/lib/component/Div";
import { LayoutProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";

describe("display", () => {
  for (const key of [
    "inline",
    "inline-block",
    "block",
    "grid",
    "inline-grid",
    "table",
    "table-row",
    "table-cell",
    "flex",
    "inline-flex",
    "none",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" display={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "display", "unset");
      else expect(elm.classList).toContain(`d-${key}`);
    });
  }

  describeResp<LayoutProps["display"]>(
    {
      xs: "table",
      sm: undefined,
      md: "none",
      lg: "unset",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`d-table`),
      sm: (elm) => expect(elm.classList).toContain(`d-table`),
      md: (elm) => expect(elm.classList).toContain(`d-none`),
      lg: (elm) => expectComputedStyle(elm, "display", "unset"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" display={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("displayPrint", () => {
  for (const key of [
    "inline",
    "inline-block",
    "block",
    "grid",
    "inline-grid",
    "table",
    "table-row",
    "table-cell",
    "flex",
    "inline-flex",
    "none",
  ]) {
    it(`${key}`, () => {
      render(
        <Div data-testid="div" displayPrint={key as any}>
          DIV
        </Div>
      );

      const elm = screen.getByTestId("div");
      if (key == "clip") expectComputedStyle(elm, "display", "unset");
      else expect(elm.classList).toContain(`d-print-${key}`);
    });
  }

  describeResp<LayoutProps["displayPrint"]>(
    {
      xs: "table",
      sm: undefined,
      md: "none",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`d-print-table`),
      sm: (elm) => expect(elm.classList).toContain(`d-print-table`),
      md: (elm) => expect(elm.classList).toContain(`d-print-none`),
    },
    (props) => {
      render(<Typography data-testid="div" displayPrint={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("height", () => {
  for (const key of ["25", "100", "auto", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" height={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "height", "20px");
      else expect(elm.classList).toContain(`h-${key}`);
    });
  }

  describeResp<LayoutProps["height"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "20px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`h-25`),
      sm: (elm) => expect(elm.classList).toContain(`h-25`),
      md: (elm) => expect(elm.classList).toContain(`h-none`),
      lg: (elm) => expectComputedStyle(elm, "height", "20px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" height={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("hstack", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" hstack={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key) expectComputedStyle(elm, "flex-direction", "row");
      else expect(elm.classList).length(0);
    });
  }

  describeResp<LayoutProps["hstack"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expectComputedStyle(elm, "flex-direction", "row"),
      sm: (elm) => expectComputedStyle(elm, "flex-direction", "row"),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expectComputedStyle(elm, "flex-direction", "row"),
    },
    (props) => {
      render(<Typography data-testid="div" hstack={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("maxHeight", () => {
  for (const key of ["25", "100", "auto", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" maxHeight={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "max-height", "20px");
      else expect(elm.classList).toContain(`mh-${key}`);
    });
  }

  describeResp<LayoutProps["maxHeight"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "20px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`mh-25`),
      sm: (elm) => expect(elm.classList).toContain(`mh-25`),
      md: (elm) => expect(elm.classList).toContain(`mh-none`),
      lg: (elm) => expectComputedStyle(elm, "max-height", "20px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" maxHeight={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("maxWidth", () => {
  for (const key of ["25", "100", "auto", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" maxWidth={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "max-width", "20px");
      else expect(elm.classList).toContain(`mw-${key}`);
    });
  }

  describeResp<LayoutProps["maxWidth"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "20px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`mw-25`),
      sm: (elm) => expect(elm.classList).toContain(`mw-25`),
      md: (elm) => expect(elm.classList).toContain(`mw-none`),
      lg: (elm) => expectComputedStyle(elm, "max-width", "20px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" maxWidth={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("minHeight", () => {
  for (const key of ["25", "100", "auto", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" minHeight={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "min-height", "20px");
      else expect(elm.classList).toContain(`minh-${key}`);
    });
  }

  describeResp<LayoutProps["minHeight"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "20px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`minh-25`),
      sm: (elm) => expect(elm.classList).toContain(`minh-25`),
      md: (elm) => expect(elm.classList).toContain(`minh-none`),
      lg: (elm) => expectComputedStyle(elm, "min-height", "20px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" minHeight={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("minWidth", () => {
  for (const key of ["25", "100", "auto", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" minWidth={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "min-width", "20px");
      else expect(elm.classList).toContain(`minw-${key}`);
    });
  }

  describeResp<LayoutProps["minWidth"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "20px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`minw-25`),
      sm: (elm) => expect(elm.classList).toContain(`minw-25`),
      md: (elm) => expect(elm.classList).toContain(`minw-none`),
      lg: (elm) => expectComputedStyle(elm, "min-width", "20px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" minWidth={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("overflow", () => {
  for (const key of ["auto", "hidden", "visible", "scroll", "none", "clip"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" overflow={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "clip") expectComputedStyle(elm, "overflow", "clip");
      else expect(elm.classList).toContain(`overflow-${key}`);
    });
  }

  describeResp<LayoutProps["overflow"]>(
    {
      xs: "auto",
      sm: undefined,
      md: "none",
      lg: "clip",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`overflow-auto`),
      sm: (elm) => expect(elm.classList).toContain(`overflow-auto`),
      md: (elm) => expect(elm.classList).toContain(`overflow-none`),
      lg: (elm) => expectComputedStyle(elm, "overflow", "clip"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" overflow={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("overflowX", () => {
  for (const key of ["auto", "hidden", "visible", "scroll", "none", "clip"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" overflowX={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key == "clip") expectComputedStyle(elm, "overflow-x", "clip");
      else expect(elm.classList).toContain(`overflow-x-${key}`);
    });
  }

  describeResp<LayoutProps["overflowX"]>(
    {
      xs: "auto",
      sm: undefined,
      md: "none",
      lg: "clip",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`overflow-x-auto`),
      sm: (elm) => expect(elm.classList).toContain(`overflow-x-auto`),
      md: (elm) => expect(elm.classList).toContain(`overflow-x-none`),
      lg: (elm) => expectComputedStyle(elm, "overflow-x", "clip"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" overflowX={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("overflowY", () => {
  for (const key of ["auto", "hidden", "visible", "scroll", "none", "clip"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" overflowY={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      if (key == "clip") expectComputedStyle(elm, "overflow-y", "clip");
      else expect(elm.classList).toContain(`overflow-y-${key}`);
    });
  }

  describeResp<LayoutProps["overflowY"]>(
    {
      xs: "auto",
      sm: undefined,
      md: "none",
      lg: "clip",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`overflow-y-auto`),
      sm: (elm) => expect(elm.classList).toContain(`overflow-y-auto`),
      md: (elm) => expect(elm.classList).toContain(`overflow-y-none`),
      lg: (elm) => expectComputedStyle(elm, "overflow-y", "clip"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" overflowY={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("visibility", () => {
  for (const key of ["visible", "invisible", "none", "collapse"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" visibility={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "collapse") expectComputedStyle(elm, "visibility", "collapse");
      else expect(elm.classList).toContain(`visibility-${key}`);
    });
  }

  describeResp<LayoutProps["visibility"]>(
    {
      xs: "visible",
      sm: undefined,
      md: "none",
      lg: "collapse",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`visibility-visible`),
      sm: (elm) => expect(elm.classList).toContain(`visibility-visible`),
      md: (elm) => expect(elm.classList).toContain(`visibility-none`),
      lg: (elm) => expectComputedStyle(elm, "visibility", "collapse"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" visibility={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("vstack", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" vstack={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key) expectComputedStyle(elm, "flex-direction", "column");
      else expect(elm.classList).length(0);
    });
  }

  describeResp<LayoutProps["vstack"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expectComputedStyle(elm, "flex-direction", "column"),
      sm: (elm) => expectComputedStyle(elm, "flex-direction", "column"),
      md: (elm) => expect(elm.classList).length(0),
      lg: (elm) => expectComputedStyle(elm, "flex-direction", "column"),
    },
    (props) => {
      render(<Typography data-testid="div" vstack={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("width", () => {
  for (const key of ["25", "100", "auto", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" width={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "width", "20px");
      else expect(elm.classList).toContain(`w-${key}`);
    });
  }

  describeResp<LayoutProps["width"]>(
    {
      xs: "25",
      sm: undefined,
      md: "none",
      lg: "20px",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`w-25`),
      sm: (elm) => expect(elm.classList).toContain(`w-25`),
      md: (elm) => expect(elm.classList).toContain(`w-none`),
      lg: (elm) => expectComputedStyle(elm, "width", "20px"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" width={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("zIndex", () => {
  for (const key of ["n1", "0", "1", "2", "3", "none", 1000]) {
    it(`${key}`, () => {
      render(<Div data-testid="div" zIndex={key as any}></Div>);

      const elm = screen.getByTestId("div");
      if (key == "1000") expectComputedStyle(elm, "z-index", "1000");
      else expect(elm.classList).toContain(`z-${key}`);
    });
  }

  describeResp<LayoutProps["zIndex"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "1000",
      xl: "no_existing" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`z-1`),
      sm: (elm) => expect(elm.classList).toContain(`z-1`),
      md: (elm) => expect(elm.classList).toContain(`z-none`),
      lg: (elm) => expectComputedStyle(elm, "z-index", "1000"),
      xl: (elm) => expect(elm.classList).length(1),
    },
    (props) => {
      render(<Typography data-testid="div" zIndex={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
