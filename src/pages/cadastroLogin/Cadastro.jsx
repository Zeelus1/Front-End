import React, { useState } from "react";
import Style from "../cadastroLogin/CadastroLogin.module.css";
import LabelInput from "../../components/labelInput/LabelInput";
import ZeelusLogo from "../../img/zeelusLogo1.png";
import { Link } from "react-router";
import FamiliaTresPessoas from "../../img/familiaTresPessoas.png";
import TermosDeUsoModal from "../../components/termosdeUso/TermosDeUsoModal.jsx"; // Importação do modal

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aceitou, setAceitou] = useState(false);
  const [showTermos, setShowTermos] = useState(false); // Estado para o modal

  function handleCadastro(e) {
    e.preventDefault();
    if (!aceitou) return;
    // lógica de cadastro
  }

  return (
    <main className={Style.main}>
      <section className={Style.section}>
        <div className={Style.moldura}>
          <img
            src={FamiliaTresPessoas}
            alt="Familia de três pessoas sorrindo"
          />
        </div>
      </section>
      <section className={Style.section}>
        <div className={Style.molduraLogo}>
          <img src={ZeelusLogo} alt="Logo da plataforma Zeelus" />
        </div>
        <h1>Cadastrar</h1>
        {showTermos && (
            <TermosDeUsoModal onClose={() => setShowTermos(false)} />
          )}
        <form
          className={Style.forms}
          onSubmit={handleCadastro}
          autoComplete="off"
        >
          <LabelInput
            forForms={"nome"}
            type={"text"}
            id={"nome"}
            name={"nome"}
            required={true}
            placeholder={"Digite seu nome completo"}
            textLabel={"Nome completo:"}
            props={name}
            setProps={setName}
          />
          <LabelInput
            forForms={"email"}
            type={"email"}
            id={"email"}
            name={"email"}
            required={true}
            placeholder={"Digite seu e-mail"}
            textLabel={"E-mail:"}
            props={email}
            setProps={setEmail}
          />
          <LabelInput
            forForms={"senha"}
            type={"password"}
            id={"senha"}
            name={"senha"}
            required={true}
            placeholder={"Digite sua senha"}
            textLabel={"Senha:"}
            props={password}
            setProps={setPassword}
          />
          <div style={{ margin: "1rem 0" }}>
            <label style={{ fontSize: "1.4rem" }}>
              <input
                type="checkbox"
                checked={aceitou}
                onChange={(e) => setAceitou(e.target.checked)}
                required
                style={{ marginRight: "8px" }}
              />
              Li e aceito os{" "}
              <span
                style={{
                  color: "#3498db",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setShowTermos(true)}
                tabIndex={0}
                role="button"
                onKeyPress={(e) => {
                  if (e.key === "Enter") setShowTermos(true);
                }}
              >
                Termos de Uso e Políticas de Privacidade
              </span>{" "}
              .
            </label>
          </div>
          
          <div className={Style.divSubmit}>
            <button type="submit" className={Style.button} disabled={!aceitou}>
              Cadastrar
            </button>
          </div>
          <div className={Style.divTroca}>
            <p>
              Já possui conta? <Link to="/login">Faça login</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Cadastro;
