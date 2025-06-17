import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { productAPI } from "../services/ProductAPI"; // pastikan path sesuai

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await productAPI.fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);   

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-emas">Daftar Produk</h2>
        <Link
          to="/Product"
          className="inline-flex items-center gap-2 bg-emas text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-700 transition"
        >
          <FaPlus />
          Tambah Produk
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Gambar</th>
              <th className="p-3">Nama Produk</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Stok</th>
              <th className="p-3">Ukuran</th>
              <th className="p-3">Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={product.image || product.gambar || "/no-image.jpg"}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {product.name}
                  </Link>
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 badge-emas rounded-full text-xs">
                    {product.category || "-"}
                  </span>
                </td>
                <td className="p-3">
                  Rp{Number(product.price).toLocaleString()}
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full text-xs badge-emas">
                    {product.stock} pcs
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    {(product.sizes?.split(",") || []).map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {size.trim()}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">
                      {"★".repeat(Math.round(product.rating || 0))}
                      {"☆".repeat(5 - Math.round(product.rating || 0))}
                    </span>
                    <span>
                      (
                      {typeof product.rating === "number"
                        ? product.rating.toFixed(1)
                        : "N/A"}
                      )
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
