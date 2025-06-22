

// /src/components/termosDeUsoModal/TermosDeUsoModal.jsx

import React from 'react';
import Style from './TermosDeUsoModal.module.css';
import { X } from 'lucide-react'; // Ícone para fechar

// Este componente recebe a prop 'onClose' para saber como se fechar
function TermosDeUsoModal({ onClose }) {
  return (
    // A camada escura que cobre a tela inteira
    <div className={Style.modalOverlay}>
      
      {/* O container branco do conteúdo do modal */}
      <div className={Style.modalContent}>

        {/* Cabeçalho com o título e o botão de fechar */}
        <div className={Style.modalHeader}>
          <h2 className={Style.title}>Termos e Políticas Zeelus</h2>
          <button onClick={onClose} className={Style.closeButton}>
            <X size={28} />
          </button>
        </div>

        {/* Corpo do modal com o texto dos termos (que será rolável) */}
        <div className={Style.modalBody}>
          <p><strong>Última atualização:</strong> 22 de Junho de 2025</p>
          
          <p>Bem-vindo à Zeelus! Ao utilizar nossa plataforma, você concorda com os seguintes termos e condições. Por favor, leia-os com atenção.</p>

          <h3>1. Aceitação dos Termos</h3>
          <p>Ao se cadastrar e utilizar os serviços da Zeelus, você expressa seu consentimento e concorda em cumprir estes Termos de Uso e nossa Política de Privacidade.</p>
          
          <h3>2. Uso da Plataforma</h3>
          <p>A Zeelus destina-se a facilitar a rotina de cuidadores, oferecendo ferramentas para organização, comunicação e aprendizado. Você concorda em usar a plataforma de forma responsável e ética, sem compartilhar informações falsas, ofensivas ou que violem a privacidade de terceiros.</p>

          <h3>3. Privacidade e Proteção de Dados</h3>
          <p>Nós levamos sua privacidade a sério. Todas as informações inseridas na plataforma, como dados de anamnese e registros diários, são tratadas com confidencialidade e protegidas por medidas de segurança. Para mais detalhes, consulte nossa Política de Privacidade.</p>

          <h3>4. Planos e Pagamentos</h3>
          <p>A Zeelus oferece planos gratuitos e premium. Ao optar por um plano pago, você concorda com os valores e termos de faturamento apresentados. As assinaturas são recorrentes e podem ser canceladas a qualquer momento, conforme as regras do plano escolhido.</p>

          {/* Adicione mais seções conforme necessário */}
          <p>...</p>
        </div>

        {/* Rodapé do modal com o botão de aceite */}
        <div className={Style.modalFooter}>
          <button onClick={onClose} className={Style.acceptButton}>
            Aceito
          </button>
        </div>

      </div>
    </div>
  );
}

export default TermosDeUsoModal;