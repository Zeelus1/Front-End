import React, { useState, useEffect } from 'react';
import styles from './ModalAnamnese.module.css';

function ModalAnamnese({ aberto, onClose, onSalvar, perfilInicial, modoEdicao = false }) {
  const [formData, setFormData] = useState({
    nome: '',
    apelido: '',
    idade: '',
    genero: '',
    nascimento: '',
    diagnostico: '',
    sobre: '',
    condicao: {
      diagnostico: '',
      dependencia: '',
      especial: ''
    },
    cuidados: {
      medicamentos: '',
      alergias: '',
      observacoes: ''
    }
  });

  useEffect(() => {
    if (modoEdicao && perfilInicial) {
      setFormData(perfilInicial);
    } else if (!modoEdicao) {
      setFormData({
        nome: '',
        apelido: '',
        idade: '',
        genero: '',
        nascimento: '',
        diagnostico: '',
        sobre: '',
        condicao: {
          diagnostico: '',
          dependencia: '',
          especial: ''
        },
        cuidados: {
          medicamentos: '',
          alergias: '',
          observacoes: ''
        }
      });
    }
  }, [modoEdicao, perfilInicial, aberto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar(formData);
  };

  if (!aberto) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{modoEdicao ? 'Editar Perfil de Anamnese' : 'Novo Perfil de Anamnese'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formSection}>
            <h3>Informações Básicas</h3>
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apelido"
              placeholder="Apelido"
              value={formData.apelido}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="idade"
              placeholder="Idade"
              value={formData.idade}
              onChange={handleChange}
              required
            />
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o gênero</option>
              <option value="Homem">Homem</option>
              <option value="Mulher">Mulher</option>
              <option value="Outro">Outro</option>
            </select>
            <input
              type="date"
              name="nascimento"
              value={formData.nascimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formSection}>
            <h3>Diagnóstico e História</h3>
            <textarea
              name="diagnostico"
              placeholder="Diagnóstico atual"
              value={formData.diagnostico}
              onChange={handleChange}
              required
            />
            <textarea
              name="sobre"
              placeholder="Conte um pouco sobre a pessoa"
              value={formData.sobre}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formSection}>
            <h3>Condição Atípica</h3>
            <input
              type="text"
              name="condicao.diagnostico"
              placeholder="Diagnóstico específico"
              value={formData.condicao.diagnostico}
              onChange={handleChange}
              required
            />
            <select
              name="condicao.dependencia"
              value={formData.condicao.dependencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o grau de dependência</option>
              <option value="Leve">Leve</option>
              <option value="Moderado">Moderado</option>
              <option value="Severo">Severo</option>
            </select>
            <textarea
              name="condicao.especial"
              placeholder="Cuidados especiais necessários"
              value={formData.condicao.especial}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formSection}>
            <h3>Cuidados Importantes</h3>
            <textarea
              name="cuidados.medicamentos"
              placeholder="Medicamentos em uso"
              value={formData.cuidados.medicamentos}
              onChange={handleChange}
              required
            />
            <textarea
              name="cuidados.alergias"
              placeholder="Alergias conhecidas"
              value={formData.cuidados.alergias}
              onChange={handleChange}
              required
            />
            <textarea
              name="cuidados.observacoes"
              placeholder="Observações importantes"
              value={formData.cuidados.observacoes}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.botoes}>
            <button type="submit" className={styles.botaoSalvar}>
              {modoEdicao ? 'Salvar Alterações' : 'Salvar'}
            </button>
            <button type="button" onClick={onClose} className={styles.botaoCancelar}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAnamnese; 