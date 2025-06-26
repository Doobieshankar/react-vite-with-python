import Navbar from "./Layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
/* import { getProducts } from "../actions/productActions"; */
import HeroSection from "./HomeSections/HeroSection";
import FeaturedProducts from "./HomeSections/FeaturedProducts";
import PromoBanner from "./HomeSections/PromoBanner";
import Categories from "./HomeSections/Categories";
import ProductList from "./HomeSections/ProductList";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsState);

  /* useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); */

  return (
    <div className="max-w-7xl w-full relative">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <PromoBanner />
      <Categories />
      <ProductList />
      {/* <div className="mt-32 text-white">
        <ul>
          {products &&
            products.map((prod) => <li key={prod.id}>{prod.name}</li>)}
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
