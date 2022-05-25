import "./Card.css";
import pointIcon from "../../assets/Culture Icon.svg";
import { useMarker } from "../../context/MarkerContext";

const Card = () => {
  const { state } = useMarker();

  return (
    <div className="card">
      <header>Listagem de pontos</header>
      <div className="content">
        {state.length > 0 ? (
          state.map((card, index) => (
            <div key={card.id} className="separator">
              <div className="row">
                <img src={pointIcon} alt="" />
                <h3>Ponto nº {String(index + 1).padStart(3, "0")} </h3>
              </div>
              <p>Criado em: </p>
            </div>
          ))
        ) : (
          <div className="separator">
            <div className="row">
              <p>Sem pontos de monitoramento para exibir no momento </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
