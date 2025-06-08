import React, { useState, useEffect } from "react";
import { productAPI } from "../services/ProductAPI";

export default function ProductForm({ currentProduct, onFinish }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (currentProduct) setForm(currentProduct);
  }, [currentProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentProduct) {
      await productAPI.updateProduct(currentProduct.id, form);
    } else {
      await productAPI.createProduct(form);
    }
    onFinish();
    setForm({ name: "", description: "", price: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">
        {currentProduct ? "Edit Product" : "Add Product"}
      </h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        {currentProduct ? "Update" : "Add"}
      </button>
    </form>
  );
}
