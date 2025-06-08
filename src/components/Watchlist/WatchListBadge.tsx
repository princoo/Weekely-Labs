import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { FaBookmark } from "react-icons/fa6";

export default function WatchListBadge() {
  const { favorites: watchlistCount } = useAppSelector(
    (state) => state.watchlist
  );
  return (
    <Link
      to="watchlist"
      className="relative flex items-center space-x-2 text-gray-300 hover:text-secondary group"
    >
      <div className="relative">
        <FaBookmark className="w-5 h-5" />
        {/*  badge */}
        {watchlistCount.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            {watchlistCount.length > 99 ? "99+" : watchlistCount.length}
          </div>
        )}
      </div>
      <span className="hidden sm:inline">Watchlist</span>
      {/* tool for mobile */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity sm:hidden">
        {watchlistCount.length} saved
      </div>
    </Link>
  );
}
