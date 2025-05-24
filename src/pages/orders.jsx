import orders from "../data/orders";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export default function Orders() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-emas">Daftar Pesanan</h2>
        <Link
          to="/addOrder"
          className="inline-flex items-center gap-2 bg-emas text-white px-4 py-2 rounded-lg shadow bg-emas-hover transition"
        >
          <FaCartPlus />
          Tambah Pesanan
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Order ID</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Pelanggan</th>
              <th className="p-3">Produk</th>
              <th className="p-3">Jumlah</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">#{order.orderId}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.customerName}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      className="w-10 h-10 object-cover rounded"
                    />
                    {order.productName}
                  </div>
                </td>
                <td className="p-3">{order.quantity}</td>
                <td className="p-3">Rp{order.total.toLocaleString()}</td>
                <td className="p-3">
                  <span
                    className={`badge ${
                      order.status === "Completed"
                        ? "badge-kirim"
                        : order.status === "Processing"
                        ? "badge-proses"
                        : order.status === "Cancelled"
                        ? "badge-batal"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
