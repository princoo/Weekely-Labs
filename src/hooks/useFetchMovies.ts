import { useCallback, useEffect, useState } from "react";
import type { MovieQueryParams } from "../types/movieQueryParams";
import { fetchData } from "../utils/fetchUtils";
import type { Movie } from "../types/movie";
import type { Response } from "../types/response";
import { useAppDispatch } from "../redux/hooks";
import { setError, setLoading } from "../features/movies/moviesSlice";

export default function useFetchMovies(url: string, params: MovieQueryParams = {}) {
  const [data, setData] = useState<Response<Movie[]> | null>(null);
  const dispatch = useAppDispatch();

  const fetchMovies = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const response = await fetchData<Movie[], MovieQueryParams>(url, params);
      setData(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [url, params,dispatch]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { data, refetch: fetchMovies };
}
