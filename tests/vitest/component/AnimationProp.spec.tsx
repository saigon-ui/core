import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Animations } from "../../../src/lib/base";
import Animation from "../../../src/lib/component/Animation/Animation";
import { delay } from "../../constant";

describe("animation", () => {
  for (const tn of Animations) {
    it(`${tn}`, async () => {
      const handleOnExit = vi.fn();
      const handleOnEnter = vi.fn();
      const handleOnChange = vi.fn();
      render(
        <Animation
          open={true}
          animation={tn}
          onExit={handleOnExit}
          onEnter={handleOnEnter}
          onChange={handleOnChange}
          component={(transitionProps: any) => (
            <div data-testid="div" {...transitionProps}></div>
          )}
        />
      );

      const elm = screen.getByTestId("div");

      expect(elm.className.indexOf(`anim ${tn} entering`)).toBeGreaterThan(-1);
      await delay(0.8);
      expect(elm.className.indexOf(`anim ${tn} show`)).toBeGreaterThan(-1);
      expect(handleOnEnter).toHaveBeenCalled();
      expect(handleOnChange).toHaveBeenCalled();
    });
  }
});
