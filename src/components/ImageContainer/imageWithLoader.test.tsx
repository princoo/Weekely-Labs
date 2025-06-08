import { render, screen, fireEvent } from "@testing-library/react";
import ImageWithLoading from "./ImageWithLoader";

describe("ImageWithLoading", () => {
  it("should start with loading state (opacity-0)", () => {
    render(
      <ImageWithLoading
        src="test.jpg"
        alt="Test image"
        className="custom-class"
      />
    );

    const img = screen.getByAltText("Test image") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.className).toContain("opacity-0"); // not loaded yet
  });
  it("should switch to loaded state when image loads", () => {
    render(
      <ImageWithLoading
        src="test.jpg"
        alt="Test image"
        className="custom-class"
      />
    );
    const img = screen.getByAltText("Test image") as HTMLImageElement;
    // simulate image loading
    fireEvent.load(img);
    expect(img.className).toContain("opacity-100");
    expect(img.className).not.toContain("opacity-0");
  });
});
