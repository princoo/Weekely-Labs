import { fetchData } from "../utils/fetchUtils";
import type { Movie } from "../types/movie";
import type { LoaderFunctionArgs } from "react-router-dom";

export async function movieDetailLoader({ params }: LoaderFunctionArgs) {
  try {
    const movie = fetchData<Movie, unknown>(`titles/${params.movieId}`);
    const ratings = fetchData<Movie, unknown>(
      `titles/${params.movieId}/ratings`
    );
    const [movieRes, ratingsRes] = await Promise.all([movie, ratings]);
    return { movie: movieRes.results, ratings: ratingsRes.results };
  } catch (error) {
    throw new Response(String(error), { status: 404 });
  }
}
