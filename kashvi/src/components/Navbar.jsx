
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 lg:px-8">

        {/* Logo */}
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          <img
            src="/image/logo.png"
            alt="Kashvi Natural"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden flex-wrap items-center justify-center gap-x-4 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-b-2 border-[#244b3f] text-[#244b3f]"
                    : "text-gray-700 hover:text-[#78916b]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Account Links */}
        <div className="hidden items-center gap-3 text-sm text-[#244b3f] 2xl:flex">
          <Link to="/login">Login / Register</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 xl:hidden">
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="text-xl text-[#244b3f] sm:hidden"
          >
            ♡
          </Link>

          <Link
            to="/cart"
            aria-label="Cart"
            className="text-xl sm:hidden"
          >
            🛒
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-md border border-gray-200 px-3 py-2 text-2xl text-[#244b3f]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-3 shadow-md xl:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-gray-100 py-3 text-sm font-medium ${
                    isActive
                      ? "text-[#244b3f]"
                      : "text-gray-700 hover:text-[#78916b]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex flex-wrap gap-5 py-4 text-sm font-medium text-[#244b3f]">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login / Register
              </Link>
              <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                Wishlist
              </Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
