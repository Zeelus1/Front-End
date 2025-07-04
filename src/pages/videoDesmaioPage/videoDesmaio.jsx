import React from 'react';
import styles from './videoDesmaio.module.css';
import samu from '../../img/samu.jpg';
import ambulancia from '../../img/ambulance 2.png';
import caminhao from '../../img/fire-brigade 1.png';
import viatura from '../../img/police 1.png';
import Faq from "../../components/faq/Faq.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";

const faqData = [
  {
    question: "E se eu não tiver certeza sobre qual serviço chamar?",
    answer: "Ligue para o SAMU (192)...",
  },
  {
    question: "Posso ligar para o SAMU só para pedir orientação?",
    answer: "Sim, o SAMU orienta em casos de dúvida...",
  },
  {
    question: "Tem algum problema em acionar o serviço errado sem querer?",
    answer: "Não, o importante é pedir ajuda...",
  },
  {
    question: "E se for uma situação leve, como uma febre ou queda sem machucado?",
    answer: "Nesses casos, o ideal é procurar uma UPA ou posto de saúde...",
  }
];

const VideoDesmaioPage = () => (
  <main className={styles.main}>

    {/* Seção do vídeo e explicações */}
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/7BxW6J2Q74s"
          title="Treinamento Zeelus"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>Conduta de Engasgo</h2>
          <p>
            Neste vídeo, você aprende a agir com calma e segurança...
          </p>
          <p className={styles.verificado}>
            <span style={{ color: "#009688" }}>●</span> Conteúdo verificado pelo <strong>Sargento Daniel</strong>.
          </p>
        </div>
        <div className={styles.materialCard}>
          <p>
            Baixe o guia prático com o passo a passo da conduta.
          </p>
          <a
            href="/material-de-apoio.pdf"
            className={styles.materialButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Material de Apoio
          </a>
        </div>
      </div>

      <div className={styles.alertCard}>
        <div
          className={styles.alertImage}
          style={{ backgroundImage: `url(${samu})` }}
          role="img"
          aria-label="SAMU"
        ></div>
        <div className={styles.alertText}>
          <span className={styles.alertWhite}>
            Esta plataforma oferece orientações gerais.
          </span>
          <span className={styles.alertBlack}>
            {' '}Procure um profissional de saúde em caso de dúvidas.
          </span>
        </div>
      </div>
    </section>

    {/* Seção de emergências */}
    <section className={styles.emergencySection}>
      <h2 className={styles.emergencyTitle}>
        Nem sempre dá pra resolver sozinho. Saiba quem chamar em caso de emergência!
      </h2>
      <div className={styles.emergencyGrid}>
        {/* SAMU */}
        <div className={styles.emergencyCard}>
          <div className={styles.emergencyIcon}>
            <img src={ambulancia} alt="Ambulância SAMU" />
          </div>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyTitleRow}>
              <span className={styles.emergencyNumber}>192 – <span className={styles.samu}>SAMU</span></span>
            </div>
            <ul className={styles.emergencyListBox}>
              <li>Quedas com fratura ou inconsciência</li>
              <li>Convulsões</li>
              <li>Falta de ar grave</li>
              <li>Suspeita de AVC ou infarto</li>
              <li>Desmaio prolongado</li>
              <li>Sangramento intenso</li>
            </ul>
            <div className={styles.emergencyNote}>
              ⚠️ Fique no local, o SAMU vai até você.
            </div>
          </div>
        </div>

        {/* Bombeiros */}
        <div className={styles.emergencyCard}>
          <div className={styles.emergencyIcon}>
            <img src={caminhao} alt="Caminhão dos Bombeiros" />
          </div>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyTitleRow}>
              <span className={styles.emergencyNumber}>193 – <span className={styles.bombeiros}>Bombeiros</span></span>
            </div>
            <ul className={styles.emergencyListBox}>
              <li>Incêndios ou vazamento de gás</li>
              <li>Pessoas presas em perigo</li>
              <li>Acidentes domésticos graves</li>
              <li>Resgates em locais de difícil acesso</li>
            </ul>
            <div className={styles.emergencyNote}>
              ⚠️ Bombeiros podem dar suporte médico em alguns locais.
            </div>
          </div>
        </div>

        {/* Polícia */}
        <div className={styles.emergencyCard}>
          <div className={styles.emergencyIcon}>
            <img src={viatura} alt="Viatura da Polícia" />
          </div>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyTitleRow}>
              <span className={styles.emergencyNumber}>190 – <span className={styles.policia}>Polícia</span></span>
            </div>
            <ul className={styles.emergencyListBox}>
              <li>Suspeita de violência</li>
              <li>Agressão ou ameaça</li>
              <li>Situações de risco fora de controle</li>
            </ul>
            <div className={styles.emergencyNote}>
              ⚠️ Acione apenas em risco real e imediato.
            </div>
          </div>
        </div>
      </div>
    </section>


  <WaveFaq />
    <Faq
      data={faqData}
      title="Dúvidas frequentes"
      className={styles.faqvideoDesmaioPage}
    />
    
  </main>
);

export default VideoDesmaioPage;