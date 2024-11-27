import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { describeResp, expectComputedStyle, Typography } from "../constant";
import React from "react";
import { SpacingProps } from "../../src/lib/saigon.types";

const mMatch = ["0", "1", "2", "3", "4", "5", "auto", "none", "12px"];
const pMatch = ["0", "1", "2", "3", "4", "5", "none", "12px"];

// Margin

describe("m", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" m={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin", "12px");
      else expect(elm.classList).toContain(`m-${key}`);
    });
  }

  describeResp<SpacingProps["m"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`m-1`),
      sm: (elm) => expect(elm.classList).toContain(`m-1`),
      md: (elm) => expect(elm.classList).toContain(`m-none`),
      lg: (elm) => expectComputedStyle(elm, "margin", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" m={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("mb", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" mb={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin-bottom", "12px");
      else expect(elm.classList).toContain(`mb-${key}`);
    });
  }

  describeResp<SpacingProps["mb"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`mb-1`),
      sm: (elm) => expect(elm.classList).toContain(`mb-1`),
      md: (elm) => expect(elm.classList).toContain(`mb-none`),
      lg: (elm) => expectComputedStyle(elm, "margin-bottom", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" mb={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("me", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" me={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin-right", "12px");
      else expect(elm.classList).toContain(`me-${key}`);
    });
  }

  describeResp<SpacingProps["me"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`me-1`),
      sm: (elm) => expect(elm.classList).toContain(`me-1`),
      md: (elm) => expect(elm.classList).toContain(`me-none`),
      lg: (elm) => expectComputedStyle(elm, "margin-right", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" me={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("ms", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" ms={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin-left", "12px");
      else expect(elm.classList).toContain(`ms-${key}`);
    });
  }

  describeResp<SpacingProps["ms"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`ms-1`),
      sm: (elm) => expect(elm.classList).toContain(`ms-1`),
      md: (elm) => expect(elm.classList).toContain(`ms-none`),
      lg: (elm) => expectComputedStyle(elm, "margin-left", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" ms={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("mt", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" mt={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin-top", "12px");
      else expect(elm.classList).toContain(`mt-${key}`);
    });
  }

  describeResp<SpacingProps["mt"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`mt-1`),
      sm: (elm) => expect(elm.classList).toContain(`mt-1`),
      md: (elm) => expect(elm.classList).toContain(`mt-none`),
      lg: (elm) => expectComputedStyle(elm, "margin-top", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" mt={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("mx", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" mx={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin-left", "12px");
      else expect(elm.classList).toContain(`mx-${key}`);
    });
  }

  describeResp<SpacingProps["mx"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`mx-1`),
      sm: (elm) => expect(elm.classList).toContain(`mx-1`),
      md: (elm) => expect(elm.classList).toContain(`mx-none`),
      lg: (elm) => expectComputedStyle(elm, "margin-left", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" mx={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("my", () => {
  for (const key of mMatch) {
    it(key, () => {
      render(<Typography data-testid="div" my={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "margin-top", "12px");
      else expect(elm.classList).toContain(`my-${key}`);
    });
  }

  describeResp<SpacingProps["my"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`my-1`),
      sm: (elm) => expect(elm.classList).toContain(`my-1`),
      md: (elm) => expect(elm.classList).toContain(`my-none`),
      lg: (elm) => expectComputedStyle(elm, "margin-top", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" my={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

// Padding
describe("p", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" p={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding", "12px");
      else expect(elm.classList).toContain(`p-${key}`);
    });
  }

  describeResp<SpacingProps["p"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`p-1`),
      sm: (elm) => expect(elm.classList).toContain(`p-1`),
      md: (elm) => expect(elm.classList).toContain(`p-none`),
      lg: (elm) => expectComputedStyle(elm, "padding", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" p={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("pb", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" pb={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding-bottom", "12px");
      else expect(elm.classList).toContain(`pb-${key}`);
    });
  }

  describeResp<SpacingProps["py"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`pb-1`),
      sm: (elm) => expect(elm.classList).toContain(`pb-1`),
      md: (elm) => expect(elm.classList).toContain(`pb-none`),
      lg: (elm) => expectComputedStyle(elm, "padding-bottom", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" pb={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("pe", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" pe={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding-right", "12px");
      else expect(elm.classList).toContain(`pe-${key}`);
    });
  }

  describeResp<SpacingProps["pe"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`pe-1`),
      sm: (elm) => expect(elm.classList).toContain(`pe-1`),
      md: (elm) => expect(elm.classList).toContain(`pe-none`),
      lg: (elm) => expectComputedStyle(elm, "padding-right", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" pe={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("ps", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" ps={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding-left", "12px");
      else expect(elm.classList).toContain(`ps-${key}`);
    });
  }

  describeResp<SpacingProps["ps"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`ps-1`),
      sm: (elm) => expect(elm.classList).toContain(`ps-1`),
      md: (elm) => expect(elm.classList).toContain(`ps-none`),
      lg: (elm) => expectComputedStyle(elm, "padding-left", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" ps={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("pt", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" pt={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding-top", "12px");
      else expect(elm.classList).toContain(`pt-${key}`);
    });
  }

  describeResp<SpacingProps["pt"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`pt-1`),
      sm: (elm) => expect(elm.classList).toContain(`pt-1`),
      md: (elm) => expect(elm.classList).toContain(`pt-none`),
      lg: (elm) => expectComputedStyle(elm, "padding-top", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" pt={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("px", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" px={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding-left", "12px");
      else expect(elm.classList).toContain(`px-${key}`);
    });
  }

  describeResp<SpacingProps["px"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`px-1`),
      sm: (elm) => expect(elm.classList).toContain(`px-1`),
      md: (elm) => expect(elm.classList).toContain(`px-none`),
      lg: (elm) => expectComputedStyle(elm, "padding-left", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" px={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});

describe("py", () => {
  for (const key of pMatch) {
    it(key, () => {
      render(<Typography data-testid="div" py={key}></Typography>);

      const elm = screen.getByTestId("div");
      if (key == "12px") expectComputedStyle(elm, "padding-top", "12px");
      else expect(elm.classList).toContain(`py-${key}`);
    });
  }

  describeResp<SpacingProps["py"]>(
    {
      xs: "1",
      sm: undefined,
      md: "none",
      lg: "50px",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`py-1`),
      sm: (elm) => expect(elm.classList).toContain(`py-1`),
      md: (elm) => expect(elm.classList).toContain(`py-none`),
      lg: (elm) => expectComputedStyle(elm, "padding-top", "50px"),
    },
    (props) => {
      render(<Typography data-testid="div" py={props}></Typography>);
      return screen.getByTestId("div");
    }
  );
});
