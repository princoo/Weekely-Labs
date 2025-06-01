import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
export function useSyncReduxToQuery() {
  const { search, page, filters } = useAppSelector((state) => state.movies);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};

    if (search) params.search = search;
    if (page !== 1) params.page = String(page);

    for (const [key, value] of Object.entries(filters)) {
      if (value !== "" && value !== null && value !== undefined) {
        params[key] = String(value);
      }
    }

    setSearchParams(params, { replace: true });
  }, [search, page, filters, setSearchParams]);
}
