import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EVENT_DATE_SHORT } from "@/lib/event";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Attend", href: "#why-attend" },
  { label: "Location", href: "#cities" },
  { label: "Speaker", href: "#speaker" },
  { label: "Register", href: "#register" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-gold/15 shadow-lg shadow-black/25"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#" className="font-display text-lg md:text-xl font-bold gold-gradient-text leading-tight">
          London CEO &amp; Founders
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <span className="text-xs font-body text-gold/70 tracking-wide hidden lg:inline">{EVENT_DATE_SHORT}</span>
          <Button variant="hero" size="sm" asChild>
            <a href="#register">Register Now</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-gold/15 px-4 pb-6 pt-2">
          <p className="text-xs font-body text-gold/70 tracking-wide py-2">{EVENT_DATE_SHORT} · London</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-body text-muted-foreground hover:text-gold-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-4 w-full" asChild>
            <a href="#register">Register Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
