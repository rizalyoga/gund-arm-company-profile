import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAnimation from "../../assets/404/404-error-animate.svg";

const UnknownPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <section className="flex justify-center items-center flex-col min-h-screen bg-gradient-to-br from-red-400 to-violet-400 ">
      <img
        src={ErrorAnimation}
        alt="Error-Animation"
        className="max-sm:min-h-full lg:w-[800px]"
      />
    </section>
  );
};

export default UnknownPage;
