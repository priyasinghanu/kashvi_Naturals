
import { useState, useEffect } from "react";

const banners = [
  { image: "/image/FM2.png", alt: "Beauty and Personal Care Collection" },
  { image: "/image/FM1.png", alt: "Natural Beauty Products" },
  { image: "/image/FM3.png", alt: "Everyday Personal Care" },
];

const categories = [
  {
    title: "Skin Care",
    icon: "🌸",
    description: "Gentle, nature-inspired essentials for your daily skincare routine.",
    banner: "Glow Naturally, Every Day",
    products: [
      "Natural Face Wash",
      "Herbal Face Care",
      "Natural Skin Care",
      "Daily Beauty Care",
    ],
  },
  {
    title: "Hair Care",
    icon: "🌿",
    description: "Everyday hair care inspired by herbal ingredients.",
    banner: "Love Your Hair Naturally",
    products: [
      "Herbal Hair Oil",
      "Natural Hair Care",
      "Herbal Hair Essentials",
      "Daily Hair Care",
    ],
  },
  {
    title: "Personal Care",
    icon: "✨",
    description: "Discover everyday essentials for your personal care routine.",
    banner: "Feel Fresh, Feel Confident",
    products: [
      "Beauty Essentials",
      "Personal Care",
      "Natural Care Products",
      "Daily Care Collection",
    ],
  },
];

const productImages = {
  "Natural Face Wash": "/image/Herbal.png",
  "Herbal Face Care": "/image/1.png",
  "Natural Skin Care": "/image/Beauty.png",
  "Daily Beauty Care": "/image/1.png",

  "Herbal Hair Oil": "/image/Beauty.png",
  "Natural Hair Care": "/image/Herbal.png",
  "Herbal Hair Essentials": "/image/1.png",
  "Daily Hair Care": "/image/Beauty.png",

  "Beauty Essentials": "/image/1.png",
  "Personal Care": "/image/Herbal.png",
  "Natural Care Products": "/image/Beauty.png",
  "Daily Care Collection": "/image/1.png",
};

const productPrices = {
  "Natural Face Wash": 249,
  "Herbal Face Care": 299,
  "Natural Skin Care": 249,
  "Daily Beauty Care": 199,
  "Herbal Hair Oil": 299,
  "Natural Hair Care": 249,
  "Herbal Hair Essentials": 199,
  "Daily Hair Care": 249,
  "Beauty Essentials": 299,
  "Personal Care": 249,
  "Natural Care Products": 199,
  "Daily Care Collection": 249,
};

function ProductCard({ name, index, onAddToCart }) {
  return (
    <article className="min-w-0 rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-36 w-full items-center justify-center overflow-hidden rounded-lg bg-pink-50">
        <img
          src={productImages[name]}
          alt={name}
          className="h-full w-full object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      <h3 className="mt-2 min-h-10 text-xs font-semibold text-gray-800">
        {name}
      </h3>

      <p className="mt-1 font-bold text-[#244b3f]">
        ₹{productPrices[name]}
      </p>

      <button
        type="button"
        onClick={() => onAddToCart(name)}
        className="mt-2 w-full rounded-md bg-[#173f35] px-2 py-2 text-xs text-white transition hover:bg-green-800"
      >
        Add to Cart
      </button>
    </article>
  );
}

export default function BeautyPersonalCare() {
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const addToCart = (name) => {
    setCart((prev) => [...prev, name]);
    alert(`${name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      {/* Top Banner Slider */}
      <div className="relative w-full overflow-hidden">
        <img
          src={banners[current].image}
          alt={banners[current].alt}
          className="h-280px w-full object-cover sm:h-400px lg:h-560px"
        />

        <button
          type="button"
          aria-label="Previous banner"
          onClick={() =>
            setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 shadow transition hover:bg-white"
        >
          ❮
        </button>

        <button
          type="button"
          aria-label="Next banner"
          onClick={() =>
            setCurrent((prev) => (prev + 1) % banners.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 shadow transition hover:bg-white"
        >
          ❯
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((banner, index) => (
            <button
              key={banner.image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Page Heading */}
      <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-700">
          Kashvi Naturals Collection
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#244b3f] sm:text-4xl">
          Beauty &amp; Personal Care
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Discover nature-inspired beauty essentials, herbal hair
          care and everyday personal care products for your routine.
        </p>

        <div className="mt-4 text-sm font-semibold text-[#244b3f]">
          Cart Items: {cart.length}
        </div>

        {/* Category Rows */}
        <div className="mt-8 space-y-6">
          {categories.map((category) => (
            <section
              key={category.title}
              className="grid grid-cols-1 items-stretch gap-4 rounded-2xl border border-pink-100 bg-white p-4 shadow-sm lg:grid-cols-[180px_minmax(0,1fr)_240px]"
            >
              {/* Category Information */}
              <div className="flex flex-col justify-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-2xl">
                  {category.icon}
                </div>

                <h2 className="text-lg font-bold text-[#244b3f]">
                  {category.title}
                </h2>

                <p className="mt-2 text-xs leading-5 text-gray-600">
                  {category.description}
                </p>

                <a
                  href={`#${category.title.toLowerCase().replaceAll(" ", "-")}`}
                  className="mt-4 w-fit rounded-full bg-[#173f35] px-4 py-2 text-xs text-white hover:bg-green-800"
                >
                  View All →
                </a>
              </div>

              {/* Product Cards */}
              <div
                id={category.title.toLowerCase().replaceAll(" ", "-")}
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {category.products.map((name, index) => (
                  <ProductCard
                    key={name}
                    name={name}
                    index={index}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>

              {/* Promotional Banner */}
              <div className="flex min-h-48 flex-col justify-center rounded-xl  from-pink-100 to-rose-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-pink-700">
                  Kashvi Naturals
                </p>

                <h3 className="mt-2 text-xl font-bold leading-tight text-[#244b3f]">
                  {category.banner}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-600">
                  Discover your everyday beauty and personal care essentials.
                </p>

                <a
                  href={`#${category.title.toLowerCase().replaceAll(" ", "-")}`}
                  className="mt-4 w-fit rounded-full bg-[#173f35] px-4 py-2 text-xs text-white hover:bg-green-800"
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
