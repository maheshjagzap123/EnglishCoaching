import { Star } from "lucide-react";

export default function StarRating({ rating = 5, size = 14 }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < rating ? "#f59e0b" : "none"}
          color={i < rating ? "#f59e0b" : "#d1d5db"}
        />
      ))}
    </div>
  );
}
