import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailDataUser } from "../../data/getDetailDataUser";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Users } from "../../data/getDataUsers";
import { headingStyle, paragraphStyle } from "./Styles";
import Loading from "../../components/common/loading/Loading";
import LoaderImage from "../../assets/icons/loader-image.webp";
import dataImageGundam from "../../data/product-data/productData.json";
import { DataProductsProps as DataImageProps } from "../../components/common/list-products-landing-page/ListImageProducts";

const DetailUser = () => {
  const [dataDetailFromUser, setDataDetailFromUser] = useState<
    Users | undefined
  >();
  const [imageGundam, setImageGundam] = useState<DataImageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    matchImageIdWithMemberId();
    detailDataUser(id).then((data) => {
      setDataDetailFromUser(data);
      setLoading(false);
    });
  }, []);

  const matchImageIdWithMemberId = () => {
    if (dataImageGundam) {
      const dataImage = dataImageGundam.filter((data) => {
        return data.id === Number(id);
      });

      setImageGundam(dataImage);
    }
  };

  const addZeroToID = (id: number): string => {
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    } else {
      return id.toString();
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="line-grid-container bg-gray-700 min-h-screen">
      <div className="containers mt-10 text-white text-left">
        <div className="inner-wrapper line-grid-container bg-slate-400 min-h-[90vh] mt-8 p-5 font-audiowide rounded-md flex justify-between lg:flex-row  md:flex-col md:gap-4 max-sm:flex-col ">
          <div className="left-content flex flex-col flex-wrap basis-1/2 z-10 md:basis-2/5">
            <p className={headingStyle}>ID MEMBER : </p>
            <p className={paragraphStyle}>{addZeroToID(Number(id))}</p>
            <p className={headingStyle}>NAME : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.name}</p>
            <p className={headingStyle}>USERNAME : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.username}</p>
            <p className={headingStyle}>PHONE : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.phone}</p>
            <p className={headingStyle}>EMAIL : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.email}</p>
            <p className={headingStyle}>ADDRESS : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.address.city}</p>
            <p className={headingStyle}>COMPANY : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.company.name}</p>
            <p className={headingStyle}>WEBSITE : </p>
            <p className={paragraphStyle}>{dataDetailFromUser?.website}</p>
            <hr className="my-4" />
          </div>
          <div className="right-content md:flex md:justify-center md:w-full max-sm:flex max-sm:justify-center basis-1/2">
            <LazyLoadImage
              src={imageGundam[0]?.src}
              alt={imageGundam[0]?.alt}
              title={imageGundam[0]?.alt}
              placeholderSrc={LoaderImage}
              className="lg:min-w-[500px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
