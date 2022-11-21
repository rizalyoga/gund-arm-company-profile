import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../../../assets/icons/gundam-icon.png";

const ListImageProducts = () => {
  return (
    <section className="machines-wrapper py-6 rounded-sm bg-gradient-to-br from-gray-100 via-gray-300 to-white ">
      <div className="eva-banner-container overflow-hidden max-h-[500px] mb-6  px-5 ">
        <LazyLoadImage
          src="https://www.projectgunpla.com/evangelion/hero.png"
          placeholderSrc={Logo}
          alt="eva-banner"
          className="object-cover h-[100%] w-[100%]"
        />
      </div>
      <div className="top-row-card-machine gap-6 grid lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 px-5">
        <LazyLoadImage
          src="https://www.projectgunpla.com/gundam/zaku-ortega.png"
          alt="gundam"
          placeholderSrc={Logo}
          className="object-cover"
        />
        <LazyLoadImage
          src="https://www.projectgunpla.com/gundam/zaku-cannon.png"
          alt="gundam"
          placeholderSrc={Logo}
          className="object-cover"
        />
        <LazyLoadImage
          src="https://www.projectgunpla.com/gundam/zaku-char.png"
          alt="gundam"
          placeholderSrc={Logo}
          className="object-cover"
        />
        <LazyLoadImage
          src="https://www.projectgunpla.com/gundam/zaku.png"
          alt="gundam"
          placeholderSrc={Logo}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ListImageProducts;
