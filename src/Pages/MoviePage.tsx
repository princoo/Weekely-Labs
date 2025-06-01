import { FaHeart, FaStar, FaPlay, FaCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Button } from "../components/Button";
import { MdHowToVote } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import type { Movie } from "../types/movie";
import defaultImage from "../assets/image_not_found.png";
import type { Rating } from "../types/rating";

export default function MoviePage() {
  const { movie, ratings } = useLoaderData<{
    movie: Movie;
    ratings: Rating;
  }>();

  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <IoArrowBackOutline className="mb-10 w-10 h-10 cursor-pointer hover:bg-gray-400 p-2 rounded-md transition-colors duration-150 ease-in-out" />
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
            <div className="flex justify-center lg:justify-start h-[500px] overflow-hidden">
              <div className="relative group">
                <img
                  src={movie.primaryImage?.url || defaultImage}
                  alt={movie.originalTitleText.text}
                  className="rounded-lg w-full h-full object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-red-500 text-white"
                  >
                    <FaPlay className="w-5 h-5 mr-2" />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>

            {/* Movie Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-start text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {movie.originalTitleText.text}
                </h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    {movie.releaseYear?.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdHowToVote className="w-4 h-4" />
                    {ratings.numVotes}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(ratings.averageRating / 2)
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-yellow-400">
                    {ratings.averageRating.toFixed(1)}
                  </span>
                  <span className="text-gray-400">/10</span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-md font-semibold">Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.primaryImage?.caption?.plainText ||
                    "No description available."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-red-500 text-white font-semibold px-8"
                >
                  <FaHeart className="w-5 h-5 mr-2" />
                  Add to Favorites
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8"
                >
                  <FaPlay className="w-5 h-5 mr-2" />
                  Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
