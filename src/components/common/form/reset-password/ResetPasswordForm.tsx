import { useState } from "react";
import { Link } from "react-router-dom";
import ImageIcon from "../../../../assets/icons/gundam-icon.png";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// Styles
import {
  buttonElementStyles,
  disableButtonElementStyles,
  divChildrenOfFormElementStyles,
  inputElementStyles,
} from "../login-form/LoginFormStyles";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = getAuth();

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (email) {
      setLoading(true);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setLoading(false);
          alert(
            "Please check your email for completed reset password process!"
          );
          setEmail("");
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
          console.error(error);
        });
    } else if (!email) {
      alert("Please input field");
    }
  };

  return (
    <div
      className="z-20 mt-4 mx-2 w-[400px] max-sm:w-[100%] min-h-[300px] rounded-md 
      bg-white shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200 "
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
          <input
            type="email"
            className={inputElementStyles}
            placeholder="Your Email Address"
            title="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          className={loading ? disableButtonElementStyles : buttonElementStyles}
          type="submit"
          value={loading ? "Loading..." : "Reset Password"}
          disabled={loading}
        />
        <span className="absolute mt-[-20px] m-auto left-0 right-0 text-slate-600">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
