import { useState } from "react";
import products from "./productbaju.json";

export default function ProductGridWithSearch() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    const matchesGender = genderFilter ? product.category.gender === genderFilter : true;
    return matchesSearch && matchesBrand && matchesGender;
  });

  const brands = [...new Set(products.map(p => p.brand))];
  const genders = [...new Set(products.map(p => p.category.gender))];

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search product..."
          className="w-full md:w-1/3 border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 border p-2 rounded"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <select
          className="w-full md:w-1/4 border p-2 rounded"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">All Gender</option>
          {genders.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-xl">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-blue-600 font-bold mt-1">Rp{product.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">Size: {product.size.available.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
