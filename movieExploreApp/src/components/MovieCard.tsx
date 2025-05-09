import useFetch from "../hooks/useFetch";
import type { Movie } from "../types/movie";
import type { Rating } from "../types/rating";
import StarIcon from "./StarIcon";
import { dummyRatings } from "../types/testData";
import { useState } from "react";

export default function MovieCard({ movie }: { movie: Movie }) {
  // const { data, loading, error } = useFetch<Rating>(`/${movie.id}/ratings`);
  const [data, setdata] = useState<Rating>(dummyRatings[0]);

  // if (error) {
  //   return <h1>{error}</h1>;
  // }
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
          <div className="flex justify-between w-full items-center mt-2">
            <p>({movie.releaseYear.year})</p>
          {data && (
            <p className="flex gap-1 items-cente font-medium text-sm">
              <StarIcon />
              <span>{data.averageRating}</span>
            </p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
