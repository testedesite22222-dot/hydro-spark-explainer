import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-foreground/10"
            style={{
              width: 8 + i * 6,
              height: 8 + i * 6,
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto font-body"
        >
          Uma jornada educativa pela maior fonte de energia renovável do Brasil — 
          entenda como a água se transforma em eletricidade.
        </motion.p>

        <motion.a
          href="#introducao"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#introducao")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-primary-foreground/15 border border-primary-foreground/25 text-primary-foreground font-display font-medium hover:bg-primary-foreground/25 transition-colors"
          aria-label="Rolar para a introdução"
        >
          Começar a explorar
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </header>
  );
};

export default HeroSection;
