import { useState } from "react";
import type { Movie } from "../types/movie";
import MovieDetails from "./MovieDetails";
import type { Rating } from "../types/rating";
import MovieCard from "./MovieCard";

export default function MoviesContainer({ movies }: { movies: Movie[] }) {
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[1]);
  const [selectedMovieRatings, setSelectedMovieRatings] =
    useState<Rating>({ averageRating: 7.1, numVotes: 43,tconst: "" });

  function handleMovieClick(movie: Movie, Rating: Rating | undefined) {
    if (movie) setSelectedMovie(movie);
    if (Rating) setSelectedMovieRatings(Rating);
  }

  return (
    <div>
      {selectedMovie && selectedMovieRatings && (
        <MovieDetails movie={selectedMovie} ratings={selectedMovieRatings} />
      )}
      <div className="flex justify-center md:justify-between gap-3 w-full flex-wrap mt-20">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
    </div>
  );
}
