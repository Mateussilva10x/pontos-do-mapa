import moment from "moment";
import pointIcon from "../../assets/Culture Icon.svg";
import { useMarker } from "../../context/MarkerContext";

const CardContentList = () => {
  const { state } = useMarker();
  // const google = window.google;

  // console.log(google);

  // const handleClickCard = () => {
  //   console.log(state);

  //   state.id.setAnimation(google.maps.Animation.BOUNCE, 1000);
  // };

  // const handleClick = (id) => {
  //   dispatch({ type: "TESTE", payload: id });
  // };

  return (
    <>
      {state.map((marker, index) => (
        <div
          key={marker.id}
          className={
            marker.draggable === true ? "textContent selected" : "textContent"
          }
          // onClick={() => handleClick(marker.id)}
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
