import { Menu } from "lucide-react";
import vector from "@/assets/vector.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xl font-bold tracking-wider">
          <img
            src={vector}
            alt="CarSoul icon"
            className="h-8 w-8 rounded shadow-sm"
          />
          <span>
            <span className="text-foreground">CAR</span>
            <span className="text-green-500">SOUL</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-green-500 hover:bg-green-500/90 text-white glow-green"
          >
            Agendar Agora
          </Button>
        </nav> */}

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            {/* <nav className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-lg text-muted-foreground hover:text-foreground transition-smooth text-left"
              >
                Serviços
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-green-500 hover:bg-green-500/90 text-white w-full"
              >
                Agendar Agora
              </Button>
            </nav> */}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
