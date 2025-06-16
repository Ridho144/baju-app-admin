import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersAPI } from "../../services/usersAPi";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Password tidak sama');
      return;
    }

    try {
      const result = await usersAPI.register(
        formData.username,
        formData.email,
        formData.password,
        formData.role
      );

      if (result?.id) {
        navigate('/'); // ✅ Redirect ke halaman dashboard ("/")
      } else {
        setError('Registrasi gagal');
      }
    } catch (err) {
      setError('Gagal registrasi. Coba lagi.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Create Your Account ✨
      </h2>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={formData.username}
          className="w-full mb-4 px-4 py-2 border rounded"
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="w-full mb-4 px-4 py-2 border rounded"
          placeholder="you@example.com"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="w-full mb-4 px-4 py-2 border rounded"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          className="w-full mb-6 px-4 py-2 border rounded"
          placeholder="Confirm Password"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
}
