import React from 'react';
import styles from './sobreNos.module.css';
import ZeelusLogo from '../../img/zeelusLogo512.png';
import missao from '../../img/missao.png';
import valores from '../../img/valores.png';
import visao from '../../img/visao.png';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import andrey from '../../img/andrey.png';
import laysla from '../../img/laysla.png';
import livia from '../../img/livia.png';
import noah from '../../img/noah.png';
import william from '../../img/will.png';
import rudney from '../../img/rudney.png';
import lucas from '../../img/padula.png';
import fundo from '../../img/fundoLand.png';
const SobreNos = () => (
  <>
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Equipe Zeelus
        </h1>
        <h2 className={styles.subtitle}>
          Uma rede de cuidado para quem cuida!
        </h2>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.vectorSection}>
        <path fill="#fff" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,256C840,277,960,299,1080,293.3C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>



       <section className={styles.content}>
        <div className={styles.card}>
          <img
            src={ZeelusLogo}
            alt="Ícone coração"
            className={styles.heartIcon}
          />
        </div>
        <div className={styles.cardText}>
          <h2>
            Por que <span>nascemos</span>?
          </h2>
          <p>
            A <a href="#">Zeelus</a> nasceu da escuta atenta de familiares, amigos e vizinhos que dedicam parte da vida ao cuidado de pessoas com condições atípicas.
          </p>
          <p>
            Entendemos que quem cuida também precisa de cuidado. Por isso, criamos um espaço prático e acolhedor, que oferece apoio emocional, ferramentas úteis e uma comunidade de confiança.
          </p>
          <p>
            Confira nosso comercial ao lado!
          </p>
        </div>
      </section> 
    </div>

     <section className={styles.zeelusMoveSection}>
      <div className={styles.zeelusBg}></div>
      <div className={styles.zeelusOverlay}></div>
      <h2 className={styles.zeelusTitle}>
        O que move a <span className={styles.zeelusHighlight}>Zeelus?</span>
      </h2>
      <div className={styles.zeelusCardsContainer}>
        <div className={styles.zeelusCard}>
          <div className={styles.zeelusCardHeader}>
            <img src={missao} alt="Missão" className={styles.zeelusIcon} />
            <div>
              <strong>Missão</strong>
              <div className={styles.zeelusCardSubtitle}>Zeelus</div>
            </div>
          </div>
          <div className={styles.zeelusCardBody}>
            Simplificar o cuidado informal, oferecendo ferramentas e apoio para o bem-estar de cuidadores e assistidos.
          </div>
        </div>
        <div className={styles.zeelusCard}>
          <div className={styles.zeelusCardHeader}>
            <img src={valores} alt="Valores" className={styles.zeelusIcon} />
            <div>
              <strong>Valores</strong>
              <div className={styles.zeelusCardSubtitle}>Zeelus</div>
            </div>
          </div>
          <div className={styles.zeelusCardBody}>
            Reconhecer a força da conexão e do bem-estar de todos, garantir atenção cuidadosa e acolhimento constante a cuidadores e assistidos.
          </div>
        </div>
        <div className={styles.zeelusCard}>
          <div className={styles.zeelusCardHeader}>
            <img src={visao} alt="Visão" className={styles.zeelusIcon} />
            <div>
              <strong>Visão</strong>
              <div className={styles.zeelusCardSubtitle}>Zeelus</div>
            </div>
          </div>
          <div className={styles.zeelusCardBody}>
            Ser referência global em cuidado colaborativo, democratizando acesso e fortalecendo redes de apoio.
          </div>
        </div>
      </div>
    </section>
    <section className={styles.teamSection}>
      <img src={fundo} alt="" className={styles.teamSectionFrame} />
      <h2 className={styles.teamTitle}>
        Conheça a <span className={styles.teamHighlight}>equipe</span> por trás da <span className={styles.zeelusHighlight}>Zeelus</span>
      </h2>
      <div className={styles.teamGrid}>

        <div className={styles.teamCard}>
          <img src={andrey} alt="Andrey Sebastian Justino" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>Andrey Sebastian Justino</h3>
          <p className={styles.teamRole}>Product Owner e Desenvolvedor Full-Stack</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/andrey-sebastian-justino/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/AndreyJustino" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.teamCard}>
          <img src={laysla} alt="Laysla Rayssa Alves dos Santos" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>Laysla Rayssa Alves dos Santos</h3>
          <p className={styles.teamRole}>Scrum Master e Desenvolvedora Front-End</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/laysla-alves/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/lrayssz" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.teamCard}>
          <img src={livia} alt="Lívia Ribeiro Alvarenga" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>Lívia Ribeiro Alvarenga</h3>
          <p className={styles.teamRole}>Marketing e Desenvolvedora Front-End</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/livia-alvarenga05/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/alvarengaLivis" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.teamCard}>
          <img src={noah} alt="Noah Cardozo da Silva" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>Noah Cardozo da Silva</h3>
          <p className={styles.teamRole}>Designer e Desenvolvedor Front-End</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/noah-cardozo-714224352/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/NoahCardo" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.teamCard}>
          <img src={william} alt="William Ferreira dos Santos" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>William Ferreira dos Santos</h3>
          <p className={styles.teamRole}>Designer UI/UX e Desenvolvedor Full-Stack</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/devwilliamferreira/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/WillDeev" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.teamCard}>
          <img src={rudney} alt="Rudney Lopes de Souza Junior" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>Rudney Lopes de Souza Junior</h3>
          <p className={styles.teamRole}>Financeiro e Desenvolvedor Back-End</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/rudneyjr/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/RudneyJr4" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.teamCard}>
          <img src={lucas} alt="Lucas Padula Alves" className={styles.teamPhoto} />
          <h3 className={styles.teamName}>Lucas Padula Alves</h3>
          <p className={styles.teamRole}>DataBase Manager e Desenvolvedor Back-End</p>
          <div className={styles.teamLinks}>
            <a href="https://www.linkedin.com/in/lucas-padula-alves-b72ba52b6/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/lucas-padula" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </section> 


  </>
);


export default SobreNos;