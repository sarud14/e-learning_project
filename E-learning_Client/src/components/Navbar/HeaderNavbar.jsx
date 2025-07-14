import { DropdownArrow, SearchIcon } from "../../icons";
import { Link } from "react-router";
import useUserStore from "../../stores/userStore";
import { useNavigate } from "react-router";
import CategoryCourses from "./CategoryCourses";

function HeaderNavbar() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const navi = useNavigate();
  const hdlLogout = () => {
    logout();
    alert("Logged out successfully!");
    navi("/");
  };

  const getAvatarName = () => {
    if (user) {
      if (user.first_name && user.last_name) {
        const firstName = user.first_name.charAt(0).toUpperCase();
        const lastName = user.last_name.charAt(0).toUpperCase();
        return `${firstName}${lastName}`;
      }
    }
  };

  console.log(user)

  return (
    <div className="flex gap-4 justify-between items-center px-4 py-4 h-14 max-w-screen w-580 left-1/2 -translate-x-1/2 rounded-md bg-info fixed top-4 shadow-[0_6px_10px_-2px_rgba(196,196,196,0.4)_!important] z-999">
      <div className="text-primary w-[150px] h-9">
        <a href="/" className="h-full w-full flex items-center justify-center">
          <img
            src="/assets/images/Logo.png"
            alt="web-logo"
            className="h-full w-auto object-contain"
          />
        </a>
      </div>
      <div className="flex flex-1 gap-4">
        <CategoryCourses />
        <label className="input rounded-full bg-primary text-info flex items-center">
          <SearchIcon className="w-5 opacity-60 text-info" />
          <input type="text" placeholder="Search" className="flex-1" />
        </label>
      </div>
      {!user ? (
        <>
          <Link to="/login" className="btn btn-primary text-info w-40 text-lg">
            Login
          </Link>
          <Link to="/register" className="btn text-info w-40 text-lg">
            Sign Up
          </Link>
        </>
      ) : (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle bg-primary avatar "
          >
            <span className="text-xl font-bold">{getAvatarName()}</span>
            <DropdownArrow className="w-6 absolute top-6 left-5 text-neutral shadow-lg" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-primary rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
          >
            <li>
              <Link to="/dashboard" className="text-info hover:bg-accent">
                Dashboard
              </Link>
            </li>
            <li>
              <a className="text-info hover:bg-accent" onClick={hdlLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default HeaderNavbar;
