import Style from "./Footer.module.css"
import GithubIcon from "../../icons/github.svg";
import InstagramIcon from "../../icons/instagram.svg";
import LinkedInIcon from "../../icons/linkedin.svg";

function Footer() {
    return (
        <footer className={Style.footer}>

            <div className={Style.container}>

                <section className={Style.section1}>

                    <h1>Zeelus</h1>
                    <p>Quem cuida, <br /> também precisa de cuidados</p>

                    <ul>
                        <li>
                            <a href="https://github.com/Zeelus1" target="_blank">
                                <img src={GithubIcon} alt="Icone do Gihub" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_zeelus/" target="_blank">
                                <img src={InstagramIcon} alt="Icone do Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/zeelus" target="_blank">
                                <img src={LinkedInIcon} alt="Icone do Linkedin" />
                            </a>
                        </li>
                    </ul>

                </section>

                <section className={Style.section2}>
                    
                    <h2>Companhia</h2>

                    <ul>
                        <li>
                            Sobre
                        </li>
                        <li>
                            E-mail
                        </li>
                        <li>
                            Apoio
                        </li>
                    </ul>

                </section>

            </div>
            <div style={{width: "100%"}}>
                
                <hr style={{backgroundColor: "white", margin: "30px 0px"}}/>
                <h3 style={
                    {
                        fontFamily: "var(--font-title)", 
                        fontSize: "1.4rem", 
                        fontWeight: 400, 
                        textAlign: "center"
                    }
                }>&#xA9; 2025 Zeelus. Todos os direitos reservados.</h3>
            
            </div>

        </footer>
    )
}

export default Footer