import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { LoginAndRegisterDataType } from "../../components/common/form/login-form/LoginForm";

export const manualRegisterUser = ({
  email,
  password,
  setAuthing,
  setEmail,
  setPassword,
}: LoginAndRegisterDataType) => {
  const auth = getAuth();

  setAuthing!(true);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      //   console.log(user);
      setEmail!("");
      setPassword!("");
      window.location.href = "/login";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
      alert(errorMessage);
    })
    .finally(() => setAuthing!(false));
};
