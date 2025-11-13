import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-green-500">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Agende uma visita e conheça nossos serviços premium
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefone</div>
                    <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-smooth">
                      (31) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:contato@autopremium.com"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      contato@autopremium.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Endereço</div>
                    <p className="text-muted-foreground">
                      Av. Exemplo, 1234
                      <br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horário de Atendimento</div>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h - 18h
                      <br />
                      Sábado: 8h - 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Conte-nos sobre seu veículo e qual serviço deseja"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border min-h-[120px]"
                />
              </div>
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

export default Contact;
