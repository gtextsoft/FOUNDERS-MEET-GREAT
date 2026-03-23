const Footer = () => (
  <footer className="border-t border-white/5 py-12 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        <p className="font-display text-lg font-bold gold-gradient-text">Founder's Meet &amp; Greet</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="#about" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">About</a>
          <a href="#cities" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">Cities</a>
          <a href="#register" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">Register</a>
        </div>
        <p className="text-xs font-body text-muted-foreground">
          © 2026 Dr. Stephen Akintayo. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
