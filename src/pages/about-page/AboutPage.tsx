import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDataAllMember,
  AllMemberDataType,
} from "../../data/member-data/getDataAllMember";

const PageTwo = () => {
  const [dataUsers, setDataUsers] = useState<AllMemberDataType[] | undefined>(
    []
  );

  const navigate = useNavigate();

  useEffect(() => {
    getDataAllMember().then((data) => setDataUsers(data));
  }, []);

  const toDetailMember = (id: number) => {
    navigate(`/about/member/${id}`);
  };

  return (
    <div className="line-grid-container bg-gray-700 min-h-screen mt-10 w-full">
      <div className="containers  py-10 px-3 flex justify-center items-center flex-col">
        <h1 className="font-lobster font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-red-300 ">
          About us
        </h1>
        <h3 className="py-4 text-white font-audiowide text-3xl font-bold">
          GUND•ARM.Inc
        </h3>
        <p className=" text-white text-lef p-4 -mt-4 ">
          GUND•ARM.Inc (株式会社ガンダム Kabushiki Gaisha Gandamu) is a research
          and development company from the Ad Stella in Mobile Suit Gundam the
          Witch from Mercury. GUND•ARM.Inc created from the merger of{" "}
          <a
            className="text-sky-300"
            href="https://gundam.fandom.com/wiki/Shin_Sei_Development_Corporation"
            target="blank"
          >
            Shin Sei Development Corporation
          </a>{" "}
          and{" "}
          <a
            className="text-sky-300"
            href="https://gundam.fandom.com/wiki/Peil_Technologies"
            target="blank"
          >
            Peil Technologies's{" "}
          </a>
          development teams. Our main focus is to research and develop the
          various medical applications of the{" "}
          <a
            className="text-sky-300"
            href="https://gundam.fandom.com/wiki/GUND_Format"
            target="blank"
          >
            GUND Format
          </a>{" "}
          technology.
        </p>
        <div className="h-2 w-[98%] rounded-full bg-gradient-to-r from-red-300 via-purple-400 to-blue-300" />
        <div className="data-container w-[97%] my-10 ">
          <h1 className="text-white font-poppins font-bold text-[2rem] pb-8">
            Develompment Teams
          </h1>
          {dataUsers &&
            dataUsers.map((data) => (
              <div key={data.id}>
                <p
                  className="text-slate-100 text-left cursor-pointer hover:text-sky-300"
                  onClick={() => toDetailMember(data.id)}
                >
                  {`${data.id}. ${data.name} - ${data.company.name}`}
                </p>
                <hr className="pb-4" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
