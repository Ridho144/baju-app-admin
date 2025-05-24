import { createRoot } from "react-dom/client";
import "./tailwind.css";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductGridWithSearch from "./listbaju";
import ProductTable from "./tableproduct";

createRoot(document.getElementById("root")).render(
  <div>
    <ResponsiveDesign />
    <ProductTable />
  </div>
);
