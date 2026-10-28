
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Organic Cotton Tote Bag",
    category: "Accessories",
    price: 399,
    oldPrice: 599,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Natural Everyday Wear",
    category: "Fashion",
    price: 899,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Minimalist Wrist Watch",
    category: "Accessories",
    price: 699,
    oldPrice: 999,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85",
    tag: "New Arrival",
  },
  {
    id: 4,
    name: "Classic Casual Sneakers",
    category: "Footwear",
    price: 1299,
    oldPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    tag: "Trending",
  },
  {
    id: 5,
    name: "Elegant Women's Outfit",
    category: "Fashion",
    price: 1499,
    oldPrice: 1899,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85",
    tag: "Premium",
  },
  {
    id: 6,
    name: "Everyday Sunglasses",
    category: "Accessories",
    price: 499,
    oldPrice: 799,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
    tag: "Best Value",
  },
  {
    id: 7,
    name: "Comfort Casual Shoes",
    category: "Footwear",
    price: 999,
    oldPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85",
    tag: "Popular",
  },
  {
    id: 8,
    name: "Premium Leather Handbag",
    category: "Accessories",
    price: 1199,
    oldPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",
    tag: "Featured",
  },
];

const categories = [
  { name: "All Products", icon: "✦" },
  { name: "Fashion", icon: "♧" },
  { name: "Accessories", icon: "◇" },
  { name: "Footwear", icon: "⌁" },
];

export default function FashionLifestyle({ onAddToCart }) {
  const [activeCategory, setActiveCategory] =
    useState("All Products");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = products
    .filter(
      (product) =>
        activeCategory === "All Products" ||
        product.category === activeCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      setCart((previous) => [...previous, product]);
    }

    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#263b2c]">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-1440px px-4 pt-6 sm:px-8">
        <div className="relative min-h-430px overflow-hidden rounded-3xl bg-[#e9e5d8] sm:min-h-500px">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=90"
            alt="Fashion and lifestyle collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-red from-[#172c20]/85 via-[#172c20]/50 to-transparent" />

  <div className="relative z-10 flex min-h-430px max-w-2xl flex-col items-start justify-center px-6 py-12 text-white sm:min-h-500px sm:px-14 lg:px-20">
            <span className="mb-5 rounded-full border border-white/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em]">
              Kashvi Natural Lifestyle
            </span>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-6xl">
              Style That Feels
              <span className="mt-2 block font-serif italic text-[#e8d6a9]">
                Naturally You.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/85 sm:text-base">
              Discover everyday fashion, timeless accessories
              and lifestyle essentials curated for your unique style.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("fashion-products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 rounded-full bg-[#f4eddb] px-7 py-3.5 text-sm font-semibold text-[#263b2c] transition hover:bg-white"
            >
              Explore Collection →
            </button>
          </div>
        </div>
      </section>

    
      <section className="mx-auto max-w-1440px px-4 py-12 text-center sm:px-8 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8051]">
          Thoughtfully Curated
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Fashion & Lifestyle
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          From wardrobe essentials to everyday accessories,
          find products that bring comfort, elegance and personality
          to your lifestyle.
        </p>
      </section>


      <section className="mx-auto grid max-w-1440px grid-cols-1 gap-5 px-4 sm:grid-cols-3 sm:px-8">
        {[
          {
            title: "Fashion",
            subtitle: "Everyday style, elevated",
            image:
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
          },
          {
            title: "Accessories",
            subtitle: "Details make the difference",
            image:
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85",
          },
          {
            title: "Footwear",
            subtitle: "Step into your style",
            image:
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
          },
        ].map((category) => (
          <button
            key={category.title}
            onClick={() => {
              setActiveCategory(category.title);
              document
                .getElementById("fashion-products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative h-64 overflow-hidden rounded-2xl text-left sm:h-80"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0  from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-white/85">
                {category.subtitle}
              </p>
              <span className="mt-3 inline-block text-sm underline underline-offset-4">
                Shop Now →
              </span>
            </div>
          </button>
        ))}
      </section>

      
      <section
        id="fashion-products"
        className="mx-auto max-w-1440px px-4 py-14 sm:px-8 sm:py-20"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b8051]">
              Find Your Favorites
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Explore Our Collection
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Discover your next everyday essential.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            {filteredProducts.length} products
            {cart.length > 0 && (
              <span className="ml-4 font-semibold text-[#31563a]">
                Cart: {cart.length} items
              </span>
            )}
          </p>
        </div>

        {/* Search and Sort */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fashion, bags, shoes..."
            className="w-full rounded-xl border border-[#e5e2d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#536b4b] sm:max-w-sm"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-[#e5e2d8] bg-white px-4 py-3 text-sm outline-none focus:border-[#536b4b]"
          >
            <option value="featured">Featured Products</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

       
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition ${
                activeCategory === category.name
                  ? "border-[#294732] bg-[#294732] text-white"
                  : "border-[#e5e2d8] bg-white text-gray-600 hover:border-[#294732]"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

      
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-[#efede6] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-4/5 overflow-hidden bg-[#f1efe8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-[#f5eddb] px-3 py-1.5 text-[10px] font-semibold text-[#53603d] sm:text-xs">
                    {product.tag}
                  </span>
                </div>

                <div className="p-3 sm:p-5">
                  <p className="text-[10px] uppercase tracking-widest text-[#9b8051] sm:text-xs">
                    {product.category}
                  </p>

                  <h3 className="mt-2 min-h-10 text-sm font-semibold leading-5 text-[#263b2c] sm:text-base">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-base font-bold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`mt-4 w-full rounded-xl px-3 py-3 text-xs font-semibold transition sm:text-sm ${
                      addedId === product.id
                        ? "bg-[#718b61] text-white"
                        : "bg-[#294732] text-white hover:bg-[#3c6145]"
                    }`}
                  >
                    {addedId === product.id
                      ? "✓ Added to Cart"
                      : "＋ Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-white px-5 py-16 text-center">
            <p className="text-lg font-semibold">
              No products found
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or select a different category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Products");
              }}
              className="mt-5 rounded-full bg-[#294732] px-6 py-3 text-sm text-white"
            >
              View All Products
            </button>
          </div>
        )}
      </section>

    
      <section className="mx-4 mb-10 overflow-hidden rounded-3xl bg-#e8e5d8 sm:mx-8">
        <div className="mx-auto max-w-1200px px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b744c]">
            The Kashvi Promise
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Everyday Essentials,
            <span className="block font-serif italic">
              Timeless Style.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">
            Thoughtfully selected products to complement your
            everyday moments and personal style.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All Products");
              setSearch("");
              document
                .getElementById("fashion-products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-7 rounded-full bg-[#294732] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3c6145]"
          >
            Discover More →
          </button>
        </div>
      </section>
    </main>
  );
}
