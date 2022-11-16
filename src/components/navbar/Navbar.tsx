import { FC } from "react";
import { Link } from "react-router-dom";

// Styles
import { linkHoverStyle } from "./Styles";

const Navbar: FC = () => {
  return (
    <nav className="bg-white h-12  ">
      <div className="max-w-[1200px] m-auto h-[100%] flex justify-between items-center px-3 font-medium ">
        <div className="logo">
          <h4 className="font-semibold text-slate-800">NAVBAR</h4>
        </div>
        <div className="links">
          <ul className="flex gap-4">
            <li className={linkHoverStyle}>
              <Link to="/">Home</Link>
            </li>
            <li className={linkHoverStyle}>
              <Link to="/about">About</Link>
            </li>
            <li className={linkHoverStyle}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
