import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { ThemeColors, Animations } from "../../../src/lib/base";
import Alert, { AlertProps } from "../../../src/lib/component/Alert";
import { delay, describeResp } from "../../constant";
import { AlertRef } from "../../../lib";

describe("variant", () => {
  for (const key of ThemeColors) {
    it(`${key}`, () => {
      render(<Alert data-testid="div" variant={key as any}></Alert>);
      const elm = screen.getByTestId("div");
      expect(elm.classList).toContain(`alert-${key}`);
    });
  }

  describeResp<AlertProps["variant"]>(
    {
      xs: "primary",
      sm: undefined,
      md: "info",
      lg: "success",
    },
    {
      xs: (elm) => expect(elm.classList).toContain(`alert-primary`),
      sm: (elm) => expect(elm.classList).toContain(`alert-primary`),
      md: (elm) => expect(elm.classList).toContain(`alert-info`),
      lg: (elm) => expect(elm.classList).toContain(`alert-success`),
    },
    (props) => {
      render(<Alert data-testid="div" variant={props}></Alert>);
      return screen.getByTestId("div");
    }
  );
});

describe("animation", () => {
  for (const tn of Animations) {
    it(`${tn}`, async () => {
      render(<Alert data-testid="div" animation={tn}></Alert>);

      const elm = screen.getByTestId("div");

      expect(elm.className.indexOf(`anim ${tn} entering`)).toBeGreaterThan(-1);
      await delay(0.8);
      expect(elm.className.indexOf(`anim ${tn} show`)).toBeGreaterThan(-1);
    });
  }
});

describe("dismissible", () => {
  for (const dismissible of [true, false]) {
    it(`${dismissible}`, async () => {
      render(<Alert data-testid="div" dismissible={dismissible}></Alert>);

      const elm = screen.getByTestId("div");

      if (dismissible) {
        // must contain `alert-dismissible` className
        expect(
          Array.from(elm.classList).indexOf("alert-dismissible")
        ).toBeGreaterThan(-1);

        // must contain a button
        expect(
          Array.from(elm.getElementsByClassName("btn-close")).length
        ).greaterThanOrEqual(1);
      } else {
        expect(Array.from(elm.classList).indexOf("alert-dismissible")).toEqual(
          -1
        );
      }
    });
  }
});

describe("onClose", () => {
  for (const dismissible of [true, false]) {
    it(`${dismissible}`, async () => {
      const handleOnClose = vi.fn();
      render(
        <Alert
          data-testid="div"
          dismissible={dismissible}
          onClose={handleOnClose}
        ></Alert>
      );

      const elm = screen.getByTestId("div");

      if (dismissible) {
        const btn = Array.from(elm.getElementsByClassName("btn-close"));
        // must contain a button
        expect(btn.length).greaterThanOrEqual(1);

        await userEvent.click(btn[0]);
        expect(handleOnClose).toHaveBeenCalled();
      } else {
        expect(Array.from(elm.classList).indexOf("alert-dismissible")).toEqual(
          -1
        );
      }
    });
  }
});

describe("onOpen", () => {
  for (const dismissible of [true, false]) {
    it(`${dismissible}`, async () => {
      const handleOnOpen = vi.fn();
      render(
        <Alert
          data-testid="div"
          dismissible={dismissible}
          onOpen={handleOnOpen}
        ></Alert>
      );

      expect(handleOnOpen).toHaveBeenCalled();
    });
  }
});

describe("ref", async () => {
  it(`close(), show()`, async () => {
    const handleOnOpen = vi.fn();
    const handleOnClose = vi.fn();
    const Wrapper = (props: any) => {
      const ref = useRef<AlertRef>(null);
      useEffect(() => {
        setTimeout(() => {
          ref.current?.close();
          setTimeout(() => {
            ref.current?.show();
          }, 500);
        }, 500);
      }, [ref]);

      return (
        <Alert ref={ref} data-testid="div" dismissible={false} {...props}>
          DIV
        </Alert>
      );
    };
    render(<Wrapper onOpen={handleOnOpen} onClose={handleOnClose} />);
    expect(handleOnOpen).toBeCalledTimes(1);
    await delay(0.8);
    expect(handleOnClose).toBeCalledTimes(1);
    await delay(0.8);
    expect(handleOnOpen).toBeCalledTimes(2);
  });
});
