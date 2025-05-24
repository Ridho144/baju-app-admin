import { Outlet } from "react-router-dom";
import User from "../pages/user";
import ListMenu from "../components/ListMenu";
import PageHeader from "../components/PageHeader";

export default function MainLayouts() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <ListMenu />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
