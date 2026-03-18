import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const ConclusionSection = () => {
  return (
    <SectionWrapper id="conclusao" title="Conclusão">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass-card rounded-2xl p-8 lg:p-10"
      >
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            A energia hidrelétrica é, sem dúvida, um dos pilares da matriz energética brasileira e mundial. 
            Ao longo deste estudo, exploramos como a simples força gravitacional da água pode ser convertida 
            em eletricidade por meio de uma sequência elegante de transformações energéticas: da{" "}
            <strong className="text-foreground">energia potencial gravitacional</strong> à{" "}
            <strong className="text-foreground">energia cinética</strong>, desta à{" "}
            <strong className="text-foreground">energia mecânica</strong>, e finalmente à{" "}
            <strong className="text-foreground">energia elétrica</strong>.
          </p>
          <p>
            Compreendemos os componentes essenciais de uma usina — a barragem, o reservatório, os condutos 
            forçados, as turbinas, os geradores e os transformadores — e como cada um desempenha um papel 
            fundamental nesse processo. Também analisamos a complexa rede de transmissão e distribuição que 
            leva a eletricidade por centenas de quilômetros até as residências.
          </p>
          <p>
            É igualmente importante reconhecer que, apesar de ser uma fonte renovável com baixas emissões 
            durante a operação, a energia hidrelétrica possui impactos ambientais e sociais significativos, 
            como o alagamento de áreas naturais e o deslocamento de comunidades. O futuro da geração de 
            energia passa pela diversificação da matriz energética, combinando hidrelétrica, eólica, solar 
            e outras fontes renováveis para garantir um fornecimento sustentável, resiliente e justo.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground italic">
            "A água é a força motriz de toda a natureza."
          </p>
          <p className="text-xs text-muted-foreground mt-1">— Leonardo da Vinci</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ConclusionSection;
