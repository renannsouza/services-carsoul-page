import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const SimpleContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Agende Seu <span className="text-gradient">Serviço</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato e transforme seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+5511999999999"
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-smooth group"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary/20 group-hover:bg-primary/20 transition-smooth">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold mb-1">Telefone</div>
              <div className="text-sm text-muted-foreground">(31) 9999-9999</div>
            </a>

            <a
              href="mailto:contato@autopremium.com"
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-smooth group"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary/20 group-hover:bg-primary/20 transition-smooth">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm text-muted-foreground">contato@carsoul.com</div>
            </a>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold mb-1">Endereço</div>
              <div className="text-sm text-muted-foreground">Belo Horizonte - MG</div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border"
              />
              <Input
                type="tel"
                placeholder="Seu telefone/WhatsApp"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background border-border"
              />
              <Textarea
                placeholder="Qual serviço você procura? Conte sobre seu veículo..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-background border-border min-h-[120px]"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-red"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContact;
