import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { reviewAPI } from "../services/reviewAPI";
import ReviewForm from "../components/ReviewForm"; // sesuaikan path jika beda

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const loadReviews = async () => {
    const data = await reviewAPI.fetchReviews();
    setReviews(data.reverse()); // biar ulasan terbaru di atas
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < count ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));

  return (
    <div className="max-w-2xl mx-auto px-4">
      <ReviewForm onReviewAdded={loadReviews} />

      <div className="p-6 bg-white rounded-xl shadow border border-emas text-emas">
        <h1 className="text-2xl font-bold mb-4">Ulasan Pelanggan</h1>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-emas p-4 rounded-lg bg-gray-50"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="font-semibold text-base">{review.customer}</div>
                <div className="text-xs text-gray-500">{review.date}</div>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                Produk:{" "}
                <span className="font-medium text-emas">{review.product}</span>
              </div>
              <div className="flex items-center mb-2">
                {renderStars(review.rating)}
              </div>
              <div className="text-sm text-gray-700 italic">"{review.comment}"</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
