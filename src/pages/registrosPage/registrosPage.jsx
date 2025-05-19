import React, { useState } from "react";
import Style from "./RegistrosPage.module.css";
import BlocoInicial from "../../components/blocoinicial/BlocoInicial";
import coracaoSorrindo from "../../img/coracaoSorrindo.png";
import CampoBusca from "../../components/campoBusca/CampoBusca.jsx";
import BotaoAddRegistro from "../../components/botaoAddRegistro/BotaoAddRegistro";
import registrosTitulo from "../../img/registrosTitulo.png";
import CardRegistro from "../../components/cardRegistro/CardRegistro";

function RegistrosPage() {
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
  const confirmar = window.confirm("Tem certeza que deseja deletar este registro?");
  if (!confirmar) return;

  const novosRegistros = [...dadosRegistros];
  novosRegistros.splice(index, 1);
  setDadosRegistros(novosRegistros);
};

  return (
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
        <BotaoAddRegistro />
      </div>

      <div>
        <img
          src={registrosTitulo}
          alt="Texto degradê em tons de azul escrito 'Registros'"
          className={Style.titulo}
        />
      </div>

      <section className={Style.listaRegistros}>
        {dadosRegistros.map((registro, index) => (
          <CardRegistro
            key={index}
            tituloRegistro={registro.tituloRegistro}
            dataRegistro={registro.dataRegistro}
            descricaoRegistro={registro.descricaoRegistro}
            onEditar={() => console.log("Editar", registro.tituloRegistro)}
            onDeletar={() => handleDelete(index)}
          />
        ))}
      </section>
    </main>
  );
}

export default RegistrosPage;
