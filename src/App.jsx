import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
// import Sidebar from "./layouts/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import ProductList from "./pages/listproduk";
// import NotFoundPage from "./pages/NotFound";
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
// // import AddCustomer from "./pages/AddCustomer";
// // import AddOrder from "./pages/AddOrder";
// // import AddProduct from "./pages/AddProduct";
// import Customers from "./pages/customers";
// import Orders from "./pages/orders";
// import Categories from "./pages/categories";

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

function App() {
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

            {/* Main layout routes */}
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
              <Route path="/products/:productId" element={<ProductDetail />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
