import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Settings() {
  const [storeName, setStoreName] = useState("Toko Fashion Kita");
  const [email, setEmail] = useState("admin@tokofashion.com");
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Pengaturan berhasil disimpan!",
      confirmButtonColor: "#d4af37" // warna emas
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-emas text-emas max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Pengaturan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Toko</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-emas focus:ring-emas"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Admin</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-emas focus:ring-emas"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tema</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="light"
                checked={theme === "light"}
                onChange={() => setTheme("light")}
                className="text-emas focus:ring-emas"
              />
              <span className="ml-2 text-gray-700">Terang</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="dark"
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
                className="text-emas focus:ring-emas"
              />
              <span className="ml-2 text-gray-700">Gelap</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-emas hover:bg-emas-gelap text-white font-semibold px-6 py-2 rounded-lg"
        >
          Simpan Pengaturan
        </button>
      </form>
    </div>
  );
}
