import { Instagram, Facebook, Youtube } from "lucide-react";

const SimpleFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-wider">
            <span className="text-foreground">CAR</span>
            <span className="text-green-500">SOUL</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/carsoulbr/"
              className="bg-secondary hover:bg-primary/20 p-2 rounded-lg transition-smooth border border-border hover:border-primary/30 blank-target"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CarSoul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
