import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import StarRating from "./StarRatings";
import type { ReviewFormData, ReviewProps } from "../types/review";
import { InputField } from "./Input";
import { useAppDispatch } from "../redux/hooks";
import reviewServices from "../firebase/reviewServices";
import { addReview } from "../features/review/reviewSlice";
import toast from "react-hot-toast";

export default function ReviewForm({
  onSubmit,
  onCancel,
  movieId,
}: ReviewProps) {
  const [, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ReviewFormData>({
    defaultValues: {
      name: "",
      rating: 0,
      comment: "",
    },
  });
  const onSubmitForm = async (data: ReviewFormData) => {
    if (!movieId) {
      return toast.error("Please select a movie to submit a review.");
    }
    try {
      const review = {
        ...data,
        createdAt: new Date(),
      };
      await reviewServices.storeReview(movieId, review);
      dispatch(addReview({ movieId, review }));

      // Reset form and UI
      setIsSubmitted(true);
      toast.success("Review added successfully!");
      setIsSubmitted(false);
      reset();
      setSelectedRating(0);
      onSubmit?.();
    } catch (error) {
      toast.success(`Error submitting review:${error}`);
    }
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    setValue("rating", rating, { shouldValidate: true });
  };

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onCancel}
          className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <FaArrowLeft size={20} />
        </button>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-secondary">
          Write a Review
        </h2>
        <div className="w-8"></div> {/* empty div for flex spacing */}
      </div>

      <div className="bg-primary backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700">
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
          {/* Name Field */}
          <div>
            <InputField
              label="Name"
              name="name"
              placeholder="Enter your name"
              type="text"
              error={errors.name?.message}
              registration={register("name", {
                required: "Please enter your name",
              })}
            />
          </div>

          {/* Rating Field */}
          <div>
            <label className="block text-sm font-bold mb-2">Rating</label>
            <div className="flex items-center space-x-4">
              <StarRating
                rating={selectedRating}
                onRatingChange={handleRatingChange}
                size="medium"
              />
            </div>
            <input
              type="hidden"
              {...register("rating", {
                required: "Please select a rating",
                min: {
                  value: 1,
                  message: "Rating must be at least 1 star",
                },
                max: {
                  value: 5,
                  message: "Rating cannot exceed 5 stars",
                },
              })}
            />
            {errors.rating && (
              <p className="mt-1 text-sm text-red-500">
                {errors.rating.message}
              </p>
            )}
          </div>

          {/* Comment Field */}
          <div>
            <label htmlFor="comment" className="block text-sm font-bold mb-2">
              Your Review
            </label>
            <textarea
              id="comment"
              rows={5}
              {...register("comment", {
                required: "Review comment is required",
                minLength: {
                  value: 10,
                  message: "Review must be at least 10 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Review must be less than 500 characters",
                },
              })}
              className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm pr-10 resize-none"
              placeholder="Share your thoughts about this movie..."
            />
            <div className="flex justify-between mt-1">
              {errors.comment && (
                <p className="text-sm text-red-500">{errors.comment.message}</p>
              )}
              <p className="text-sm text-gray-400 ml-auto">
                {watch("comment")?.length || 0}/500
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-yellow-400 to-secondary text-black font-bold py-2 px-6 rounded-lg transition-all duration-100 ease-in-out disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  Submitting Review...
                </div>
              ) : (
                "Submit Review"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
