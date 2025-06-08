import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("InputField component", () => {
  it("renders with label and placeholder", () => {
    render(<Footer />);

    expect(screen.getByText(/© 2025 MovieStro. All rights reserved./i)).toBeInTheDocument();
  });


});
