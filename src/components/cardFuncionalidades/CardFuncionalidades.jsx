import Style from "./CardFuncionalidades.module.css";

function CardFuncionalidades({
  icon,
  iconAlt,
  title,
  description,
  image,
  imageAlt,
}) {
  return (
    <div className={Style.cardFuncionalidades}>
      <div className={Style.moldura}>
        <img src={icon} alt={iconAlt} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={Style.molduraCard}>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default CardFuncionalidades;
