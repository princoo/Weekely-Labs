import { useCallback, useState } from "react";
import type { MovieQueryParams } from "../types/movieQueryParams";
import { fetchData } from "../utils/fetchUtils";
import type { Movie } from "../types/movie";
import type { Response } from "../types/response";
import { useAppDispatch } from "../redux/hooks";
import { setError, setLoading } from "../features/search/searchIndicators";

export default function useSearch() {
  const [data, setData] = useState<Response<Movie[]> | null>(null);
   const dispatch = useAppDispatch();

  const searchQuery = useCallback(
    async (searchUrl: string, params: MovieQueryParams = {}) => {
      if (!searchUrl) return;

      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const response = await fetchData<Movie[], MovieQueryParams>(
          searchUrl,
          params
        );
        setData(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return { data,searchQuery };
}
