import { useState } from "react";
import type { Movie } from "../../types/movie";
import MovieDetails from "./MovieDetails";
import MovieCard from "./MovieCard";

export default function MoviesContainer({ movies }: { movies: Movie[] }) {
  const [selectedMovie] = useState<Movie>(movies[7]);

  return (
    <div>
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} />
      )}
      <div className="flex justify-center md:justify-between gap-3 w-full flex-wrap mt-20">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}
