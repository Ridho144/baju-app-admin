import React, { useEffect, useState } from "react";
import { productAPI } from "../services/ProductAPI";

export default function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productAPI.fetchProducts().then(setProducts);
  }, []);

  const handleDelete = async (id) => {
    await productAPI.deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  useEffect(() => {
  productAPI.fetchProducts().then((data) => {
    console.log("Fetched products:", data);
    setProducts(data);
  }).catch(err => {
    console.error("Fetch error:", err);
  });
}, []);


  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Product List</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
          <div className="space-x-2">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => onEdit(product)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
