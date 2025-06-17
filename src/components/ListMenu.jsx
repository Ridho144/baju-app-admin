// src/components/ListMenu.jsx
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
  FaPaperPlane,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { MdFormatQuote } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

export default function ListMenu() {
  const navigate = useNavigate();

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all
    ${isActive ? "bg-orange-500 text-white font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-orange-500"}`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-between h-full p-4">
      <nav className="flex flex-col gap-4">

        <NavLink to="/" className={menuClass}>
          <FaHome className="text-lg" />
          <span>Dashboard</span>
        </NavLink>

        {/* Category Management */}
        <details className="dropdown">
          <summary className="btn w-full text-left bg-transparent hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-md">
            Management
          </summary>
          <ul className="menu dropdown-content w-full mt-1 p-2 bg-base-100 rounded-box shadow z-10">
            <li><NavLink to="/categories" className={menuClass}><FaThLarge />Categories</NavLink></li>
            <li><NavLink to="/products" className={menuClass}><FaList />List Produk</NavLink></li>
            <li><NavLink to="/product" className={menuClass}><FaShoppingBag />Product</NavLink></li>
            <li><NavLink to="/quotes" className={menuClass}><MdFormatQuote size={18} />Quotes</NavLink></li>
          </ul>
        </details>

        {/* User Management */}
        <details className="dropdown">
          <summary className="btn w-full text-left bg-transparent hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-md">
            Users
          </summary>
          <ul className="menu dropdown-content w-full mt-1 p-2 bg-base-100 rounded-box shadow z-10">
            <li><NavLink to="/customers" className={menuClass}><FaTshirt />Customers</NavLink></li>
            <li><NavLink to="/CustomersPage" className={menuClass}><FaPeopleLine />Members</NavLink></li>
            <li><NavLink to="/listuser" className={menuClass}><AiOutlineUser />Users</NavLink></li>
          </ul>
        </details>

        {/* Orders & Transaction */}
        <details className="dropdown">
          <summary className="btn w-full text-left bg-transparent hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-md">
            Transactions
          </summary>
          <ul className="menu dropdown-content w-full mt-1 p-2 bg-base-100 rounded-box shadow z-10">
            <li><NavLink to="/orders" className={menuClass}><FaShoppingCart />Orders</NavLink></li>
            <li><NavLink to="/transactions" className={menuClass}><FaMoneyCheckAlt />Transactions</NavLink></li>
          </ul>
        </details>

        {/* Feedback */}
        <details className="dropdown">
          <summary className="btn w-full text-left bg-transparent hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-md">
            Feedback
          </summary>
          <ul className="menu dropdown-content w-full mt-1 p-2 bg-base-100 rounded-box shadow z-10">
            <li><NavLink to="/reviews" className={menuClass}><FaStar />Reviews</NavLink></li>
            <li><NavLink to="/faq" className={menuClass}><FaQuestionCircle />FAQ</NavLink></li>
          </ul>
        </details>

        {/* Settings & Log */}
        <details className="dropdown">
          <summary className="btn w-full text-left bg-transparent hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-md">
            System
          </summary>
          <ul className="menu dropdown-content w-full mt-1 p-2 bg-base-100 rounded-box shadow z-10">
            <li><NavLink to="/activity-log" className={menuClass}><FaClock />Activity Log</NavLink></li>
            <li><NavLink to="/settings" className={menuClass}><FaCog />Settings</NavLink></li>
          </ul>
        </details>
      </nav>

      {/* Logout */}
      <div className="pt-6 border-t mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-red-500 hover:bg-red-100 rounded-md transition-all"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
