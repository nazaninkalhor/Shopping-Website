import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Products from "./Products";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bestSellers = products.filter(
    (item: Products) => item.status === "Best Selers"
  );
  console.log(bestSellers);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div>
        <h2 className="text-3xl font-semibold capitalize text-center my-8">
          Best Sellers
        </h2>
      </div>
      <div className="mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product: Products) => (
            <SwiperSlide key={product.id}>
              <Link to="/">
                <img
                  src={product.image}
                  className="mx-auto w-full hover:scale-105 transition-all duration-300"
                  alt=""
                />
              </Link>
              <div className="mt-4 px-4 mb-4">
                <h4 className="text-base font-semibold mb-4">
                  {product.title}
                </h4>
                <div className="flex justify-between">
                  <p className="text-black/50 ">{product.category}</p>
                  <p className="font-semibold mb-10">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
