import moment from "moment";
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
            <div key={card.id} className="textContent">
              <h3>
                <img src={pointIcon} alt="" />
                Ponto nº {String(index + 1).padStart(3, "0")}{" "}
              </h3>
              <p>Criado em: {moment(card.date).format("DD/MM/YYYY - hh:mm")}</p>
            </div>
          ))
        ) : (
          <div className="textContentEmpty">
            <p>Sem pontos de monitoramento para exibir no momento </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
