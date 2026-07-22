import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EVENT_DATE_SHORT } from "@/lib/event";

const navLinks = [
  { label: "Overview", href: "#about" },
  { label: "Schedule", href: "#agenda" },
  { label: "Speaker", href: "#speaker" },
  { label: "Details", href: "#event-details" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-white/95 shadow-[0_8px_30px_-18px_rgba(10,30,80,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.25rem]">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal text-[10px] font-bold tracking-wide text-white">
            SA
          </span>
          <span className="font-display text-lg font-bold uppercase tracking-wide text-navy md:text-xl">
            Stephen Akintayo
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-royal md:text-[11px]">
              Foundation
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-navy/65 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <span className="hidden font-body text-xs font-semibold text-royal lg:inline">
            {EVENT_DATE_SHORT}
          </span>
          <Button variant="hero" size="sm" asChild>
            <a href="#register">Reserve seat</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-navy md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white px-4 pb-5 pt-2 md:hidden">
          <p className="py-2 font-body text-xs font-semibold text-royal">
            {EVENT_DATE_SHORT} · London
          </p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 font-body text-sm font-medium text-navy/70 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-3 w-full" asChild>
            <a href="#register">Reserve seat</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
