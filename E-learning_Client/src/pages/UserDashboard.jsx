import HeaderNavbar from "../components/Navbar/HeaderNavbar";
import BoardInfoComponent from "../components/UserDashboardComponents/BoardInfoComponent";
import SidebarComponent from "../components/UserDashboardComponents/SidebarComponent";

function UserDashboard() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-base-100 h-10 fixed top-0 left-0 right-0 z-90"></div>
      <HeaderNavbar />
      <div className="flex pt-20 pl-30 gap-20">
        <SidebarComponent />
        <BoardInfoComponent />
      </div>
    </div>
  );
}
export default UserDashboard;
