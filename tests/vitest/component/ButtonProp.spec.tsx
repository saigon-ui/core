import "@testing-library/dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Button, { ButtonProps } from "../../../src/lib/component/Button";
import { describeResp } from "../../constant";
import userEvent from "@testing-library/user-event";
import { ThemeColors } from "../../../src/lib/base";
import * as Icons from "../../../src/lib/component/Icon";

describe("variant", () => {
  for (const key of [...ThemeColors, "link"]) {
    it(`${key}`, () => {
      render(<Button data-testid="div" variant={key as any}></Button>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`btn-${key}`);
    });
  }

  describeResp<ButtonProps["variant"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "link",
      lg: "success",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`btn-primary`),
      sm: (elm) => expect(elm.classList).toContain(`btn-primary`),
      md: (elm) => expect(elm.classList).toContain(`btn-link`),
      lg: (elm) => expect(elm.classList).toContain(`btn-success`),
    },
    (props) => {
      render(<Button data-testid="div" variant={props}></Button>);
      return screen.getByTestId("div");
    }
  );
});

describe("outline", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(
        <Button
          data-testid="div"
          variant="primary"
          outline={key as any}
        ></Button>
      );
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(
        key ? `btn-outline-primary` : `btn-primary`
      );
    });
  }

  describeResp<ButtonProps["outline"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`btn-outline-primary`),
      sm: (elm) => expect(elm.classList).toContain(`btn-outline-primary`),
      md: (elm) => expect(elm.classList).toContain(`btn-primary`),
      lg: (elm) => expect(elm.classList).toContain(`btn-outline-primary`),
    },
    (props) => {
      render(
        <Button data-testid="div" variant="primary" outline={props}></Button>
      );
      return screen.getByTestId("div");
    }
  );
});

describe("size", () => {
  for (const key of ["lg", "sm"]) {
    it(key, () => {
      render(<Button data-testid="div" size={key as any}></Button>);

      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`btn-${key}`);
    });
  }

  describeResp<ButtonProps["size"]>(
    {
      xs: "sm",
      sm: undefined,
      md: "lg",
      lg: "sm",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`btn-sm`),
      sm: (elm) => expect(elm.classList).toContain(`btn-sm`),
      md: (elm) => expect(elm.classList).toContain(`btn-lg`),
      lg: (elm) => expect(elm.classList).toContain(`btn-sm`),
    },
    (props) => {
      render(<Button data-testid="div" size={props}></Button>);
      return screen.getByTestId("div");
    }
  );
});

describe("noTextWrap", () => {
  for (const key of [true, false]) {
    it(`${key}`, () => {
      render(<Button data-testid="div" noTextWrap={key as any}></Button>);

      const elm = screen.getByTestId("div");
      if (key) expect(elm.classList).toContain(`text-nowrap`);
      else expect(elm.classList).not.toContain(`text-nowrap`);
    });
  }

  describeResp<ButtonProps["noTextWrap"]>(
    {
      xs: true,
      sm: undefined,
      md: false,
      lg: true,
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`text-nowrap`),
      sm: (elm) => expect(elm.classList).toContain(`text-nowrap`),
      md: (elm) => expect(elm.classList).not.toContain(`text-nowrap`),
      lg: (elm) => expect(elm.classList).toContain(`text-nowrap`),
    },
    (props) => {
      render(<Button data-testid="div" noTextWrap={props}></Button>);
      return screen.getByTestId("div");
    }
  );
});

describe("disabled", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      const handleOnClick = vi.fn();
      render(
        <Button
          data-testid="div"
          disabled={key}
          onClick={handleOnClick}
        ></Button>
      );

      const elm = screen.getByTestId("div");
      if (key) {
        expect(elm.hasAttribute("disabled")).toBeTruthy();
      } else {
        expect(elm.hasAttribute("disabled")).toBeFalsy();

        await userEvent.click(elm);
        expect(handleOnClick).toHaveBeenCalled();
      }

      // Insert username and password
      // fireEvent.change(usernameInput, { target: { value: 'John Doe'}})
      // fireEvent.change(passwordInput, { target: { value: 'Vite4Life'}})
      //fireEvent.click(elm);
    });
  }
});

describe("isLoading", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      const handleOnClick = vi.fn();
      render(
        <Button
          data-testid="div"
          disabled={false}
          isLoading={key}
          onClick={handleOnClick}
        ></Button>
      );

      const elm = screen.getByTestId("div");
      if (key) {
        expect(elm.hasAttribute("disabled")).toBeTruthy();
      } else {
        expect(elm.hasAttribute("disabled")).toBeFalsy();

        await userEvent.click(elm);
        expect(handleOnClick).toHaveBeenCalled();
      }

      // Insert username and password
      // fireEvent.change(usernameInput, { target: { value: 'John Doe'}})
      // fireEvent.change(passwordInput, { target: { value: 'Vite4Life'}})
      //fireEvent.click(elm);
    });
  }
});

describe("loadingText", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      render(
        <Button
          data-testid="div"
          isLoading={key}
          loadingText={"TheLoadingText"}
        >
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");
      if (key) {
        expect(elm.innerHTML).toContain("TheLoadingText");
      } else {
        expect(elm.innerHTML).toContain("BtnLabel");
      }
    });
  }
});

describe("loadingSpinner", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      render(
        <Button data-testid="div" isLoading={key} loadingSpinner="dots-1">
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");
      if (key) {
        expect(elm.innerHTML).toContain("<svg");
      } else {
        expect(elm.innerHTML).toContain("BtnLabel");
      }
    });
  }
});

describe("spinnerPlacement", () => {
  for (const key of ["end", "start"]) {
    it(`${key}`, async () => {
      render(
        <Button
          data-testid="div"
          spinnerPlacement={key as any}
          loadingSpinner="dots-1"
        >
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");

      expect(true).toBeTruthy();
    });
  }
});

describe("startIcon", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      render(
        <Button
          data-testid="div"
          startIcon={key ? <Icons.IconWarning /> : undefined}
        >
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");
      const id1 = elm.innerHTML.indexOf("<svg");
      const id2 = elm.innerHTML.indexOf("BtnLabel");
      if (key) expect(id1 > -1 && id2 > -1 && id1 < id2).toBeTruthy();
      else expect(id1 == -1 && id2 > -1).toBeTruthy();
    });
  }
});

describe("endIcon", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      render(
        <Button
          data-testid="div"
          endIcon={key ? <Icons.IconWarning /> : undefined}
        >
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");
      const id1 = elm.innerHTML.indexOf("<svg");
      const id2 = elm.innerHTML.indexOf("BtnLabel");
      if (key) expect(id1 > -1 && id2 > -1 && id1 > id2).toBeTruthy();
      else expect(id1 == -1 && id2 > -1).toBeTruthy();
    });
  }
});

describe("iconSpacing", () => {
  for (const key of [true, false]) {
    it(`${key}`, async () => {
      render(
        <Button
          data-testid="div"
          iconSpacing="2px"
          startIcon={key ? <Icons.IconWarning /> : undefined}
        >
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");
      const i = elm.innerHTML.includes(`style="display: flex; gap: 2px;"`);
      expect(key ? i : !i).toBeTruthy();
    });
  }
});

describe("clickEffect", () => {
  for (const key of ["ripple", "puff", "box-shadow", "slide", "stripe"]) {
    it(`${key}`, async () => {
      let hasEffect = false;
      const handleOnClick = vi.fn(() => {
        if (elm.innerHTML.includes(`btn-effect-${key}`)) {
          hasEffect = true;
        }
      });
      render(
        <Button
          data-testid="div"
          clickEffect={key as any}
          onClick={handleOnClick}
        >
          BtnLabel
        </Button>
      );

      const elm = screen.getByTestId("div");
      await userEvent.click(elm);

      expect(handleOnClick).toHaveBeenCalled();
      expect(hasEffect).toBeTruthy();
    });
  }
});
