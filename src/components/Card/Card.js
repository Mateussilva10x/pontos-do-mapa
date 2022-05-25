import pointIcon from "../../assets/Culture Icon.svg";
import { useMarker } from "../../context/MarkerContext";

import "../../styles/cards.scss";

const Card = () => {
  const { state } = useMarker();

  return (
    <div className="card">
      <div className="content">
        <div className="titleContent">
          <h2>Listagem de pontos</h2>
        </div>

        {state.length > 0 ? (
          state.map((card, index) => (
            <div key={card.id} className="separator">
              <div className="colum">
                <div className="row">
                  <img src={pointIcon} alt="" />
                  <h3>Ponto nº {String(index + 1).padStart(3, "0")} </h3>
                </div>

                <p>
                  Criado em: {card.date.toISOString().split("-").join("/")}{" "}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="separator">
            <div className="row">
              <div className="textContent">
                <p>Sem pontos de monitoramento para exibir no momento </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
