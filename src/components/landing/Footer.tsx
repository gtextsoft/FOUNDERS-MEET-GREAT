import { EVENT_DATE_DISPLAY } from "@/lib/event";

const footerLinks = [
  { label: "Overview", href: "#about" },
  { label: "Schedule", href: "#agenda" },
  { label: "Speaker", href: "#speaker" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];

const Footer = () => (
  <footer className="border-t border-border px-4 py-10 sm:py-12">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <p className="font-display text-2xl font-bold text-foreground">London CEO &amp; Founders Meet &amp; Greet</p>
          <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
            Hosted by the Stephen Akintayo Foundation. {EVENT_DATE_DISPLAY} · London, UK.
          </p>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-wide text-muted-foreground">On this page</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <a href="mailto:products@stephenakintayo.com" className="font-body text-sm text-muted-foreground hover:text-foreground">
          products@stephenakintayo.com
        </a>
        <a href="tel:+12815050527" className="font-body text-sm text-muted-foreground hover:text-foreground">
          +1 (281) 505-0527
        </a>
        <a href="tel:+2348167901719" className="font-body text-sm text-muted-foreground hover:text-foreground">
          +234 816 790 1719
        </a>
      </div>

      <p className="mt-6 font-body text-xs text-muted-foreground">© 2026 Dr. Stephen Akintayo. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
