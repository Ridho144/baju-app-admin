import { useParams } from "react-router-dom";
import products from "../data/productlist";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-4">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover mb-4 rounded"
      />
      <p className="mb-2">Kategori: {product.category}</p>
      <p className="mb-2">Brand: {product.brand}</p>
      <p className="mb-2">Harga: Rp{product.price.toLocaleString()}</p>
      <p className="mb-2">Stok: {product.stock} pcs</p>
      <p className="mb-2">Ukuran: {product.sizes.join(", ")}</p>
      <p className="mb-2">Rating: {product.rating}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>
    </div>
  );
}
