import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { FlexProps } from "../../src/lib/saigon.types";
import { describeResp, expectComputedStyle, Typography } from "../constant";

describe("alignContent", () => {
  for (const key of [
    "start",
    "end",
    "center",
    "between",
    "around",
    "stretch",
    "none",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" alignContent={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "align-content", "unset");
      else expect(elm.classList).toContain(`align-content-${key}`);
    });
  }

  describeResp<FlexProps["alignContent"]>(
    {
      xs: "end",
      sm: undefined,
      md: "none",
      lg: "between",
      xl: "unset" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`align-content-end`),
      sm: (elm) => expect(elm.classList).toContain(`align-content-end`),
      md: (elm) => expect(elm.classList).toContain(`align-content-none`),
      lg: (elm) => expect(elm.classList).toContain(`align-content-between`),
      xl: (elm) => expectComputedStyle(elm, "align-content", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" alignContent={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("alignItems", () => {
  for (const key of [
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
    "none",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" alignItems={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "align-items", "unset");
      else expect(elm.classList).toContain(`align-items-${key}`);
    });
  }

  describeResp<FlexProps["alignItems"]>(
    {
      xs: "end",
      sm: undefined,
      md: "none",
      lg: "baseline",
      xl: "unset" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`align-items-end`),
      sm: (elm) => expect(elm.classList).toContain(`align-items-end`),
      md: (elm) => expect(elm.classList).toContain(`align-items-none`),
      lg: (elm) => expect(elm.classList).toContain(`align-items-baseline`),
      xl: (elm) => expectComputedStyle(elm, "align-items", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" alignItems={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("alignSelf", () => {
  for (const key of [
    "auto",
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
    "none",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" alignSelf={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "align-self", "unset");
      else expect(elm.classList).toContain(`align-self-${key}`);
    });
  }

  describeResp<FlexProps["alignSelf"]>(
    {
      xs: "end",
      sm: undefined,
      md: "none",
      lg: "baseline",
      xl: "unset" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`align-self-end`),
      sm: (elm) => expect(elm.classList).toContain(`align-self-end`),
      md: (elm) => expect(elm.classList).toContain(`align-self-none`),
      lg: (elm) => expect(elm.classList).toContain(`align-self-baseline`),
      xl: (elm) => expectComputedStyle(elm, "align-self", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" alignSelf={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("columnGap", () => {
  for (const key of ["0", "1", "2", "3", "4", "5", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" columnGap={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "column-gap", "20px");
      else expect(elm.classList).toContain(`column-gap-${key}`);
    });
  }

  describeResp<FlexProps["columnGap"]>(
    {
      xs: "0",
      sm: undefined,
      md: "none",
      lg: "5",
      xl: "20px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`column-gap-0`),
      sm: (elm) => expect(elm.classList).toContain(`column-gap-0`),
      md: (elm) => expect(elm.classList).toContain(`column-gap-none`),
      lg: (elm) => expect(elm.classList).toContain(`column-gap-5`),
      xl: (elm) => expectComputedStyle(elm, "column-gap", "20px"),
    },
    (props) => {
      render(<Typography data-testid="div" columnGap={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("flex", () => {
  for (const key of [
    "fill",
    "row",
    "column",
    "row-reverse",
    "column-reverse",
    "grow-0",
    "grow-1",
    "shrink-0",
    "shrink-1",
    "wrap",
    "nowrap",
    "wrap-reverse",
    "none",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" flex={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "flex", "unset");
      else expect(elm.classList).toContain(`flex-${key}`);
    });
  }

  describeResp<FlexProps["flex"]>(
    {
      xs: "row",
      sm: undefined,
      md: "none",
      lg: "column",
      xl: "unset" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`flex-row`),
      sm: (elm) => expect(elm.classList).toContain(`flex-row`),
      md: (elm) => expect(elm.classList).toContain(`flex-none`),
      lg: (elm) => expect(elm.classList).toContain(`flex-column`),
      xl: (elm) => expectComputedStyle(elm, "flex", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" flex={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("flexBasis", () => {
  for (const key of ["1rem", "10px", "auto"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" flexBasis={key}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "flex-basis", key);
    });
  }

  describeResp<FlexProps["flexBasis"]>(
    {
      xs: "1rem",
      sm: undefined,
      md: "10px",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "flex-basis", "1rem"),
      sm: (elm) => expectComputedStyle(elm, "flex-basis", "1rem"),
      md: (elm) => expectComputedStyle(elm, "flex-basis", "10px"),
    },
    (props) => {
      render(<Typography data-testid="div" flexBasis={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("flexDirection", () => {
  for (const key of ["row", "row-reverse", "column", "column-reverse"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" flexDirection={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "flex-direction", key);
    });
  }

  describeResp<FlexProps["flexDirection"]>(
    {
      xs: "row",
      sm: undefined,
      md: "column",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "flex-direction", "row"),
      sm: (elm) => expectComputedStyle(elm, "flex-direction", "row"),
      md: (elm) => expectComputedStyle(elm, "flex-direction", "column"),
    },
    (props) => {
      render(<Typography data-testid="div" flexDirection={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("flexFlow", () => {
  for (const key of ["row-reverse wrap", "row nowrap"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" flexFlow={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "flex-flow", key);
    });
  }

  describeResp<FlexProps["flexFlow"]>(
    {
      xs: "row nowrap",
      sm: undefined,
      md: "row-reverse wrap",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "flex-flow", "row nowrap"),
      sm: (elm) => expectComputedStyle(elm, "flex-flow", "row nowrap"),
      md: (elm) => expectComputedStyle(elm, "flex-flow", "row-reverse wrap"),
    },
    (props) => {
      render(<Typography data-testid="div" flexFlow={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("flexShrink", () => {
  for (const key of ["1", "0", "unset"]) {
    it(`${key}`, () => {
      render(
        <Typography data-testid="div" flexShrink={key as any}></Typography>
      );
      const elm = screen.getByTestId("div");
      expectComputedStyle(elm, "flex-shrink", key);
    });
  }

  describeResp<FlexProps["flexShrink"]>(
    {
      xs: "1",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expectComputedStyle(elm, "flex-shrink", "1"),
      sm: (elm) => expectComputedStyle(elm, "flex-shrink", "1"),
      md: (elm) => expectComputedStyle(elm, "flex-shrink", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" flexShrink={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("flexWrap", () => {
  for (const key of ["wrap", "nowrap", "wrap-reverse", "none", "unset"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" flexWrap={key as any}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "flex-wrap", key);
      else expect(elm.classList).toContain(`flex-${key}`);
    });
  }

  describeResp<FlexProps["flexWrap"]>(
    {
      xs: "wrap",
      sm: undefined,
      md: "unset",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`flex-wrap`),
      sm: (elm) => expect(elm.classList).toContain(`flex-wrap`),
      md: (elm) => expectComputedStyle(elm, "flex-wrap", "unset"),
    },
    (props) => {
      render(<Typography data-testid="div" flexWrap={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("gap", () => {
  for (const key of ["0", "1", "2", "3", "4", "5", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" gap={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "gap", "20px");
      else expect(elm.classList).toContain(`gap-${key}`);
    });
  }

  describeResp<FlexProps["gap"]>(
    {
      xs: "0",
      sm: undefined,
      md: "none",
      lg: "5",
      xl: "20px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`gap-0`),
      sm: (elm) => expect(elm.classList).toContain(`gap-0`),
      md: (elm) => expect(elm.classList).toContain(`gap-none`),
      lg: (elm) => expect(elm.classList).toContain(`gap-5`),
      xl: (elm) => expectComputedStyle(elm, "gap", "20px"),
    },
    (props) => {
      render(<Typography data-testid="div" gap={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("justifyContent", () => {
  for (const key of [
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
    "none",
    "unset",
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" justifyContent={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "unset") expectComputedStyle(elm, "justify-content", "unset");
      else expect(elm.classList).toContain(`justify-content-${key}`);
    });
  }

  describeResp<FlexProps["justifyContent"]>(
    {
      xs: "end",
      sm: undefined,
      md: "none",
      lg: "evenly",
      xl: "unset" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`justify-content-end`),
      sm: (elm) => expect(elm.classList).toContain(`justify-content-end`),
      md: (elm) => expect(elm.classList).toContain(`justify-content-none`),
      lg: (elm) => expect(elm.classList).toContain(`justify-content-evenly`),
      xl: (elm) => expectComputedStyle(elm, "justify-content", "unset"),
    },
    (props) => {
      render(
        <Typography data-testid="div" justifyContent={props}></Typography>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("order", () => {
  for (const key of [
    "first",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "last",
    "none",
    11,
  ]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" order={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key === 11) expectComputedStyle(elm, "order", "11");
      else expect(elm.classList).toContain(`order-${key}`);
    });
  }

  describeResp<FlexProps["order"]>(
    {
      xs: "3",
      sm: undefined,
      md: "none",
      lg: "last",
      xl: 11 as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`order-3`),
      sm: (elm) => expect(elm.classList).toContain(`order-3`),
      md: (elm) => expect(elm.classList).toContain(`order-none`),
      lg: (elm) => expect(elm.classList).toContain(`order-last`),
      xl: (elm) => expectComputedStyle(elm, "order", "11"),
    },
    (props) => {
      render(<Typography data-testid="div" order={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("rowGap", () => {
  for (const key of ["0", "1", "2", "3", "4", "5", "none", "20px"]) {
    it(`${key}`, () => {
      render(<Typography data-testid="div" rowGap={key}></Typography>);
      const elm = screen.getByTestId("div");
      if (key == "20px") expectComputedStyle(elm, "row-gap", "20px");
      else expect(elm.classList).toContain(`row-gap-${key}`);
    });
  }

  describeResp<FlexProps["rowGap"]>(
    {
      xs: "0",
      sm: undefined,
      md: "none",
      lg: "5",
      xl: "20px" as any,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`row-gap-0`),
      sm: (elm) => expect(elm.classList).toContain(`row-gap-0`),
      md: (elm) => expect(elm.classList).toContain(`row-gap-none`),
      lg: (elm) => expect(elm.classList).toContain(`row-gap-5`),
      xl: (elm) => expectComputedStyle(elm, "row-gap", "20px"),
    },
    (props) => {
      render(<Typography data-testid="div" rowGap={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
