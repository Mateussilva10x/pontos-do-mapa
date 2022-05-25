import { useMarker } from "../../context/MarkerContext";
import { v4 as uuid4 } from "uuid";
import pinButton from "../../assets/Pin.svg";
import trash from "../../assets/Trash.svg";

import "./button.css";

const Buttons = () => {
  const { dispatch, state } = useMarker();
  const center = { lng: -53.5845, lat: -15.18 };
  const handleClick = () => {
    dispatch({
      type: "ADD",
      payload: { ...center, id: uuid4(), draggable: false },
    });
  };

  const handleRemovePin = () => {
    dispatch({ type: "REMOVE" });
  };

  const handleRemoveAll = () => {
    dispatch({ type: "REMOVE ALL" });
  };

  return (
    <div className="buttons">
      <button onClick={handleClick}>
        Adicionar novo ponto <img src={pinButton} alt="" />
      </button>
      {state.length > 0 ? (
        <>
          <button onClick={handleRemoveAll}>
            Remover Todos <img src={trash} alt="" />
          </button>
        </>
      ) : (
        ""
      )}
      <button onClick={handleRemovePin}>
        Remover Pin <img src={trash} alt="" />
      </button>
    </div>
  );
};

export default Buttons;
