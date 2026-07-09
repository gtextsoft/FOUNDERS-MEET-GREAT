import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { EVENT_DATE_DISPLAY } from "@/lib/event";

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/GyUvocdp9K6GPkjT9ElDQD";

const ThankYou = () => (
  <div className="flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
    <div className="relative z-10 w-full max-w-lg">
      <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
          <CheckCircle2 className="h-7 w-7 text-gold" />
        </div>

        <div className="mt-6 space-y-3">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">Registration received</h1>
          <p className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
            Thank you for registering for the London CEO &amp; Founders Meet &amp; Greet on {EVENT_DATE_DISPLAY}. The team will contact you with venue details and next steps.
          </p>
        </div>

        <div className="mt-6 space-y-3 border-t border-border pt-6">
          <p className="font-body text-sm text-foreground/90">
            Join the community to stay updated and connect with fellow attendees.
          </p>
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
              Join the community
            </a>
          </Button>
        </div>

        <a href="/" className="mt-6 inline-block font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
          Back to home
        </a>
      </div>
    </div>
  </div>
);

export default ThankYou;
