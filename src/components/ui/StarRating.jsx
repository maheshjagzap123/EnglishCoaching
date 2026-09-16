import { Star } from "lucide-react";

export default function StarRating({ rating = 5, size = 14 }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < rating ? "#F4B942" : "none"}
          color={i < rating ? "#F4B942" : "#d1d5db"}
        />
      ))}
    </div>
  );
}
