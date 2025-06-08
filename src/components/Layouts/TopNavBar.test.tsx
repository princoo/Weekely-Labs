import { render, screen } from "@testing-library/react";
import TopNavBar from "./TopNavBar";

// movk child components
jest.mock("../Theme/ThemeToggle", () => () => <div data-testid="theme-toggle" />);
jest.mock("../Watchlist/WatchListBadge", () => () => <div data-testid="watchlist-badge" />);

describe("TopNavBar", () => {
  it("renders the site title", () => {
    render(<TopNavBar />);
    expect(screen.getByText(/Movie Stro/i)).toBeInTheDocument();
  });

  it("renders the Movies nav link", () => {
    render(<TopNavBar />);
    expect(screen.getByRole("link", { name: /Movies/i })).toBeInTheDocument();
  });

  it("renders the ThemeToggle component", () => {
    render(<TopNavBar />);
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });

  it("renders the WatchListBadge component", () => {
    render(<TopNavBar />);
    expect(screen.getByTestId("watchlist-badge")).toBeInTheDocument();
  });

  it("renders the mobile menu button", () => {
    render(<TopNavBar />);
    expect(screen.getByRole("button", { name: /Open main menu/i })).toBeInTheDocument();
  });
});
