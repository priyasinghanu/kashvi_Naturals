
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProductPortfolio from "./components/ProductPortfolio";
import FeaturedProducts from "./components/FeaturedProducts";
import BrandBenefits from "./components/BrandBenefits";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffdf6] text-[#123d28]">
      <Navbar />
      <main>
        <HeroSlider />
        <ProductPortfolio />
        <FeaturedProducts />
        <BrandBenefits />
      </main>
      <Footer />
    </div>
  );
}
v