import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PolygonRest from "../Polygon/PolygonRest";
import Card from "../Card/Card";
import Buttons from "../Buttons/Buttons";
import MarkerPoint from "../Marker/Marker";

const Maps = () => {
  const center = { lng: -53.5845, lat: -15.18 };

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
            <MarkerPoint />
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
