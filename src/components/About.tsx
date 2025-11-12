import { Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por Que Escolher a <span className="text-gradient">AutoPremium</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Excelência em proteção automotiva com padrão internacional de qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificação Internacional</h3>
              <p className="text-muted-foreground">
                Aplicadores certificados com treinamento nas melhores marcas do mundo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agilidade e Qualidade</h3>
              <p className="text-muted-foreground">
                Processos otimizados que garantem rapidez sem comprometer o resultado final
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">
                Consultoria especializada para escolher a melhor solução para seu veículo
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com mais de uma década de experiência no mercado de proteção automotiva, a AutoPremium
              se consolidou como referência em qualidade e inovação. Nossa equipe é formada por
              profissionais certificados e constantemente atualizados com as últimas tecnologias do setor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos apenas produtos premium das marcas mais renomadas do mundo, garantindo
              resultados excepcionais e durabilidade incomparável. Cada projeto é tratado com atenção
              aos mínimos detalhes, porque entendemos que seu veículo merece o melhor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
