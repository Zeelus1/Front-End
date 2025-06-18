import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Plus, Mic, MicOff, AlertCircle } from 'lucide-react';
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
  const [support, setSupport] = useState({
    supported: false,
    message: ''
  });

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

  // Configura a instância de reconhecimento de voz e seus eventos
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

  // Sempre rola para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Inicia a gravação de áudio
  const startRecording = async () => {
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
      setMessages(msgs => [
        ...msgs,
        {
          id: msgs.length + 1,
          text: 'Não foi possível acessar seu microfone. Verifique as permissões do navegador.',
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  };

  // Para a gravação e processa a transcrição
  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      
      const finalTranscription = transcription.trim();

      if (finalTranscription) {
        setIsProcessing(true);
        setRecordingStatus('Processando...');

        const userMsg = {
          id: messages.length + 1,
          text: finalTranscription,
          isBot: false,
          timestamp: new Date()
        };
        setMessages(msgs => [...msgs, userMsg]);
        setTranscription('');

        promptGemini(finalTranscription)
          .then(response => {
            setMessages(msgs => [
              ...msgs,
              { id: msgs.length + 1, text: response, isBot: true, timestamp: new Date() }
            ]);
          })
          .catch(error => {
            console.error('Erro ao processar com Gemini:', error);
            setMessages(msgs => [
              ...msgs,
              { id: msgs.length + 1, text: 'Desculpe, houve um erro ao processar sua solicitação.', isBot: true, timestamp: new Date() }
            ]);
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
  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(msgs => [...msgs, userMsg]);
    setMessage('');

    try {
      const response = await promptGemini(message);
      setMessages(msgs => [
        ...msgs,
        {
          id: msgs.length + 1,
          text: response,
          isBot: true,
          timestamp: new Date()
        }
      ]);
    } catch {
      setMessages(msgs => [
        ...msgs,
        {
          id: msgs.length + 1,
          text: 'Desculpe, não consegui obter uma resposta agora.',
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  };

  // Envia ao pressionar Enter (sem Shift)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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
            <button onClick={() => setIsOpen(false)} className={styles.closeButton} aria-label="Fechar chat">
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
                </div>
              </div>
            ))}
            {isRecording && support.supported && transcription && (
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
              handleSendMessage();
            }}
          >
            {!support.supported && (
              <div className={styles.browserWarning}>
                <AlertCircle size={16} />
                <span>{support.message}</span>
              </div>
            )}
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua mensagem"
                className={styles.textarea}
                rows={1}
                disabled={isRecording || isProcessing}
              />
              {support.supported && (
                <button
                  type="button"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`${styles.recordButton} ${isRecording ? styles.recording : ''}`}
                  disabled={isProcessing}
                  title={isRecording ? "Parar gravação" : "Iniciar gravação"}
                  aria-label={isRecording ? "Parar gravação" : "Iniciar gravação"}
                >
                  {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
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
                {recordingStatus}
              </div>
            )}
          </form>
        </div>
      ) : (
        // Botão flutuante
        <div className={styles.floatingButtonContainer}>
          <button onClick={() => setIsOpen(true)} className={styles.floatingButton} aria-label="Abrir chat">
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