import { useContext } from "react";
import StarIcon from "./StarIcon";
import defaultImage from "../assets/image_not_found.png"
import type { Movie } from "../types/movie";
import type { Rating } from "../types/rating";
import type { MyContextType } from "../types/movieQueryParams";
import { ParamContext } from "../App";

export default function MovieDetails({
  movie,
  ratings,
}: {
  movie: Movie;
  ratings: Rating;
}) {
  const contextParams = useContext<MyContextType>(ParamContext);
  return (
    <div className="bg-accent w-full h-[70vh] relative mt-10">
      <img
        className="w-full object-cover object-center h-full absolute top-0 left-0"
        src={movie.primaryImage?.url ? movie.primaryImage.url : defaultImage}
        alt={movie.originalTitleText.text}
      />
      <div className="bg-gradient-to-r w-full from-black to-transparent absolute top-0 h-full flex-col items-start justify-center p-4" />
      <div className="text-start absolute w-1/2 top-1/2 transform -translate-y-1/2 flex left-10 flex-col items-start justify-start p-4">
        <h1 className=" text-lg sm:text-4xl uppercase font-extrabold">
          {movie.originalTitleText.text}
        </h1>
        <h1 className="text-xl capitalize mt-3">
          {movie.releaseYear
            ? movie.releaseYear.year
            : contextParams?.params.genre}
        </h1>
        <p className="flex gap-1  mt-3">
          <StarIcon /> <span>{ratings.averageRating || 4.5}</span>
        </p>
        <button
          type="button"
          className="bg-secondary px-6 py-2 rounded-md mt-10 text-white tracking-wider"
        >
          Watch
        </button>
      </div>
    </div>
  );
}
