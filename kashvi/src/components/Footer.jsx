
export default function Footer() {
  return (
    <footer className="bg-[#244b3f] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-8xl gap-8 sm:grid-cols-2 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold">Kashvi Naturals</h2>
          <p className="mt-3 text-sm leading-6 text-gray-200">
            Natural products for a healthier and happier lifestyle.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/#products" className="hover:text-yellow-300">Our Products</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Categories</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li><a href="/health-wellness" className="hover:text-yellow-300">Health & Wellness</a></li>
            <li><a href="/fmcg" className="hover:text-yellow-300">FMCG</a></li>
            <li><a href="/beauty-personal-care" className="hover:text-yellow-300">Beauty & Personal Care</a></li>
            <li><a href="/home-decor-gifts" className="hover:text-yellow-300">Home Decor & Gifts</a></li>
            <li><a href="/fashion-lifestyle" className="hover:text-yellow-300">Fashion & Lifestyle</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="mt-3 text-sm text-gray-200">
            Discover our curated collection of quality products.
          </p>
        </div>

      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-5 text-center">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Kashvi Naturals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
