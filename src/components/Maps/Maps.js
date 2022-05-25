import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { v4 as uuid4 } from "uuid";
import { useMarker } from "../../context/MarkerContext";
import pin from "../../assets/Regular=on, Move=off.svg";
import pinClick from "../../assets/Regular=off, Move=on.svg";
import PolygonRest from "../Polygon/PolygonRest";
import Card from "../Card/Card";

const Maps = () => {
  const center = { lng: -53.58246612548828, lat: -15.174466133117676 };
  const { dispatch, state } = useMarker();

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

  const handleMarker = (id) => {
    dispatch({
      type: "MODIFY",
      payload: id,
    });
  };

  const optionsMap = {
    controls: [],
    mapTypeId: "satellite",
    zoomControl: true,
    disableDefaultUI: true,
  };
  // const optionsMap = (map) => ({
  //   map.controls: [],
  //   mapTypeId: "satellite",
  //   zoomControl: true,
  //   zoomControlOptions: { position: map.ControlPosition.RIGHT_TOP },
  //   disableDefaultUI: true,
  // });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBEAZxY2lhg4lozssrO4j2VdkCrAddNdTU",
  });
  return (
    <div style={{ height: "100vh" }}>
      {isLoaded ? (
        <>
          <button onClick={handleClick}>Adicionar novo ponto</button>
          <button onClick={handleRemovePin}>Remover Pin</button>
          <button onClick={handleRemoveAll}>Remover Todos</button>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={16}
            options={optionsMap}
          >
            <PolygonRest />
            {state.map((marker) => (
              <Marker
                key={marker.index}
                icon={marker.draggable ? pinClick : pin}
                draggable={marker.draggable}
                position={marker}
                onClick={() => handleMarker(marker.id)}
              />
            ))}

            <Card />
          </GoogleMap>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Maps;
