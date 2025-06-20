import React, { useState, useEffect } from "react";
import styles from "./ModalRegistro.module.css";

function ModalRegistro({ aberto, onClose, onSalvar, registro }) {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (registro) {
      setTitulo(registro.tituloRegistro || "");
      setData(registro.dataRegistro || "");
      setDescricao(registro.descricaoRegistro || "");
    } else {
      const dataAtual = new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      setTitulo("");
      setData(dataAtual);
      setDescricao("");
    }
  }, [registro]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar({
      index: registro?.index,
      tituloRegistro: titulo,
      dataRegistro: data,
      descricaoRegistro: descricao,
    });
  };

  if (!aberto) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h2>{registro ? "Editar registro" : "Registrar cuidado"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="tituloRegistro" className={styles["sr-only"]}>
            Título do registro
          </label>
          <input
            id="tituloRegistro"
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label htmlFor="dataRegistro" className={styles["sr-only"]}>
            Data do registro
          </label>
          <input
            id="dataRegistro"
            type="text"
            placeholder="Data"
            value={data}
            readOnly
          />

          <label htmlFor="descricaoRegistro" className={styles["sr-only"]}>
            Descrição do registro
          </label>
          <textarea
            id="descricaoRegistro"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />

          <div className={styles.botoes}>
            <button type="submit" className={styles.botaoSalvar}>
              Salvar registro
            </button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalRegistro;
