import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { genreList } from "../data/genre";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { editFilter, removeFilter } from "../features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const { filters } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleClick(value: string) {
    dispatch(editFilter({ key: "genre", value }));
    dispatch(editFilter({ key: "list", value: "titles" }));
    if (window.innerWidth < 640) {
      setIsSidebarOpen(false);
    }
    navigate("/");
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <FaBarsStaggered />
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary">
          <div className="flex items-center justify-between ps-2.5 mb-5">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Movie Stro
              </span>
            </a>
            {/* Add close button for mobile */}
            <button
              onClick={toggleSidebar}
              className="text-white p-2 rounded-lg hover:bg-secondary/50 sm:hidden"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li
              className={`flex items-center p-2 text-white rounded-lg hover:bg-secondary/50 cursor-pointer group text-sm ${
                !filters.genre && "bg-secondary"
              }`}
              onClick={() => {
                dispatch(removeFilter("genre"));
                navigate("/");
              }}
            >
              <span className="ms-3">All</span>
            </li>
            {genreList.map((genre) => (
              <li
                key={genre}
                className={`flex items-center p-2 text-white rounded-lg hover:bg-secondary/50 cursor-pointer ${
                  filters.genre === genre && "bg-secondary"
                } group text-sm`}
                onClick={() => handleClick(genre)}
              >
                <span className="ms-3">{genre}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* add overlay for mobile to close sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
