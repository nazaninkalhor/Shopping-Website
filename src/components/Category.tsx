import { Link } from "react-router-dom";
const Category = () => {
  const companyLogo = [
    { id: 1, img: "/images/01.png" },
    { id: 2, img: "/images/02.png" },
    { id: 3, img: "/images/03.png" },
    { id: 4, img: "/images/04.png" },
    { id: 5, img: "/images/05.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-20">
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map((logo) => (
          <div key={logo.id}>
            <img src={logo.img} alt={`Company Logo ${logo.id}`} />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center text-black md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div className="hover:scale-105 transition-all duration-200">
          <Link to="/">
            <img src="/images/card-1.png" alt="" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/"
              className="w-full hover:scale-105 transition-all duration-200"
            >
              <img src="/images/card-2.png" alt="" />
            </Link>
            <Link
              to="/"
              className="w-full hover:scale-105 transition-all duration-200"
            >
              <img src="/images/card-3.png" alt="" />
            </Link>
            <Link
              to="/"
              className="w-full hover:scale-105 transition-all duration-200"
            >
              <img src="/images/card.png" alt="" />
            </Link>
            <Link
              to="/"
              className="w-full hover:scale-105 transition-all duration-200"
            >
              <img src="/images/card-4.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
