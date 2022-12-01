import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { MdOutlineClose } from "react-icons/md";
import RouterData from "../../data/router-data/rotuerData.json";

const Sidebar = (props: {
  showSidebar: boolean;
  setShowSidebar: () => void;
}) => {
  const showSidebar = props.showSidebar;
  const setShowSidebar = props.setShowSidebar;

  const token = sessionStorage.getItem("tokenUID");
  const auth = getAuth();
  const navigate = useNavigate();

  const logOutHandler = () => {
    const doLogOut = window.confirm("Are you sure to log out ?");
    if (doLogOut) {
      signOut(auth);
      sessionStorage.clear();
      navigate("/login");
    }
  };

  const hiddenNavbarMenu = (menu: string): boolean => {
    if (token && menu === "Login") {
      return true;
    } else if (!token && menu === "Dashboard") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      {showSidebar && (
        <MdOutlineClose
          className="flex text-4xl text-gray-800 items-center cursor-pointer fixed right-2 top-2 z-50"
          onClick={setShowSidebar}
        />
      )}

      <div
        className={`${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        } top-0 right-0 w-full text-white fixed h-full z-40 ease-in-out duration-300  flex flex-col justify-center items-center bg-gradient-to-b from-violet-300 to-gray-300`}
      >
        {RouterData.map((router) => (
          <Link
            to={router.link}
            key={router.menu}
            onClick={setShowSidebar}
            className="font-audiowide py-4 text-3xl font-semibold text-gray-700 hover:underline border-y-2 w-full hover:bg-red-300 my-1 ease-out duration-100"
            hidden={hiddenNavbarMenu(router.menu)}
          >
            {router.menu}
          </Link>
        ))}
        <h3
          hidden={token ? false : true}
          onClick={() => {
            logOutHandler(), setShowSidebar();
          }}
          className="font-audiowide py-4 text-3xl font-semibold text-gray-700 hover:underline border-y-2 w-screen hover:bg-red-300 cursor-pointer my-1 ease-out duration-100"
        >
          Log out
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
