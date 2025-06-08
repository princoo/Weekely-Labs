import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import { genreList } from "../../data/genre";
import SideBar from "./SideBar";
import { setupStore } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("SideBar component", () => {
  test("toggles sidebar on small screens", () => {
    renderWithProviders(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole("button", { name: /open sidebar/i });
    fireEvent.click(toggleButton);

    const sidebar = screen.getByLabelText("Sidebar");
    expect(sidebar.className).toContain("translate-x-0");

    fireEvent.click(toggleButton);
    expect(sidebar.className).toContain("-translate-x-full");
  });

  test("displays genre list", () => {
    renderWithProviders(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    genreList.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  test('clicking "All" dispatches removeFilter', () => {
    const store = setupStore({
      movies: {
          filters: { genre: "Action", list: "titles" },
          search: "",
          page: 0,
          movies: [],
          loading: false,
          error: null
      },
    });

    renderWithProviders(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>,
      { store }
    );

    const allBtn = screen.getByText("All");
    fireEvent.click(allBtn);

    const actions = store.getState().movies.filters;
    expect(actions.genre).toBeUndefined(); // genre filter removed
  });

  test("clicking a genre dispatches editFilter with genre and list", () => {
    const store = setupStore();

    renderWithProviders(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>,
      { store }
    );

    const genre = genreList[0];
    const genreBtn = screen.getByText(genre);
    fireEvent.click(genreBtn);

    const state = store.getState().movies.filters;
    expect(state.genre).toBe(genre);
    expect(state.list).toBe("titles");
  });

  test("clicking overlay closes the sidebar", () => {
    renderWithProviders(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    // Open sidebar
    fireEvent.click(screen.getByRole("button", { name: /open sidebar/i }));

    const overlay = screen.getByTestId("overlay");
    expect(overlay).toBeInTheDocument();

    fireEvent.click(overlay);

    const sidebar = screen.getByLabelText("Sidebar");
    expect(sidebar.className).toContain("-translate-x-full");
  });
});
