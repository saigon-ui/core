import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Image from "../../../src/lib/component/Image";
import {
  describeResponsive,
  expectResponsive,
  ResponsiveCode,
  setScreenSize,
} from "../../constant";

const ImageSrc = "https://www.w3schools.com/cssref/pineapple.jpg";
const ImageAlt = "Pineapple";

it("src", () => {
  render(
    <Image
      data-testid="image"
      src={ImageSrc}
      alt={ImageAlt}
      width="100"
      height="300"
    />
  );

  const elm = screen.getByTestId("image");
  const src = elm.getAttribute("src");
  const alt = elm.getAttribute("alt");
  expect(src).toEqual(ImageSrc);
  expect(alt).toEqual(ImageAlt);
});

describe("objectFit", () => {
  for (const key of ["contain", "cover", "fill", "scale", "none"]) {
    it(key, () => {
      render(<Image data-testid="image" objectFit={key as any} />);

      const elm = screen.getByTestId("image");
      const style = getComputedStyle(elm, elm.classList[0]).objectFit;
      expect([key]).toContain(style);
    });
  }

  describeResponsive((key) => {
    it(`${key}: cover`, () => {
      const resp = {} as any;
      resp[key] = `cover`;
      render(<Image data-testid="image" objectFit={resp} />);

      const elm = screen.getByTestId("image");
      const styleName = elm.classList[0];
      expectResponsive(elm, key, {
        styleName,
        cssName: "objectFit",
        xsStyle: `cover`,
        otherStyle: `object-fit:cover`,
      });
    });
  });
});

describe("objectPosition", () => {
  for (const key of ["50% 50%", "5px 10%", "left center"]) {
    it(key, () => {
      render(<Image data-testid="image" objectPosition={key as any} />);

      const elm = screen.getByTestId("image");
      const style = getComputedStyle(elm, elm.classList[0]).objectPosition;
      expect([key]).toContain(style);
    });
  }

  describeResponsive((key) => {
    it(`${key}: 50% 50%`, () => {
      const resp = {} as any;
      resp[key] = `50% 50%`;
      render(<Image data-testid="image" objectPosition={resp} />);

      const elm = screen.getByTestId("image");
      const styleName = elm.classList[0];
      expectResponsive(elm, key, {
        styleName,
        cssName: "objectPosition",
        xsStyle: `50% 50%`,
        otherStyle: `object-position:50% 50%`,
      });
    });
  });
});

describe("imgFluid", () => {
  it("boolean", () => {
    render(<Image data-testid="image" imgFluid={true} />);

    const elm = screen.getByTestId("image");
    expect(elm.classList).toContain(`img-fluid`);
  });

  for (const [c, breakCode] of Object.entries(ResponsiveCode)) {
    it(`${c}: true`, () => {
      setScreenSize(breakCode);

      const resp = {} as any;
      resp[c] = true;
      render(<Image data-testid="image" imgFluid={resp} />);

      const elm = screen.getByTestId("image");
      expect(elm.classList).toContain(`img-fluid`);
    });
  }
});

describe("imgThumbnail", () => {
  it("boolean", () => {
    render(<Image data-testid="image" imgThumbnail={true} />);

    const elm = screen.getByTestId("image");
    expect(elm.classList).toContain(`img-thumbnail`);
  });

  for (const [c, breakCode] of Object.entries(ResponsiveCode)) {
    it(`${c}: true`, () => {
      setScreenSize(breakCode);

      const resp = {} as any;
      resp[c] = true;
      render(<Image data-testid="image" imgThumbnail={resp} />);

      const elm = screen.getByTestId("image");
      expect(elm.classList).toContain(`img-thumbnail`);
    });
  }
});
