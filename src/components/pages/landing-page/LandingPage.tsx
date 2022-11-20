import { FC, lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

// Style
import { linkTabHoverStyle } from "./Styles";
import "./LandingPage.scss";

// Component
import CardAssociation from "../../common/cards/card-association/CardAssociation";
import HeroSection from "../../common/hero-section/HeroSection";
const ListImageProducts = lazy(
  () => import("../../common/list-products-landing-page/ListImageProducts")
);

// Logo Associations
import AeAssociation from "../../../assets/logo-association/ae-association.png";
import BellAssociation from "../../../assets/logo-association/bell-association.png";
import EarthAssociation from "../../../assets/logo-association/earth-association.png";
import TekadanAssociation from "../../../assets/logo-association/tekadan-association.png";
import ZaftAssociation from "../../../assets/logo-association/zaft-association.webp";
import GjalarhornAssociation from "../../../assets/logo-association/blue-horse-association.png";

const LandingPage: FC = () => {
  const isInternetOnline = window.navigator.onLine;

  return (
    <div className="py-10 flex justify-center items-center flex-col">
      <HeroSection />

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

        <h2 className="pb-8 font-extrabold text-[2rem] text-gray-800 text-left">
          BECOME A CERTIFIED G-SYSTEM
        </h2>
        <div className="gap-4 grid lg:grid-cols-3 max-sm:grid-cols-1">
          <CardAssociation
            nameAssociation="Bell Association"
            image={BellAssociation}
            description=" Get started with Bell-G-System and earn the Bell-G-System Associate
          certification!"
            gradientStart="#4324BD"
            gradientFinish="#95d0a7"
          />
          <CardAssociation
            nameAssociation="AE Association"
            image={AeAssociation}
            description=" Get started with AE-G-System and earn the AE-G-System Associate
          certification!"
            gradientStart="#4324BD"
            gradientFinish="#50abdd"
          />
          <CardAssociation
            nameAssociation="Earth Association"
            image={EarthAssociation}
            description=" Get started with Earth-G-System and earn the Earth-G-System Associate
          certification!"
            gradientStart="#4324BD"
            gradientFinish="#f300fb"
          />
          <CardAssociation
            nameAssociation="ZAFT Association"
            image={ZaftAssociation}
            description=" Get started with ZAFT-G-System and earn the ZAFT-G-System Associate
          certification!"
            gradientStart="#4324BD"
            gradientFinish="#f300fb"
          />
          <CardAssociation
            nameAssociation="Tekadan Association"
            image={TekadanAssociation}
            description=" Get started with Tekadan-G-System and earn the Tekadan-G-System Associate
          certification!"
            gradientStart="#4324BD"
            gradientFinish="#f300fb"
          />
          <CardAssociation
            nameAssociation="Earth Association"
            image={GjalarhornAssociation}
            description=" Get started with Gjalarhorn-G-System and earn the Gjalarhorn-G-System Associate
          certification!"
            gradientStart="#4324BD"
            gradientFinish="#f300fb"
          />
        </div>

        <h2 className="py-8 font-extrabold text-left text-[2rem] text-gray-800">
          PRODUCTS
        </h2>

        <Suspense
          fallback={
            <div className=" flex justify-center items-center">
              <h1 className="font-extrabold">Loading...</h1>
            </div>
          }
        >
          <ListImageProducts />
        </Suspense>

        <iframe
          className="xl:min-h-[600px] lg:min-h-[480px] md:min-h-[380px] min-h-[300px] w-[100%] mt-6"
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
