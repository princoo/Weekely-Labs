import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { produce } from "immer";
import useFetchMovies from "../hooks/useFetchMovies";
import type { Movie } from "../types/movie";
import type { MyContextType } from "../types/movieQueryParams";
import SearchBar from "../components/SearchBar";
import { ParamContext } from "../App";
import Pagination from "../components/Paginator";
import NotFound from "../components/NotFound";
import Loader from "../components/Loader";
import useSearch from "../hooks/useSearch";
import MoviesContainer from "../components/MoviesContainer";
import { getUpdatedPageUrl } from "../utils/getupdatedUrl";

export default function Hero() {
  const contextParams = useContext<MyContextType>(ParamContext);
  const [url, setUrl] = useState<string>("titles");
  const [seachValue, setseachValue] = useState<string>("");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [currentPage, setcurrentPage] = useState<string>("");
  const [displayMovies, setDisplayMovies] = useState<Movie[]>([]);
  const { data, loading, error,refetch } = useFetchMovies(url, contextParams.params);
  const {
    data: searchedMovies,
    loading: searchLoading,
    error: searchError,
    searchQuery,
  } = useSearch();

  useEffect(() => {
    setseachValue("");
    if (data) {
      setDisplayMovies(data.results);
      setNextPage(data.next);
      setcurrentPage(data.page);
    }
  }, [data]);
  useEffect(() => {
    if (searchedMovies) {
      setDisplayMovies(searchedMovies.results);
      setNextPage(searchedMovies.next);
      setcurrentPage(searchedMovies.page);
    }
  }, [searchedMovies]);

  const searchParams = useMemo(() => {
    return produce(contextParams.params, (draft) => {
      draft.exact = false;
      delete draft.genre;
    });
  }, [contextParams.params]);

  const handleSearch = useCallback(
    (title: string) => {
      if (title.trim() === seachValue) return;
      setseachValue(title);
      searchQuery(`titles/search/title/${title}`, searchParams);
    },
    [searchParams, searchQuery, seachValue]
  );

  function handlePagination(type: "next" | "prev") {
    let prevUrl;
    if (!nextPage) {
      prevUrl = seachValue
        ? `titles/search/title/${seachValue}?exact=false&list=most_pop_series`
        : "titles";
    }
    const { updatedUrl, isSearch } = getUpdatedPageUrl(
      nextPage === null ? prevUrl! : nextPage,
      currentPage,
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
      {seachValue && (
        <p className="text-2xl font-bold text-start">
          Results for "{seachValue}"
        </p>
      )}
      {displayMovies && displayMovies.length > 0 ? (
        <div>
          <MoviesContainer movies={displayMovies} />
        </div>
      ) : (
        <p className="mt-20">Movies not found</p>
      )}
      <Pagination
        next={nextPage}
        page={currentPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("prev")}
      />
    </div>
  );
}
