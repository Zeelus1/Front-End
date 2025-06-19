import React, { useState } from "react";
import Style from "./RegistrosPage.module.css";
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import coracaoSorrindo from "../../img/coracaoSorrindo.png";
import CampoBusca from "../../components/campoBusca/CampoBusca.jsx";
import BotaoAddRegistro from "../../components/botaoAddRegistro/BotaoAddRegistro.jsx";
import CardRegistro from "../../components/cardRegistro/CardRegistro.jsx";
import ModalRegistro from "../../components/modalRegistro/ModalRegistro.jsx";
import Faq from "../../components/faq/Faq.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";

function RegistrosPage() {
  const [modalAberto, setModalAberto] = useState(false);
  const [registroEditando, setRegistroEditando] = useState(null);

  const [dadosRegistros, setDadosRegistros] = useState([
    {
      tituloRegistro: "Primeiro exame de Márcia",
      dataRegistro: "01/02/2025 às 13:00",
      descricaoRegistro:
        "Hoje acompanhei a dona Márcia pela primeira vez ao médico. Ela estava um pouco ansiosa no início, mas conseguimos conversar bastante no caminho, o que a deixou mais tranquila. Durante a consulta, o médico foi atencioso e fez várias perguntas sobre a rotina dela.",
    },
    {
      tituloRegistro: "Remédios de Márcia",
      dataRegistro: "26/01/2025 às 09:24",
      descricaoRegistro:
        "Dona Márcia precisa fazer uso contínuo de alguns medicamentos para manter sua saúde em equilíbrio. No entanto, ela costuma demonstrar resistência e desinteresse em seguir corretamente o tratamento, muitas vezes esquecendo-se de tomá-los ou questionando sua real necessidade.",
    },
  ]);

  const handleDelete = (index) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja deletar este registro?"
    );
    if (!confirmar) return;

    const novosRegistros = [...dadosRegistros];
    novosRegistros.splice(index, 1);
    setDadosRegistros(novosRegistros);
  };

  const handleAdd = () => {
    setRegistroEditando(null);
    setModalAberto(true);
  };

  const handleEdit = (index) => {
    setRegistroEditando({ ...dadosRegistros[index], index });
    setModalAberto(true);
  };

  const handleSalvarRegistro = (novoRegistro) => {
    const agora = new Date().toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    if (novoRegistro.index !== undefined) {
      const registrosAtualizados = [...dadosRegistros];
      registrosAtualizados[novoRegistro.index] = {
        ...novoRegistro,
        dataRegistro: agora,
        editado: true,
      };
      setDadosRegistros(registrosAtualizados);
    } else {
      setDadosRegistros([
        {
          ...novoRegistro,
          dataRegistro: agora,
          editado: false,
        },
        ...dadosRegistros,
      ]);
    }

    setModalAberto(false);
    setRegistroEditando(null);
  };

  const faqData = [
    {
      question: "Como posso adicionar um novo registro?",
      answer:
        "Clique no botão '+' no topo da página para registrar um novo momento ou observação.",
    },
    {
      question: "Consigo editar registros já salvos?",
      answer:
        "Sim! Use o ícone de lápis em cada card para editar os dados inseridos.",
    },
    {
      question: "Meus registros ficam salvos por quanto tempo?",
      answer:
        "Todos os registros permanecem disponíveis enquanto você estiver usando a plataforma.",
    },
  ];

  return (
  <div className={Style.fundoPagina}>
    <main>
      <section>
        <BlocoInicial
          imagem={coracaoSorrindo}
          textoAlt="Imagem de um coração sorridente com os olhos fechados em estilo animado"
        >
          Acompanhe com carinho cada passo em sua rotina de cuidado! <br />
          <span className={Style.subtituloBlocoInicial}>
            Registre aqui momentos e mudanças importantes de seu dia a dia!
          </span>
        </BlocoInicial>
      </section>

      <div className={Style.blocos}>
        <CampoBusca />
        <BotaoAddRegistro onClick={handleAdd} />
      </div>

      <div className={Style.tituloRegistros}>
        <h1>Registros</h1>
      </div>

      <section className={Style.listaRegistros}>
        {dadosRegistros.map((registro, index) => (
          <CardRegistro
            key={index}
            tituloRegistro={registro.tituloRegistro}
            dataRegistro={registro.dataRegistro}
            descricaoRegistro={registro.descricaoRegistro}
            editado={registro.editado}
            onEditar={() => handleEdit(index)}
            onDeletar={() => handleDelete(index)}
          />
        ))}
      </section>

      <ModalRegistro
        aberto={modalAberto}
        onClose={() => setModalAberto(false)}
        onSalvar={handleSalvarRegistro}
        registro={registroEditando}
      />

      <WaveFaq />
      <Faq
        data={faqData}
        title="Dúvidas frequentes"
        className={Style.faqRegistros}
      />
    </main>
  </div>
);

}

export default RegistrosPage;
