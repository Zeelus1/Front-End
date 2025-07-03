import React from 'react';
import styles from './primeirosSocorros.module.css';
import samu from '../../img/samu.jpg';
import ambulancia from '../../img/ambulance 2.png';
import caminhao from '../../img/fire-brigade 1.png';
import viatura from '../../img/police 1.png';
import Faq from "../../components/faq/Faq.jsx";
import WaveFaq from "../../components/waveFaq/WaveFaq.jsx";

const faqData = [
  {
    question: "E se eu não tiver certeza sobre qual serviço chamar?",
    answer:
      "Ligue para o SAMU (192), eles orientam o que fazer. Se necessário, eles acionam os Bombeiros ou a Polícia.",
  },
  {
    question: "Posso ligar para o SAMU só para pedir orientação?",
    answer:
      "Sim, o SAMU orienta em casos de dúvida. Eles estão disponíveis para ajudar, mesmo que não seja uma emergência.",
  },
  {
    question: "Tem algum problema em acionar o serviço errado sem querer?",
    answer:
      "Não, o importante é pedir ajuda. Eles redirecionam se necessário. Não se preocupe em errar, o foco é garantir a segurança de todos.",
  },
  {
    question: "E se for uma situação leve, como uma febre ou queda sem machucado?",
    answer:
      "Nesses casos, o ideal é procurar uma UPA ou posto de saúde. Assim, o SAMU continua disponível para emergências mais graves e você ainda recebe o cuidado adequado.",
  }
];
const PrimeirosSocorrosPage = () => (
  <main className={styles.main}>

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
            Neste vídeo, você aprende a agir com calma e segurança, diante de uma situação de engasgo; seja com crianças, adultos ou idosos.
            Nosso foco é ajudar a se sentir preparado(a/e) com orientações simples.
          </p>
          <p className={styles.verificado}>
            <span style={{ color: "#009688" }}>●</span> Este conteúdo foi cuidadosamente verificado e é oferecido com todo o carinho, responsabilidade e a comprovação do <strong>Sargento Daniel</strong>.
          </p>
        </div>
        <div className={styles.materialCard}>
          <p>
            Baixe o guia prático com o passo a passo da conduta para tê-la sempre à mão quando precisar!
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
    {' '}No caso de dúvidas ou insegurança, procure um profissional de saúde ou autoridade local.
  </span>
</div>
      </div>
      
      <section className={styles.emergencySection}>
  <h2 className={styles.emergencyTitle}>
    Nem sempre dá pra resolver sozinho. Saiba quem chamar em caso de emergência!
  </h2>
  <div className={styles.emergencyGrid}>
    {/* SAMU */}
    <div className={styles.emergencyCard}>
      <div className={styles.emergencyIcon}>
        <img src={ambulancia} alt="Ambulância SAMU" style={{ width: '120px', height: 'auto' }} />
      </div>
      <div className={styles.emergencyContent}>
        <div className={styles.emergencyTitleRow}>
          <span className={styles.emergencyNumber}>192 – <span className={styles.samu}>SAMU</span></span>
        </div>
        <div className={styles.emergencyListBox}>
          <ul>
            <li>Quedas com fratura ou inconsciência</li>
            <li>Convulsões</li>
            <li>Falta de ar grave</li>
            <li>Suspeita de AVC ou infarto</li>
            <li>Desmaio prolongado</li>
            <li>Sangramento intenso</li>
          </ul>
        </div>
        <div className={styles.emergencyNote}>
          <span>⚠️ Fique no local, o SAMU vai até você.</span>
        </div>
      </div>
    </div>
    {/* Bombeiros */}
    <div className={styles.emergencyCard}>
      <div className={styles.emergencyIcon}>
        <img src={caminhao} alt="Caminhão dos Bombeiros" style={{ width: '120px', height: 'auto' }} />
      </div>
      <div className={styles.emergencyContent}>
        <div className={styles.emergencyTitleRow}>
          <span className={styles.emergencyNumber}>193 – <span className={styles.bombeiros}>Bombeiros</span></span>
        </div>
        <div className={styles.emergencyListBox}>
          <ul>
            <li>Incêndios ou vazamento de gás</li>
            <li>Pessoas presas em perigo</li>
            <li>Acidentes domésticos graves</li>
            <li>Resgates em locais de difícil acesso</li>
          </ul>
        </div>
        <div className={styles.emergencyNote}>
          <span>⚠️ Em alguns locais, os Bombeiros dão suporte médico.</span>
        </div>
      </div>
    </div>
    {/* Polícia */}
    <div className={styles.emergencyCard}>
      <div className={styles.emergencyIcon}>
        <img src={viatura} alt="Viatura da Polícia" style={{ width: '120px', height: 'auto' }} />
      </div>
      <div className={styles.emergencyContent}>
        <div className={styles.emergencyTitleRow}>
          <span className={styles.emergencyNumber}>190 – <span className={styles.policia}>Polícia</span></span>
        </div>
        <div className={styles.emergencyListBox}>
          <ul>
            <li>Suspeita de violência contra o paciente ou cuidador</li>
            <li>Ameaça, agressão ou tentativa de invasão</li>
            <li>Situações de risco fora de controle</li>
          </ul>
        </div>
        <div className={styles.emergencyNote}>
          <span>⚠️ Acione apenas em risco real e imediato.</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="faq" className={styles.faqtreinamentosPage}>
  
  <WaveFaq />
        <Faq
          data={faqData}
          title="Dúvidas frequentes"
          className={styles.faqtreinamentosPage}
        />
</section>

</section>
    
  </main>
);

export default PrimeirosSocorrosPage;