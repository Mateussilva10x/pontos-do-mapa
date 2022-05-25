import { useMarker } from "../../context/MarkerContext";
import { v4 as uuid4 } from "uuid";
import pinButton from "../../assets/Pin.svg";
import trash from "../../assets/Trash.svg";

import "../../styles/buttons.scss";
import { useModal } from "../../context/ModalContext";

const Buttons = () => {
  const { dispatch, state } = useMarker();
  const { toggleShow } = useModal();

  const isSelected = !!state.find((item) => item.draggable);

  const center = { lng: -53.5845, lat: -15.18 };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: { ...center, id: uuid4(), draggable: false, date: new Date() },
    });
  };

  const handleRemovePin = () => {
    toggleShow("Excluir Ponto selecionado?", "REMOVE");
  };

  const handleRemoveAll = () => {
    toggleShow("Excluir Todos os pontos?", "REMOVE_ALL");
  };

  return (
    <div className="buttons">
      {isSelected && (
        <button className="buttonColor" onClick={handleRemovePin}>
          Remover Pin <img src={trash} alt="" />
        </button>
      )}
      <button onClick={handleAdd}>
        Adicionar novo ponto <img src={pinButton} alt="" />
      </button>
      {state.length > 0 && (
        <button className="buttonColor" onClick={handleRemoveAll}>
          Remover Todos <img src={trash} alt="" />
        </button>
      )}
    </div>
  );
};

export default Buttons;
