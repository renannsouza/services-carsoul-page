import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold tracking-wider mb-4">
              <span className="text-foreground">CAR</span>
              <span className="text-green-500">SOUL</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Proteção premium para veículos de luxo com tecnologia de ponta e acabamento impecável.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#contact" className="hover:text-green-500 transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
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
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CarSoul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
