import { LoginAndRegisterDataType } from "./LoginForm";
import { manualLoginUser } from "../../../../data/auth/manualLoginUser";
import { manualRegisterUser } from "../../../../data/auth/manualRegisterUser";

export const loginRegisterOnSubmit = ({
  email,
  password,
  pathname,
  setPassword,
  setEmail,
  setAuthing,
}: LoginAndRegisterDataType): void => {
  if (email && password.length > 5 && pathname !== "/register") {
    manualLoginUser({ email, password, setAuthing, setEmail, setPassword });
  } else if (email && password.length > 5 && pathname === "/register") {
    manualRegisterUser({ email, password, setAuthing, setEmail, setPassword });
  } else if (email && password.length <= 5) {
    alert("Password length minimum 6 character !");
  } else {
    alert("Please fill in the email and password fields !");
  }
};
