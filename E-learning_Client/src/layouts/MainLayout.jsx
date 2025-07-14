import { Outlet } from "react-router";
import HeaderNavbar from "../components/Navbar/HeaderNavbar";
function MainLayout() {
  return (
    <div className="min-h-screen">
      <div className="bg-base-100 h-10 fixed top-0 left-0 right-0 z-10"></div>
      <HeaderNavbar />
      <div className="pt-18">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
