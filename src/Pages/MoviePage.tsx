import {
  FaHeart,
  FaStar,
  FaPlay,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

export default function MoviePage() {
  // Sample movie data - replace with your actual data
  const movie = {
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
    title: "Inception",
    rating: 8.8,
    year: 2010,
    duration: "148 min",
    genres: ["Action", "Sci-Fi", "Thriller"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy", "Ellen Page"],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
            {/* Movie Poster */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  width={400}
                  height={600}
                  className="rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
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
              {/* Title and Year */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    {movie.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="w-4 h-4" />
                    {movie.duration}
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
                          i < Math.floor(movie.rating / 2)
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-yellow-400">
                    {movie.rating}
                  </span>
                  <span className="text-gray-400">/10</span>
                </div>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 cursor-pointer"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.description}
                </p>
              </div>

              {/* Director and Cast */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-400">Director</h3>
                  <p className="text-white">{movie.director}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-400">Cast</h3>
                  <p className="text-white">
                    {movie.cast.slice(0, 3).join(", ")}
                  </p>
                </div>
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

        {/* Additional Info Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-4 text-gray-400">Movie Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Release Date:</span>
                  <span>July 16, {movie.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Runtime:</span>
                  <span>{movie.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rating:</span>
                  <span>PG-13</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-4 text-gray-400">Box Office</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Budget:</span>
                  <span>$160M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Worldwide:</span>
                  <span>$836.8M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domestic:</span>
                  <span>$292.6M</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-4 text-gray-400">Awards</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Oscar Wins:</span>
                  <span>4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Oscar Nominations:</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">IMDB Top 250:</span>
                  <span>#13</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
