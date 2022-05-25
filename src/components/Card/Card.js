import "./Card.css";
import pointIcon from "../../assets/Culture Icon.svg";
import { useMarker } from "../../context/MarkerContext";

const Card = () => {
  const { state } = useMarker();

  return (
    <div className="card">
      <header>Listagem de pontos</header>
      {state.map((card, index) => (
        <div key={card.id} className="content">
          <div className="row">
            <img src={pointIcon} alt="" />
            <h3>Ponto nº {String(index + 1).padStart(3, "0")} </h3>
          </div>
          <p>Criado em: </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
