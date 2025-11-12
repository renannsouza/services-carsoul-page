import { Instagram, Facebook, Youtube } from "lucide-react";

const SimpleFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-wider">
            <span className="text-foreground">AUTO</span>
            <span className="text-primary">PREMIUM</span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-secondary hover:bg-primary/20 p-2 rounded-lg transition-smooth border border-border hover:border-primary/30"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-secondary hover:bg-primary/20 p-2 rounded-lg transition-smooth border border-border hover:border-primary/30"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-secondary hover:bg-primary/20 p-2 rounded-lg transition-smooth border border-border hover:border-primary/30"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AutoPremium
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
