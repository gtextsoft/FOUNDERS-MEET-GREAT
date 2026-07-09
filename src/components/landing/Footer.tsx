import { EVENT_DATE_DISPLAY } from "@/lib/event";

const Footer = () => (
  <footer className="border-t border-gold/10 py-12 sm:py-14 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="glass-card gold-border-glow card-accent-top rounded-2xl p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold gold-gradient-text">London CEO &amp; Founders Meet &amp; Greet</p>
            <p className="mt-3 text-sm font-body text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed">
              Hosted by the Stephen Akintayo Foundation. Join Dr. Stephen Akintayo, Founder SACI HOLDINGS, in London on {EVENT_DATE_DISPLAY}.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-xs tracking-[0.18em] uppercase text-gold/80 mb-3">Quick Links</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-end">
              <a href="#about" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">About</a>
              <a href="#cities" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">Location</a>
              <a href="#speaker" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">Speaker</a>
              <a href="#register" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">Register</a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gold/10 my-6 sm:my-7" />

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
          <a href="mailto:products@stephenakintayo.com" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">
            products@stephenakintayo.com
          </a>
          <a href="tel:+12815050527" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">
            +1 (281) 505-0527
          </a>
          <a href="tel:+2348167901719" className="text-sm font-body text-muted-foreground hover:text-gold-light transition-colors">
            +234 816 790 1719
          </a>
        </div>

        <p className="text-xs font-body text-muted-foreground text-center mt-6">© 2026 Dr. Stephen Akintayo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
