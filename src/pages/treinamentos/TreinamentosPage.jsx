import React from 'react'
import Style from './TreinamentosPage.module.css'
import ImgCoracaoComUmaMao from "../../img/coracaoComUmaMao.png"
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";

function TreinamentosPage() {
  return (
      <BlocoInicial imagem={ImgCoracaoComUmaMao} textoAlt="Imagem de uma mão segurando um coração">
            O que você faz nos primeiros minutos pós acidente <br />
            pode salvar uma vida!
      </BlocoInicial>
      
  )
}

export default TreinamentosPage