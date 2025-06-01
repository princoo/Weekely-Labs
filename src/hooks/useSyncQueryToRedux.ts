import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setSearch, setPage, setFilter } from "../features/movies/moviesSlice";
import { useAppDispatch } from "../redux/hooks";
export function useSyncQueryToRedux() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const querySearch = searchParams.get("search");
    const queryPage = searchParams.get("page");
    
    if (querySearch) dispatch(setSearch(querySearch));
    if (queryPage) dispatch(setPage(Number(queryPage)));

    // Set other filters dynamically
    for (const [key, value] of searchParams.entries()) {
      if (key !== "search" && key !== "page") {
        dispatch(setFilter({ key, value }));
      }
    }
  }, [searchParams, dispatch]);
}
