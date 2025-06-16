// src/services/reviewAPI.js
import axios from "axios";

// Ganti sesuai API Supabase kamu
const API_URL = "https://xmtgoblfjqreblwrjwop.supabase.co/rest/v1/ulasan";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGdvYmxmanFyZWJsd3Jqd29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk2MTYsImV4cCI6MjA2NDQ4NTYxNn0.yRVmwAfMELiNBnzqb9Bc0iij_T_16VlSIoEEL9liYAs";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation", // agar Supabase balikin data setelah insert/update
};

export const reviewAPI = {
  // Ambil semua ulasan
  async fetchReviews() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: 'id, customer, product, rating, comment, date, created_at',
        order: 'created_at.desc',
      },
    });
    return response.data;
  },

  // Tambahkan ulasan baru
  async createReview(reviewData) {
    const response = await axios.post(API_URL, reviewData, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Ambil ulasan berdasarkan ID
  async getReviewById(id) {
    const response = await axios.get(`${API_URL}?id=eq.${id}`, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Update ulasan
  async updateReview(id, updatedData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updatedData, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Hapus ulasan
  async deleteReview(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
