import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <div className="bg-gray-100 min-h-screen">
    <Home />
  </div>
);
