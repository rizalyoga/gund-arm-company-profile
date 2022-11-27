import { LoginAndRegisterDataType } from "./LoginForm";

export const loginRegisterOnSubmit = ({
  email,
  password,
  pathname,
}: LoginAndRegisterDataType): void => {
  if (email && password.length > 5 && pathname !== "/register") {
    alert(`LOGIN \nEMAIL : ${email} \nPASSWORD : ${password} `);
  } else if (email && password.length > 5 && pathname === "/register") {
    alert(`REGISTER \nEMAIL : ${email} \nPASSWORD : ${password} `);
  } else if (email && password.length <= 5) {
    alert("Password length minimum 6 character !");
  } else {
    alert("Please input field !");
  }
};
