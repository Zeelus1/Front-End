import React from "react";
import { Plus } from "lucide-react";
import Style from "./BotaoAddRegistro.module.css";

function BotaoAddRegistro({ onClick }) {
  return (
    <button type="button" className={Style.botao} onClick={onClick}>
      <Plus className={Style.icone} />
      Adicionar registro
    </button>
  );
}

export default BotaoAddRegistro;