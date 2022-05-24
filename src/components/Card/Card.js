import "./Card.css";
import pointIcon from "../../assets/Culture Icon.svg";

const Card = () => {
  return (
    <div className="card">
      <header>Listagem de pontos</header>
      <div className="content">
        <div className="row">
          <img src={pointIcon} alt="" />
          <h3>Ponto nº </h3>
        </div>

        <p>Criado em: </p>
      </div>
    </div>
  );
};

export default Card;
