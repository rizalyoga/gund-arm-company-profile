import { FC, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { buttonElementStyles } from "../../components/common/form/login-form/LoginFormStyles";
import Loading from "../../components/common/loading/Loading";
import LogoCompany from "../../assets/icons/loader-image.webp";

const DashboardPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const auth = getAuth();

  const signOutEvent = () => {
    setLoading(true);
    signOut(auth);
    sessionStorage.clear();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="containers relative mt-14">
        <div
          className="absolute left-0 top-0 max-sm:-mt-4 md:-mt-6 lg:mt-5 min-h-screen w-full flex justify-center items-center flex-col z-[5]  bg-white shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200 "
          style={{ backdropFilter: "blur(4px)" }}
        >
          <img src={LogoCompany} alt="GUND.ARM LOGO" className="w-[250px] " />
          <h2 className="pt-4 text-slate-800 text-4xl font-audiowide -mt-6">
            GUND•ARM
          </h2>
          <div>
            <button
              className={`${buttonElementStyles} !bg-red-500 hover:!bg-red-600 active:!bg-red-500 transition font-bold `}
              onClick={() => signOutEvent()}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 min-h-screen object-cover "
      >
        <source
          src="https://object-web.gundamevolution.com/video/c7a40e14faf448e5a0cc499c4e8ccfe6811ad389d20d414294162d2d892e9edb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default DashboardPage;
