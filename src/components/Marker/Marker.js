import { Marker } from "@react-google-maps/api";

import { useMarker } from "../../context/MarkerContext";
import pin from "../../assets/Regular=on, Move=off.svg";
import pinClick from "../../assets/Regular=off, Move=on.svg";

const MarkerPoint = () => {
  const { dispatch, state } = useMarker();

  const handleMarker = (id) => {
    dispatch({
      type: "MODIFY",
      payload: id,
    });
  };

  return (
    <>
      {state.map((marker) => (
        <Marker
          key={marker.index}
          icon={marker.draggable ? pinClick : pin}
          draggable={marker.draggable}
          position={marker}
          onClick={() => handleMarker(marker.id)}
        />
      ))}
    </>
  );
};

export default MarkerPoint;
