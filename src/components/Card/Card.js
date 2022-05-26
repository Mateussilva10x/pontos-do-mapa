import { useMarker } from "../../context/MarkerContext";

import "../../styles/cards.scss";
import CardContentList from "./CardContentList";

const Card = () => {
  const { state } = useMarker();

  return (
    <div className="card">
      <div className="content">
        <div className="titleContent">
          <h2>Listagem de pontos</h2>
        </div>
        {state.length > 0 ? (
          <CardContentList />
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
