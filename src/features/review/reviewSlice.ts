// reviewsSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Review, ReviewFormData, ReviewSliceState } from "../../types/review";

const initialState: ReviewSliceState = {
  reviewsByMovie: {},
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews(
      state,
      action: PayloadAction<{ movieId: string; reviews: Review[] }>
    ) {
      const { movieId, reviews } = action.payload;
      state.reviewsByMovie[movieId] = reviews;
    },
    addReview(
      state,
      action: PayloadAction<{ movieId: string; review: ReviewFormData }>
    ) {
      const { movieId, review } = action.payload;
      state.reviewsByMovie[movieId] = [
        review,
        ...(state.reviewsByMovie[movieId] || []),
      ];
    },
  },
});

export const { setReviews, addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
