import React from "react";
import Style from "./CalendarioPage.module.css";
import CalendarIcon from "../../icons/calendarPageIcon.png";
import Calendario from "../../components/calendario/Calendario.jsx";
import Faq from "../../components/faq/Faq.jsx";

export default function CalendarioPage() {
  const faqData = [
    {
      question: "O que é a Zeelus?",
      answer:
        "A Zeelus é uma plataforma inovadora que conecta cuidadores e oferece ferramentas para facilitar a rotina de cuidados, promovendo organização, aprendizado e suporte contínuo.",
    },
    {
      question: "Meus dados estão protegidos?",
      answer:
        "Sim! A Zeelus prioriza a segurança e privacidade dos seus dados. Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de proteção de dados.",
    },
    {
      question: "Para quem é a Zeelus?",
      answer:
        "A Zeelus é ideal para cuidadores formais e informais que buscam uma solução completa para organizar suas atividades, compartilhar experiências e desenvolver suas habilidades no cuidado.",
    },
    {
      question: "Preciso pagar para usar?",
      answer:
        "A Zeelus oferece um plano gratuito com diversas funcionalidades essenciais. Também disponibilizamos planos premium com recursos adicionais para quem busca uma experiência ainda mais completa.",
    },
  ];

  return (
    <main>
      <section className={Style.blocoInicial}>
        <img
          src={CalendarIcon}
          alt="Calendario sorrindo"
          className={Style.imagem}
        />

        <div className={Style.texto}>
          <h1>Este é o seu Calendário e Agenda!</h1>

          <p>
            Gerencie suas tarefas, horários ou eventos por aqui! Basta clicar no
            dia desejado no calendário abaixo para começar!
          </p>
        </div>
      </section>

      <section className={Style.calendario}>
        <Calendario />
      </section>

      <section id="faq" className={Style.faq}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
          <path
            fill="#f5f3ef"
            fill-opacity="1"
            d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,96C672,107,768,181,864,192C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <Faq data={faqData} answerColor={"#000"} titleColor={"#004777"} questionColor={"#000"} title={"Dúvidas frequentes"} plusColor={"#004777"} />
      </section>
    </main>
  );
}
