import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero relative mt-[-30px] min-w-full bg-white py-8 h-[600px] flex flex-col justify-center items-center px-4">
      <h1 className="text-gray-800 font-lobster font-bold text-7xl ml-[-75px]">
        Wellcome <span className="hello-emoticon absolute -mt-2">👋</span>
      </h1>
      <h2 className="pt-2 text-gray-800 font-poppins text-4xl">
        This is my first React Vite Project
      </h2>
      {/* <h4 className="font-poppins text-md">
        Boost your pilot skills with our hands-on G-System tutorials and
        trainings
      </h4> */}
      <p className="font-poppins text-md">
        All gunpla pictures taken from projectgunpla.com by Dwinawan
      </p>
    </div>
  );
};

export default HeroSection;
