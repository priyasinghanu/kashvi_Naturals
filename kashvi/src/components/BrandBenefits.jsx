
export default function BeautyPersonalCare() {
  const products = [
    {
      name: "Natural Face Wash",
      description: "Gentle care for your daily skincare routine.",
      image: "/image/facewash.png",
    },
    {
      name: "Herbal Hair Oil",
      description: "Herbal-inspired hair care for everyday use.",
      image: "/image/Beauty.png",
    },
    {
      name: "Beauty & Personal Care",
      description: "Explore our nature-inspired personal care collection.",
      image: "/image/bea.png",
    },
  ];

  return (
    <section className="min-h-screen bg-pink-50 px-6 py-14">
      <div className="mx-auto max-w-8xl">
        <p className="font-semibold uppercase tracking-widest text-pink-700 text-center">
          Kashvi Naturals Collection
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[#244b3f] text-center">
          Beauty & Personal Care
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600 text-center">
          Discover nature-inspired beauty, herbal care and personal care
          essentials for your everyday routine.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full rounded-xl object-contain"
              />

              <h2 className="mt-4 text-xl font-semibold text-[#244b3f]">
                {product.name}
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
