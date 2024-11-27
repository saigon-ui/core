import Typography from "../../../src/lib/component/Typography";
import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("textLevel", () => {
  for (const key of ["1", "2", "3", "4", "5", "6"]) {
    const expectCN = `display-${key}`;
    it(expectCN, () => {
      render(<Typography textLevel={key as any}>Typography</Typography>);

      const card = screen.getByText("Typography");
      expect(card.classList).toContain(expectCN);
    });
  }
});

it("textLead", () => {
  render(<Typography textLead={true}>Typography</Typography>);

  const card = screen.getByText("Typography");
  expect(card.classList).toContain("lead");
});
