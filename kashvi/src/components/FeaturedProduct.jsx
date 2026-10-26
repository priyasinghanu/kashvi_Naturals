
const products = [
  {
    name: "Amla Powder",
    image: "./image/01_Amla_Powder.jpg",
    category: "Health & Wellness",
  },
  {
    name: "Beetroot Powder",
    image: "/image/beetroot-powder.png",
    category: "Natural Superfoods",
  },
  {
    name: "Makhana",
    image: "/image/makhana.png",
    category: "Healthy Snacks",
  },
  {
    name: "Herbal Hair Oil",
    image: "/image/hair-oil.png",
    category: "Beauty & Personal Care",
  },
  {
    name: "Natural Face Wash",
    image: "/image/face-wash.png",
    category: "Natural Beauty",
  },
  {
    name: "Organic Superfood",
    image: "/image/superfood.png",
    category: "Premium Nutrition",
  },
];

export default function FeaturedProduct() {
  return (
    <section className="bg-white px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-[#25483d] md:text-3xl">
              🌿 Our Hero Products 🌿
            </h2>

            <p className="mt-2 font-medium text-gray-700">
              Premium Functional Superfoods
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Pure • Natural • Nutritious • Authentic
            </p>
          </div>

          <button className="rounded-full bg-[#25483d] px-5 py-3 text-sm font-medium text-white hover:bg-[#18362d]">
            View All Products →
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-5">
          {products.map((product) => (
            <article
              key={product.name}
              className="w-44 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md sm:w-52"
            >
              <div className="flex h-48 items-center justify-center bg-[#faf8f3] p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-3 text-center">
                <p className="text-xs text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-2 font-semibold text-gray-800">
                  {product.name}
                </h3>

                <button className="mt-3 rounded-full border border-[#25483d] px-4 py-2 text-sm text-[#25483d] hover:bg-[#25483d] hover:text-white">
                  View Product
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
