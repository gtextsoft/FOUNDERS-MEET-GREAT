import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { EVENT_DATE_DISPLAY } from "@/lib/event";

const footerLinks = [
  { label: "Overview", href: "#about" },
  { label: "Schedule", href: "#agenda" },
  { label: "Speaker", href: "#speaker" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];

const legalLinks = [
  { label: "Privacy policy", to: "/privacy" },
  { label: "Event policy", to: "/policy" },
];

const contactItems = [
  {
    label: "Email",
    value: "products@stephenakintayo.com",
    href: "mailto:products@stephenakintayo.com",
    icon: Mail,
  },
  {
    label: "US line",
    value: "+1 (281) 505-0527",
    href: "tel:+12815050527",
    icon: Phone,
  },
  {
    label: "Nigeria line",
    value: "+234 816 790 1719",
    href: "tel:+2348167901719",
    icon: Phone,
  },
];

const Footer = () => (
  <footer className="bg-navy text-white">
    <div className="border-b border-white/10 px-4 py-4">
      <div className="container mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em]">
          <span className="text-brass-light">Email:</span>{" "}
          <a href="mailto:products@stephenakintayo.com" className="text-white hover:underline">
            products@stephenakintayo.com
          </a>
        </p>
        <p className="font-body text-xs text-white/65">{EVENT_DATE_DISPLAY} · London, UK</p>
      </div>
    </div>

    <div className="container mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-2xl font-bold tracking-wide text-white">
            CEOs &amp; Founders&apos; Meet &amp; Greet
          </p>
          <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-white/65">
            Hosted by the Stephen Akintayo Foundation. An evening for founders who want serious conversations in London.
          </p>
        </div>

        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-brass-light">
            On this page
          </p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-brass-light">
            Contact
          </p>
          <ul className="mt-4 space-y-3">
            {contactItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="group flex items-start gap-3 p-1">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-brass-light" />
                  <span>
                    <span className="block font-body text-[11px] uppercase tracking-wide text-white/50">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-body text-sm text-white/85 group-hover:text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs text-white/50">
          © 2026 Dr. Stephen Akintayo. All rights reserved.
        </p>

        <nav className="flex flex-wrap items-center gap-x-1 gap-y-2" aria-label="Legal">
          {legalLinks.map((link, index) => (
            <span key={link.to} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-white/30" aria-hidden>
                  ·
                </span>
              )}
              <Link
                to={link.to}
                className="font-body text-xs text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
