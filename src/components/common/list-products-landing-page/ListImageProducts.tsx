import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import listProductData from "../../../data/product-data/productData.json";
import Logo from "../../../assets/icons/gundam-icon.png";

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
    setDataProducts((prevData) => [...prevData, ...moreData]);
  };

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
        {dataProducts &&
          dataProducts.map((product) => (
            <LazyLoadImage
              key={product.id}
              src={product.src}
              alt={product.alt}
              placeholderSrc={Logo}
              title={product.alt}
              className="object-cover"
            />
          ))}
      </div>
      {listProductData.length !== dataProducts.length ? (
        <button
          className="mt-8 py-3 px-6 delay-75 text-white bg-red-300 hover:bg-violet-300 active:bg-red-300 rounded-full"
          onClick={loadMore}
        >
          More Product
        </button>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ListImageProducts;
