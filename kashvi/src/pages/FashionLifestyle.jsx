
export default function FashionLifestyle() {
  return (
    <section className="min-h-screen bg-rose-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-widest text-rose-700">
          Style Your Everyday
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#244b3f]">
          Fashion & Lifestyle
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Explore contemporary lifestyle products, handcrafted finds and
          accessories for your personal style.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Fashion Essentials", "Lifestyle Accessories", "Handcrafted Finds"].map((name) => (
            <article key={name} className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-[#244b3f]">{name}</h2>
              <p className="mt-3 text-gray-600">
                Find pieces to complement your everyday lifestyle.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
