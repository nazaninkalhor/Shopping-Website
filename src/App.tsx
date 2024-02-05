import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import Collections from "./components/Collections";
import BestSellers from "./components/BestSellers";
import Newsletters from "./components/Newsletters";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newsletters />
      <Footer />
    </>
  );
}

export default App;
