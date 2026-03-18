import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const components = [
  {
    name: "Barragem",
    desc: "Estrutura de concreto ou terra que bloqueia o fluxo natural do rio, criando o reservatório. Existem diversos tipos: de gravidade, em arco, de enrocamento, e de terra. A escolha depende da topografia, geologia e vazão do rio.",
    detail: "A barragem de Itaipu, por exemplo, tem 196 m de altura e 7.919 m de comprimento.",
  },
  {
    name: "Reservatório",
    desc: "Lago artificial formado pelo represamento da água. Armazena grandes volumes de água em altitude elevada, acumulando energia potencial gravitacional. O nível do reservatório determina a capacidade de geração da usina.",
    detail: "O reservatório de Itaipu tem área de 1.350 km², equivalente a cerca de 190 mil campos de futebol.",
  },
  {
    name: "Conduto Forçado (Penstock)",
    desc: "Tubulação de grande diâmetro, geralmente de aço, que conduz a água do reservatório até as turbinas. A inclinação e o diâmetro do conduto são calculados para maximizar a velocidade e pressão da água.",
    detail: "Em Itaipu, cada conduto tem 10,5 m de diâmetro e 142 m de comprimento.",
  },
  {
    name: "Turbina Hidráulica",
    desc: "Máquina rotativa que converte a energia cinética e de pressão da água em energia mecânica de rotação. Os tipos mais comuns são: Francis (para quedas médias), Pelton (para quedas altas) e Kaplan (para quedas baixas).",
    detail: "As turbinas do tipo Francis são as mais utilizadas no mundo e funcionam submersa na água.",
  },
  {
    name: "Gerador Elétrico",
    desc: "Acoplado ao eixo da turbina, o gerador transforma a energia mecânica de rotação em energia elétrica por meio da indução eletromagnética (Lei de Faraday). Composto por rotor (parte móvel) e estator (parte fixa com bobinas).",
    detail: "Cada gerador de Itaipu produz 700 MW — energia suficiente para abastecer uma cidade de 1,5 milhão de habitantes.",
  },
  {
    name: "Transformador",
    desc: "Equipamento que eleva a tensão da energia gerada (de ~13,8 kV para 230-765 kV) para que ela possa ser transmitida por longas distâncias com mínimas perdas. Funciona pelo princípio da indução mútua entre bobinas.",
    detail: "Quanto maior a tensão, menor a corrente e, consequentemente, menores as perdas por efeito Joule nos cabos.",
  },
];

const ComponentsSection = () => {
  return (
    <SectionWrapper
      id="componentes"
      title="Componentes de uma Usina Hidrelétrica"
      subtitle="Conheça cada parte essencial que compõe uma usina"
      alternate
    >
      <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
        {components.map((comp, i) => (
          <motion.article
            key={comp.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 group hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{comp.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{comp.desc}</p>
                <p className="mt-3 text-xs text-primary/80 italic border-l-2 border-primary/30 pl-3">
                  💡 {comp.detail}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ComponentsSection;
