import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleFinish = () => {
    setSelectedProduct(null);
    setRefresh(!refresh);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ProductForm currentProduct={selectedProduct} onFinish={handleFinish} />
      <hr className="my-6" />
      <ProductList key={refresh} onEdit={handleEdit} />
    </div>
  );
}
