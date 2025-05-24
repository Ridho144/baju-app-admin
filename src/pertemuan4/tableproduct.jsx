import { useState } from "react";
import products from "./productbaju.json";

export default function ProductTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterGender, setFilterGender] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType =
      filterType === "All" || product.category.type === filterType;
    const matchGender =
      filterGender === "All" || product.category.gender === filterGender;

    return matchSearch && matchType && matchGender;
  });

  const uniqueTypes = ["All", ...new Set(products.map((p) => p.category.type))];
  const uniqueGenders = ["All", ...new Set(products.map((p) => p.category.gender))];

  return (
    <div className="p-4 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
        Katalog Produk Baju
      </h2>

      {/* Grid Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari produk atau brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-yellow-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-yellow-400 rounded-lg p-2 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
          className="border border-yellow-400 rounded-lg p-2 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          {uniqueGenders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      {/* Table in Responsive Grid Container */}
      <div className="overflow-x-auto shadow rounded-lg border border-yellow-300">
        <table className="min-w-full table-auto text-sm text-yellow-800">
          <thead className="bg-yellow-100 text-yellow-700">
            <tr>
              <th className="p-3 text-left border-b border-yellow-300">ID</th>
              <th className="p-3 text-left border-b border-yellow-300">Name</th>
              <th className="p-3 text-left border-b border-yellow-300">Brand</th>
              <th className="p-3 text-left border-b border-yellow-300">Price</th>
              <th className="p-3 text-left border-b border-yellow-300">Type</th>
              <th className="p-3 text-left border-b border-yellow-300">Gender</th>
              <th className="p-3 text-left border-b border-yellow-300">Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-yellow-50 transition-colors duration-200"
              >
                <td className="p-3 border-b border-yellow-200">{product.id}</td>
                <td className="p-3 border-b border-yellow-200">{product.name}</td>
                <td className="p-3 border-b border-yellow-200">{product.brand}</td>
                <td className="p-3 border-b border-yellow-200">
                  Rp{product.price.toLocaleString()}
                </td>
                <td className="p-3 border-b border-yellow-200">{product.category.type}</td>
                <td className="p-3 border-b border-yellow-200">{product.category.gender}</td>
                <td className="p-3 border-b border-yellow-200">
                  <img
                    src={
                      product.image.startsWith("/")
                        ? product.image
                        : `/img/${product.image}`
                    }
                    alt={product.name}
                    className="h-12 w-12 object-cover rounded border border-yellow-300"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/48x48.png?text=No+Image")
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredProducts.length === 0 && (
          <p className="text-yellow-600 text-center py-4">
            Produk tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
