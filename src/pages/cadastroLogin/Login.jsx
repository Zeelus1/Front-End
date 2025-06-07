import React, { useState } from "react";
import Style from "../cadastroLogin/CadastroLogin.module.css";
import LabelInput from "../../components/labelInput/LabelInput";
import ZeelusLogo from "../../img/zeelusLogo1.png";
import ImgGarotoCoracaoAzul from "../../img/rapazSegurandoCoracao.png";
import { Link } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // lógica de login
  }

  return (
    <main className={Style.main}>
      <section className={Style.section}>
        <div className={Style.moldura}>
          <img
            src={ImgGarotoCoracaoAzul}
            alt="Homem segurando um grande coração"
          />
        </div>
      </section>
      <section className={Style.section}>
        <div className={Style.molduraLogo}>
          <img src={ZeelusLogo} alt="Logo da plataforma Zeelus" />
        </div>
        <h1>Entrar</h1>
        <form className={Style.forms} onSubmit={handleLogin} autoComplete="off">
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
          <div className={Style.divTroca}>
            <Link to="/esqueci-senha">Esqueci minha senha</Link>
          </div>
          <div className={Style.divSubmit}>
            <button type="submit" className={Style.button}>
              Entrar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
