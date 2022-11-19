import { useState } from "react";
import ImageIcon from "../../../../assets/icons/gundam-icon.png";

// Styles
import {
  buttonElementStyles,
  divChildrenOfFormElementStyles,
  inputElementStyles,
  labelElementStyles,
} from "./LoginFormStyles";

interface LoginDataType {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataUser: LoginDataType = {
      email,
      password,
    };

    if (dataUser.email && password) {
      alert(`EMAIL : ${dataUser.email} \nPASSWORD : ${dataUser.password} `);
    } else {
      alert("please check your Input ");
    }
  };

  return (
    <div className="z-20 mt-4 mx-2 bg-slate-100 w-[400px] max-sm:w-[100%] min-h-[400px] rounded-md">
      <img
        src={ImageIcon}
        alt="icon-company"
        className="m-auto my-4 mt-6"
        width={100}
        height={100}
      />
      <h4 className="font-bold font-poppins text-[1.5rem] mt-[-25px]">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className={buttonElementStyles} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
