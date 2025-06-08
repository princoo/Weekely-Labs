import { FaHeart, FaStar, FaPlay, FaCalendarAlt, FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { MdHowToVote } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import type { Movie } from "../types/movie";
import defaultImage from "../assets/image_not_found.png";
import type { Rating } from "../types/rating";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addFavorite } from "../features/watchlist/watchlistSlice";
import toast from "react-hot-toast";
import ReviewList from "../components/Review/ReviewList";
import { useEffect, useState } from "react";
import ReviewForm from "../components/Review/ReviewForm";

export default function MoviePage() {
  const { movie, ratings } = useLoaderData<{
    movie: Movie;
    ratings: Rating;
  }>();

  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.watchlist);
  const { movies } = useAppSelector((state) => state.movies);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [movieToReview, setMovieToReview] = useState<string | null>(null);
  // Prevent body scroll when form is open
  useEffect(() => {
    if (showReviewForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showReviewForm]);
  console.log(ratings);
  function handleAddToFavorites(movie: Movie) {
    const fullMovie = movies.filter((m) => m.id === movie.id);
    if (fullMovie.length === 0) return;
    dispatch(addFavorite(fullMovie[0]));
    toast.success("Added to watchlist");
  }
  const handleFormSubmit = () => {
    setShowReviewForm(false);
  };

  const handleFormCancel = () => {
    setShowReviewForm(false);
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center">
            <IoArrowBackOutline className="mb-10 w-10 h-10 cursor-pointer hover:bg-gray-400 p-2 rounded-md transition-colors duration-150 ease-in-out" />
          </Link>
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
            <div className="space-y-6 text-start">
              <div>
                <h1 className="text-start text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {movie.originalTitleText.text}
                </h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    {movie.releaseYear?.year}
                  </span>
                  {ratings && (
                    <span className="flex items-center gap-1">
                      <MdHowToVote className="w-4 h-4" />
                      {ratings.numVotes}
                    </span>
                  )}
                </div>
              </div>

              {/* Rating */}
              {ratings && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(ratings.averageRating / 2)
                              ? "text-secondary"
                              : "text-accent/50"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text- font-bold text-secondary">
                      {ratings.averageRating.toFixed(1)}
                    </span>
                    <span className="text-accent">/10</span>
                  </div>
                </div>
              )}
              <div className="space-y-4">
                <h2 className="text-md font-semibold">Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.primaryImage?.caption?.plainText ||
                    "No description available."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {favorites.find((fav) => fav.id === movie.id) ? (
                  <p className="px-8 bg-secondary py-2 rounded-md">
                    Added to watchlist
                  </p>
                ) : (
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-red-500 text-white font-semibold px-8"
                    onClick={() => handleAddToFavorites(movie)}
                  >
                    <FaHeart className="w-5 h-5 mr-2" />
                    Add to Favorites
                  </Button>
                )}

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
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center p-2 mt-20">
          <p>Reviews</p>
          <button
            onClick={() => {
              setShowReviewForm(true);
              setMovieToReview(movie.id);
            }}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md text-secondary hover:bg-secondary/10 font-bold"
          >
            <FaPlus />
            <span>Review</span>
          </button>
        </div>
        <ReviewList movieId={movie.id} />
      </div>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showReviewForm ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowReviewForm(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-full md:w-[600px] bg-primary shadow-2xl z-50 transition-transform duration-500 ease-in-out transform ${
          showReviewForm ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 md:p-8 text-start">
          <ReviewForm
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            movieId={movieToReview}
          />
        </div>
      </div>
    </div>
  );
}
