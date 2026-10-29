import { useState } from "react";

const decorCategories = [
  {
    title: "Home Decor",
    description: "Beautiful accents to make every corner special.",
    image: "/image/d1.png",
  },
  {
    title: "Gift Collections",
    description: "Thoughtful gifts for every special occasion.",
    image: "/image/d2.png",
  },
  {
    title: "Premium Living",
    description: "Elegant essentials for modern living.",
    image: "/image/d3.png",
  },
];

const products = [
  {
    id: 1,
    name: "Decorative Ceramic Vase",
    price: 699,
    image: "/image/h1.png",
    category: "Home Decor",
  },
  {
    id: 2,
    name: "Natural Gift Hamper",
    price: 999,
    image: "/image/hh1.png",
    category: "Gift Collections",
  },
  {
    id: 3,
    name: "Scented Candle Set",
    price: 499,
    image: "/image/hh2.png",
    category: "Home Decor",
  },
  {
    id: 4,
    name: "Premium Gift Box",
    price: 799,
    image: "/image/hh3.png",
    category: "Gift Collections",
  },
  {
    id: 5,
    name: "Decorative Table Accent",
    price: 599,
    image: "/image/dd4.png",
    category: "Premium Living",
  },
  {
    id: 6,
    name: "Elegant Home Planter",
    price: 449,
    image: "/image/jhh5.png",
    category: "Premium Living",
  },
];

export default function HomeDecorGifts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#244b3f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#e8eee4]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Thoughtful Living
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Make Your Home
              <span className="block text-amber-700">
                Feel Special
              </span>
            </h1>

            <p className="mt-5 max-w-lg leading-7 text-gray-600">
              Discover elegant home decor, meaningful gifts and
              premium lifestyle essentials curated to bring warmth,
              beauty and happiness to your everyday life.
            </p>

            <a
              href="#decor-products"
              className="mt-7 inline-block rounded-full bg-[#244b3f] px-7 py-3 font-semibold text-white transition hover:bg-[#17382e]"
            >
              Explore Collection →
            </a>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-600">
              <span>✦ Elegant Designs</span>
              <span>✦ Thoughtful Gifting</span>
              <span>✦ Premium Style</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/image/hd1.png"
              alt="Elegant home decor collection"
              className="h-72 w-full object-cover md:h-430px"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-8xl px-6 py-14">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Discover Your Style
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Explore Our Collections
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Beautifully selected pieces for your home and the
            people who matter most.
          </p>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {decorCategories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-64 p-1 m-1 w-full object-cover overflow-hidden flec-wrap transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
                <a
                  href="#decor-products"
                  className="mt-4 inline-block font-semibold text-amber-700 hover:text-amber-900"
                >
                  Explore Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section
        id="decor-products"
        className="bg-white px-6 py-14"
      >
        <div className="mx-auto max-w-8xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Curated For You
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Best Picks for Your Home
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              {cart.length} item(s) added to cart
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-xl border border-gray-100 bg-[#fbfaf7] p-3 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-36 items-center justify-center overflow-hidden rounded-lg bg-[#f2eee5] sm:h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>

                <p className="mt-3 text-xs text-amber-700">
                  {product.category}
                </p>

                <h3 className="mt-1 min-h-10 text-sm font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 text-base font-bold">
                  ₹{product.price}
                </p>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full rounded-lg bg-[#244b3f] px-2 py-2 text-xs font-semibold text-white transition hover:bg-[#17382e] sm:text-sm"
                >
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#244b3f] px-6 py-12 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
            Gifts That Speak From The Heart
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Make Every Moment Memorable
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
            From elegant home accents to thoughtful gift hampers,
            find something special for every occasion.
          </p>

          <a
            href="#decor-products"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#244b3f] transition hover:bg-amber-100"
          >
            Shop the Collection →
          </a>
        </div>
      </section>
    </main>
  );
}