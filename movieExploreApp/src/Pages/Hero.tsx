import React, { use, useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import type { Movie } from "../types/movie";
import { dummyMovies } from "../types/testData";
import type { MyContextType } from "../types/movieQueryParams";
import SearchBar from "../components/SearchBar";
import { ParamContext } from "../App";

export default function Hero() {
  const [url, setUrl] = useState<string>("/");
  // const [data] = useState<Movie[]>(dummyMovies);
  // const [params, setParams] = useState<MovieQueryParams>({});
  const {params, setParams} = useContext<MyContextType | undefined>(ParamContext);
  const { data, loading, error } = useFetch<Movie[]>(url,params);

  if(loading) {
    return <h1>Loading...</h1>;    
  }
  if(error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="w-full mt-50">
      <SearchBar />
      <div className="flex justify-between gap-3 w-full flex-wrap">
        {data &&
          data.length > 0 &&
          data.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
}
