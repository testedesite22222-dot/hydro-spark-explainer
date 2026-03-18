import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import heroImg from "@/assets/hero-dam.jpg";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Vista aérea de uma usina hidrelétrica com barragem e reservatório"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Animated water particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-foreground/10"
            style={{
              width: 6 + i * 5,
              height: 6 + i * 5,
              left: `${10 + i * 11}%`,
              top: `${25 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6"
        >
          <Zap className="w-3.5 h-3.5 text-energy-glow" aria-hidden="true" />
          <span className="text-primary-foreground/80 text-xs font-display font-medium tracking-wide uppercase">
            Projeto de Física — Turma 3008
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-800 text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight max-w-4xl mx-auto"
        >
          Energia Hidrelétrica
          <span className="block text-2xl sm:text-3xl md:text-4xl font-light mt-2 text-primary-foreground/80">
            Da Geração ao Consumo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto font-body"
        >
          Uma jornada educativa pela maior fonte de energia renovável do Brasil — 
          entenda como a água se transforma em eletricidade.
        </motion.p>

        <motion.a
          href="#introducao"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#introducao")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-primary-foreground/15 border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-base hover:bg-primary-foreground/25 transition-all shadow-lg shadow-black/10 backdrop-blur-sm"
          aria-label="Rolar para a introdução"
        >
          Começar a explorar
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </header>
  );
};

export default HeroSection;
