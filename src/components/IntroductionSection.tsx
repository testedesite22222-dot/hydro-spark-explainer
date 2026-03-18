import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Droplets, Zap, Globe } from "lucide-react";

const cards = [
  {
    icon: Droplets,
    title: "O que é?",
    text: "A energia hidrelétrica é a energia elétrica obtida a partir do aproveitamento do potencial hidráulico de um curso d'água. A força da água em movimento é convertida em eletricidade por meio de turbinas e geradores instalados em usinas hidrelétricas.",
  },
  {
    icon: Globe,
    title: "Importância Global",
    text: "A hidroeletricidade corresponde a cerca de 16% da produção mundial de eletricidade e é a maior fonte de energia renovável do planeta. No Brasil, representa aproximadamente 65% da matriz elétrica, tornando o país um dos líderes mundiais nessa tecnologia.",
  },
  {
    icon: Zap,
    title: "Princípio Básico",
    text: "O princípio fundamental é simples: a água armazenada em grande altitude possui energia potencial gravitacional. Ao ser liberada e descer por condutos, essa energia se transforma em energia cinética, que movimenta turbinas acopladas a geradores elétricos.",
  },
];

const IntroductionSection = () => {
  return (
    <SectionWrapper
      id="introducao"
      title="Introdução à Energia Hidrelétrica"
      subtitle="Compreenda os fundamentos da principal fonte de energia renovável do Brasil"
    >
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 lg:p-8 hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <card.icon className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default IntroductionSection;
