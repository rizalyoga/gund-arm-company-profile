import { useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/login") {
    return <></>;
  }

  return (
    <div className="footer-container min-h-[300px] text-gray-700 relative bottom-0 z-50 w-[100%] grid place-content-center">
      <h1 className="font-semibold text-[2rem] font-lobster tracking-tighter">
        🚀 Space Companys 🚀
      </h1>
    </div>
  );
};

export default Footer;
