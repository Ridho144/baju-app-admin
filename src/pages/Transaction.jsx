import React from "react";

export default function Transaction() {
  const transactions = [
    {
      id: "#TX001",
      customer: "Dina Apriani",
      date: "2025-05-15",
      amount: 550000,
      status: "Paid",
    },
    {
      id: "#TX002",
      customer: "Rizky Putra",
      date: "2025-05-16",
      amount: 320000,
      status: "Pending",
    },
    {
      id: "#TX003",
      customer: "Ayu Lestari",
      date: "2025-05-17",
      amount: 410000,
      status: "Failed",
    },
  ];

  const formatCurrency = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-emas text-emas">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-sm text-gray-600 border-b border-emas">
            <th className="p-2">ID Transaksi</th>
            <th className="p-2">Pelanggan</th>
            <th className="p-2">Tanggal</th>
            <th className="p-2">Jumlah</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="text-sm text-gray-700 border-b hover:bg-gray-50"
            >
              <td className="p-2">{tx.id}</td>
              <td className="p-2">{tx.customer}</td>
              <td className="p-2">{tx.date}</td>
              <td className="p-2">{formatCurrency(tx.amount)}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                    tx.status
                  )}`}
                >
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
