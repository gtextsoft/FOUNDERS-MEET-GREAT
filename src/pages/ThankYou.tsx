import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/GyUvocdp9K6GPkjT9ElDQD";

const ThankYou = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-glow-pulse" />
    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gold/3 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

    <div className="relative z-10 w-full max-w-lg">
      <div className="glass-card gold-border-glow rounded-2xl p-8 sm:p-10 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-gold" />
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            Registration <span className="gold-gradient-text">Successful!</span>
          </h1>
          <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
            Thank you for registering for the London CEO &amp; Founders Meet &amp; Greet on Saturday, 13th June 2026. We&apos;ll be in touch with more details soon.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <p className="font-body text-foreground/80 text-sm">
            Join the community to stay updated and connect with fellow attendees.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="w-full sm:w-auto"
            asChild
          >
            <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
              Join the Community
            </a>
          </Button>
        </div>

        <a href="/" className="inline-block text-sm font-body text-muted-foreground hover:text-gold transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  </div>
);

export default ThankYou;
