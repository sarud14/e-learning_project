import { SearchIcon } from "../icons";
import { Link } from "react-router";


function HeaderNavbar() {
  return (
    <div className="flex gap-4 justify-between items-center px-4 py-4 h-14 w-580 left-1/2 -translate-x-1/2 rounded-md bg-info fixed top-4 shadow-[0_6px_10px_-2px_rgba(196,196,196,0.4)_!important] z-999">
      <div className="text-primary w-[150px] h-9">
         <a href="/" className="h-full w-full flex items-center justify-center">
        <img src="/assets/images/Logo.png" alt="web-logo" className="h-full w-auto object-contain" />
         </a>
      </div>
      <div className="flex flex-1 gap-4">
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-primary rounded-field text-info hover:bg-accent w-40 text-lg"
          >
            Courses
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-primary rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
          >
            <li>
              <a className="text-info hover:bg-accent">Item 1</a>
            </li>
            <li>
              <a className="text-info hover:bg-accent">Item 2</a>
            </li>
          </ul>
        </div>
        <label className="input rounded-full bg-primary text-info flex items-center">
          <SearchIcon className="w-5 opacity-60 text-info" />
          <input type="text" placeholder="Search" className="flex-1" />
        </label>
      </div>
      <Link to="/login" className="btn btn-primary text-info w-40 text-lg">Login</Link>
      <Link to="/register" className="btn text-info w-40 text-lg">Sign Up</Link>
    </div>
  );
}
export default HeaderNavbar;
