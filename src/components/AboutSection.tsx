import { CheckCircle2 } from "lucide-react";

const features = [
  "Equipe especializada em tecnologias de ponta",
  "Metodologias ágeis para entregas rápidas",
  "Suporte contínuo e manutenção preventiva",
  "Soluções personalizadas para cada negócio",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Inovação e excelência em cada{" "}
              <span className="text-gradient">projeto</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A ONIL nasceu da paixão por tecnologia e do desejo de transformar 
              negócios através de soluções digitais inteligentes. Combinamos 
              expertise técnica com visão estratégica para entregar resultados 
              que superam expectativas.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Nossa missão é democratizar o acesso à tecnologia de ponta, 
              tornando-a acessível e eficiente para empresas de todos os 
              portes e segmentos.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="gradient-border p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Projetos Entregues</p>
            </div>
            <div className="gradient-border p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                30+
              </div>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="gradient-border p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                5+
              </div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="gradient-border p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                24/7
              </div>
              <p className="text-muted-foreground">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
