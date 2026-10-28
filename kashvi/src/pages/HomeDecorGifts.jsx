import { useState, useEffect } from "react";

const banners = [
  { image: "/image/b1.png", alt: "FMCG Collection" },
  { image: "/image/b2.png", alt: "Natural Food Products" },
  { image: "/image/b3.png", alt: "Healthy Everyday Products" },
];
export default function HomeDecorGifts() {
  const [current, setCurrent] = useState(0);
  return (
    <section className="min-h-screen bg-amber-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-widest text-amber-700">
          Thoughtful Living
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#244b3f]">
          Home Decor & Gifts
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Discover decorative accents, thoughtful gifts and lifestyle pieces
          that bring warmth and personality to your home.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Home Decor", "Gift Collections", "Premium Living"].map((name) => (
            <article key={name} className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-[#244b3f]">{name}</h2>
              <p className="mt-3 text-gray-600">
                Explore carefully selected pieces for everyday living and gifting.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
