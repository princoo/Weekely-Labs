import useFetch from "../hooks/useFetch";
import type { Movie } from "../types/movie";
import type { Rating } from "../types/rating";
import { CiStar } from "react-icons/ci";
import StarIcon from "./StarIcon";


function ratingStars(rating: number) {
  const stars = Math.round(rating / 2);
  const starIcons = [];
  for (let i = 0; i < stars; i++) {
    starIcons.push(<StarIcon key={i} />);
  }
  return (
    <div className="flex items-center">{starIcons}</div>
  );

}

export default function MovieCard({ movie }: { movie: Movie }) {
  const { data, loading, error } = useFetch<Rating>(`/${movie.id}/ratings`);

  console.log(loading);
  return (
    <div>
      <div className=" bg-red-400 group relative w-60 h-80 flex flex-col items-start rounded-t-4xl cursor-pointer overflow-hidden">
        <div className=" w-full h-full relative">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src={
              movie.primaryImage
                ? movie.primaryImage.url
                : "https://www.behance.net/gallery/6312333/File-Not-Found-Movie-Poster/modules/207739455"
            }
            alt={movie.primaryImage?.id}
          />
        </div>
        <div className="flex flex-col items-start p-4 text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent w-full h-1/2">
          <h1 className="font-bold uppercase text-white">
            {movie.titleText.text}
          </h1>
          {/* <h3 className="text-accent font-medium uppercase text-sm">
            {movie.primaryImage?.caption?.plainText}
          </h3> */}
          <div className="bg-red-300 w-1/2">
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data && (<p>{data.averageRating}</p>)}
            <div className="fex w-full">
            {data && ratingStars(data.averageRating)}
            </div>
          </div>
          <StarIcon />
        </div>
      </div>
    </div>
  );
}
