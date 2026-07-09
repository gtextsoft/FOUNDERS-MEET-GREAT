import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import { EVENT_LOCATION_LABEL } from "@/lib/event";

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
    <section id="register" className="section-padding-lg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid to-background" />
      <div className="container max-w-2xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-eyebrow">Register Now</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Secure Your <span className="gold-gradient-text italic">Seat</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
            <form onSubmit={handleSubmit} className="glass-card gold-border-glow card-accent-top rounded-2xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-body text-sm text-foreground/80">Full Name</Label>
                <Input id="fullName" name="fullName" required placeholder="Your full name" className="bg-navy-light/50 border-white/10 focus:border-gold/40 font-body" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body text-sm text-foreground/80">Email Address</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-navy-light/50 border-white/10 focus:border-gold/40 font-body" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body text-sm text-foreground/80">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                  pattern="^\+[0-9]{1,4}[0-9\s().-]{6,}$"
                  title="Please include country code, e.g. +1 555 000 0000"
                  className="bg-navy-light/50 border-white/10 focus:border-gold/40 font-body"
                />
                <p className="text-xs text-foreground/60 font-body">
                  Include country code (for example: +1, +44, +234).
                </p>
              </div>
              <div className="space-y-2">
                <Label className="font-body text-sm text-foreground/80">Select Location</Label>
                <Select required value={city} onValueChange={setCity}>
                  <SelectTrigger className="bg-navy-light/50 border-white/10 focus:border-gold/40 font-body">
                    <SelectValue placeholder="Choose a location" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10">
                    <SelectItem value="london">{EVENT_LOCATION_LABEL}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="business" className="font-body text-sm text-foreground/80">Business / Industry</Label>
                <Input id="business" name="business" required placeholder="e.g. Tech, Real Estate, Finance" className="bg-navy-light/50 border-white/10 focus:border-gold/40 font-body" />
              </div>
              <Button variant="hero" size="xl" className="w-full mt-4" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Register Now"}
              </Button>
            </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationSection;
