
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Nnavbar from "./components/Nnavbar";
import ProductPortfolio from "./components/ProductPortfolio"
import FeaturedProduct from "./components/FeaturedProduct";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffdf6]">
      <Nnavbar/>
      <Navbar />
      <main>
        <HeroSlider />
      </main>
      <ProductPortfolio/>
      <FeaturedProduct/>
    </div>
  );
}
