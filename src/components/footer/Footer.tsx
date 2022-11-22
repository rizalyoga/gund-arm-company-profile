import { useLocation } from "react-router-dom";
import "./Footer.scss";

import CompanyIcon from "../../assets/icons/gundam-icon.png";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/login") {
    return <></>;
  }

  return (
    <div className="footer-container min-h-[200px] text-gray-700 relative bottom-0 z-50 w-[100%] grid place-items-center overflow-hidden ">
      <div className="inner-wrapper containers  h-full w-full flex justify-between items-center px-0 max-sm:px-2 max-sm:flex-col-reverse ">
        <div className="left-content h-[100%] flex basis-1/2 md:basis-2/5 items-center max-sm:w-full">
          <img src={CompanyIcon} alt="company-icon" className="max-sm:-ml-4" />
          <h1 className="font-semibold text-[2rem] font-audiowide tracking-tighter ml-[-20px] mt-[16px] ">
            GUND.ARM.Inc
          </h1>
        </div>
        <div className="right-content 2 flex gap-2 basis-1/2 md:basis-3/5 justify-end md:mr-[12px] max-sm:w-full max-sm:justify-start max-sm:mb-[-100px]">
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
  );
};

export default Footer;
