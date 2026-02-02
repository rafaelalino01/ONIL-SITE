import { 
  Code2, 
  Bot, 
  Brain, 
  Lightbulb, 
  Settings, 
  Shield 
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description: "Criamos aplicações web e mobile sob medida, com tecnologias modernas e arquitetura escalável para atender às necessidades do seu negócio.",
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e otimize fluxos de trabalho. Reduza custos e aumente a eficiência operacional da sua empresa.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Soluções com IA e Machine Learning para análise de dados, predições, chatbots inteligentes e tomada de decisões baseadas em dados.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Tecnológica",
    description: "Orientação estratégica para transformação digital. Identificamos oportunidades e definimos o melhor caminho para sua evolução tecnológica.",
  },
  {
    icon: Settings,
    title: "Integração de Sistemas",
    description: "Conectamos suas ferramentas e plataformas para criar um ecossistema digital unificado, eliminando silos de informação.",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Proteção de dados e infraestrutura com as melhores práticas de cybersecurity. Mantenha sua empresa segura contra ameaças digitais.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-4">
            Nossos Serviços
          </p>
          
          {/* Título com Gradiente Prateado */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              Soluções completas para seu sucesso digital
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços tecnológicos para 
            impulsionar a transformação digital do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-children">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;