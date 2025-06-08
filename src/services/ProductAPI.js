import axios from "axios";

const API_URL = "https://xmtgoblfjqreblwrjwop.supabase.co/rest/v1/Product";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGdvYmxmanFyZWJsd3Jqd29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk2MTYsImV4cCI6MjA2NDQ4NTYxNn0.yRVmwAfMELiNBnzqb9Bc0iij_T_16VlSIoEEL9liYAs";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const productAPI = {
  async fetchProducts() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createProduct(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async updateProduct(id, updatedData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updatedData, {
      headers,
    });
    return response.data;
  },

  async deleteProduct(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
