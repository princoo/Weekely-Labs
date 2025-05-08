import type { AxiosError } from "axios";
import api from "../config/api";
import { useEffect, useState } from "react";
// import type { Movie } from "../interfaces/movie";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await api
        .get(url, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results);
        })
        .catch((err: AxiosError) => {
          setError(err.message);
        })
        .finally(() => setLoading(false));
    };

    fetchData();

    return () => {
      console.log("Cleaning up...");
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
