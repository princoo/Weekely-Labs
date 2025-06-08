import StarIcon from "../Rating/StarIcon";
import defaultImage from "../../assets/image_not_found.png";
import type { Movie } from "../../types/movie";
import { MdOutlineHowToVote } from "react-icons/md";
import ImageWithLoading from "../ImageContainer/ImageWithLoader";

export default function MovieDetails({ movie }: { movie: Movie }) {
  return (
    <div className="bg-accent w-full h-[70vh] relative mt-10">
      <ImageWithLoading
        src={movie.primaryImage?.url ?? defaultImage}
        alt={movie.originalTitleText.text}
        className="w-full h-full absolute top-0 left-0 "
      />
      <div className="bg-gradient-to-r w-full from-black to-transparent absolute top-0 h-full flex-col items-start justify-center p-4" />
      <div className="text-start absolute w-1/2 top-1/2 transform -translate-y-1/2 flex left-10 flex-col items-start justify-start p-4">
        <h1 className=" text-lg sm:text-4xl uppercase font-extrabold">
          {movie.originalTitleText.text}
        </h1>
        <p className="text-lg mt-5 line-clamp-3">
          {movie.plot?.plotText.plainText}
        </p>
        <div className="flex gap-20 items-end justify-center">
          <p className="flex gap-1  mt-3">
            <StarIcon />{" "}
            <span>{movie.ratingsSummary?.aggregateRating || 3}</span>
          </p>
          <p className="flex gap-1">
            <MdOutlineHowToVote />{" "}
            <span>{movie.ratingsSummary?.voteCount || 3433}</span>
          </p>
        </div>
        <p className="mt-3 text-sm uppercase">{movie.plot?.language.id}</p>
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
