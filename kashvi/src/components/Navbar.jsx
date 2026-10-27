
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "Health & Wellness", path: "/health-wellness" },
  { name: "FMCG", path: "/fmcg" },
  { name: "Beauty & Personal Care", path: "/beauty-personal-care" },
  { name: "Home Decor & Gifts", path: "/home-decor-gifts" },
  { name: "Fashion & Lifestyle", path: "/fashion-lifestyle" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <Link to="/home" className="shrink-0">
          <img
            src="/image/logo.png"
            alt="Kashvi Naturals"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
         
        </Link>

        <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-[#78916b] ${
                  isActive
                    ? "border-b-2 border-[#244b3f] text-[#244b3f]"
                    : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm text-[#244b3f]">
          <Link to="/login" className="hover:underline">
            Login / Register
          </Link>
          <Link to="/wishlist" className="hover:underline">
            Wishlist
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
