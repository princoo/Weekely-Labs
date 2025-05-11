import { useCallback, useState } from "react";
import { fetchData } from "../utils/fetchUtils";
import type { Rating } from "../types/rating";
import type { Response } from "../types/response";

export default function useFetchRatings() {
  const [data, setData] = useState<Response<Rating> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRatings = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchData<Response<Rating>,unknown>(url);
      setData(response.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "an unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchRatings };
}