import { useCallback, useEffect, useState } from "react";
import { produce } from "immer";
import useFetchMovies from "../hooks/useFetchMovies";
import SearchBar from "../components/Search/SearchBar";
import Pagination from "../components/Paginator/Paginator";
import NotFound from "../components/NotFound/NotFound";
import Loader from "../components/Loader/Loader";
import useSearch from "../hooks/useSearch";
import MoviesContainer from "../components//Movie/MoviesContainer";
import { getUpdatedPageUrl } from "../utils/getupdatedUrl";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import {
  removeFilter,
  setMovies,
  setPage,
  setSearch,
} from "../features/movies/moviesSlice";
import WatchListBadge from "../components/Watchlist/WatchListBadge";
import { useSyncQueryToRedux } from "../hooks/useSyncQueryToRedux";
import { useSyncReduxToQuery } from "../hooks/useSyncReduxToQuery";

export default function Hero() {
  useSyncQueryToRedux();
  useSyncReduxToQuery();
  const { filters, movies, page, search, error, loading } = useAppSelector(
    (state) => state.movies
  );
  const { error: searchError, loading: searchLoading } = useAppSelector(
    (state) => state.searchIndicators
  );
  const [url, setUrl] = useState<string>("titles");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const { data, refetch } = useFetchMovies(url, filters);
  const { data: searchedMovies, searchQuery } = useSearch();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearch(""));
    if (data) {
      dispatch(setMovies(data.results));
      setNextPage(data.next);
      dispatch(setPage(Number(data.page)));
    }
  }, [data, dispatch]);
  useEffect(() => {
    if (searchedMovies) {
      dispatch(setMovies(searchedMovies.results));
      setNextPage(searchedMovies.next);
      dispatch(setPage(Number(searchedMovies.page)));
    }
  }, [searchedMovies, dispatch]);
  const searchParams = produce(filters, (draft) => {
    draft.exact = false;
    delete draft.genre;
  });

  const handleSearch = useCallback(
    (title: string) => {
      dispatch(removeFilter("genre"));
      if (title.trim() === search) return;
      dispatch(setSearch(title));
      searchQuery(`titles/search/title/${title}`, searchParams);
    },
    [dispatch, searchQuery, searchParams, search]
  );

  function handlePagination(type: "next" | "prev") {
    let prevUrl;
    if (!nextPage) {
      prevUrl = search
        ? `titles/search/title/${search}?exact=false&list=${filters.list}`
        : "titles";
    }
    const { updatedUrl, isSearch } = getUpdatedPageUrl(
      nextPage === null ? prevUrl! : nextPage,
      page.toString(),
      type
    );
    if (updatedUrl) {
      if (!isSearch) {
        setUrl(updatedUrl);
      } else {
        searchQuery(updatedUrl, searchParams);
      }
    }
  }

  if (loading || searchLoading) return <Loader />;
  if (error || searchError) return <NotFound Reload={() => refetch()} />;
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 gap-2 w-full">
        <SearchBar onSearch={handleSearch} />
        <WatchListBadge />
      </div>
      {search && (
        <p className="text-2xl font-bold text-start">Results for "{search}"</p>
      )}
      {movies && movies.length > 0 ? (
        <div>
          <MoviesContainer movies={movies} />
        </div>
      ) : (
        <p className="mt-20">Movies not found</p>
      )}
      <Pagination
        next={nextPage}
        page={page.toString()}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("prev")}
      />
    </div>
  );
}
