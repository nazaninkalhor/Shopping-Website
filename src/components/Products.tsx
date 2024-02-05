import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { BsFilter } from "react-icons/bs";
interface Products {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  status: string;
}
const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredItems, setFilteredItems] = useState<Products[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    fetch("../../public/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredItems(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterItems = (category: string) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };
  const handleSortChange = (option: string) => {
    setSortOption(option);
    const sortedItem = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItem.sort((a: Products, b: Products) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "Z-A":
        sortedItem.sort((a: Products, b: Products) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "low-to-high":
        sortedItem.sort((a: Products, b: Products) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItem.sort((a: Products, b: Products) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItem);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">
        Or Subscribe To The Newsletter
      </h2>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
          </div>
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <BsFilter className="text-white h-4 w-4" />
            </div>
            <div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                title={"Category"}
                className="bg-black text-white px-2 py-1 rounded-sm"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Cards filteredItems={filteredItems} />
        </div>
      </div>
    </div>
  );
};

export default Products;
