import type { AxiosError } from "axios";
import api from "../config/api";
import { useCallback, useEffect, useState } from "react";
import type { MovieQueryParams } from "../types/movieQueryParams";

export default function useFetch<T>(
  url: string,
  params: MovieQueryParams = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    await api
      .get(url, { params })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [url, params]);

  useEffect(() => {
    fetchData();
    // return () => {
    //   console.log("Cleaning up...");
    // };
  }, [fetchData]);

  return { data, loading, error };
}
