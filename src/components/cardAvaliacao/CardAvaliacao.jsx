import Style from "./CardAvaliacao.module.css";
import Stars from "../stars/Stars.jsx";

function CardAvaliacao({
  avatar,
  title,
  rating,
  name,
  quoteIcon,
  children,
}) {
  return (
    <div className={Style.cardAvaliacao}>
      <div className={Style.boxAvaliacao}>
        <div className={Style.molduraAvatarAvaliacao}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={Style.listDivAvaliacao}>
          <h2>{title}</h2>
          <Stars rating={rating} size={25} readonly={true} />
          <h3>{name}</h3>
        </div>
        <div className={Style.molduraAspaAvaliacao}>
          <img src={quoteIcon} alt="icone de aspa" />
        </div>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default CardAvaliacao;