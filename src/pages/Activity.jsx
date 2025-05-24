import React from "react";
import { FaClock } from "react-icons/fa";

export default function ActivityLog() {
  const logs = [
    {
      id: 1,
      user: "Admin",
      action: "Menambahkan produk baru: Jaket Kulit Wanita",
      timestamp: "2025-05-15 10:45:00",
    },
    {
      id: 2,
      user: "Admin",
      action: "Menghapus kategori: Baju Anak",
      timestamp: "2025-05-15 09:30:00",
    },
    {
      id: 3,
      user: "StafGudang",
      action: "Mengupdate stok produk: Nike T-Shirt 1",
      timestamp: "2025-05-14 16:20:00",
    },
    {
      id: 4,
      user: "Admin",
      action: "Login ke sistem",
      timestamp: "2025-05-14 08:10:00",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-emas text-emas">
      <h1 className="text-2xl font-bold mb-4">Activity Log</h1>
      <div className="space-y-4">
        {logs.map((log) => (
          <div
            key={log.id}
            className="border border-emas p-4 rounded-lg bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <div className="font-semibold text-base text-emas">{log.user}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <FaClock className="text-yellow-400" />
                {log.timestamp}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-700">{log.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
