import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import listProductData from "../../../data/product-data/productData.json";
import LoaderImage from "../../../assets/icons/loader-image.webp";

export interface DataProductsProps {
  id: number;
  src: string;
  alt: string;
}

const ListImageProducts = () => {
  const [dataProducts, setDataProducts] = useState<DataProductsProps[]>([]);

  useEffect(() => {
    if (listProductData) {
      setDataProducts(listProductData.slice(0, 4));
    }
  }, []);

  const loadMore = () => {
    const moreData = listProductData.slice(4);
    setTimeout(() => {
      setDataProducts((prevData) => [...prevData, ...moreData]);
    }, 500);
  };

  return (
    <section className="machines-wrapper duration-300 py-6 rounded-sm bg-gradient-to-b from-gray-100 via-gray-300 to-[#F9FAFC] relative">
      <div className="eva-banner-container overflow-hidden max-h-[500px] mb-6  px-5 ">
        <LazyLoadImage
          src="https://www.projectgunpla.com/evangelion/hero.png"
          placeholderSrc={LoaderImage}
          alt="eva-banner"
          className="object-cover h-[100%] w-[100%]"
        />
      </div>
      <div className="top-row-card-machine gap-6 grid lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 px-5">
        {dataProducts &&
          dataProducts.map((product) => (
            <LazyLoadImage
              key={product.id}
              src={product.src}
              alt={product.alt}
              placeholderSrc={LoaderImage}
              title={product.alt}
              className="object-cover hover:scale-105 ease-in-out duration-300 "
            />
          ))}
      </div>
      {listProductData.length !== dataProducts.length && (
        <button
          className="relative mt-8 py-3 px-6 ease-in duration-200 rounded-full text-white bg-gradient-to-tl from-blue-300 via-purple-400 to-red-300 hover:underline active:bg-violet-300  hover:ring-2 hover:ring-sky-300 active:ring-violet-400 "
          onClick={loadMore}
        >
          Show More
        </button>
      )}
    </section>
  );
};

export default ListImageProducts;
