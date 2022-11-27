import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ImageIcon from "../../../../assets/icons/gundam-icon.png";
import { loginRegisterOnSubmit } from "./onSubmitEvent";

// Styles
import {
  buttonElementStyles,
  divChildrenOfFormElementStyles,
  inputElementStyles,
  labelElementStyles,
} from "./LoginFormStyles";

export interface LoginAndRegisterDataType {
  email: string;
  password: string;
  pathname?: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { pathname } = useLocation();

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const dataUser: LoginAndRegisterDataType = {
      email: email,
      password: password,
      pathname: pathname,
    };

    loginRegisterOnSubmit(dataUser);

    setEmail("");
    setPassword("");
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
        {pathname === "/login" ? (
          <span className="float-left text-sm py-2 ">
            Don't have acount ?
            <Link to="/register" className="text-blue-500 hover:underline">
              {" Register here"}
            </Link>
          </span>
        ) : (
          <span className="float-left text-sm py-2 ">
            Already have acount ?
            <Link to="/login" className="text-blue-500 hover:underline">
              {" Login"}
            </Link>
          </span>
        )}

        {pathname !== "/register" ? (
          <input className={buttonElementStyles} type="submit" value="Login" />
        ) : (
          <input
            className={buttonElementStyles}
            type="submit"
            value="Register"
          />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
