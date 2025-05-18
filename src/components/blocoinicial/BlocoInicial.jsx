import Style from "./BlocoInicial.module.css";

function BlocoInicial({ imagem, textoAlt, children }) {
    return (
        <div className={Style.container}>
            <img src={imagem} alt={textoAlt} className={Style.imagem} />
            <div className={Style.texto}>
                {children}
            </div>
        </div>
    );
}

export default BlocoInicial;