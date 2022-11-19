import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import IconImage from "../../assets/icons/gundam-icon.png";

// Styles
import "./Navbar.scss";
import { linkHoverStyle } from "./Styles";

const Navbar: FC = () => {
  const { pathname } = useLocation();

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>): void => {
    const target = event.target as Element;
    if (target.className.includes("active")) {
      console.log("Active MIN");
    }
  };
  return (
    <nav className="bg-white h-12  ">
      <div className="max-w-[1200px] m-auto h-[100%] flex justify-between items-center px-3 font-medium ">
        <div className="logo flex flex-row justify-around items-center">
          <img
            src={IconImage}
            alt="icon image"
            className="w-[60px]  ml-[-10px] max-sm:w-[70px] max-sm:ml-[-20px] "
          />
          <h4 className="max-sm:hidden font-bold text-slate-800 text-2xl font-poppins tracking-tighter">
            COMPANYS
          </h4>
        </div>
        <div className="links">
          <ul className="flex gap-4">
            <li className={linkHoverStyle} onClick={(e) => handleClick(e)}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className={linkHoverStyle} onClick={(e) => handleClick(e)}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className={linkHoverStyle} onClick={(e) => handleClick(e)}>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
