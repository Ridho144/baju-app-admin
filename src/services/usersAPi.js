import axios from 'axios';

// Ganti dengan URL dan API Key kamu di Supabase
const API_URL = "https://xmtgoblfjqreblwrjwop.supabase.co/rest/v1/user";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGdvYmxmanFyZWJsd3Jqd29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk2MTYsImV4cCI6MjA2NDQ4NTYxNn0.yRVmwAfMELiNBnzqb9Bc0iij_T_16VlSIoEEL9liYAs";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const usersAPI = {
  // Ambil semua user
  async fetchAllUsers() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: 'id, created_at, username, password, gmail, role',
        order: 'created_at.desc',
      },
    });
    return response.data;
  },

  // Tambahkan user baru
  async createUser(userData) {
    const response = await axios.post(API_URL, userData, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Registrasi user (khusus untuk form register)
async register(username, email, password, role = 'user') {
  const newUser = {
    username,
    gmail: email.toLowerCase(),
    password,
    role,
  };

  try {
    const response = await axios.post(API_URL, newUser, {
      headers,
      params: {
        select: '*',
      },
    });

    return response.data[0]; // return user
  } catch (error) {
    console.error("Supabase error (register):", error.response?.data || error.message);
    throw error;
  }
},

  // Hapus user
  async deleteUser(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },

  // Ambil user berdasarkan ID
  async getUserById(id) {
    const response = await axios.get(`${API_URL}?id=eq.${id}`, {
      headers,
      params: {
        select: 'id, created_at, username, password, gmail, role',
      },
    });
    return response.data[0];
  },

  // Update user
  async updateUser(id, updateData) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updateData, {
      headers,
      params: {
        select: '*',
      },
    });
    return response.data[0];
  },

  // Ambil user berdasarkan username
  async getUserByUsername(username) {
    const response = await axios.get(`${API_URL}?username=eq.${username}`, {
      headers,
      params: {
        select: 'id, created_at, username, password, gmail, role',
        limit: 1,
      },
    });
    return response.data[0];
  },

  // Ambil user berdasarkan email
  async getUserByEmail(email) {
    const response = await axios.get(`${API_URL}?gmail=eq.${email}`, {
      headers,
      params: {
        select: 'id, created_at, username, password, gmail, role',
        limit: 1,
      },
    });
    return response.data[0];
  },

  // Login (cocokkan username/email + password)
  async login(identifier, password) {
    let user = await this.getUserByUsername(identifier);
    if (!user) {
      user = await this.getUserByEmail(identifier);
    }

    if (user && user.password === password) {
      return user;
    }

    return null;
  },

  // Ganti password
  async changePassword(id, newPassword) {
    return this.updateUser(id, { password: newPassword });
  },

  // Ganti role user
  async changeUserRole(id, newRole) {
    return this.updateUser(id, { role: newRole });
  }
};
