import { createBrowserRouter } from "react-router-dom";
import Hero from "../Pages/Hero";
import App from "../App";
import MoviePage from "../Pages/MoviePage";

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
        path: "/movie",
        element: <MoviePage />,
      },
    ],
  },
]);

export default router;
