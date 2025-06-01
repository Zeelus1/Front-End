import Style from "./CardPlanos.module.css";
import { Link } from "react-router";
import ButtonStart from "../buttonStart/ButtonStart";

function CardPlanos({ title, price, features, link, buttonText }) {
  return (
    <div className={Style.cardPlanos}>
      <h2>{title}</h2>
      <div className={Style.boxPlanos}>
        <h3>{price}</h3>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <Link to={link} style={{ width: "80%", display: "block" }}>
          <ButtonStart children={buttonText} width={"100%"} />
        </Link>
      </div>
    </div>
  );
}

export default CardPlanos;
