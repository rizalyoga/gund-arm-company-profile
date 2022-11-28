import { useState, Dispatch, SetStateAction } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import ImageIcon from "../../../../assets/icons/gundam-icon.png";
import { loginRegisterOnSubmit } from "./onSubmitEvent";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Styles
import {
  buttonElementStyles,
  disableButtonElementStyles,
  divChildrenOfFormElementStyles,
  inputElementStyles,
  labelElementStyles,
} from "./LoginFormStyles";

export interface LoginAndRegisterDataType {
  email: string;
  password: string;
  pathname?: string;
  setEmail?: Dispatch<SetStateAction<string>> | undefined;
  setPassword?: Dispatch<SetStateAction<string>> | undefined;
  setAuthing?: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authing, setAuthing] = useState<boolean>(false);

  const { pathname } = useLocation();

  const auth = getAuth();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const dataUser: LoginAndRegisterDataType = {
      email: email,
      password: password,
      pathname: pathname,
      setEmail: setEmail,
      setPassword: setPassword,
      setAuthing: setAuthing,
    };

    loginRegisterOnSubmit(dataUser);
  };

  const loginWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        sessionStorage.setItem("tokenUID", response.user.uid);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
        setAuthing(false);
      });
  };

  return (
    <div
      className="z-20 mt-4 mx-2 w-[400px] max-sm:w-[100%] min-h-[400px] rounded-md 
      bg-white shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <img
        src={ImageIcon}
        alt="icon-company"
        className="m-auto my-4 mt-6"
        width={100}
        height={100}
      />
      <h4 className="text-gray-800 font-bold font-poppins text-[1.5rem] mt-[-25px] tracking-tighter">
        COMPANYS
      </h4>
      <form className="px-4" onSubmit={onSubmit}>
        <div className={divChildrenOfFormElementStyles}>
          <label htmlFor="email" className={labelElementStyles}>
            Email
          </label>
          <input
            type="email"
            className={inputElementStyles}
            placeholder="example@gmail.com"
            title="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={divChildrenOfFormElementStyles}>
          <label htmlFor="password" className={labelElementStyles}>
            Password
          </label>
          <input
            type="password"
            className={inputElementStyles}
            placeholder="password"
            title="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span
          className="float-left text-sm py-2"
          hidden={pathname === "/register" && true}
        >
          <a className="text-slate-500 hover:text-blue-500 hover:underline cursor-pointer">
            Forgot password ?
          </a>
        </span>
        {pathname !== "/register" ? (
          <>
            <input
              className={
                authing ? disableButtonElementStyles : buttonElementStyles
              }
              type="submit"
              value={authing ? "Loading..." : "Login"}
              disabled={authing}
            />
            <div className="h-[1px] rounded-sm w-full bg-slate-200 mt-[-20px] mb-[18px]"></div>
            <input
              className={`${buttonElementStyles} mt-0 text-center`}
              value="Login with google"
              disabled={authing}
              onClick={() => loginWithGoogle()}
              type="submit"
            />
          </>
        ) : (
          <input
            className={
              authing ? disableButtonElementStyles : buttonElementStyles
            }
            type="submit"
            value={authing ? "Loading..." : "Register"}
            disabled={authing}
          />
        )}
        <div className="mt-[-20px] mb-[30px] w-full">
          {pathname === "/login" ? (
            <span className=" text-sm py-2 ">
              Don't have an acount ?
              <Link to="/register" className="text-blue-500 hover:underline">
                {" Sign up "}
              </Link>
            </span>
          ) : (
            <span className=" text-sm py-2 ">
              Already have acount ?
              <Link to="/login" className="text-blue-500 hover:underline">
                {" Login here"}
              </Link>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
