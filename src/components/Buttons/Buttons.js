import { useMarker } from "../../context/MarkerContext";
import { v4 as uuid4 } from "uuid";
import { useModal } from "../../context/ModalContext";

import pinButton from "../../assets/Pin.svg";
import trash from "../../assets/Trash.svg";
import GEOData from "../../data/Talhao.json";
import calculateCenter from "../../utils/CalculateCenter";

import "../../styles/buttons.scss";

const Buttons = () => {
  const { dispatch, state } = useMarker();
  const { toggleShow } = useModal();

  const isSelected = !!state.find((item) => item.draggable);

  const paths = GEOData.features[0].geometry.coordinates[0];
  const pathsArray = paths.map((path) => ({ lng: path[0], lat: path[1] }));
  const center = calculateCenter(pathsArray);

  const handleAdd = () => {
    dispatch({
      type: "ADD_MARKER",
      payload: { ...center, id: uuid4(), draggable: false, date: new Date() },
    });
  };

  const handleRemovePin = () => {
    toggleShow("Excluir Ponto selecionado?", "REMOVE_ONE_MARKER");
  };

  const handleRemoveAll = () => {
    toggleShow("Excluir Todos os pontos?", "REMOVE_ALL_MARKERS");
  };

  return (
    <div className="buttons">
      {isSelected && (
        <button className="buttonColor" onClick={handleRemovePin}>
          Deletar Pin <img src={trash} alt="" />
        </button>
      )}
      <button onClick={handleAdd}>
        Adicionar Novo <img src={pinButton} alt="" />
      </button>
      {state.length > 0 && (
        <button className="buttonColor" onClick={handleRemoveAll}>
          Deletar Todos <img src={trash} alt="" />
        </button>
      )}
    </div>
  );
};

export default Buttons;
