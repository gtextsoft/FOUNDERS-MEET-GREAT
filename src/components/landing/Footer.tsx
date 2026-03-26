const Footer = () => (
  <footer className="border-t border-white/5 py-12 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center gap-5 sm:gap-6 text-center">
        <p className="font-display text-lg font-bold gold-gradient-text">America&apos;s Founders&apos; Meet &amp; Greet</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="#about" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">About</a>
          <a href="#cities" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">Cities</a>
          <a href="#register" className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">Register</a>
        </div>
        <a
          href="https://www.stephenakintayo.com/foundersmeet"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-body text-gold hover:opacity-90 transition-opacity"
        >
          Register Via: www.stephenakintayo.com/foundersmeet
        </a>
        <p className="text-sm font-body text-muted-foreground">Email: products@stephenakintayo.com</p>
        <p className="text-sm font-body text-muted-foreground">Contact: +1 (281) 505-0527, +1 (832) 538-0618</p>
        <p className="text-xs font-body text-muted-foreground">© 2026 Dr. Stephen Akintayo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
