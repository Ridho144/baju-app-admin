// src/services/faqAPI.js
import axios from "axios";

// Ganti sesuai API Supabase kamu
const API_URL = "https://xmtgoblfjqreblwrjwop.supabase.co/rest/v1/FAQ";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGdvYmxmanFyZWJsd3Jqd29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk2MTYsImV4cCI6MjA2NDQ4NTYxNn0.yRVmwAfMELiNBnzqb9Bc0iij_T_16VlSIoEEL9liYAs";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation", // agar hasil insert/update mengembalikan data
};

export const faqAPI = {
  // Ambil semua FAQ
  async fetchAllFAQs() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: 'id, pertanyaan, jawaban, created_at',
        order: 'created_at.desc',
      },
    });
    return response.data;
  },

  // Tambahkan FAQ baru
  async createFAQ(faqData) {
    const response = await axios.post(API_URL, faqData, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Ambil FAQ berdasarkan ID
  async getFAQById(id) {
    const response = await axios.get(`${API_URL}?id=eq.${id}`, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Update FAQ
  async updateFAQ(id, updateData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updateData, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Hapus FAQ
  async deleteFAQ(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
