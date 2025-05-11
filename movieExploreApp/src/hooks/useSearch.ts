// import { useCallback, useEffect, useState } from "react";
// import type { MovieQueryParams } from "../types/movieQueryParams";
// import { fetchData } from "../utils/fetchUtils";
// import type { Movie } from "../types/movie";

// export default function useSearch(searchTitle: string, params: MovieQueryParams = {}) {
//   const [data, setData] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const searchQuery = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetchData<Movie[], MovieQueryParams>(`/search/title/${searchTitle}`, params);
//       setData(response);
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [searchTitle, params]);

//   useEffect(() => {
//     searchQuery();
//   }, [searchQuery]);

//   return { data, loading, error, refetch: searchQuery };
// }

import { useCallback, useState } from "react";
import type { MovieQueryParams } from "../types/movieQueryParams";
import { fetchData } from "../utils/fetchUtils";
import type { Movie } from "../types/movie";
import type { Response } from "../types/response";

export default function useSearch() {
  const [data, setData] = useState<Response<Movie[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchQuery = useCallback(
    async (searchUrl: string, params: MovieQueryParams = {}) => {
      if (!searchUrl) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetchData<Movie[], MovieQueryParams>(
          searchUrl,
          params
        );
        setData(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, loading, error, searchQuery };
}
