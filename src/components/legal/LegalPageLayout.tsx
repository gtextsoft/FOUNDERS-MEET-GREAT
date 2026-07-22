import { Link } from "react-router-dom";

interface LegalPageLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, updated, children }: LegalPageLayoutProps) => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-navy/10 bg-white">
      <div className="container mx-auto flex max-w-3xl items-center justify-between px-4 py-5">
        <Link to="/" className="font-display text-lg font-bold uppercase tracking-wide text-navy">
          London CEO &amp; Founders
        </Link>
        <Link to="/" className="font-body text-sm font-medium text-royal hover:text-navy">
          Back to home
        </Link>
      </div>
    </header>

    <main className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-royal">Legal</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-wide text-navy sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 font-body text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="prose-legal mt-10 space-y-8">{children}</div>
    </main>

    <footer className="border-t border-navy/10 bg-navy px-4 py-8">
      <div className="container mx-auto flex max-w-3xl flex-wrap gap-x-5 gap-y-2 font-body text-sm text-white/65">
        <Link to="/privacy" className="hover:text-white">
          Privacy policy
        </Link>
        <Link to="/policy" className="hover:text-white">
          Event policy
        </Link>
        <a href="mailto:products@stephenakintayo.com" className="hover:text-white">
          products@stephenakintayo.com
        </a>
      </div>
    </footer>
  </div>
);

export default LegalPageLayout;
