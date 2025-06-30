import axios from "axios";

// Ganti dengan API URL dan KEY Supabase kamu
const API_URL = "https://xmtgoblfjqreblwrjwop.supabase.co/rest/v1/aboutUs";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGdvYmxmanFyZWJsd3Jqd29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk2MTYsImV4cCI6MjA2NDQ4NTYxNn0.yRVmwAfMELiNBnzqb9Bc0iij_T_16VlSIoEEL9liYAs";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const aboutUsAPI = {
  async fetchAboutUs() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: "*",
        order: "created_at.desc",
        limit: 1,
      },
    });
    return response.data[0];
  },

  async createAboutUs(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data[0];
  },

  async updateAboutUs(id, updateData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updateData, {
      headers,
      params: { select: "*" },
    });
    return response.data[0];
  },

  async deleteAboutUs(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
  async fetchAboutUs() {
  const response = await axios.get(API_URL, {
    headers,
    params: {
      select: "*",
      order: "created_at.desc",
    },
  });
  return response.data; // bukan data[0]
}
};
