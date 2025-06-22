// Arquivo: src/pages/testeTeste/testando.jsx

import React, { useState } from 'react';

// 1. CORREÇÃO NO CAMINHO E NOME DO ARQUIVO
// Vamos importar o componente de MODAL que acabamos de corrigir.
import TermosDeUsoModal from '../../components/termosdeUso/TermosDeUsoModal.jsx'; 

import Style from './teste.module.css';

function PaginaDeTeste() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className={Style.containerDaPagina}>
      <h1>Página de Teste do Modal</h1>
      <p>Esta página serve apenas para testar o componente do modal.</p>
      
      <button className={Style.botaoAbrir} onClick={abrirModal}>
        Abrir Termos de Uso
      </button>

      {/* 2. CORREÇÃO NO NOME DO COMPONENTE
          O nome aqui deve ser exatamente o mesmo que foi importado.
      */}
      {modalAberto && <TermosDeUsoModal onClose={fecharModal} />}
    </div>
  );
}

export default PaginaDeTeste;