import { createBrowserRouter } from "react-router-dom";
import Hero from "../Pages/Hero";
import App from "../App";
import MoviePage from "../Pages/MoviePage";
import { movieDetailLoader } from "./movieDetailLoader";

const router = createBrowserRouter([
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
      },
    ],
  },
]);

export default router;
