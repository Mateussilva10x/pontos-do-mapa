import moment from "moment";
import pointIcon from "../../assets/Culture Icon.svg";
import { useMarker } from "../../context/MarkerContext";

const CardContentList = () => {
  const { state } = useMarker();
  return (
    <>
      {state.map((marker, index) => (
        <div
          key={marker.id}
          className={
            marker.draggable === true ? "textContent selected" : "textContent"
          }
        >
          <h3>
            <img src={pointIcon} alt="" />
            Ponto nº {String(index + 1).padStart(3, "0")}{" "}
          </h3>
          <p>Criado em: {moment(marker.date).format("DD/MM/YYYY - HH:mm ")}</p>
        </div>
      ))}
    </>
  );
};

export default CardContentList;
