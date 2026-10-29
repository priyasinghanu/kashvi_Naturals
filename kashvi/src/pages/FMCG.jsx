
import { useState, useEffect } from "react";

const banners = [
  { image: "/image/FM2.png", alt: "FMCG Collection" },
  { image: "/image/FM1.png", alt: "Natural Food Products" },
  { image: "/image/FM3.png", alt: "Healthy Everyday Products" },
];

const categories = [
  {
    title: "Ready-to-Eat",
    description: "Healthy & tasty snacks for every moment",
    
    banner: "Healthy Snacks, Healthy Life",
    products: ["Roasted Makhana", "Mixed Seeds Snack", "Beetroot Chips", "Millet Cookies"],
  },
  {
    title: "Ready-to-Cook",
    description: "Natural ingredients for easy & healthy cooking",
    
    banner: "Wholesome Meals Made Simple",
    products: ["Multi Millet Mix", "Instant Soup Mix", "Pancake Mix", "Idli Dosa Mix"],
  },
  {
    title: "Ready-to-Drink",
    description: "Natural beverages for a refreshing you",
    
    banner: "Refresh, Rejuvenate, Stay Natural",
    products: ["Lemon Grass Tea", "Amla Juice", "Beetroot Juice", "Herbal Drink Mix"],
  },
];

const productImages = {
  "Roasted Makhana": "/image/Roasted Makhana.png",
  "Mixed Seeds Snack": "/image/Seeds Snack.png",
  "Beetroot Chips": "/image/Beetroot Chips.png",
  "Millet Cookies": "/image/Millet Cookies.png",
  "Multi Millet Mix": "/image/mmm.png",
  "Instant Soup Mix": "/image/ism.png",
  "Pancake Mix": "/image/pcm.png",
  "Idli Dosa Mix": "/image/idli.png",
  "Lemon Grass Tea": "/image/lgt.png",
  "Amla Juice": "/image/aj.png",
  "Beetroot Juice": "/image/bj.png",
  "Herbal Drink Mix": "/image/hd.png",
};

function ProductCard({ name, index }) {
  return (
    <article className="min-w-0 rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-33 w-50 items-center justify-center overflow-hidden rounded-lg bg-orange-50">
        <img
          src={productImages[name]}
          alt={name}
          className="h-full w-full object-fit: contain;
"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>
      <h3 className="mt-2 min-h-10 text-xs font-semibold text-gray-800">
        {name}
      </h3>
      <p className="mt-1 font-bold text-[#244b3f]">
        ₹{[249, 299, 249, 199][index]}
      </p>
      <button
        type="button"
        onClick={() => alert(`${name} selected`)}
        className="mt-2 w-full rounded-md bg-[#173f35] px-2 py-2 text-xs text-white hover:bg-green-800"
      >
        Add to Cart
      </button>
    </article>
  );
}

export default function FMCG() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      
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
      </div>

     
      <div className="mx-auto max-w-8xl px-4 py-10 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
          Fast Moving Consumer Goods
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#244b3f] sm:text-4xl">
          Our FMCG Collection
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Discover everyday essentials, healthy snacks and natural products
          for convenient living.
        </p>

       
        <div className="mt-8 space-y-6">
          {categories.map((category) => (
            <section
              key={category.title}
              className="grid grid-cols-1 items-stretch gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm lg:grid-cols-[180px_minmax(0,1fr)_240px]"
            >
           
              <div className="flex flex-col justify-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-2xl">
                  {category.icon}
                </div>
                <h2 className="text-lg font-bold text-[#244b3f]">
                  {category.title}
                </h2>
                <p className="mt-2 text-xs leading-5 text-gray-600">
                  {category.description}
                </p>
                <a
                  href="#fmcg-products"
                  className="mt-4 w-fit rounded-full bg-[#173f35] px-4 py-2 text-xs text-white"
                >
                  View All →
                </a>
              </div>

              
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {category.products.map((name, index) => (
                  <ProductCard key={name} name={name} index={index} />
                ))}
              </div>

       
              <div className="flex min-h-48 flex-col justify-center rounded-xl bg-gradient from-orange-100 to-rose-50 p-4">
                <h3 className="text-xl font-bold leading-tight text-[#244b3f]">
                  {category.banner}
                </h3>
                <p className="mt-2 text-xs text-gray-600">
                  Natural goodness for your everyday life.
                </p>
                <a
                  href="#fmcg-products"
                  className="mt-4 w-fit rounded-full bg-[#173f35] px-4 py-2 text-xs text-white"
                >
                  Shop Now →
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
