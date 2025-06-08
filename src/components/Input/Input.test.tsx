import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./Input";

describe("InputField component", () => {
  it("renders with label and placeholder", () => {
    render(
      <InputField
        type="text"
        name="username"
        label="Username"
        placeholder="Enter your username"
      />
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your username")
    ).toBeInTheDocument();
  });

  it("calls onChange when user types", () => {
    const handleChange = jest.fn();

    render(
      <InputField
        type="text"
        name="username"
        label="Username"
        placeholder="Enter your username"
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter your username");
    fireEvent.change(input, { target: { value: "testuser" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("toggles password visibility when button is clicked", () => {
    render(
      <InputField
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
    );

    const input = screen.getByPlaceholderText("Enter your password");
    const toggleButton = screen.getByRole("button");

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("displays error message if error prop is passed", () => {
    render(
      <InputField
        type="text"
        name="email"
        label="Email"
        placeholder="Enter your email"
        error="Email is required"
      />
    );

    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });
});
