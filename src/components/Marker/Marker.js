import { Marker } from "@react-google-maps/api";

import { useMarker } from "../../context/MarkerContext";
import pin from "../../assets/Regular=on, Move=off.svg";
import pinClick from "../../assets/Regular=off, Move=on.svg";

const MarkerPoint = () => {
  const { dispatch, state } = useMarker();

  const handleMarker = (id) => {
    dispatch({
      type: "ENABLE_MARKER",
      payload: id,
    });
  };

  const handleFixed = (id, position) => {
    const latMarker = position.latLng.lat();
    const lngMarker = position.latLng.lng();

    dispatch({
      type: "MODIFY_POSITION",
      payload: { id, latMarker, lngMarker },
    });
  };

  return (
    <>
      {state.map((marker) => (
        <Marker
          key={marker.id}
          icon={marker.draggable ? pinClick : pin}
          draggable={marker.draggable}
          position={marker}
          onClick={() => handleMarker(marker.id)}
          onDragEnd={(position) => handleFixed(marker.id, position)}
        />
      ))}
    </>
  );
};

export default MarkerPoint;
