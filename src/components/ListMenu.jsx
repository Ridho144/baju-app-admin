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
    `flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all
    ${
      isActive
        ? "bg-orange-500 text-white font-semibold"
        : "text-gray-500 hover:bg-gray-100 hover:text-orange-500"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Menu Items */}
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

        <NavLink to="/quotes" className={menuClass}>
          <MdFormatQuote size={20} />
          <span>Quotes</span>
        </NavLink>

        <NavLink to="/product" className={menuClass}>
          <FaShoppingBag size={20} />
          <span>Product</span>
        </NavLink>

        <NavLink to="/CustomersPage" className={menuClass}>
          <FaPeopleLine size={20} />
          <span>Member</span>
        </NavLink>

        <NavLink to="/listuser" className={menuClass}>
          <AiOutlineUser size={20} />
          <span>Users</span>
        </NavLink>
        <NavLink to="/faq" className="flex items-center gap-2 text-gray-700 hover:text-black">
        <FaQuestionCircle /> FAQ
      </NavLink>
      </nav>

      {/* Bottom Section */}
      {/* <div className="flex flex-col gap-3 mt-8 border-t pt-4">
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

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-100 transition-all"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Log out</span>
        </button>
      </div> */}
    </div>
  );
}
