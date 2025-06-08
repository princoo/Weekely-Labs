import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import reviewServices from "../../firebase/reviewServices";
import Loader from "../Loader/Loader";
import { setReviews } from "../../features/review/reviewSlice";

export default function ReviewList({ movieId }: { movieId: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const { reviewsByMovie } = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      const data = await reviewServices.getReviews(movieId);
      dispatch(setReviews({movieId,reviews:data}))
      setIsLoading(false);
    };

    fetchReviews();
  }, [dispatch, movieId]);


  return (
    <div>
      <div className="bg-primary-light dark:bg-primary rounded-2xl">
        {/* Reviews List */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader />
            <p className="text-gray-300">Loading reviews...</p>
          </div>
        ) : reviewsByMovie[movieId].length > 0 ? (
          <div className="space-y-6">
            {reviewsByMovie[movieId].map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-accent/20 rounded-xl">
            <p className="text-accent text-sm">No reviews yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
