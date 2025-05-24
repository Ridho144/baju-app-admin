import { AiFillShopping } from "react-icons/ai";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 space-y-8 flex-1">
            {/* Hero Banner */}
            <section className="bg-yellow-500 text-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Manajemen Produk</h2>
                <p>Kelola produk, harga, dan stok secara real-time.</p>

                <button className="mt-4 px-4 py-2 bg-yellow-600 rounded-lg font-semibold hover:bg-yellow-700">
                  Kelola Produk
                </button>
              </div>
              <AiFillShopping className="text-white w-40 h-40" />
            </section>

            {/* Dashboard Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                <div className="bg-blue-500 rounded-full p-4 text-white">
                  <FaShoppingCart />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">75</span>
                  <span className="text-gray-400">Total Orders</span>
                </div>
              </div>

              <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                <div className="bg-blue-700 rounded-full p-4 text-white">
                  <FaTruck />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">175</span>
                  <span className="text-gray-400">Total Delivered</span>
                </div>
              </div>

              <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                <div className="bg-red-500 rounded-full p-4 text-white">
                  <FaBan />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">40</span>
                  <span className="text-gray-400">Total Canceled</span>
                </div>
              </div>

              <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                <div className="bg-yellow-400 rounded-full p-4 text-white">
                  <FaDollarSign />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Rp.128</span>
                  <span className="text-gray-400">Total Revenue</span>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
