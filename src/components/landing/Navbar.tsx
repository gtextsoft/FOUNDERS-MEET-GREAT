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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.5rem]">
        <a href="#" className="font-display text-lg font-bold leading-tight text-foreground md:text-xl">
          London CEO &amp; Founders
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <span className="hidden font-body text-xs text-muted-foreground lg:inline">{EVENT_DATE_SHORT}</span>
          <Button variant="hero" size="sm" asChild>
            <a href="#register">Reserve seat</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-2 md:hidden">
          <p className="py-2 font-body text-xs text-muted-foreground">{EVENT_DATE_SHORT} · London</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 font-body text-sm text-muted-foreground hover:text-foreground"
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
