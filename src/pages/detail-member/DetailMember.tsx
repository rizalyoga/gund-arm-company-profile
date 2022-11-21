import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailDataUser } from "../../data/getDetailDataUser";
import { Users } from "../../data/getDataUsers";
import Loading from "../../components/common/loading/Loading";

const DetailUser = () => {
  const [dataDetailFromUser, setDataDetailFromUser] = useState<
    Users | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    detailDataUser(id).then((data) => {
      setDataDetailFromUser(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="containers mt-8 text-white text-left">
        <p className=" mt-8">ID Member : {dataDetailFromUser?.id}</p>
        <p>Name : {dataDetailFromUser?.name}</p>
        <p>Username : {dataDetailFromUser?.username}</p>
        <p>Phone : {dataDetailFromUser?.phone}</p>
        <p>Email : {dataDetailFromUser?.email}</p>
        <p>Address : {dataDetailFromUser?.address.city}</p>
        <p>Company : {dataDetailFromUser?.company.name}</p>
        <p>Website : {dataDetailFromUser?.website}</p>
      </div>
    </div>
  );
};

export default DetailUser;
