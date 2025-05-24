import { useState } from "react";
import PageHeader from "../components/PageHeader";  // Pastikan path benar

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    sizes: [],
    rating: 1,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSizesChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, sizes: value.split(",").map(size => size.trim()) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", form);
    alert("Produk berhasil ditambahkan!");
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      sizes: [],
      rating: 1,
      image: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <PageHeader>
        <span>Tambah Produk</span>
      </PageHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Nama Produk"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="category"
          type="text"
          placeholder="Kategori Produk"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Harga (Rp)"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stok Produk"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="sizes"
          type="text"
          placeholder="Ukuran (pisahkan dengan koma, misal: S, M, L)"
          value={form.sizes.join(", ")}
          onChange={handleSizesChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="image"
          type="text"
          placeholder="URL Gambar Produk"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Simpan Produk
        </button>
      </form>
    </div>
  );
}
