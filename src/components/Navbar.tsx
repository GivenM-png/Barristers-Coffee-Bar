import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  { label: "Menu", href: "/menu", isRoute: true },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-coffee-dark/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2 text-coffee-cream font-heading text-xl font-bold tracking-wide">
          <Coffee className="w-6 h-6 text-coffee-gold" />
          Barristers Coffee Bar
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              {l.isRoute ? (
                <Link to={l.href} className="text-coffee-cream/80 hover:text-coffee-gold transition-colors text-sm font-medium tracking-wide uppercase">
                  {l.label}
                </Link>
              ) : (
                <a href={l.href} className="text-coffee-cream/80 hover:text-coffee-gold transition-colors text-sm font-medium tracking-wide uppercase">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-coffee-cream">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-coffee-dark/95 border-t border-coffee-medium/30 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                {l.isRoute ? (
                  <Link to={l.href} onClick={() => setOpen(false)} className="text-coffee-cream/80 hover:text-coffee-gold transition-colors text-sm font-medium tracking-wide uppercase">
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} onClick={() => setOpen(false)} className="text-coffee-cream/80 hover:text-coffee-gold transition-colors text-sm font-medium tracking-wide uppercase">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
