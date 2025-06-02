import { createBrowserRouter } from "react-router-dom";
import Hero from "../Pages/Hero";
import App from "../App";
import MoviePage from "../Pages/MoviePage";
import { movieDetailLoader } from "./movieDetailLoader";
import WatchlistPage from "../Pages/WatchList";
import Loader from "../components/Loader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: "movie/:movieId",
          element: <MoviePage />,
          loader: movieDetailLoader,
          errorElement: <div>Could not load movie.</div>,
          hydrateFallbackElement: <Loader />,
        },
        {
          path: "watchlist",
          element: <WatchlistPage />,
        },
      ],
    },
  ],
  {
    basename: "/Weekely-Labs/lab-5/movie-explore-app/",
  }
);

export default router;
