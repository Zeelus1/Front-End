import React from "react";
import Style from "./CampoBusca.module.css";
import { Search } from "lucide-react";

function CampoBusca({ placeholder = "Pesquise pelos seus registros" }) {
  return (
    <div className={Style.container}>
      <label htmlFor="buscarRegistro" className={Style["sr-only"]}>
        Buscar registros
      </label>
      <Search className={Style.icone} />
      <input
        id="buscarRegistro"
        type="text"
        placeholder={placeholder}
        className={Style.input}
      />
    </div>
  );
}

export default CampoBusca;