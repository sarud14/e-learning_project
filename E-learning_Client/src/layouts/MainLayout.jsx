import { Outlet } from "react-router";
import HeaderNavbar from "../components/HeaderNavbar.jsx";
function MainLayout() {
  return (
    <div className="min-h-screen">
      <HeaderNavbar />
      <div className="pt-18">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
