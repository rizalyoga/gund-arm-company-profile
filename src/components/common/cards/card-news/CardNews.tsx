import React from "react";

const CardNews = () => {
  const thumbnail: string =
    "https://live-production.wcms.abc-cdn.net.au/f96abe7439e3cf65a5f1d6ef764da0e0?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=260&width=862&height=485";

  const contentNews =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque reiciendis fuga culpa voluptatem laudantium amet sit sequi, soluta vel dicta quam perspiciatis expedita deleniti accusantium non,tempora veritatis dolores?";

  return (
    <div className="card-container bg-slate-200 rounded-md cursor-pointer hover:bg-slate-300 ease-out duration-200">
      <img
        src={thumbnail}
        alt="Thumbnail News"
        className="w-full rounded-t-md"
      />
      <div className="description-container">
        <div className="label-wrapper flex gap-2 px-2 pt-4">
          <p className="font-poppins text-xs bg-red-300 px-2 -mt-2 text-white rounded-sm">
            server
          </p>
          <p className="font-poppins text-xs bg-red-300 px-2 -mt-2 text-white rounded-sm">
            clinet
          </p>
        </div>
        <div className="content-wrapper px-2 pb-4">
          <h4 className="text-white font-poppins font-bold text-2xl text-left">
            Title News
          </h4>
          <p className="text-left font-poppins text-slate-500">
            {`${contentNews.slice(0, 100)} ...`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
