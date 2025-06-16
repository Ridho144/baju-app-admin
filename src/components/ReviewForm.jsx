import React, { useState } from "react";
import { reviewAPI } from "../services/reviewAPI"; // sesuaikan path jika berbeda

export default function ReviewForm({ onReviewAdded }) {
  const [formData, setFormData] = useState({
    customer: "",
    product: "",
    rating: 1,
    comment: "",
    date: new Date().toISOString().slice(0, 10), // format YYYY-MM-DD
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await reviewAPI.createReview(formData);
      setMessage("Ulasan berhasil ditambahkan!");
      setFormData({
        customer: "",
        product: "",
        rating: 1,
        comment: "",
        date: new Date().toISOString().slice(0, 10),
      });

      if (onReviewAdded) onReviewAdded(); // refresh data di komponen parent
    } catch (error) {
      console.error(error);
      setMessage("Gagal menambahkan ulasan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-gray-300 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-emas">Tambahkan Ulasan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="customer"
          placeholder="Nama Pelanggan"
          value={formData.customer}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="product"
          placeholder="Nama Produk"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Bintang
            </option>
          ))}
        </select>

        <textarea
          name="comment"
          placeholder="Komentar"
          value={formData.comment}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-emas text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {loading ? "Mengirim..." : "Kirim Ulasan"}
        </button>

        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </form>
    </div>
  );
}
