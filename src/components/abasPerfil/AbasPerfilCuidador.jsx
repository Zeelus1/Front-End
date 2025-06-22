import React, { useState } from "react";
import styles from "./AbasPerfilCuidador.module.css";
import { Link } from "react-router";
import CardAnamnese from "../cardAnamnese/CardAnamnese.jsx";
import iconeForum from "../../img/iconeForum.png";
import iconeCurtida from "../../img/iconeCurtida.png";

export default function AbasPerfilCuidador() {
  const [abaAtiva, setAbaAtiva] = useState("posts");

  const renderConteudo = () => {
    switch (abaAtiva) {
      case "posts":
        return (
          <div className={styles.contentBox}>
            <h2 className={styles.postsTitulo}>
              Nenhum Post ou Comentário foi Feito até o momento!
            </h2>
            <img
              className={styles.imgBox}
              src={iconeForum}
              alt="Ícone de fórum"
            />
            <p className={styles.postsTexto}>
              Compartilhar sua história pode inspirar e apoiar outros
              cuidadores. Publique seu primeiro post!
            </p>
            <Link to="/home/forum">
            <button className={styles.btnCriarPost}>Criar um Post</button>
            </Link>
          </div>
        );
      case "anamnese":
        return (
          <div className={styles.contentBox}>
            <CardAnamnese />
          </div>
        );

      case "curtidas":
        return (
          <div className={styles.contentBox}>
            <h2 className={styles.postsTitulo}>
              Você ainda não curtiu nada.
            </h2>
            <img
              className={styles.imgBox}
              src={iconeCurtida}
              alt="Ícone de curtida"
            />
            <p className={styles.postsTexto}>
              Explore conteúdos de outros cuidadores e curta o que te tocar. 💙
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.navContainer}>
        <button
          onClick={() => setAbaAtiva("posts")}
          className={abaAtiva === "posts" ? styles.active : ""}
        >
          Posts
        </button>
        <button
          onClick={() => setAbaAtiva("anamnese")}
          className={abaAtiva === "anamnese" ? styles.active : ""}
        >
          Perfis de Anamnese
        </button>
        <button
          onClick={() => setAbaAtiva("curtidas")}
          className={abaAtiva === "curtidas" ? styles.active : ""}
        >
          Curtidas
        </button>
      </div>

      {renderConteudo()}
    </>
  );
}
