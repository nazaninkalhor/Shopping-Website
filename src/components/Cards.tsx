import { Link } from "react-router-dom";

interface Products {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  status: string;
}
interface Props {
  filteredItems: Products[];
}

const Cards = ({ filteredItems }: Props) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to="/">
            <img
              src={item.image}
              className="mx-auto w-full hover:scale-105 transition-all duration-300"
              alt=""
            />
          </Link>
          <div className="mt-4 px-4 mb-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <div className="flex justify-between">
              <p className="text-black/50 ">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
