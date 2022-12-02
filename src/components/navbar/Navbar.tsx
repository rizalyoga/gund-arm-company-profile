import React, { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import IconImage from "../../assets/icons/gundam-icon.png";

// Data
import RouterData from "../../data/router-data/rotuerData.json";

// Styles
import "./Navbar.scss";
import { linkHoverStyle } from "./Styles";
import Sidebar from "../sidebar/Sidebar";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("tokenUID");
  const auth = getAuth();

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>): void => {
    const target = event.target as Element;
    if (target.className.includes("active")) {
      console.log("");
    }
  };

  const hiddenNavbarMenu = (menu: string): boolean => {
    if (token && menu === "Login") {
      return true;
    } else if (!token && menu === "Dashboard") {
      return true;
    } else {
      return false;
    }
  };

  const logOutHandler = () => {
    const doLogOut = window.confirm("Are you sure to log out ?");
    if (doLogOut) {
      signOut(auth);
      sessionStorage.clear();
      navigate("/login");
    }
  };

  const toHomepage = () => {
    navigate("/");
  };

  const sidebarShow = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={sidebarShow} />
      <nav className="bg-white h-12 z-10 absolute top-0 w-full shadow-md ">
        <div className="max-w-[1200px] m-auto h-[100%] flex justify-between items-center px-3 font-medium ">
          <div
            className="logo flex flex-row justify-around items-center"
            onClick={toHomepage}
          >
            <img
              src={IconImage}
              alt="icon image"
              className="w-[60px]  ml-[-10px] max-sm:w-[70px] max-sm:ml-[-20px] "
            />
            <h4 className="max-sm:hidden font-bold text-slate-800 text-2xl font-audiowide -ml-3 mt-3 tracking-tighter">
              GUND.ARM
            </h4>
          </div>
          <div className="links">
            <ul className="flex gap-4 max-sm:gap-3">
              {RouterData &&
                RouterData.map((dataRouter) => (
                  <li
                    key={dataRouter.link}
                    className={linkHoverStyle}
                    onClick={(e) => handleClick(e)}
                    hidden={hiddenNavbarMenu(dataRouter.menu)}
                  >
                    <NavLink className="nav-link" to={dataRouter.link}>
                      {dataRouter.menu}
                    </NavLink>
                  </li>
                ))}
              <li
                className={`${linkHoverStyle} cursor-pointer`}
                hidden={token ? false : true}
                onClick={logOutHandler}
              >
                Logout
              </li>

              <GiHamburgerMenu
                onClick={sidebarShow}
                className="text-3xl text-gray-800 cursor-pointer hover:text-gray-500 hidden max-sm:block"
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
