import { useCallback, useEffect, useState } from "react";
import { produce } from "immer";
import useFetchMovies from "../hooks/useFetchMovies";
// import type { Movie } from "../types/movie";
// import type { MyContextType } from "../types/movieQueryParams";
import SearchBar from "../components/SearchBar";
// import { paramContext } from "../App";
import Pagination from "../components/Paginator";
import NotFound from "../components/NotFound";
import Loader from "../components/Loader";
import useSearch from "../hooks/useSearch";
import MoviesContainer from "../components/MoviesContainer";
import { getUpdatedPageUrl } from "../utils/getupdatedUrl";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  removeFilter,
  setMovies,
  setPage,
  // editFilter,
  setSearch,
} from "../features/movies/moviesSlice";

export default function Hero() {
  // const contextParams = useContext<MyContextType>(paramContext);
  const { filters, movies, page, search } = useAppSelector(
    (state) => state.movies
  );
  const [url, setUrl] = useState<string>("titles");
  // const [seachValue, setseachValue] = useState<string>("");
  const [nextPage, setNextPage] = useState<string | null>(null);
  // const [currentPage, setcurrentPage] = useState<string>("");
  // const [displayMovies, setDisplayMovies] = useState<Movie[]>([]);
  const { data, loading, error, refetch } = useFetchMovies(
    url,
    filters
    // contextParams.params
  );
  const {
    data: searchedMovies,
    loading: searchLoading,
    error: searchError,
    searchQuery,
  } = useSearch();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearch(""));
    if (data) {
      dispatch(setMovies(data.results));
      // setDisplayMovies(data.results);
      setNextPage(data.next);
      dispatch(setPage(Number(data.page)));
      // setcurrentPage(data.page);
    }
  }, [data, dispatch]);
  useEffect(() => {
    if (searchedMovies) {
      dispatch(setMovies(searchedMovies.results));
      // setDisplayMovies(searchedMovies.results);
      setNextPage(searchedMovies.next);
      dispatch(setPage(Number(searchedMovies.page)));
      // setcurrentPage(searchedMovies.page);
    }
  }, [searchedMovies]);
  const searchParams = produce(filters, (draft) => {
    draft.exact = false;
    delete draft.genre;
  });
  // }

  const handleSearch = useCallback(
    (title: string) => {
      dispatch(removeFilter("genre"));
      // contextParams.setParams(
      //   produce(contextParams.params, (draft) => {
      //     delete draft.genre;
      //   })
      // );
      // if (title.trim() === seachValue) return;
      if (title.trim() === search) return;
      dispatch(setSearch(title));
      // setseachValue(title);
      searchQuery(`titles/search/title/${title}`, searchParams);
    },
    [dispatch, searchQuery, searchParams, search]
    // [contextParams, seachValue, searchQuery, searchParams]
  );

  function handlePagination(type: "next" | "prev") {
    let prevUrl;
    if (!nextPage) {
      // prevUrl = seachValue
      prevUrl = search
        // ? `titles/search/title/${seachValue}?exact=false&list=${filters.list}`
        ? `titles/search/title/${search}?exact=false&list=${filters.list}`
        : "titles";
    }
    const { updatedUrl, isSearch } = getUpdatedPageUrl(
      nextPage === null ? prevUrl! : nextPage,
      page.toString(),
      // currentPage,
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
      <SearchBar onSearch={handleSearch} />
      {search && (
        <p className="text-2xl font-bold text-start">
          Results for "{search}"
        </p>
      )}
      {movies && movies.length > 0 ? (
      // {displayMovies && displayMovies.length > 0 ? (
        <div>
          <MoviesContainer movies={movies} />
        </div>
      ) : (
        <p className="mt-20">Movies not found</p>
      )}
      <Pagination
        next={nextPage}
        page={page.toString()}
        // page={currentPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("prev")}
      />
    </div>
  );
}
