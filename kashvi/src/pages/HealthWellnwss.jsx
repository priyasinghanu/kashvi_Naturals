import { useState, useEffect } from "react";
const rows = [
  {
    category: "Ready-to-Eat",
    subtitle: "Healthy & Tasty Snacks for Every Moment",
    icon: "🥣",
    products: [
      { name: "Roasted Makhana", price: 249, image: "/image/Makhana.png" },
      { name: "Mixed Seeds Snack", price: 299, image: "/image/Seeds.png" },
      { name: "Beetroot Chips", price: 249, image: "/image/Beetroot.png" },
      { name: "Millet Cookies", price: 199, image: "/image/Cookies.png" },
    ],
    bannerTitle: "Healthy Snacks, Healthy Life",
    bannerImage: "/image/snacks-banner.png",
    color: "bg-orange-50",
  },
  {
    category: "Ready-to-Cook",
    subtitle: "Natural Ingredients for Easy & Healthy Cooking",
    icon: "🍲",
    products: [
      { name: "Multi Millet Mix", price: 299, image: "/image/MilletMix.png" },
      { name: "Instant Soup Mix", price: 249, image: "/image/SoupMix.png" },
      { name: "Pancake Mix", price: 299, image: "/image/PancakeMix.png" },
      { name: "Idli Dosa Mix", price: 249, image: "/image/IdliDosaMix.png" },
    ],
    bannerTitle: "Wholesome Meals Made Simple",
    bannerImage: "/image/meals-banner.png",
    color: "bg-rose-50",
  },
  {
    category: "Ready-to-Drink",
    subtitle: "Natural Beverages for a Refreshing You",
    icon: "🥤",
    products: [
      { name: "Lemon Grass Tea", price: 299, image: "/image/Tea.png" },
      { name: "Amla Juice", price: 249, image: "/image/AmlaJuice.png" },
      { name: "Beetroot Juice", price: 249, image: "/image/BeetrootJuice.png" },
      { name: "Herbal Drink Mix", price: 299, image: "/image/HerbalDrink.png" },
    ],
    bannerTitle: "Refresh Rejuvenate Stay Natural",
    bannerImage: "/image/drink-banner.png",
    color: "bg-green-50",
  },
  {
    category: "Premium Grocery",
    subtitle: "Everyday Essentials in Pure & Natural Form",
    icon: "🛍️",
    products: [
      { name: "Sona Chur Rice", price: 299, image: "/image/Rice.png" },
      { name: "Katarni Rice", price: 349, image: "/image/KatarniRice.png" },
      { name: "Millet Flour Mix", price: 249, image: "/image/MilletFlour.png" },
      { name: "Jaggery Powder", price: 199, image: "/image/Jaggery.png" },
    ],
    bannerTitle: "Pure Grocery Pure Health",
    bannerImage: "/image/grocery-banner.png",
    color: "bg-amber-50",
  },
  {
    category: "Healthy Snacks",
    subtitle: "Nutritious Snacks for a Better You",
    icon: "🌿",
    products: [
      { name: "Trail Mix", price: 299, image: "/image/TrailMix.png" },
      { name: "Fox Nuts", price: 249, image: "/image/FoxNuts.png" },
      { name: "Energy Bites", price: 249, image: "/image/EnergyBites.png" },
      { name: "Granola Mix", price: 299, image: "/image/Granola.png" },
    ],
    bannerTitle: "Snack Smart Live Healthy",
    bannerImage: "/image/granola-banner.png",
    color: "bg-emerald-50",
  },
];

const banners = [
  {
    image: "/image/ww.png",
    
    alt: "Kashvi Natural - Goodness of Nature",
  },
  {
    image: "/image/h2.png",
    alt: "Kashvi Natural - Nature's Care",
  },
  {
    image: "/image/h3.png",
    alt: "Kashvi Natural - Healthy Choices",
  },
];
export default function HealthWellness() {
  const [current, setCurrent] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
      }, 3000);
  
      return () => clearInterval(timer);
    }, []);
  return (
    
    <div className="relative w-full overflow-hidden">
      <img
        src={banners[current].image}
        alt={banners[current].alt}
        className="w-full h-140 object-cover"
      />
        <button
          type="button"
          aria-label="Previous banner"
          onClick={() =>
            setCurrent((current - 1 + banners.length) % banners.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 shadow"
        >
          ❮
        </button>

        <button
          type="button"
          aria-label="Next banner"
          onClick={() => setCurrent((current + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 shadow"
        >
          ❯
        </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      
    <section className="min-h-screen bg-[#f7f8f2] px-6 py-5">
      <div className="mx-auto max-w-8xl">
        <h1 className="text-4xl bg-amber-200 font-semibold uppercase tracking-widest text-green-700 text-center">
          Super Food
        </h1>
        <h5 className="mt-3 text-2xl font-bold text-[#244b3f] text-center">
           Discover superfoods, herbal ingredients and natural wellness products
          for your everyday routine.
        </h5>
        

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Amla Powder",description: "RS-200",button: "Add To Cart",image: "/image/Amla_Powder.jpg" },
            { name: "Mushroom Powder",description: "RS-200",button:"Add To cart" , image: "/image/02_Mushroom_Powder.jpg" },
            { name: "Makhana Powder",description: "RS-200",button:"Add To cart" , image: "/image/Makhana_Powder.jpg" },
            { name: "Beetroot Powder",description: "RS-200",button:"Add To cart" , image: "/image/Beetroot_Powder.jpg" },
            { name: "Amla Powder",description: "RS-200",button:"Add To cart" , image: "/image/Amla_Powder.jpg" },
            { name: "Mushroom Powder",description: "RS-200",button:"Add To cart" , image: "/image/02_Mushroom_Powder.jpg" },
            { name: "Makhana Powder",description: "RS-200",button:"Add To cart" , image: "/image/Makhana_Powder.jpg" },
            { name: "Beetroot Powder",description: "RS-200",button:"Add To cart" , image: "/image/Beetroot_Powder.jpg" },
          ].map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full rounded-xl object-contain"
              />
              <h2 className="mt-4 text-lg font-semibold text-[#244b3f] text-center">
                {product.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-[#907ea1] text-center">
                {product.description}
              </p>
              <button
                  className={`$ rounded-full px-6 py-2
                  text-sm font-medium text-white transition hover:opacity-90 bg-green-900 text-center object-center`}
                >{product.button}
              
                </button>
            </article>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}
