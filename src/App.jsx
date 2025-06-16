import { useEffect, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./assets/tailwind.css";
import { productAPI } from "./services/ProductAPI";
import ProductsPage from "./pages/Product";

// Lazy imports...
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/orders"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const AddCustomer = React.lazy(() => import("./pages/addCustomer"));
const AddOrder = React.lazy(() => import("./pages/addOrders"));
const Login = React.lazy(() => import("./pages/auth/login"));
const Forgot = React.lazy(() => import("./pages/auth/forgot"));
const Register = React.lazy(() => import("./pages/auth/register"));
const AuthLayout = React.lazy(() => import("./layouts/authlayouts"));
const MainLayouts = React.lazy(() => import("./layouts/mainlayouts"));
const Customers = React.lazy(() => import("./pages/customers"));
const NotFoundPage = React.lazy(() => import("./pages/notfound"));
const Loading = React.lazy(() => import("./components/loading"));
const User = React.lazy(() => import("./pages/user"));
const ListMenu = React.lazy(() => import("./components/ListMenu"));
const Categories = React.lazy(() => import("./pages/categories"));
const ProductList = React.lazy(() => import("./pages/listproduk"));
const Transaction = React.lazy(() => import("./pages/Transaction"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const ActivityLog = React.lazy(() => import("./pages/Activity"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Quotes = React.lazy(() => import("./pages/quotes"));
const ProductDetail = React.lazy(() => import("./pages/ProdukDetail"));
const CustomersPage = React.lazy(() => import("./pages/CustomerPages"));
const ListUser = React.lazy(() => import("./pages/ListUser"));
const FAQPage = React.lazy(() => import("./pages/Faq")); // <- Tambahkan halaman FAQ

function App() {
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await productAPI.fetchProducts();
        console.log("Products loaded on app init:", products);
      } catch (error) {
        console.error("Error fetching products on app load:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-gray-100 min-h-screen flex">
        <div className="flex-1 p-4">
          <Routes>
            {/* Auth layout */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
            </Route>

            {/* Main layout */}
            <Route element={<MainLayouts />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/error400" element={<Error400 />} />
              <Route path="/error401" element={<Error401 />} />
              <Route path="/error403" element={<Error403 />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/user" element={<User />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/activity-log" element={<ActivityLog />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/product" element={<ProductsPage />} />
              <Route path="/CustomersPage" element={<CustomersPage />} />
              <Route path="/listuser" element={<ListUser />} />
              <Route path="/faq" element={<FAQPage />} /> {/* <- Route FAQ */}
            </Route>
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
