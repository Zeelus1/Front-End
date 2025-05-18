import React from "react";
import Style from "./CardRegistro.module.css";
import { Pencil, Trash2, Clock } from "lucide-react";

function CardRegistro({
  tituloRegistro,
  dataRegistro,
  descricaoRegistro,
  onEditar,
  onDeletar,
}) {
  return (
    <article className={Style.cardRegistro}>
      <h3 className={Style.tituloRegistro}>{tituloRegistro}</h3>
      <p className={Style.dataRegistro}>
        <Clock
          size={16}
          style={{ marginRight: "6px", verticalAlign: "middle" }}
        />
        {dataRegistro}
      </p>
      <p className={Style.descricaoRegistro}>{descricaoRegistro}</p>
      <div className={Style.botoesRegistro}>
        <button type="button" className={Style.btnEditar} onClick={onEditar}>
          <Pencil size={16} style={{ marginRight: "6px" }} />
          Editar
        </button>
        <button type="button" className={Style.btnDeletar} onClick={onDeletar}>
          <Trash2 size={16} style={{ marginRight: "6px" }} />
          Deletar
        </button>
      </div>
    </article>
  );
}

export default CardRegistro;
