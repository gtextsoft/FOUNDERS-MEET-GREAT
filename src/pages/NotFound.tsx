import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="mb-3 font-display text-5xl font-bold tracking-wide text-navy">404</h1>
        <p className="mb-6 font-body text-lg text-muted-foreground">Page not found</p>
        <a href="/" className="font-body text-sm font-semibold text-crimson hover:underline">
          Return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
