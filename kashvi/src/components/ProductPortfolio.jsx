
const categories = [
  {
    title: "Health & Wellness",
    description: "Superfoods • Functional Nutrition • Natural Wellness",
    image: "/image/Herbal.png",
    color: "bg-emerald-50",
    button: "bg-[#25483d]",
  },
  {
    title: "FMCG",
    description: "Ready-to-Eat • Ready-to-Cook • Healthy Snacks",
    image: "/image/fmcg.png",
    color: "bg-orange-50",
    button: "bg-[#ad655d]",
  },
  {
    title: "Beauty & Personal Care",
    description: "Natural • Herbal • Clean Beauty",
    image: "/image/beauty.png",
    color: "bg-pink-50",
    button: "bg-[#96516c]",
  },
  {
    title: "Home Decor & Gifts",
    description: "Handcrafted • Heritage • Premium Living",
    image: "/image/home-decor.png",
    color: "bg-amber-50",
    button: "bg-[#806354]",
  },
  {
    title: "Fashion & Lifestyle",
    description: "Ethnic • Handcrafted • Contemporary Lifestyle",
    image: "/image/fashion.png",
    color: "bg-rose-50",
    button: "bg-[#a66f7a]",
  },
];

export default function ProductPortfolio() {
  return (
    <section className="bg-white px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#25483d] md:text-3xl">
            <span>🌿</span>
            Our Product Portfolio
            <span>🌿</span>
          </h2>

          <p className="mt-3 text-sm text-gray-600 md:text-base">
            5 Strategic Product Categories
            <span className="mx-2">|</span>
            20 Carefully Curated Premium Products in Each Category
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <article
              key={category.title}
              className={`${category.color} overflow-hidden rounded-xl
              text-center shadow-sm transition duration-300
              hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="px-3 pb-5 pt-4">
                <h3 className="min-h-12 text-base font-semibold text-gray-800">
                  {category.title}
                </h3>

                <p className="mb-5 min-h-12 text-xs leading-5 text-gray-600">
                  {category.description}
                </p>

                <button
                  className={`${category.button} rounded-full px-6 py-2
                  text-sm font-medium text-white transition hover:opacity-90`}
                >
                  Explore <span className="ml-1">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
