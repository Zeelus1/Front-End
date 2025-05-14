import { useRouteError } from "react-router";
import Style from "./ErrorPage.module.css";
import CoracaoChorando from "../../img/CoracaoChorando.png";
import { useNavigate } from "react-router";
import ZeelusLogo from "../../img/zeelusLogo1.png"

function ErrorPage() {
  const error = useRouteError();
    const navigate = useNavigate()

    


  return (
    <main className={Style.main}>

      <section class={Style.section1}>

        <img src={ZeelusLogo} alt="" className={Style.responsiveImage}/>

        <div className={Style.container_section1}>

            

          <h1>Oops! Parece que essa página se perdeu no caminho...</h1>

          <p>
            Mas não se preocupe, mesmo nos erros, a gente se cuida por aqui!
          </p>

          {error && (
            <div className={Style.sub_div_sectio1}>
              <h2>Detalhes do erro:</h2>
              <p>
                {error.status ? `Status: ${error.status}` : null} -{" "}
                {error.statusText || error.message}
              </p>
            </div>
          )}

            <button onClick={() => navigate("/home")}>Clique aqui para voltar a pagína inicial</button>
        </div>

      </section>

      <section class={Style.section2}>
        <img src={CoracaoChorando} alt="Um coração chorando" />
      </section>
    </main>
  );
}

export default ErrorPage;
