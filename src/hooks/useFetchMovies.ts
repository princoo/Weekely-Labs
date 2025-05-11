import { useCallback, useEffect, useState } from "react";
import type { MovieQueryParams } from "../types/movieQueryParams";
import { fetchData } from "../utils/fetchUtils";
import type { Movie } from "../types/movie";
import type { Response } from "../types/response";

export default function useFetchMovies(url: string, params: MovieQueryParams = {}) {
  const [data, setData] = useState<Response<Movie[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchData<Movie[], MovieQueryParams>(url, params);
      setData(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, params]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { data, loading, error, refetch: fetchMovies };
}
