import banner from "../../public/images/image-product.png";
import { BsBagFill } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="bg-PrimaryBG py-12 xl:px-12 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="ms-20 md: w-1/2">
          <img src={banner} alt="" />
        </div>
        <div className=" ms-20 md: w-1/2 ">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <BsBagFill className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
