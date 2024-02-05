import {
  BsSearch,
  BsPersonFill,
  BsFillBasket2Fill,
  BsMenuApp,
  BsFillXCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/images/Logo.png";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      title: "Jewelry & Accessories",
      path: "/",
    },
    {
      title: "Clothing & Shoes",
      path: "/",
    },
    {
      title: "Home & Living",
      path: "/",
    },
    {
      title: "Wedding & Party",
      path: "/",
    },
    {
      title: "Toys & Entertainment",
      path: "/",
    },
    {
      title: "Art & Collectibles",
      path: "/",
    },
    {
      title: "Craft Supplies & Tools",
      path: "/",
    },
  ];
  return (
    <header className="max-w-screen-3xl xl:px-28 px-4 bg-PrimaryBG top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <BsSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
        <a href="" className="flex items-center">
          <img src={logo} alt="" />
        </a>

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="" className="flex items-center gap-2">
            <BsPersonFill /> Account
          </a>
          <a href="" className="flex items-center gap-2">
            <BsFillBasket2Fill /> Shopping
          </a>
        </div>
        <div className="sm: hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <BsFillXCircleFill className="w-5 h-5 text-black" />
            ) : (
              <BsMenuApp className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500">
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
