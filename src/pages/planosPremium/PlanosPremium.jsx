// /src/pages/planosPremium/PlanosPremium.jsx - VERSÃO CORRIGIDA E FIEL AO DESIGN

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Style from './PlanosPremium.module.css';

// Componentes reutilizáveis
import Faq from '../../components/faq/Faq.jsx';
import Footer from '../../components/footer/Footer.jsx';

// Ícone para os checkmarks
import { CheckCircle } from 'lucide-react';

function PlanosPremium() {
  const navigate = useNavigate();

  const planoAdquirido = {
    nome: 'Plano Elo',
    preco: 'R$ 19,90/mês',
    recursosCard: [ // Recursos para o card da direita
      'Plano Care',
      'Exportação de Relatórios em PDF',
      'IA Personalizada (Até 10 interações/mês)',
      'Experiência com Anúncios Reduzidos'
    ],
    recursosExclusivos: [ // Recursos para o texto da esquerda
      'Exportação de Relatórios em PDF',
      '10 Interações Mensais com nossa IA',
      'Experiência com Anúncios Reduzidos'
    ]
  };

  const faqData = [
    { question: 'Como adiciono um compromisso na agenda?', answer: '...' },
    { question: 'A Zeelus me lembra dos compromissos automaticamente?', answer: '...' },
    { question: 'Posso editar ou apagar um compromisso depois de salvar?', answer: '...' },
    { question: 'A agenda é só para compromissos médicos?', answer: '...' },
  ];

  return (
    <>
      <main className={Style.pageWrapper}>
        <div className={Style.contentGrid}>

          {/* COLUNA DA ESQUERDA: TEXTO DE CONFIRMAÇÃO */}
          <section className={Style.confirmationColumn}>
            <h1 className={Style.title}>
              Parabéns! Seu {planoAdquirido.nome} foi ativado com sucesso!
            </h1>
            <p className={Style.subtitle}>
              Agora você tem acesso aos seguintes recursos exclusivos:
            </p>
            <ul className={Style.exclusiveFeatures}>
              {planoAdquirido.recursosExclusivos.map((feature, index) => (
                <li key={index}>
                  <div className={Style.featureIconWrapper}>
                    <CheckCircle size={16} color="#005A99"/>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className={Style.motivationalText}>
              Você acaba de dar um passo importante para uma jornada de cuidados ainda mais organizada e conectada. Aproveite cada recurso e lembre-se: <strong>você não está sozinho(a/e)!</strong>
            </p>
            <button onClick={() => navigate('/home')} className={Style.returnButton}>
              Retornar à Tela Inicial
            </button>
          </section>

          {/* COLUNA DA DIREITA: CARD DO PLANO */}
          <aside className={Style.cardColumn}>
            <div className={Style.planCard}>
              <div className={Style.planCardHeader}>
                <h3>{planoAdquirido.nome}</h3>
              </div>
              <div className={Style.planCardBody}>
                <p className={Style.planCardPrice}>{planoAdquirido.preco}</p>
                <ul className={Style.planCardFeatures}>
                  {planoAdquirido.recursosCard.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={18} className={Style.planCardIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={Style.obtainedButton} disabled>Obtido!</button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <div className={Style.waveSeparator}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F0F7FF" fillOpacity="1" d="M0,192L1440,64L1440,0L0,0Z"></path>
        </svg>
      </div>
      
      <section className={Style.faqSection}>
        <h2 className={Style.faqTitle}>Dúvidas frequentes</h2>
        <Faq data={faqData} />
      </section>

      <Footer />
    </>
  );
}

export default PlanosPremium;