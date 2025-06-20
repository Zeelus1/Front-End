import React, { useState, useRef } from 'react'
import Style from './Anamnesia.module.css'
import BlocoInicial from '../../components/blocoinicial/BlocoInicial.jsx'
import FileCoracao from "../../img/fileCoracao.png"
import { FaUser, FaStethoscope, FaClipboardCheck, FaPlus, FaEdit, FaTrash, FaChevronRight, FaChevronLeft, FaCamera } from "react-icons/fa";
import IconCoracaoQuebraCabeca from "../../icons/iconCoracaoQuebraCabeca.png";
import IconLivroCoracao from "../../icons/iconLivroCoracao.png";
import ModalAnamnese from '../../components/modalAnamnese/ModalAnamnese';
import Faq from '../../components/faq/Faq.jsx';

const faqData = [
    {
      question: "O que é a Zeelus?",
      answer:
        "A Zeelus é uma plataforma inovadora que conecta cuidadores e oferece ferramentas para facilitar a rotina de cuidados, promovendo organização, aprendizado e suporte contínuo.",
    },
    {
      question: "Meus dados estão protegidos?",
      answer:
        "Sim! A Zeelus prioriza a segurança e privacidade dos seus dados. Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de proteção de dados.",
    },
    {
      question: "Para quem é a Zeelus?",
      answer:
        "A Zeelus é ideal para cuidadores formais e informais que buscam uma solução completa para organizar suas atividades, compartilhar experiências e desenvolver suas habilidades no cuidado.",
    },
    {
      question: "Preciso pagar para usar?",
      answer:
        "A Zeelus oferece um plano gratuito com diversas funcionalidades essenciais. Também disponibilizamos planos premium com recursos adicionais para quem busca uma experiência ainda mais completa.",
    },
];

const perfisIniciais = [
    {
        nome: "Márcia Carvalho Dias",
        apelido: "Márcia",
        idade: 67,
        genero: "Mulher",
        nascimento: "13/06/1957",
        diagnostico: "Possui diagnóstico de Alzheimer há 3 anos.",
        sobre: "Márcinha enfrenta a Demência há 4 anos, sempre cercada de carinho e apoio da família. Gosta de ouvir forró antigo nas manhãs tranquilas e sente paz ao tomar sol no quintal.",
        condicao: {
            diagnostico: "Demência",
            dependencia: "Moderado",
            especial: "Higiene, organização da rotina, lembretes de medicação"
        },
        cuidados: {
            medicamentos: "Donepezila 10mg (1x ao dia)",
            alergias: "Nenhuma registrada",
            observacoes: "Fica mais confusa no fim da tarde. Falar com calma e repetir com carinho ajuda muito."
        },
        avatar: null
    }
];

function Anamnesia() {
    const [perfis, setPerfis] = useState(perfisIniciais);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
    const fileInputRef = useRef(null);

    const handleAdicionar = () => {
        setModalAberto(true);
    };

    const handleSalvarPerfil = (novoPerfil) => {
        setPerfis([...perfis, novoPerfil]);
        setIndiceAtual(perfis.length);
        setModalAberto(false);
    };

    const handleEditar = () => {
        setModalEdicaoAberto(true);
    };

    const handleSalvarEdicao = (perfilEditado) => {
        const novosPerfis = [...perfis];
        // Mantém a imagem do avatar atual
        perfilEditado.avatar = perfis[indiceAtual].avatar;
        novosPerfis[indiceAtual] = perfilEditado;
        setPerfis(novosPerfis);
        setModalEdicaoAberto(false);
    };

    const handleExcluir = () => {
        if (perfis.length === 1) {
            alert("É necessário ter pelo menos um perfil.");
            return;
        }
        if (window.confirm("Deseja excluir este perfil?")) {
            const novosPerfis = perfis.filter((_, idx) => idx !== indiceAtual);
            setPerfis(novosPerfis);
            setIndiceAtual((prev) => prev > 0 ? prev - 1 : 0);
        }
    };

    const handleProximo = () => {
        if (indiceAtual < perfis.length - 1) setIndiceAtual(indiceAtual + 1);
    };

    const handleAnterior = () => {
        if (indiceAtual > 0) setIndiceAtual(indiceAtual - 1);
    };

    const handleImagemClick = () => {
        fileInputRef.current.click();
    };

    const handleImagemChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const novosPerfis = [...perfis];
                novosPerfis[indiceAtual] = {
                    ...novosPerfis[indiceAtual],
                    avatar: e.target.result
                };
                setPerfis(novosPerfis);
            };
            reader.readAsDataURL(file);
        }
    };

    const perfil = perfis[indiceAtual];

    return (
        <>
            <BlocoInicial imagem={FileCoracao} textoAlt={"Imagem de um coração"}>
                <h1 className={Style.titulo}>
                    Cuidar de quem você ama começa com <br /> escuta e carinho. Estamos com você!
                </h1>
            </BlocoInicial>

            <h1 className={Style.titleName}>Anamnese de {perfil.apelido}</h1>

            {/* Botões de ação */}
            <div className={Style.botoesAcoes}>
                <button onClick={handleAdicionar} title="Adicionar novo perfil" className={Style.botaoAcao}>
                    <FaPlus /> Adicionar
                </button>
                <button onClick={handleEditar} title="Editar perfil" className={Style.botaoAcao}>
                    <FaEdit /> Editar
                </button>
                <button onClick={handleExcluir} title="Excluir perfil" className={Style.botaoAcao}>
                    <FaTrash /> Excluir
                </button>
                <button onClick={handleAnterior} disabled={indiceAtual === 0} title="Perfil anterior" className={Style.botaoAcao}>
                    <FaChevronLeft /> Anterior
                </button>
                <button onClick={handleProximo} disabled={indiceAtual === perfis.length - 1} title="Próximo perfil" className={Style.botaoAcao}>
                    Próximo <FaChevronRight />
                </button>
            </div>

            <section className={Style.infoBasic}>
                <div className={Style.cardInfo}>
                    <div className={Style.avatarSection}>
                        <div 
                            className={Style.avatar} 
                            onClick={handleImagemClick}
                            style={{
                                backgroundImage: perfil.avatar ? `url(${perfil.avatar})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                        >
                            {!perfil.avatar && (
                                <FaCamera 
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#98D4E8',
                                        fontSize: '24px'
                                    }}
                                />
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImagemChange}
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className={Style.dadosSection}>
                        <div className={Style.nomeLinha}>
                            <img
                                src={IconCoracaoQuebraCabeca}
                                alt="Ícone coração quebra-cabeça"
                                className={Style.iconeCoracao}
                            />
                            <h2 className={Style.nome}>{perfil.nome}</h2>
                        </div>
                        <p className={Style.dados}>
                            <FaUser style={{ marginRight: "6px", color: "#3ca6e5" }} />
                            <span>{perfil.idade} anos</span> | <span>{perfil.genero}</span> | <span>Nascida em {perfil.nascimento}</span>
                        </p>
                        <p className={Style.diagnostico}>
                            {perfil.diagnostico}
                        </p>
                    </div>
                </div>
            </section>

            <section className={Style.about}>
                <div className={Style.aboutBox}>
                    <div className={Style.aboutTitle}>
                        <img
                            src={IconLivroCoracao}
                            alt="Ícone livro com coração"
                            style={{ width: 28, height: 28, marginRight: 8, verticalAlign: "middle" }}
                        />
                        <span>Sobre {perfil.apelido}</span>
                    </div>
                    <p className={Style.aboutText}>
                        {perfil.sobre}
                    </p>
                </div>
            </section>

            <section className={Style.condicoes}>
                <div className={Style.condicoesBox}>
                    <div className={Style.condicoesTitulo}>
                        <FaStethoscope style={{ color: "#3ca6e5", marginRight: 8 }} />
                        <span>Condição atípica</span>
                    </div>
                    <div className={Style.condicoesTexto}>
                        <div><strong>Diagnóstico:</strong> {perfil.condicao.diagnostico}</div>
                        <div><strong>Grau de dependência:</strong> {perfil.condicao.dependencia}</div>
                        <div><strong>Cuidado especial:</strong> {perfil.condicao.especial}</div>
                    </div>
                    <div className={Style.cuidadosTitulo}>
                        <FaClipboardCheck style={{ color: "#3ca6e5", marginRight: 8 }} />
                        <span>Cuidados importantes</span>
                    </div>
                    <div className={Style.condicoesTexto}>
                        <div><strong>Medicamentos:</strong> {perfil.cuidados.medicamentos}</div>
                        <div><strong>Alergias:</strong> {perfil.cuidados.alergias}</div>
                        <div><strong>Observações:</strong> {perfil.cuidados.observacoes}</div>
                    </div>
                </div>
            </section>

            {/* Modal para adicionar novo perfil */}
            <ModalAnamnese
                aberto={modalAberto}
                onClose={() => setModalAberto(false)}
                onSalvar={handleSalvarPerfil}
            />

            {/* Modal para editar perfil existente */}
            <ModalAnamnese
                aberto={modalEdicaoAberto}
                onClose={() => setModalEdicaoAberto(false)}
                onSalvar={handleSalvarEdicao}
                perfilInicial={perfil}
                modoEdicao={true}
            />

            <section id="faq" className={Style.faq}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
                    <path
                    fill="#f5f3ef"
                    fill-opacity="1"
                    d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,96C672,107,768,181,864,192C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
    
                <Faq data={faqData} answerColor={"#000"} titleColor={"#004777"} questionColor={"#000"} title={"Dúvidas frequentes"} plusColor={"#004777"} showBorder={true}/>
            </section>
        </>
    )
}

export default Anamnesia