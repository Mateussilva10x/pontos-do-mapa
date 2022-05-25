import { useMarker } from "../../context/MarkerContext";
import { v4 as uuid4 } from "uuid";
import pinButton from "../../assets/Pin.svg";
import trash from "../../assets/Trash.svg";

import "../../styles/buttons.scss";
import { useModal } from "../../context/ModalContext";

const Buttons = () => {
  const { dispatch, state, selected, setSelected } = useMarker();
  const { toggleShow } = useModal();
  const center = { lng: -53.5845, lat: -15.18 };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: { ...center, id: uuid4(), draggable: false },
    });
  };

  const handleRemovePin = (pinSelected) => {
    dispatch({ type: "REMOVE", payload: pinSelected });
    setSelected(false);
  };

  const handleRemove = () => {
    toggleShow();
    console.log("deveria aparecer o modal");
  };

  return (
    <div className="buttons">
      <button onClick={handleAdd}>
        Adicionar novo ponto <img src={pinButton} alt="" />
      </button>
      {state.length > 0 && (
        <>
          <button onClick={handleRemove}>
            Remover Todos <img src={trash} alt="" />
          </button>
        </>
      )}
      {selected && (
        <button onClick={handleRemovePin}>
          Remover Pin <img src={trash} alt="" />
        </button>
      )}
    </div>
  );
};

export default Buttons;
