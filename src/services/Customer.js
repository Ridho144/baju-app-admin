import axios from "axios";

// Endpoint Supabase untuk tabel Customer
const API_URL = "https://xmtgoblfjqreblwrjwop.supabase.co/rest/v1/Customer";

// API Key Supabase (role anon)
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGdvYmxmanFyZWJsd3Jqd29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk2MTYsImV4cCI6MjA2NDQ4NTYxNn0.yRVmwAfMELiNBnzqb9Bc0iij_T_16VlSIoEEL9liYAs";

// Konfigurasi header Supabase
const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

// API untuk resource Customer
export const customerAPI = {
  // Ambil semua customer
  async fetchCustomers() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  // Tambah customer baru
  async createCustomer(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  // Perbarui data customer berdasarkan ID
  async updateCustomer(id, updatedData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updatedData, {
      headers,
    });
    return response.data;
  },

  // Hapus customer berdasarkan ID
  async deleteCustomer(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
