import React from 'react'
import Style from './TreinamentosPage.module.css'
import ImgCoracaoComUmaMao from "../../img/coracaoComUmaMao.png"
import ImgHospitalSimbolo from "../../img/hospitalSimbolo.png"
import ImgMaeAlimentandoIcone from "../../img/maeAlimentandoIcone.png"
import ImgCerebroIcone from "../../img/cerebroIcone.png"
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import AccordionItem from '../../components/accordionitem/AccordionItem.jsx';

function TreinamentosPage() {
  return (
    <>
      <BlocoInicial imagem={ImgCoracaoComUmaMao} textoAlt="Imagem de uma mão segurando um coração">
        O que você faz nos primeiros minutos pós acidente <br />
        pode salvar uma vida! <br />
      </BlocoInicial>

      <AccordionItem icon={ImgHospitalSimbolo} textoAlt="Símbolo de uma cruz hospitlar" title="Primeiros Socorros">
        <div className={Style.cardInterno}>
          <p>
            Nem sempre dá tempo de esperar ajuda. Aqui, você aprende os primeiros passos para agir com calma e eficiência. Tudo explicado por um bombeiro de forma acessível, para quem cuida todos os dias.
          </p>
          <hr />
          <ul className={Style.lista}>
            <li>Desmaios</li>
            <li>Engasgos</li>
            <li>Paradas Cardíacas</li>
            <li>Quedas</li>
            <li>Ferimentos</li>
            <li>Convulsão</li>
            <li>Parada respiratória</li>
            <li>Pré Desmaio</li>
            <li>AVC</li>
          </ul>
        </div>
        <button className={Style.botaoGradient}>Começar</button>
      </AccordionItem>

      <AccordionItem icon={ImgMaeAlimentandoIcone} textoAlt="Símbolo de uma mãe alimentando um bebê" title="Cuidados com Crianças com Necessidades Especiais">
        <div className={Style.cardInterno}>
          <p>
            Aprenda a cuidar de crianças com necessidades especiais, desde alimentação até cuidados diários. Conteúdo prático e acessível para quem cuida.
          </p>
          <hr />
          <ul className={Style.lista}>
            <li>Cuidados com a alimentação</li>
            <li>Cuidados com a higiene</li>
            <li>Cuidados com a saúde</li>
            <li>Cuidados com o sono</li>
            <li>Cuidados com o desenvolvimento</li>
          </ul>
        </div>
        <button className={Style.botaoGradient}>Começar</button>
      </AccordionItem>

      <AccordionItem icon={ImgCerebroIcone} textoAlt="Símbolo de um cérebro" title="Estimulação Cognitiva">
        <div className={Style.cardInterno}>
          <p>
            Aprenda a estimular o desenvolvimento cognitivo de crianças com necessidades especiais. Conteúdo prático e acessível para quem cuida.
          </p>
          <hr />
          <ul className={Style.lista}>
            <li>Estimulação da memória</li>
            <li>Estimulação da atenção</li>
            <li>Estimulação da linguagem</li>
            <li>Estimulação da percepção</li>
            <li>Estimulação da coordenação motora</li>
          </ul>
        </div>
        <button className={Style.botaoGradient}>Começar</button>
      </AccordionItem>


    </>
  )
}

export default TreinamentosPage