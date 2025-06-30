import axios from "axios";

const API_URL = "https://xmnkpappugdnckhswbmd.supabase.co/rest/v1/Article";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbmtwYXBwdWdkbmNraHN3Ym1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzIzMTQsImV4cCI6MjA2Njg0ODMxNH0.qf03bue7CNJ6ADmspXiuuEaivJSijpvUFgd-Ut39ObU";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

// ✅ Export nama harus `kontakAPI`
export const artikelAPI = {
  async fetchAll() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: "*",
        order: "created_at.desc",
      },
    });
    return response.data;
  },

  async create(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data[0];
  },

  async update(id, updateData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updateData, {
      headers,
      params: { select: "*" },
    });
    return response.data[0];
  },

  async delete(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
