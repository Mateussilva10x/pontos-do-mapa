import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useMarker } from "../../context/MarkerContext";
import pin from "../../assets/Regular=on, Move=off.svg";
import pinClick from "../../assets/Regular=off, Move=on.svg";
import PolygonRest from "../Polygon/PolygonRest";
import Card from "../Card/Card";
import Buttons from "../Buttons/Buttons";

const Maps = () => {
  const center = { lng: -53.5845, lat: -15.18 };
  const { dispatch, state } = useMarker();

  const handleMarker = (id) => {
    dispatch({
      type: "MODIFY",
      payload: id,
    });
  };

  const optionsMap = {
    controls: [],
    mapTypeId: "satellite",
    zoomControl: false,
    disableDefaultUI: true,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBEAZxY2lhg4lozssrO4j2VdkCrAddNdTU",
  });
  return (
    <div style={{ height: "91.7vh" }}>
      {isLoaded ? (
        <>
          <Buttons />
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
