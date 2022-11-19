import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { datas, Users } from "../../../data/getDataUsers";

const PageTwo = () => {
  const [dataUsers, setDataUsers] = useState<Users[] | undefined>([]);

  const navigate = useNavigate();

  useEffect(() => {
    datas().then((data) => setDataUsers(data));
  }, []);

  const toDetailMember = (id: number) => {
    navigate(`/about/member/${id}`);
  };

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="containers py-10 mt-8  px-3 flex justify-center items-center flex-col">
        <h1 className="text-white font-lobster font-bold text-7xl ">
          About us
        </h1>
        <h3 className="py-4 text-white font-poppins text-2xl">
          This is About Page{" "}
        </h3>
        <p className=" text-white text-lef p-4 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          numquam ducimus ea quibusdam nostrum in delectus voluptatibus
          aspernatur fuga amet at cumque veniam quos dicta eum consectetur
          ipsam, commodi sapiente? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptatum accusamus eum quidem aperiam delectus,
          dolor tenetur provident exercitationem voluptas ullam necessitatibus!
          At sunt vel ab quo ipsam repudiandae exercitationem! Tempora. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, voluptates.
          Deleniti officiis optio quis ipsum minus incidunt ratione perferendis,
          soluta atque suscipit omnis adipisci et ipsa in laboriosam sint vel!
        </p>
        <div className="h-2 w-[98%] rounded-full bg-gradient-to-r from-red-300 via-purple-400 to-blue-300" />
        <div className="data-container w-[97%] my-10 ">
          <h1 className="text-white font-poppins font-bold text-[2rem] pb-8">
            Company Member
          </h1>
          {dataUsers &&
            dataUsers.map((data) => (
              <div key={data.id}>
                <p
                  className="text-slate-100 text-left cursor-pointer"
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
