// Arquivo: src/components/termosdeUso/TermosDeUsoModal.jsx

import React from 'react';
import Style from './TermosDeUsoModal.module.css';

// O componente recebe a prop 'onClose' para fechar o modal ao clicar em "Aceito"
function TermosDeUsoModal({ onClose }) {
  return (
    <div className={Style.modalOverlay}>
      <div className={Style.modalContent}>

        <div className={Style.modalHeader}>
          <h2 className={Style.title}>Termos e Políticas Zeelus</h2>
        </div>

        {/* Corpo do modal com o texto da política de privacidade */}
        <div className={Style.modalBody}>
          <h3>1. Compromisso com a Privacidade</h3>
          <p>A Zeelus tem o compromisso de proteger sua privacidade. Esta Política explica como coletamos, usamos, armazenamos e protegemos seus dados pessoais, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018) e demais normas aplicáveis.</p>

          <h3>2. Dados Coletados</h3>
          <p>Coletamos dados que você nos fornece diretamente ao usar a plataforma:</p>
          <ul>
            <li><strong>Dados Pessoais:</strong> nome, e-mail, foto, senha (criptografada)</li>
            <li><strong>Dados de Saúde:</strong> anamnese, histórico clínico, sintomas</li>
            <li><strong>Dados de Navegação:</strong> cookies essenciais, tipo de dispositivo e acesso</li>
            <li><strong>Interações:</strong> mensagens, perguntas, respostas, curtidas</li>
          </ul>

          <h3>3. Finalidades do Tratamento</h3>
          <p>Seus dados são usados para: Cadastro e login, Personalização da experiência, Suporte ao cuidado dos assistidos, Participação na comunidade, Envio de notificações e lembretes, e Análises para melhorias da plataforma.</p>
          
          <h3>4. Consentimento</h3>
          <p>Seu consentimento é sempre solicitado de forma clara e destacada para o tratamento de dados de saúde, dados pessoais sensíveis e envio de comunicações específicas. Você poderá revogar seu consentimento a qualquer momento.</p>

          <h3>5. Compartilhamento</h3>
          <p>Seus dados não são vendidos. Poderemos compartilhá-los apenas com prestadores de serviço sob contrato de confidencialidade, profissionais de saúde autorizados por você, ou autoridades legais, quando exigido.</p>

          <h3>6. Segurança</h3>
          <p>Adotamos práticas rigorosas de segurança, como Criptografia de dados, Senhas protegidas por hashing avançado, Monitoramento de acesso e Controle de permissões.</p>

          <h3>7. Retenção e Exclusão</h3>
          <p>Dados são mantidos enquanto a conta estiver ativa. Após a exclusão, dados pessoais são excluídos em até 30 dias, com exceções legais. Dados de saúde são mantidos pelo período necessário, com anonimização quando possível.</p>

          <h3>8. Seus Direitos</h3>
          <p>Você pode, a qualquer momento: Acessar, corrigir, solicitar exclusão, anonimização ou portabilidade dos seus dados e revogar consentimento. Envie sua solicitação ao e-mail: privacidade@zeelus.com.br. Responderemos em até 15 dias corridos.</p>
          
          <h3>9. Cookies</h3>
          <p>Utilizamos apenas cookies essenciais para funcionamento. Não utilizamos cookies de terceiros para publicidade.</p>

          <h3>10. Atualizações da Política</h3>
          <p>Podemos alterar esta política para refletir melhorias na plataforma. Você será notificado em caso de mudanças significativas.</p>
          
          <p><strong>Data da última atualização:</strong> 26/06/2025</p>
        </div>

        {/* Rodapé com o botão de aceite centralizado */}
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