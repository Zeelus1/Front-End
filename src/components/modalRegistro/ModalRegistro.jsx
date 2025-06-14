import React, { useState, useEffect } from "react";
import "./ModalRegistro.css";

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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{registro ? "Editar registro" : "Registrar cuidado"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Data"
            value={data}
            readOnly
          />

          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <div className="botoes">
            <button type="submit" className="botaoSalvar">Salvar registro</button>
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
