
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Products", href: "#portfolio" },
  { name: "Health & Wellness", href: "#health" },
  { name: "FMCG", href: "#fmcg" },
  { name: "Beauty & Personal Care", href: "#beauty" },
  { name: "Home Decor & Gifts", href: "#decor" },
  { name: "Fashion & Lifestyle", href: "#fashion" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-[#fffdf6] shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4">
        <img src="./image/logo.png"  className="w-22 h-12 object-contain"></img>
        {/* Logo */}
        <a href="#home" className="shrink-0 text-center text-[#123d28]">
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-[#263d2d] transition hover:text-green-700"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="shrink-0 rounded-full bg-[#123d28] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Shop Now
        </a>
      </div>

      {/* Mobile Menu */}
      <nav className="flex gap-5 overflow-x-auto border-t border-green-100 px-4 py-3 xl:hidden">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="shrink-0 whitespace-nowrap text-sm font-medium text-[#263d2d]"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
