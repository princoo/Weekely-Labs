import { render } from "@testing-library/react";
import Footer from "../src/components/Layouts/Footer";

describe("Simple components", () => {
  test("reusable footer", () => {
    const item = render(<Footer />);
    expect(item).toMatchSnapshot();
  });
});
