import { FaTrash, FaPlay, FaStar } from "react-icons/fa";
import { Button } from "../components/Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeFavorite } from "../features/watchlist/watchlistSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";

export default function WatchlistPage() {
  const { favorites } = useAppSelector((state) => state.watchlist);
  const dispatch = useAppDispatch();
  const handleRemoveFromWatchlist = (movieId: string) => {
    dispatch(removeFavorite(movieId));
    toast.success("Removed to watchlist");
  };

  return (
    <div className="min-h-scree text-white">
      <div className="relative z-10">
        <Link to="/" className="flex items-center">
          <IoArrowBackOutline className="mb-10 w-10 h-10 cursor-pointer hover:bg-gray-400 p-2 rounded-md transition-colors duration-150 ease-in-out" />
        </Link>
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              My Watchlist
            </h1>
            <p className="text-gray-400 text-lg">
              {favorites.length} {favorites.length === 1 ? "movie" : "movies"}{" "}
              saved for later
            </p>
          </div>

          {/* Watchlist Grid */}
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {favorites.map((movie) => (
                <div key={movie.id} className="group relative w-52">
                  {/* Movie Card */}
                  <div className="bg-gray-900 h-[400px] rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/50">
                    {/* Movie Poster */}
                    <div className="relative aspect-[1] overflow-hidden">
                      <img
                        src={movie.primaryImage?.url || "/placeholder.svg"}
                        alt={movie.originalTitleText.text}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Rating badge */}
                      <div className="absolute top-2 left-2 bg-black/80 rounded-full px-2 py-1 flex items-center gap-1">
                        <FaStar className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs font-semibold">
                          {movie.ratingsSummary.aggregateRating}
                        </span>
                      </div>
                    </div>

                    {/* Movie Info */}
                    <div className="p-4 text-start flex flex-col h-full">
                      <h3 className="font-semibold text-md mb-1 line-clamp-2">
                        {movie.originalTitleText.text}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {movie.releaseYear?.year}
                      </p>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {movie.genres.genres.slice(0, 2).map((genre) => (
                          <span
                            key={genre.id}
                            className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {genre.text}
                          </span>
                        ))}
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-secondary border-2 hover:bg-red-500 text-white hover:tex-red-500 bg-transparent w-full"
                        onClick={() => handleRemoveFromWatchlist(movie.id)}
                      >
                        <FaTrash className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <FaPlay className="w-10 h-10 text-gray-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-300">
                  Your watchlist is empty
                </h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Start adding movies to your watchlist to keep track of what
                  you want to watch later.
                </p>
              </div>
              <Link to="/" className="inline-block">
                <Button className="bg-secondary hover:bg-red-600 text-white px-8">
                  Browse Movies
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Stats Section */}
        {favorites.length > 0 && (
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm text-center">
                <h3 className="text-3xl font-bold text-red-400 mb-2">
                  {favorites.length}
                </h3>
                <p className="text-gray-400">Movies in Watchlist</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm text-center">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  {(
                    favorites.reduce(
                      (acc, movie) =>
                        acc + movie.ratingsSummary.aggregateRating,
                      0
                    ) / favorites.length
                  ).toFixed(1)}
                </h3>
                <p className="text-gray-400">Average Rating</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
