import customers from "../data/customers";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

export default function Customers() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-emas">Pelanggan</h2>
        <Link
          to="/addCustomer"
          className="inline-flex items-center gap-2 bg-emas text-white px-4 py-2 rounded-lg shadow bg-emas-hover transition"
        >
          <FaUserPlus />
          Tambah Pelanggan
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">ID Pelanggan</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Email</th>
              <th className="p-3">Telepon</th>
              <th className="p-3">Member</th>
              <th className="p-3">Total Belanja</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust) => (
              <tr key={cust.customerId} className="border-t hover:bg-gray-50">
                <td className="p-3">{cust.customerId}</td>
                <td className="p-3 font-medium">{cust.customerName}</td>
                <td className="p-3">{cust.email}</td>
                <td className="p-3">{cust.phone}</td>
                <td className="p-3">
                  <span
                    className={`badge ${
                      cust.loyalty === "Premium"
                        ? "member-platinum"
                        : cust.loyalty === "Gold"
                        ? "member-gold"
                        : cust.loyalty === "Silver"
                        ? "member-silver"
                        : "bg-white text-gray-400"
                    }`}
                  >
                    {cust.loyalty}
                  </span>
                </td>
                <td className="p-3">Rp{cust.totalSpent.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
