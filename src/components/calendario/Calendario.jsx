import { useState, useEffect } from "react";
import {
  Calendar,
  Badge,
  Modal,
  Button,
  Input,
  HStack,
  Message,
  TimePicker,
} from "rsuite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'rsuite/Calendar/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Modal/styles/index.css';
import 'rsuite/Button/styles/index.css';
import 'rsuite/Input/styles/index.css';
import 'rsuite/TimePicker/styles/index.css';

import Style from "./Calendario.module.css";

function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [formulario, setFormulario] = useState({ horario: "", titulo: "" });
  const [erro, setErro] = useState("");
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  // Notificação para eventos na hora certa
  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const dataHoje = obterChaveData(agora);
      const horaAgora = agora.toTimeString().slice(0, 5);
      eventos.forEach((evento) => {
        if (evento.data === dataHoje && evento.horario === horaAgora) {
          toast.info(`Lembrete: ${evento.titulo} agora (${evento.horario})`, {
            position: "top-right",
            autoClose: 10000,
            toastId: `${evento.id}-${evento.horario}-${evento.titulo}`,
          });
        }
      });
    }, 60000);
    return () => clearInterval(intervalo);
  }, [eventos]);

  // Simula busca inicial dos eventos (GET)
  useEffect(() => {
    function buscarEventosSimulado() {
      const dados = [
        {
          id: 1,
          data: "2025-06-15",
          horario: "09:00",
          titulo: "Evento do banco",
        },
        {
          id: 2,
          data: "2025-06-10",
          horario: "09:00",
          titulo: "Evento do banco",
        },
      ];
      setEventos(dados);
    }
    buscarEventosSimulado();
  }, []);

  const aoSelecionarData = (data) => {
    setDataSelecionada(data);
    setErro("");
  };

  const aoAlterarFormulario = (campo, valor) => {
    setFormulario((anterior) => ({ ...anterior, [campo]: valor }));
    setErro("");
  };

  // Validação de horário (HH:mm)
  const horarioValido = (horario) =>
    /^([01]\d|2[0-3]):([0-5]\d)$/.test(horario);

  // Função utilitária para garantir o formato correto da data (YYYY-MM-DD)
  function obterChaveData(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }

  const aoEditarEvento = (indice) => {
    const eventosDoDia = eventos.filter(
      (ev) => ev.data === obterChaveData(dataSelecionada)
    );
    const evento = eventosDoDia[indice];
    setFormulario({ horario: evento.horario, titulo: evento.titulo });
    setIndiceEdicao(evento.id);
    setMostrarModal(true);
  };

  // Simula remoção de evento (DELETE)
  const aoDeletarEvento = async (indice) => {
    const eventosDoDia = eventos.filter(
      (ev) => ev.data === obterChaveData(dataSelecionada)
    );
    const evento = eventosDoDia[indice];
    try {
      setEventos((anterior) => anterior.filter((ev) => ev.id !== evento.id));
      toast.success("Evento deletado com sucesso!");
    } catch {
      setErro("Erro ao deletar evento.");
      toast.error("Erro ao deletar evento.");
    }
  };

  // Simula edição e criação de evento (PUT/POST)
  const aoConfirmar = async () => {
    if (!formulario.horario || !formulario.titulo) {
      setErro("Preencha todos os campos.");
      toast.warn("Preencha todos os campos.");
      return;
    }
    if (!horarioValido(formulario.horario)) {
      setErro("Horário inválido. Use o formato HH:mm.");
      toast.warn("Horário inválido. Use o formato HH:mm.");
      return;
    }
    const dataStr = obterChaveData(dataSelecionada);

    if (indiceEdicao !== null) {
      // Editar evento existente (PUT simulado)
      setEventos((anterior) =>
        anterior.map((ev) =>
          ev.id === indiceEdicao
            ? {
                ...ev,
                data: dataStr,
                horario: formulario.horario,
                titulo: formulario.titulo,
              }
            : ev
        )
      );
      toast.success("Evento editado com sucesso!");
    } else {
      // Adicionar novo evento (POST simulado)
      const novoId =
        eventos.length > 0 ? Math.max(...eventos.map((ev) => ev.id)) + 1 : 1;
      setEventos((anterior) => [
        ...anterior,
        {
          id: novoId,
          data: dataStr,
          horario: formulario.horario,
          titulo: formulario.titulo,
        },
      ]);
      toast.success("Evento adicionado com sucesso!");
    }
    setMostrarModal(false);
    setFormulario({ horario: "", titulo: "" });
    setIndiceEdicao(null);
  };

  const renderizarCelula = (data) => {
    const chaveData = obterChaveData(data);
    const temEvento = eventos.some((ev) => ev.data === chaveData);
    if (temEvento) {
      return <Badge className="calendar-todo-item-badge" />;
    }
    return null;
  };

  // As funções abaixo simulam as operações CRUD, mas não fazem requisições reais
  async function buscarEventosAPI() {
    try {
      toast.info("Busca simulada de eventos.");
    } catch (err) {
      setErro("Erro ao buscar eventos.");
      toast.error("Erro ao buscar eventos.");
    }
  }

  async function editarEvento(id, eventoAtualizado) {
    try {
      setEventos((anterior) =>
        anterior.map((ev) => (ev.id === id ? eventoAtualizado : ev))
      );
      toast.success("Evento editado (simulado)!");
    } catch (err) {
      setErro("Erro ao editar evento.");
      toast.error("Erro ao editar evento.");
      throw err;
    }
  }

  async function deletarEvento(id) {
    try {
      setEventos((anterior) => anterior.filter((ev) => ev.id !== id));
      toast.success("Evento deletado (simulado)!");
    } catch (err) {
      setErro("Erro ao remover evento.");
      toast.error("Erro ao remover evento.");
      throw err;
    }
  }

  // Eventos do dia selecionado
  const eventosDoDia =
    dataSelecionada != null
      ? eventos.filter((ev) => ev.data === obterChaveData(dataSelecionada))
      : [];

  return (
    <>
      <ToastContainer />
      <div className={Style.calendarioContainer} >
        <div className={Style.caixaCalendario}>
          <Calendar
            compact
            renderCell={renderizarCelula}
            onSelect={aoSelecionarData}
            style={{ width: 260 , fontFamily: "Arial, Helvetica, sans-serif"}}
          />
          <button
            className={Style.botaoAdicionar}
            onClick={() => {
              setMostrarModal(true);
              setFormulario({ horario: "", titulo: "" });
              setIndiceEdicao(null);
            }}
            disabled={!dataSelecionada}
          >
            + Adicionar Evento
          </button>
        </div>
        <div className={Style.eventosContainer}>
          <h3>Eventos do dia</h3>
          <ul>
            {eventosDoDia.length === 0 ? (
              <div
                style={{
                  border: "1.5px solid #d1e3f8",
                  borderRadius: "12px",
                  padding: "32px 16px",
                  minWidth: "100%",
                  textAlign: "center",
                  color: "#363535",
                  background: "#fff",
                }}
              >
                <div
                  style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 8, fontFamily: "Arial" }}
                >
                  Ops! Não há nada marcado para este dia.
                </div>
                <div style={{ fontSize: "1.2rem", color: "#888", fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Clique em "Adicionar Evento" para agendar algum!
                </div>
              </div>
            ) : (
              eventosDoDia.map((evento, i) => (
                <li
                  key={evento.id}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  className={Style.itemEvento}
                >
                  {evento.horario} - {evento.titulo}
                  <Button
                    size="xs"
                    appearance="ghost"
                    onClick={() => aoEditarEvento(i)}
                    style={{ marginLeft: 8 }}
                  >
                    Editar
                  </Button>
                  <Button
                    size="xs"
                    appearance="ghost"
                    color="red"
                    onClick={() => aoDeletarEvento(i)}
                  >
                    Deletar
                  </Button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <Modal
        open={mostrarModal}
        onClose={() => {
          setMostrarModal(false);
          setIndiceEdicao(null);
        }}
      >
        <Modal.Header>
          <Modal.Title>
            {indiceEdicao !== null ? "Editar Evento" : "Adicionar Evento"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TimePicker
            format="HH:mm"
            value={
              formulario.horario
                ? new Date(`1970-01-01T${formulario.horario}:00`)
                : null
            }
            onChange={(data) => {
              const horarioStr = data ? data.toTimeString().slice(0, 5) : "";
              aoAlterarFormulario("horario", horarioStr);
            }}
            style={{ marginBottom: 10, width: "100%" }}
            placeholder="Selecione o horário"
          />
          <Input
            placeholder="Título"
            value={formulario.titulo}
            onChange={(valor) => aoAlterarFormulario("titulo", valor)}
          />
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={aoConfirmar} appearance="primary">
            Confirmar
          </Button>
          <Button
            onClick={() => {
              setMostrarModal(false);
              setIndiceEdicao(null);
            }}
            appearance="subtle"
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Calendario;
