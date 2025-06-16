// src/pages/ListAccessedUsers.jsx
import React, { useEffect, useState } from 'react';
import { usersAPI } from '../services/usersAPi';

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await usersAPI.fetchAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Gagal memuat daftar user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Log Aktifitas </h1>

        {loading ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-600">Belum ada pengguna yang login/register.</p>
        ) : (
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-gray-200 text-left text-sm">
                <th className="p-2">ID</th>
                <th className="p-2">Username</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t text-sm hover:bg-gray-50">
                  <td className="p-2">{u.id}</td>
                  <td className="p-2">{u.username || '-'}</td>
                  <td className="p-2">{u.gmail}</td>
                  <td className="p-2 capitalize">{u.role}</td>
                  <td className="p-2">{new Date(u.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
