import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white border border-yellow-400 p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Branding */}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-serif font-bold text-yellow-600 tracking-wide">
            <span className="text-yellow-600">Sipbaon</span>
            <span className="text-gray-800">Fashion</span>
          </h1>
        </div>

        {/* Page Content */}
        <Outlet />

        {/* Footer */}
        <p className="text-center text-sm text-yellow-500 mt-6 font-light">
          © 2025 Sipbaon Fashion. All rights reserved.
        </p>
      </div>
    </div>
  );
}
