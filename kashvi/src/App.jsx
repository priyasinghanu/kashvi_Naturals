
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nnavbar from "./components/Nnavbar.jsx"
import Navbar from "./components/Navbar.jsx";
import HeroSlider from "./components/HeroSlider.jsx";
import ProductPortfolio from "./components/ProductPortfolio.jsx";
import FeaturedProduct from "./components/FeaturedProduct.jsx";
import BrandBenefits from "./components/BrandBenefits.jsx";
import Footer from "./components/Footer.jsx";

import HealthWellness from "./pages/HealthWellnwss.jsx";
import FMCG from "./pages/FMCG.jsx";
import BeautyPersonalCare from "./pages/BeautyPersonalCare.jsx";
import HomeDecorGifts from "./pages/HomeDecorGifts.jsx";
import FashionLifestyle from "./pages/FashionLifestyle.jsx";

function Home() {
  return (
    <>
      <HeroSlider />
      <ProductPortfolio />
      <FeaturedProduct />
      <BrandBenefits />
    </>
  );
}

function AboutUs() {
  return (
    <section className="min-h-screen bg-[#f7f8f2] px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-[#244b3f]">About Kashvi Naturals</h1>
      <p className="mx-auto mt-5 max-w-2xl text-gray-600">
        We bring together natural products and thoughtfully selected
        essentials for your everyday lifestyle.
      </p>
    </section>
  );
}

function ContactUs() {
  return (
    <section className="min-h-screen bg-[#f7f8f2] px-6 py-16">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#244b3f]">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Have a question about our products? Send us a message.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message form is ready to connect to a backend.");
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border p-3"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg border p-3"
            required
          />
          <textarea
            placeholder="Your message"
            className="w-full rounded-lg border p-3"
            rows="4"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-[#244b3f] px-6 py-3 text-white hover:bg-[#356b58]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Nnavbar/>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/health-wellness" element={<HealthWellness />} />
          <Route path="/fmcg" element={<FMCG />} />
          <Route
            path="/beauty-personal-care"
            element={<BeautyPersonalCare />}
          />
          <Route path="/home-decor-gifts" element={<HomeDecorGifts />} />
          <Route path="/fashion-lifestyle" element={<FashionLifestyle />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
