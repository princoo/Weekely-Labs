export interface Review {
  // movieId: string;
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ReviewSliceState {
  reviewsByMovie: {
    [movieId: string]: Review[];
  };
}

export type ReviewFormData = Omit<Review, "movieId">;
export interface ReviewProps {
  onSubmit?: () => void;
  onCancel: () => void;
  movieId: string | null
}
