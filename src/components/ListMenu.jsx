import { AiOutlineUser } from "react-icons/ai";
import {
  FaHome,
  FaThLarge,
  FaList,
  FaTshirt,
  FaShoppingCart,
  FaSignOutAlt,
  FaShoppingBag,
  FaExclamationTriangle,
  FaMoneyCheckAlt,
  FaStar,
  FaClock,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all
    ${
      isActive
        ? "bg-orange-500 text-white font-semibold"
        : "text-gray-500 hover:bg-gray-100 hover:text-orange-500"
    }`;

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Top section */}
      <div>
        {/* Menu items */}
        <nav className="flex flex-col gap-4">
          <NavLink to="/" className={menuClass}>
            <FaHome className="text-lg" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/categories" className={menuClass}>
            <FaThLarge className="text-lg" />
            <span>Categories</span>
          </NavLink>

          <NavLink to="/products" className={menuClass}>
            <FaList className="text-lg" />
            <span>List Produk</span>
          </NavLink>

          <NavLink to="/customers" className={menuClass}>
            <FaTshirt className="text-lg" />
            <span>Customers</span>
          </NavLink>

          <NavLink to="/orders" className={menuClass}>
            <FaShoppingCart className="text-lg" />
            <span>Orders</span>
          </NavLink>

          <NavLink to="/user" className={menuClass}>
            <AiOutlineUser className="text-lg" />
            <span>User</span>
          </NavLink>
        </nav>
      </div>
      <NavLink to="/transactions" className={menuClass}>
        <FaMoneyCheckAlt className="text-lg" />
        <span>Transactions</span>
      </NavLink>

      <NavLink to="/reviews" className={menuClass}>
        <FaStar className="text-lg" />
        <span>Reviews</span>
      </NavLink>

      <NavLink to="/activity-log" className={menuClass}>
        <FaClock className="text-lg" />
        <span>Activity Log</span>
      </NavLink>

      <NavLink to="/settings" className={menuClass}>
        <FaCog className="text-lg" />
        <span>Settings</span>
      </NavLink>

      {/* Bottom section

      <div className="flex flex-col gap-4">
        <NavLink to="/error400" className={menuClass}>
          <FaExclamationTriangle className="text-lg" />
          <span>Error 400</span>
        </NavLink>
        
        <NavLink to="/error401" className={menuClass}>
          <FaExclamationTriangle className="text-lg" />
          <span>Error 401</span>
        </NavLink>
        
        <NavLink to="/error403" className={menuClass}>
          <FaExclamationTriangle className="text-lg" />
          <span>Error 403</span>
        </NavLink>
        
        <NavLink to="/logout" className={menuClass}>
          <FaSignOutAlt className="text-lg" />
          <span>Log out</span>
        </NavLink>
      </div> */}
    </div>
  );
}
