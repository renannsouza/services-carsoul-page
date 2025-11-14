import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ppfImage from "@/assets/carPPF.png";
import filmImage from "@/assets/hero-film.jpg";
import nanoImage from "@/assets/hero-nano.jpg";
import mainImage from "@/assets/hero-main.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const services = [
  {
    title: "PPF",
    description:
      "Película de proteção de pintura que evita arranhões, riscos e pequenos impactos, mantendo a originalidade da lataria.",
    image: ppfImage,
    features: [
      "Alta Resistência",
      "Efeito Self-Healing",
      "Proteção Contra Riscos",
    ],
  },
  {
    title: "Filme Solar 20%",
    description:
      "Película automotiva com 20% de transparência, oferecendo equilíbrio entre aparência sofisticada, conforto térmico e proteção contra raios UV.",
    image: filmImage,
    features: [
      "Transparência 20%",
      "Proteção UV 99%",
      "Redução de Calor Moderada",
    ],
  },
  {
    title: "Nano Proteção",
    description:
      "Revestimento nanotecnológico que cria uma película invisível, aumentando o brilho e facilitando a limpeza.",
    image: filmImage,
    features: ["Brilho Intenso", "Hidrorepelência", "Proteção Prolongada"],
  },
  {
    title: "Cristalização dos Vidros",
    description:
      "Tratamento que cria uma camada resistente e repelente à água, melhorando a visibilidade e aumentando a segurança na condução.",
    image: filmImage,
    features: [
      "Maior Visibilidade",
      "Efeito Hidrofóbico",
      "Facilidade na Limpeza",
    ],
  },
  {
    title: "Espelhamento de Pintura",
    description:
      "Processo de polimento avançado que remove microarranhões e realça o brilho espelhado da pintura.",
    image: filmImage,
    features: [
      "Brilho Espelhado",
      "Remoção de Microarranhões",
      "Acabamento Premium",
    ],
  },
  {
    title: "Filme PS4",
    description:
      "Película automotiva de alta performance com proteção térmica e estética superior, ideal para quem busca conforto e estilo.",
    image: filmImage,
    features: ["Proteção UV 99%", "Alta Performance Térmica", "Visual Premium"],
  },
];

const CarCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-12 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Proteção Premium{" "}
            <span className="text-green-500">Para Seu Veículo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos serviços automotivos de alto padrão com tecnologia de
            ponta
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-transparent">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Image */}
                      <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="space-y-6 p-6 md:p-8">
                        <div>
                          <span className="text-green-500 font-semibold text-sm tracking-wider uppercase">
                            Serviço Premium
                          </span>
                          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                            {service.title}
                          </h2>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="bg-card border border-border rounded-lg p-4 text-center"
                            >
                              <div className="text-green-500 font-bold text-sm">
                                {feature}
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* 
                        <Button
                          size="lg"
                          onClick={scrollToContact}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red group"
                        >
                          Solicitar Orçamento
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                        </Button> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted transition-smooth"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCarousel;
