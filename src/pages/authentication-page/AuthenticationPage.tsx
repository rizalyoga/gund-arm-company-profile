import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Waves from "../../components/animation/waves/Waves";
import LoginForm from "../../components/common/form/login-form/LoginForm";
import ResetPasswordForm from "../../components/common/form/reset-password/ResetPasswordForm";

const PageThree = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = sessionStorage.getItem("tokenUID");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const formComponent = () => {
    if (pathname === "/reset-password") {
      return <ResetPasswordForm />;
    }

    return <LoginForm />;
  };

  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r from-red-400 to-violet-400 grid place-content-center">
        <div className="containers mt-8 flex justify-center items-center flex-col overflow-hidden">
          <h1 className="text-white font-lobster font-bold text-7xl pt-[50px] ml-[-75px]">
            Hellows<span className="hello-emoticon absolute">👋</span>
          </h1>
          <h2
            className="pt-4 font-poppins text-white text-2xl"
            hidden={pathname === "/reset-password"}
          >
            Please login first
          </h2>
          {/* <LoginForm /> */}
          {formComponent()}
        </div>
      </div>
      <Waves />
    </>
  );
};

export default PageThree;
