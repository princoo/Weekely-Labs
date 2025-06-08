"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: "small" | "medium" | "large";
  readonly?: boolean;
}

export default function StarRating({
  rating,
  onRatingChange,
  size = "medium",
  readonly = false,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-3xl",
  };

  const handleStarClick = (starRating: number) => {
    if (!readonly) {
      onRatingChange(starRating);
    }
  };

  const handleStarHover = (starRating: number) => {
    if (!readonly) {
      setHoverRating(starRating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div
      className="flex items-center space-x-1"
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating);

        return (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            disabled={readonly}
            className={`
              ${sizeClasses[size]} 
              transition-all duration-200 transform hover:scale-110 focus:outline-none
              ${
                readonly
                  ? "cursor-default"
                  : "cursor-pointer hover:drop-shadow-lg"
              }
              ${isFilled ? "text-secondary" : "text-accent/50"}
            `}
            aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
          >
            <FaStar
              className={`
                ${isFilled ? "drop-shadow-sm" : ""}
                transition-all duration-200
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
