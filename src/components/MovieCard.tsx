import type { Movie } from "../types/movie";
import StarIcon from "./StarIcon";
import defaultImage from "../assets/image_not_found.png";

export default function MovieCard({
  movie,
  onClick,
}: {
  movie: Movie;
  onClick: (data: Movie) => void;
}) {
  return (
    <div onClick={() => onClick(movie)}>
      <div className=" bg-red-400 group relative w-60 h-80 flex flex-col items-start rounded-t-4xl cursor-pointer overflow-hidden">
        <div className=" w-full h-full relative">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src={movie.primaryImage ? movie.primaryImage.url : defaultImage}
            alt={movie.primaryImage?.id}
          />
        </div>
        <div className="flex flex-col items-start p-4 text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent w-full h-1/2">
          <h1 className="font-bold uppercase text-white">
            {movie.titleText.text}
          </h1>
          <div className="flex justify-between w-full items-center mt-2">
            <p>({movie.releaseYear?.year})</p>
            <div className="flex gap-1">
              <StarIcon />
              <span>{movie.ratingsSummary.aggregateRating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
