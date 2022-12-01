const CardNews = ({ missionName, details, thumbnail, type }: any) => {
  const defaultThumbnails: string =
    "https://wallpaperaccess.com/full/1544272.jpg";

  const contentNews =
    "Today, Axiom Space announced SpaceX will fly three additional private crew missions aboard Dragon to and from the Station through 2023. Axiom previously announced their first mission to the International Space Station flying aboard Dragon, currently targeted to liftoff no earlier than January 2022.";

  return (
    <div className="card-container bg-slate-100 border-gray-300 border-[1.5px] shadow-md rounded-md cursor-pointer hover:bg-slate-300 ease-out duration-200">
      <img
        src={thumbnail ? thumbnail : defaultThumbnails}
        alt="Thumbnail News"
        className="w-full rounded-t-md bg-slate-500 "
      />
      <div className="description-container">
        <div className="label-wrapper flex gap-2 px-2 pt-4">
          <p className="font-poppins text-xs bg-red-300 px-2 -mt-2 text-white rounded-sm">
            {type}
          </p>
        </div>
        <div className="content-wrapper px-2 pb-4">
          <h4 className="text-slate-600 font-poppins font-bold text-2xl text-left mt-1">
            {`${missionName?.slice(0, 20)} ...`}
          </h4>
          <p className="text-left font-poppins text-slate-500">
            {details ? details?.slice(0, 100) : contentNews.slice(0, 100)}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
