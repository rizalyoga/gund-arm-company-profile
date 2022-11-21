import { FC, lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

// Style
import { linkTabHoverStyle } from "./StylesTab";
import "./LandingPage.scss";

// Component
import CardAssociation from "../../components/common/cards/card-association/CardAssociation";
import HeroSection from "../../components/common/hero-section/HeroSection";
const ListImageProducts = lazy(
  () =>
    import(
      "../../components/common/list-products-landing-page/ListImageProducts"
    )
);

// List Data
import listAssociation from "../../data/assosciation-data/associationsData.json";

const LandingPage: FC = () => {
  return (
    <div className="py-10 flex justify-center items-center flex-col">
      {/* =====================HERO SECTION===================== */}
      <HeroSection />

      <span className="z-10 text-white bottom-0 bg-violet-500 mt-[-20px] py-2 px-8 rounded-full">
        <a href="#" className="sm:font-semibold">
          <span className="font-extrabold">🚀 NEW 🚀 </span> Test your pilot
          skills with our exam and get certified!
        </a>
      </span>

      <div className="containers">
        <div className="content-container w-[100%] my-10">
          {/* =====================MISSION SECTION===================== */}
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

        {/* =====================LIST ASSOCIATIONS SECTION===================== */}
        <h2 className="pb-8 font-extrabold text-[2rem] text-gray-800 text-left">
          BECOME A CERTIFIED G-SYSTEM
        </h2>
        <div className="association-container gap-4 grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
          {listAssociation &&
            listAssociation.map((listAssociation) => (
              <CardAssociation
                key={listAssociation.id}
                id={listAssociation.id}
                nameAssociation={listAssociation.nameAssociation}
                image={listAssociation.image}
                description={listAssociation.description}
                gradientStart={listAssociation.gradientStart}
                gradientFinish={listAssociation.gradientFinish}
              />
            ))}
        </div>

        {/* =====================PRODUCTS SECTION===================== */}
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
