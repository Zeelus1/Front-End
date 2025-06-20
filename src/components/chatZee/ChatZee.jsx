import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Plus, Mic, MicOff, AlertCircle, Volume2, Square, Pause, Play } from 'lucide-react';
import styles from './ChatZee.module.css';
import mascote from "../../img/mascoteZeeIA.png";
import promptGemini from '../../middleware/geminiApi.js';

// Utilitários de detecção de dispositivo/navegador
const isMobileDevice = () => /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent);
const hasSpeechRecognition = () => 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
const isFirefox = () => navigator.userAgent.toLowerCase().includes('firefox');

const ChatZee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(() => ([
    {
      id: 1,
      text: 'Olá! Eu sou a inteligência artificial da Zeelus. Precisa de ajuda?',
      isBot: true,
      timestamp: new Date()
    }
  ]));
  const messagesEndRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [transcription, setTranscription] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState('');
  const [showWarning, setShowWarning] = useState(true);
  const [support, setSupport] = useState({
    supported: false,
    message: ''
  });
  const [speakingId, setSpeakingId] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // Sempre rola para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Detecta suporte a funcionalidades de áudio
  useEffect(() => {
    if (isFirefox()) {
      setSupport({
        supported: false,
        message: 'O reconhecimento de voz não é suportado no Firefox. Use Chrome, Edge ou Safari.'
      });
    } else if (isMobileDevice()) {
      setSupport({
        supported: false,
        message: 'O reconhecimento de voz não está disponível em navegadores móveis. Por favor, digite sua pergunta ou utilize um computador.'
      });
    } else if (hasSpeechRecognition()) {
      setSupport({ supported: true, message: '' });
    } else {
      setSupport({
        supported: false,
        message: 'Seu navegador não suporta reconhecimento de voz.'
      });
    }
  }, []);

  // Configura a instância de reconhecimento de voz e seus eventos.
  useEffect(() => {
    if (!support.supported) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'pt-BR';

    recognition.onstart = () => {
      setRecordingStatus('Ouvindo...');
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const currentTranscription = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscription(currentTranscription);
    };

    recognition.onerror = (event) => {
      console.error('Erro no reconhecimento de fala:', event.error);
      setRecordingStatus(`Erro: ${event.error}`);
    };

    recognition.onend = () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
      }
      setIsRecording(false);
      setRecordingStatus('');
      setIsProcessing(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [support.supported]);

  /**
   * Adiciona uma nova mensagem ao estado, evitando repetição de código.
   * @param {string} texto Conteúdo da mensagem
   * @param {boolean} isBot Indica se a mensagem é do bot
   */
  const adicionarMensagem = useCallback((texto, isBot = false) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        text: texto,
        isBot,
        timestamp: new Date()
      }
    ]);
  }, []);

  // Inicia a gravação de áudio
  const iniciarGravacao = async () => {
    if (!support.supported || isRecording) {
      if (!support.supported) alert(support.message);
      return;
    }
    
    setTranscription('');
    setIsProcessing(true);
    setRecordingStatus('Aguardando permissão...');

    try {
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      recognitionRef.current.start();
      setIsProcessing(false);
    } catch (error) {
      console.error('Erro ao acessar o microfone:', error);
      setRecordingStatus('Permissão do microfone negada.');
      setIsProcessing(false);
      adicionarMensagem('Não foi possível acessar seu microfone. Verifique as permissões do navegador.', true);
    }
  };

  // Para a gravação e processa a transcrição
  const pararGravacao = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      
      const finalTranscription = transcription.trim();

      if (finalTranscription) {
        setIsProcessing(true);
        setRecordingStatus('Processando...');

        adicionarMensagem(finalTranscription, false);
        setTranscription('');

        promptGemini(finalTranscription)
          .then(response => {
            adicionarMensagem(response, true);
          })
          .catch(() => {
            adicionarMensagem('Desculpe, houve um erro ao processar sua solicitação.', true);
          })
          .finally(() => {
            setIsProcessing(false);
            setRecordingStatus('');
          });
      } else {
        setIsProcessing(false);
      }
    }
  };

  // Envia mensagem e recebe resposta do Gemini
  const enviarMensagem = async () => {
    if (!message.trim()) return;

    adicionarMensagem(message, false);
    setMessage('');

    try {
      // Troque pelo seu método real de chamada à API Gemini
      const response = await promptGemini(message);
      adicionarMensagem(response, true);
    } catch {
      adicionarMensagem('Desculpe, não consegui obter uma resposta agora.', true);
    }
  };

  // Envia ao pressionar Enter (sem Shift)
  const aoPressionarTecla = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  };

  // Reseta o aviso quando o chat é aberto
  useEffect(() => {
    if (isOpen) {
      setShowWarning(true);
    }
  }, [isOpen]);

  // Função para ler mensagem do bot
  const lerMensagem = (msg) => {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta leitura em voz alta.');
      return;
    }
    if (isSpeaking) {
      pararLeitura();
    }
    const utterance = new window.SpeechSynthesisUtterance(msg.text);
    utterance.lang = 'pt-BR';
    utterance.onstart = () => {
      setSpeakingId(msg.id);
      setIsSpeaking(true);
      setIsPaused(false);
    };
    utterance.onend = () => {
      setSpeakingId(null);
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setSpeakingId(null);
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onpause = () => {
      setIsPaused(true);
    };
    utterance.onresume = () => {
      setIsPaused(false);
    };
    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  // Função para parar leitura
  const pararLeitura = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
      setSpeakingId(null);
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  // Função para pausar leitura
  const pausarLeitura = () => {
    if (synthRef.current && synthRef.current.speaking && !synthRef.current.paused) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  };

  // Função para retomar leitura
  const retomarLeitura = () => {
    if (synthRef.current && synthRef.current.paused) {
      synthRef.current.resume();
      setIsPaused(false);
    }
  };

  return (
    <div className={styles.container}>
      {isOpen ? (
        <div className={styles.chatWindow}>
          {/* Cabeçalho */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.logoContainer}>
                <img src={mascote} alt="Mascote Zee" className={styles.mascotImage} />
              </div>
              <div className={styles.headerText}>
                <h3 className={styles.title}>Zee IA</h3>
                <p className={styles.subtitle}>Bem-vindo a Zee IA!</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
              <X size={30} />
            </button>
          </div>

          {/* Mensagens */}
          <div className={styles.messagesContainer}>
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`${styles.messageWrapper} ${msg.isBot ? styles.botMessage : styles.userMessage}`}
              >
                <div className={`${styles.messageBubble} ${msg.isBot ? styles.botBubble : styles.userBubble}`}>
                  <p>{msg.text}</p>
                  {/* Botões de ouvir/parar/pausar/retomar para mensagens do bot */}
                  {msg.isBot && (
                    <div className={styles.speakControls}>
                      <button
                        type="button"
                        className={styles.speakButton}
                        aria-label={speakingId === msg.id && isSpeaking ? 'Parar leitura' : 'Ouvir resposta'}
                        title={speakingId === msg.id && isSpeaking ? 'Parar leitura' : 'Ouvir resposta'}
                        onClick={() =>
                          speakingId === msg.id && isSpeaking ? pararLeitura() : lerMensagem(msg)
                        }
                        disabled={isRecording || isProcessing}
                        tabIndex={0}
                      >
                        {speakingId === msg.id && isSpeaking ? <Square size={18} /> : <Volume2 size={18} />}
                      </button>
                      {/* Botão de pausa/retomar */}
                      {speakingId === msg.id && isSpeaking && !isPaused && (
                        <button
                          type="button"
                          className={styles.speakButton}
                          aria-label="Pausar leitura"
                          title="Pausar leitura"
                          onClick={pausarLeitura}
                          disabled={isRecording || isProcessing}
                          tabIndex={0}
                        >
                          <Pause size={18} />
                        </button>
                      )}
                      {speakingId === msg.id && isSpeaking && isPaused && (
                        <button
                          type="button"
                          className={styles.speakButton}
                          aria-label="Retomar leitura"
                          title="Retomar leitura"
                          onClick={retomarLeitura}
                          disabled={isRecording || isProcessing}
                          tabIndex={0}
                        >
                          <Play size={18} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isRecording && transcription && (
              <div className={`${styles.messageWrapper} ${styles.userMessage}`}>
                <div className={`${styles.messageBubble} ${styles.userBubble} ${styles.transcribing}`}>
                  <p>{transcription}</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            className={styles.inputContainer}
            onSubmit={e => {
              e.preventDefault();
              enviarMensagem();
            }}
          >
            {!support.supported && showWarning && (
              <div className={styles.browserWarning}>
                <AlertCircle size={16} />
                <span>{support.message}</span>
                <button
                  type="button"
                  className={styles.closeWarning}
                  onClick={() => setShowWarning(false)}
                  aria-label="Fechar aviso"
                >
                  <X size={16} />
                </button>
              </div>
            )}
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={aoPressionarTecla}
                placeholder="Digite sua mensagem"
                className={styles.textarea}
                rows={1}
                disabled={isRecording || isProcessing}
              />
              {support.supported && (
                <button
                  type="button"
                  onClick={isRecording ? pararGravacao : iniciarGravacao}
                  className={`${styles.recordButton} ${isRecording ? styles.recording : ''}`}
                  disabled={isProcessing}
                  title={isRecording ? "Parar gravação" : "Iniciar gravação"}
                  aria-label={isRecording ? "Parar gravação" : "Iniciar gravação"}
                >
                  {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
                </button>
              )}
              <button
                type="submit"
                disabled={!message.trim() || isRecording || isProcessing}
                className={styles.sendButton}
                aria-label="Enviar mensagem"
              >
                <Send size={18} />
              </button>
            </div>
            {recordingStatus && (
              <div className={styles.statusMessage}>
                <Mic size={16} />
                {recordingStatus}
              </div>
            )}
          </form>
        </div>
      ) : (
        // Botão flutuante
        <div className={styles.floatingButtonContainer}>
          <button onClick={() => setIsOpen(true)} className={styles.floatingButton}>
            <div className={styles.mascotContainer}>
              <img src={mascote} alt="Mascote" className={styles.mascotImage} />
              <Plus size={20} className={styles.fallbackIcon} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatZee;