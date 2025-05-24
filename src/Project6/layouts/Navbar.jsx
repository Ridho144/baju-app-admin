import { BsGlobeAmericas } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai"; 

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-6">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-full max-w-md">
        <AiOutlineSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Cari produk baju..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Language / Currency Selector */}
      <div className="ml-4 mr-6">
        <BsGlobeAmericas className="text-gray-600 w-6 h-6" />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-medium text-sm">Ridho</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
