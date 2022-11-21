import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { linkTabHoverStyle } from "../landing-page/StylesTab";

const Homepage: FC = () => {
  return (
    <div className="containers py-10 flex justify-center items-center flex-col">
      <h1 className="text-white font-bold text-7xl">~Hello👋~</h1>
      <h2 className="pt-4 text-white text-4xl">
        This is my first React Vite Project
      </h2>
      <div className="content-container w-[100%] my-10">
        <nav className="m-auto bg-white h-10 ">
          <ul className="h-[100%] flex justify-center items-center gap-7 ">
            <li className={linkTabHoverStyle}>
              <Link to="/"> Content-1</Link>
            </li>
            <li className={linkTabHoverStyle}>
              <Link to="content2"> Content-2</Link>
            </li>
            <li className={linkTabHoverStyle}>
              <Link to="content3"> Content-3</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
