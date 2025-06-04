import Style from "./CardPlanos.module.css";
import { Link } from "react-router";
import ButtonStart from "../buttonStart/ButtonStart";

function CardPlanos({ title, price, features, link, buttonText, icon }) {
  return (
    <div className={Style.cardPlanos}>
      <div className={Style.otherBox}>
        <h2>{title}</h2>
      </div>
      <div className={Style.boxPlanos}>
        <div className={Style.moldura}>
          <img src={icon} alt="" />
        </div>
        <h3>{price}</h3>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
        <div className={Style.box}>
          <Link to={link} style={{ width: "80%", display: "block" }}>
            <ButtonStart children={buttonText} width={"100%"} />
          </Link>
        </div>
    </div>
  );
}

export default CardPlanos;
