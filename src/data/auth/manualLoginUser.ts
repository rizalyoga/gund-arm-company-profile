import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginAndRegisterDataType } from "../../components/common/form/login-form/LoginForm";

export const manualLoginUser = ({
  email,
  password,
  setAuthing,
  setEmail,
  setPassword,
}: LoginAndRegisterDataType) => {
  const auth = getAuth();
  setAuthing!(true);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user.uid;
      sessionStorage.setItem("tokenUID", user);

      setEmail!("");
      setPassword!("");

      window.location.href = "/dashboard";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    })
    .finally(() => setAuthing!(false));
};
