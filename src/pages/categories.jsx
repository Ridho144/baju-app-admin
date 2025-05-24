import { FaTshirt, FaSnowflake, FaFemale, FaMale, FaChild, FaStar } from "react-icons/fa";

const categories = [
  { name: "Kaos", icon: <FaTshirt />, color: "bg-yellow-100 text-yellow-800" },
  { name: "Kemeja", icon: <FaMale />, color: "bg-blue-100 text-blue-800" },
  { name: "Outerwear", icon: <FaSnowflake />, color: "bg-gray-200 text-gray-800" }, // Ganti FaJacket → FaSnowflake
  { name: "Wanita", icon: <FaFemale />, color: "bg-pink-100 text-pink-800" },
  { name: "Pria", icon: <FaMale />, color: "bg-green-100 text-green-800" },
  { name: "Anak-anak", icon: <FaChild />, color: "bg-purple-100 text-purple-800" },
  { name: "Best Seller", icon: <FaStar />, color: "bg-orange-100 text-orange-800" },
];


export default function Categories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Kategori Produk</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition ${cat.color}`}
          >
            <div className="text-xl">{cat.icon}</div>
            <div className="font-medium">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
