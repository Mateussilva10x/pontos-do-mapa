import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useMarker } from "../../context/MarkerContext";
import pin from "../../assets/Regular=on, Move=off.svg";
import PolygonRest from "../Polygon/PolygonRest";
import Card from "../Card/Card";

const Maps = () => {
  const center = { lng: -53.58246612548828, lat: -15.174466133117676 };
  const { dispatch, state } = useMarker();

  const handleClick = () => {
    dispatch({ type: "ADD", payload: center });
  };

  console.log(state);

  const handleRemove = () => {
    dispatch({ type: "REMOVE ALL" });
  };

  const optionsMap = {
    controls: [],
    mapTypeId: "satellite",
    zoomControl: true,
    disableDefaultUI: true,
  };

  const optionsMarker = {
    draggable: true,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBEAZxY2lhg4lozssrO4j2VdkCrAddNdTU",
  });
  return (
    <div style={{ height: "100vh" }}>
      {isLoaded ? (
        <>
          <button onClick={handleClick}>Adicionar novo ponto</button>
          <button>Remover Pin</button>
          <button onClick={handleRemove}>Remover Todos</button>
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
                icon={pin}
                options={optionsMarker}
                position={marker}
              />
            ))}
            ;
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
