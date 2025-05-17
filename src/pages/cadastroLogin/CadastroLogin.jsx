import React, { useState } from 'react'
import Style from "./CadastroLogin.module.css"
import LabelInput from '../../components/labelInput/LabelInput'
import ImgGarotoCoracaoAzul from "../../img/rapazSegurandoCoracao.png"
import ZeelusLogo from "../../img/zeelusLogo1.png"

function CadastroLogin() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cadastro, setCadastro] = useState(false)

  function cadastrar(e) {
    e.preventDefault();
    setCadastro(true)
  }

  return (
    <main className={Style.main}>

      <section className={Style.section}>

        <div className={Style.moldura}>
          <img src={ImgGarotoCoracaoAzul} alt="Homem segurando um grande coração" />
        </div>

      </section>

      <section className={Style.section}>

        <div className={Style.molduraLogo}>
          <img src={ZeelusLogo} alt="Logo da plataforma Zeelus" />
        </div>

        {
          cadastro ? (<h1>Entrar</h1>) : (<h1>Cadastrar</h1>)
        }

        <form action="#" onSubmit={cadastrar} className={Style.forms} autoComplete='off'>
          {
            cadastro ? (
              <>
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
                  textLabel={"Senha:"} props={password}
                  setProps={setPassword}
                />
              </>
            ) : (
              <>
                <LabelInput forForms={"nome"}
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
                  textLabel={"Senha:"} props={password}
                  setProps={setPassword}
                />
              </>
            )
          }

          <div className={Style.divTroca}>
            {
              cadastro ? (<a onClick={() => setCadastro(false)}>Não tenho conta.</a>) : (<a onClick={() => setCadastro(true)}>Já tenho conta.</a>)
            }
          </div>

          <div className={Style.divSubmit}>
            {
              cadastro ? (<button type="submit" className={Style.button}>Entrar</button>) : (<button type="submit" className={Style.button}>Cadastrar</button>)
            }
          </div>



        </form>

      </section>
    </main>
  )
}

export default CadastroLogin