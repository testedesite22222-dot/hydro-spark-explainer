import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Droplets, Zap, Globe, Info } from "lucide-react";

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

const funFacts = [
  "A Usina de Itaipu já produziu mais de 2,9 bilhões de MWh desde sua inauguração — recorde mundial.",
  "O Brasil possui mais de 200 usinas hidrelétricas em operação.",
  "Uma única turbina de Itaipu pode gerar 700 MW — suficiente para abastecer 1,5 milhão de pessoas.",
  "O ciclo hidrológico (evaporação → chuva → rios) é o que torna a hidrelétrica uma fonte renovável.",
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
            className="glass-card rounded-xl p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <card.icon className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.text}</p>
          </motion.article>
        ))}
      </div>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 max-w-3xl mx-auto rounded-xl bg-primary/5 border border-primary/15 p-6 lg:p-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-primary" aria-hidden="true" />
          <h3 className="font-display font-semibold text-lg text-foreground">Você sabia?</h3>
        </div>
        <ul className="space-y-3" role="list">
          {funFacts.map((fact, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              {fact}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </SectionWrapper>
  );
};

export default IntroductionSection;
