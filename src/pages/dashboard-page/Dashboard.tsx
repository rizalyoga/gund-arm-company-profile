import { FC, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { buttonElementStyles } from "../../components/common/form/login-form/LoginFormStyles";
import Loading from "../../components/common/loading/Loading";

const DashboardPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const auth = getAuth();

  const signOutEvent = () => {
    setLoading(true);
    signOut(auth);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="containers mt-10 py-10 min-h-[90vh]  flex justify-center items-center flex-col">
      <h1 className="text-slate-800 font-bold text-7xl">~Hello👋~</h1>
      <h2 className="pt-4 text-slate-800 text-4xl">Wellcome on Gund-arm</h2>
      <div>
        <button className={buttonElementStyles} onClick={() => signOutEvent()}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
