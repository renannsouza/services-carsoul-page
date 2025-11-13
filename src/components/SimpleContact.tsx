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
              Agende Seu <span className="text-green-500">Serviço</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato e transforme seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+5511999999999"
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-green-500/50 transition-smooth group"
            >
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/20 group-hover:bg-green-500/20 transition-smooth">
                <Phone className="h-6 w-6 text-green-500" />
              </div>
              <div className="font-semibold mb-1">Telefone</div>
              <div className="text-sm text-muted-foreground">(31) 9999-9999</div>
            </a>

            <a
              href="mailto:contato@autopremium.com"
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-green-500/50 transition-smooth group"
            >
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/20 group-hover:bg-green-500/20 transition-smooth">
                <Mail className="h-6 w-6 text-green-500" />
              </div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm text-muted-foreground">contato@carsoul.com</div>
            </a>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-green-500/50 transition-smooth group cursor-pointer">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/20 group-hover:bg-green-500/20 transition-smooth">
                <MapPin className="h-6 w-6 text-green-500" />
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
                className="w-full bg-green-500 hover:bg-green-500/90 text-white glow-green"
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
