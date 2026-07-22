import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import CountdownStrip from "./CountdownStrip";
import DiamondRule from "./DiamondRule";
import { EVENT_DATE_DISPLAY, EVENT_LOCATION_LABEL, EVENT_TIME_DISPLAY } from "@/lib/event";
import { registrationIncludes } from "@/lib/funnel-content";

const RegistrationSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("london");
  const phoneWithCountryCodeRegex = /^\+[0-9]{1,4}[0-9\s().-]{6,}$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement | null;
    const phoneValue = phoneInput?.value?.trim() ?? "";

    if (!phoneWithCountryCodeRegex.test(phoneValue)) {
      if (phoneInput) {
        phoneInput.setCustomValidity("Please include country code, e.g. +1 555 000 0000");
        phoneInput.reportValidity();
        phoneInput.focus();
      }
      toast.error("Please enter your phone number with country code.");
      return;
    }

    if (phoneInput) {
      phoneInput.setCustomValidity("");
    }

    setLoading(true);
    const formData = new FormData(form);
    formData.append("city", city);

    try {
      const res = await fetch("https://formspree.io/f/xaqpgapo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Registration received! We'll be in touch soon.");
        form.reset();
        setCity("london");
        navigate("/thank-you");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="funnel-section-lg sunburst-panel">
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            label="Final step"
            title="Reserve your seat for the London meet & greet"
            description="Complete the form below. The team will confirm your registration and send venue details before the event."
            align="center"
          />
          <DiamondRule className="mt-6" />
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
          <ScrollReveal delay={0.05}>
            <aside className="lg:sticky lg:top-24">
              <div className="border border-navy/10 bg-white p-6 sm:p-7">
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-royal">
                  Your registration includes
                </p>
                <ul className="mt-5 space-y-3">
                  {registrationIncludes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-navy/10 pt-5">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Event date
                  </p>
                  <p className="mt-1 font-body text-sm font-semibold text-navy">{EVENT_DATE_DISPLAY}</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {EVENT_TIME_DISPLAY} · London, UK
                  </p>
                </div>

                <div className="mt-5 border-t border-navy/10 pt-5">
                  <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Time left to register
                  </p>
                  <CountdownStrip compact />
                </div>
              </div>
            </aside>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="border border-navy/10 bg-white p-5 shadow-[0_24px_60px_-36px_rgba(10,35,90,0.35)] sm:p-8"
            >
              <p className="font-display text-xl font-bold tracking-wide text-navy">Registration form</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Fields marked below are required to secure your seat.
              </p>

              <div className="mt-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-body text-sm text-navy">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Your full name"
                    className="border-navy/15 bg-paper font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-sm text-navy">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="border-navy/15 bg-paper font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body text-sm text-navy">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+44 7700 900000"
                    pattern="^\+[0-9]{1,4}[0-9\s().-]{6,}$"
                    title="Please include country code, e.g. +44 7700 900000"
                    className="border-navy/15 bg-paper font-body"
                  />
                  <p className="font-body text-xs text-muted-foreground">
                    Include country code (for example: +44, +1, +234).
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-sm text-navy">Event location</Label>
                  <Select required value={city} onValueChange={setCity}>
                    <SelectTrigger className="border-navy/15 bg-paper font-body">
                      <SelectValue placeholder="Choose a location" />
                    </SelectTrigger>
                    <SelectContent className="border-navy/10 bg-white">
                      <SelectItem value="london">{EVENT_LOCATION_LABEL}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business" className="font-body text-sm text-navy">
                    Business / industry
                  </Label>
                  <Input
                    id="business"
                    name="business"
                    required
                    placeholder="e.g. Tech, Real Estate, Finance"
                    className="border-navy/15 bg-paper font-body"
                  />
                </div>
              </div>

              <Button variant="hero" size="xl" className="mt-6 w-full" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit registration"}
              </Button>
              <p className="mt-3 text-center font-body text-xs text-muted-foreground">
                By registering, you agree to our{" "}
                <Link to="/privacy" className="text-royal underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/policy" className="text-royal underline-offset-2 hover:underline">
                  Event Policy
                </Link>
                . The team may contact you with event details and updates.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
