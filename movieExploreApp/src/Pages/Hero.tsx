import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import type { Movie } from "../types/movie";

export default function Hero() {
  const [url, setUrl] = useState<string>("/");
  const { data, loading, error } = useFetch<Movie[]>(url);

  return (
    <div className="w-full mt-50">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <div className="flex justify-between gap-3 w-full flex-wrap">
        {data && data.length > 0 &&
          data.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
}
