import { addDoc, collection, getDocs } from "firebase/firestore";
import type { Review, ReviewFormData } from "../types/review";
import { db } from "../config/firebase-config";
import type { DocumentData } from "firebase/firestore"; // if not already imported

const storeReview = async (movieId: string, reviewData: ReviewFormData) => {
  const reviewsRef = collection(db, "reviews", movieId, "reviews");

  await addDoc(reviewsRef, reviewData);
};

const getReviews = async (movieId: string) => {
  const reviewsRef = collection(db, "reviews", movieId, "reviews");
  const snapshot = await getDocs(reviewsRef);

  const reviews: Review[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data() as DocumentData;

    reviews.push({
      id: doc.id,
      comment: data.comment,
      name: data.name,
      rating: data.rating,
      createdAt: data.createdAt?.toDate(),
    });
  });

  return reviews;
};

export default { storeReview, getReviews };
