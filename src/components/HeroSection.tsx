import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import earthNight4k from "@/assets/earth-night-4k.jpg";
import onilLogo from "@/assets/onil-logo.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={earthNight4k}
          alt="Earth at night from space"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Logo com Pulsação Rápida */}
          <div className="mb-6 flex justify-center">
            <img 
              src={onilLogo} 
              alt="ONIL Logo" 
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain animate-soft-pulse"
            />
          </div>
          
          {/* Brand Name - GRADIENTE PRATEADO BRILHANTE */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter flex justify-center items-center">
              <span className="bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                ONIL
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-4 tracking-wide">
            Tecnologia que conecta.
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Soluções que transformam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-slate-200 font-medium px-8 py-6 text-base group transition-all"
            >
              Comece Agora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-slate-200 hover:bg-white/10 font-medium px-8 py-6 text-base"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;