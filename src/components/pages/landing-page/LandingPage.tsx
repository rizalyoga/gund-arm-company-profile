import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

import { linkTabHoverStyle } from "./Styles";
import "./LandingPage.scss";

const LandingPage: FC = () => {
  const isInternetOnline = window.navigator.onLine;

  return (
    <div className="py-10 flex justify-center items-center flex-col">
      <div className="hero mt-[-30px] min-w-full bg-white py-8 h-[600px] flex flex-col justify-center items-center px-4">
        <h1 className="text-gray-800 font-lobster font-bold text-7xl ">
          Hellows 👋
        </h1>
        <h2 className="pt-4 text-gray-800 font-poppins text-4xl">
          This is my first React Vite Project
        </h2>
        <h4 className="font-poppins text-lg">
          Boost your pilot skills with our hands-on G-System tutorials and
          trainings
        </h4>
      </div>
      <span className="z-10 text-white bottom-0 bg-violet-500 mt-[-20px] py-2 px-8 rounded-full">
        <a href="#" className="sm:font-semibold">
          <span className="font-extrabold">🚀 NEW 🚀 </span> Test your pilot
          skills with our exam and get certified!
        </a>
      </span>
      <div className="containers">
        <div className="content-container w-[100%] my-10">
          <h2 className="pb-8 font-extrabold text-[2rem] text-gray-800">
            OUR MISSIONS
          </h2>
          <nav className="m-auto bg-[#FAF9FE] h-10 ">
            <ul className="h-[100%] flex justify-center items-center gap-7 ">
              <li className={linkTabHoverStyle}>
                <Link to="/"> Mission-1</Link>
              </li>
              <li className={linkTabHoverStyle}>
                <Link to="content2"> Mission-2</Link>
              </li>
              <li className={linkTabHoverStyle}>
                <Link to="content3"> Mission-3</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>

        <iframe
          className="xl:min-h-[600px] lg:min-h-[480px] md:min-h-[380px] min-h-[300px] w-[100%]"
          src="https://www.youtube.com/embed/7-5IRey5wtI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Gundam Video"
        />
      </div>
    </div>
  );
};

export default LandingPage;
