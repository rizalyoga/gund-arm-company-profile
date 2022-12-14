import { useLocation, Link } from "react-router-dom";
import "./Footer.scss";

import CompanyIcon from "../../assets/icons/gundam-icon.png";
import DataRouter from "../../data/router-data/rotuerData.json";

const Footer = () => {
  const { pathname } = useLocation();
  const exceptionPage: string[] = ["/login", "/register", "/reset-password"];
  const auth: string | null = sessionStorage.getItem("tokenUID");

  if (exceptionPage.includes(pathname) || pathname.includes("/member")) {
    return <></>;
  }

  const exceptLink = (menu: string) => {
    if (!auth && menu === "Dashboard") {
      return true;
    }
  };

  return (
    <footer className="footer-container min-h-[200px] text-gray-700 w-[100%] grid place-items-center overflow-hidden ">
      <div className="inner-wrapper containers  h-full w-full flex justify-between items-center px-0 max-sm:px-2 max-sm:flex-col-reverse ">
        <div className="left-content h-[100%] flex basis-1/2 md:basis-2/5 items-center max-sm:w-full">
          <img src={CompanyIcon} alt="company-icon" className="max-sm:-ml-4 " />
          <h1 className="font-semibold text-[2rem] font-audiowide tracking-tighter ml-[-20px] mt-[16px] ">
            GUND.ARM.Inc
          </h1>
        </div>
        <div className="right-conten">
          <ul className="flex gap-3 justify-evenly mb-2 font-semibold text-slate-700 duration-200 ease-in max-sm:pt-2 max-sm:-mb-0">
            {DataRouter.map((dataRouter) => (
              <li key={dataRouter.link} hidden={exceptLink(dataRouter.menu)}>
                <Link to={dataRouter.link} className="hover:text-slate-500 ">
                  {dataRouter.menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" flex gap-2 basis-1/2 md:basis-3/5 justify-end md:mr-[12px] max-sm:w-full max-sm:justify-start max-sm:mb-[-100px]">
            <input
              type="email"
              className="mt-[16px] p-2 rounded-sm border-slate-400 border focus:ring-0 focus:ring-sky-300 focus:outline-none focus:outline-sky-300 focus:border-sky-300 max-sm:h-10 max-sm:w-[70%] "
              placeholder="Email Address"
            />
            <button className="mt-[16px] py-2 px-4 text-white bg-sky-300 rounded-sm ease-in duration-200 hover:underline active:bg-sky-400  hover:ring-2 hover:ring-sky-400 active:ring-sky-400 max-sm:h-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
