import React from "react";
import styles from "./PerfilCuidadorPage.module.css";

import Faq from "../../components/faq/Faq.jsx";
import AreaPerfil from "../../components/areaPerfil/AreaPerfil.jsx";
import AbasPerfilCuidador from "../../components/abasPerfil/AbasPerfilCuidador.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";

const faqData = [
  {
    question: "Consigo visualizar meu histórico de interações na plataforma?",
    answer:
      'Sim! Na aba de registros ou no seu painel principal, você pode acompanhar seus envios, respostas e atualizações feitas ao longo do tempo.',
  },
  {
    question: "Quem pode acessar a Zeelus?",
    answer:
      "Qualquer cuidador, familiar ou amigo de pessoa com necessidades especiais pode se cadastrar gratuitamente.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer:
      "Nosso time está disponível pelo e‑mail zeelus@gmail.com ou pela página de Faq do site. Estamos sempre prontos para ajudar!",
  },
];

export default function PerfilCuidadorPage() {
  return (
    <div className={styles.pageContainer}>
      <AreaPerfil />

      <AbasPerfilCuidador />
      <section className={styles.faq}>
        <WaveFaq />
        <Faq
          data={faqData}
          title="Dúvidas Frequentes"
          answerColor={"#000"}
          questionColor={"#000"}
          plusColor={"#004777"}
          titleColor={"#004777"}
        />
      </section>
    </div>
  );
}
