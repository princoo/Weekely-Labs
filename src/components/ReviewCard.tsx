import type { Review } from "../types/review";
import StarRating from "./StarRatings";
import { formatTime } from "../utils/formatTime";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-accent/10 rounded-xl p-4 border border-accent/50">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="hidden sm:block">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-secondary">
            <div className="text-xl font-bold text-accent">
              {review.name.charAt(0)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {review.name}
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <StarRating
                rating={review.rating}
                onRatingChange={() => {}}
                readonly
                size="small"
              />
              <div className="text-xs text-gray-400 mt-1 flex items-center">
                <span>
                  {formatTime(review.createdAt)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mt-3 leading-relaxed text-start text-md">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
}
