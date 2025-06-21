import styles from "./Homepage.module.css";
import BlocoInicial from "../../components/blocoinicial/BlocoInicial.jsx";
import LembretesHome from "../../components/lembretesHome/LembretesHome.jsx";
import React from "react";
import coracaoHome from "../../img/coracaoHome.png";
import calendarioCoracao from "../../img/calendarioCoracao.png";
import UltimosRegistros from "../../components/ultimosRegistros/UltimosRegistros.jsx";
import fotoHome from "../../img/fotoHome.png";
import ondaHome from "../../img/ondaHome.png";
import PerfilAnamnese from "../../components/perfilAnamnese/PerfilAnamnese.jsx";
import UltimosPosts from "../../components/ultimosPosts/UltimosPosts.jsx";


function HomePage() {

    return (
        <>
            <section>
                <BlocoInicial
                    imagem={coracaoHome}
                    textoAlt="Imagem de um coração sorridente com os olhos fechados em estilo animado"
                >
                    Você está fazendo o melhor que pode, Gabriela.<br />
                    <span className={styles.subtituloBlocoInicial}>
                        E isso é mais que suficiente hoje. — Equipe Zeelus
                    </span>
                </BlocoInicial>
            </section>
            <div className={styles.tituloHome}><h1>Sua Jornada de Cuidado</h1></div>
            <div className={styles.cardsContainer}>
                <LembretesHome
                    imagem={calendarioCoracao}
                    textoAlt="Imagem de um calendário com coração sorridente"
                />
                <UltimosRegistros />
            </div>
            <div className={styles.fraseImagemContainer}>

                <img
                    src={fotoHome}
                    alt="Fundo com frase motivacional"
                    className={styles.bannerImagem}
                />
                <p className={styles.bannerTexto}>
                    Na <span className={styles.azulDestaque}>Zeelus</span>, celebramos sua coragem, honramos sua dedicação e
                    oferecemos o suporte que você merece por ajudar a construir um mundo mais empático!
                </p>
            </div>
            <div className={styles.ondaHomeContainer}>
                <img src={ondaHome}
                    alt="Curva decorativa branca" className={styles.ondaHome} />
            </div>
            <PerfilAnamnese />
            <UltimosPosts />


        </>
    )
}

export default HomePage