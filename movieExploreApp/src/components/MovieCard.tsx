import { useEffect } from "react";
import type { Movie } from "../types/movie";
import type { Rating } from "../types/rating";
import StarIcon from "./StarIcon";
import useFetchRatings from "../hooks/useFetchRatings";

export default function MovieCard({
  movie,
  onClick,
}: {
  movie: Movie;
  onClick: (data: Movie, ratings: Rating | undefined) => void;
}) {
  const { data, error, fetchRatings } = useFetchRatings();
  
  useEffect(() => {
    fetchRatings(`/titles/${movie.id}/ratings`);
  }, [movie.id, fetchRatings]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div 
      className="movie-card"
      onClick={() => onClick(movie, data?.results)}
    >
      <div className="movie-card-content">
        <h3 className="movie-title">{movie.titleText.text}</h3>
        <div className="movie-details">
          <span className="release-year">({movie.releaseYear?.year})</span>
          {data && data.results && (
            <div className="rating">
              <StarIcon />
              <span>{data.results.averageRating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}