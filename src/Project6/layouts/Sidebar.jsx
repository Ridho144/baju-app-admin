import {
    FaHome,
    FaThLarge,
    FaHeart,
    FaTshirt,
    FaShoppingCart,
    FaShoppingBag,
    FaSignOutAlt,
  } from "react-icons/fa";
  
  const Sidebar = () => {
    return (
      <aside className="bg-white w-60 h-screen shadow-md p-6 flex flex-col justify-between">
        {/* Top section */}
        <div>
          {/* Icon Logo */}
          <div className="flex items-center mb-10 gap-2">
            <FaShoppingBag className="text-3xl text-yellow-500" /> {/* Changed color to yellow */}
            <span className="text-xl font-bold text-yellow-500">Clothing</span> {/* Changed text color to yellow */}
          </div>
  
          {/* Menu items */}
          <nav className="flex flex-col gap-4">
            <SidebarItem icon={<FaHome />} label="Home" active />
            <SidebarItem icon={<FaThLarge />} label="Categories" />
            <SidebarItem icon={<FaHeart />} label="Favorite" />
            <SidebarItem icon={<FaTshirt />} label="Your Library" />
            <SidebarItem icon={<FaShoppingCart />} label="Setting" />
          </nav>
        </div>
  
        {/* Bottom section */}
        <div className="flex flex-col items-center gap-4">
          <SidebarItem icon={<FaSignOutAlt />} label="Log out" />
          <FaTshirt className="text-yellow-500 text-7xl mt-4" /> {/* Changed color to yellow */}
        </div>
      </aside>
    );
  };
  
  const SidebarItem = ({ icon, label, active }) => (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all 
      ${active ? "bg-orange-500 text-white font-semibold" : "text-gray-500 hover:bg-gray-100 hover:text-orange-500"}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
  
  export default Sidebar;
  