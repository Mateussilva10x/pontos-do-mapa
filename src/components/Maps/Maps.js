import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PolygonRest from "../Polygon/PolygonRest";
import Card from "../Card/Card";
import Buttons from "../Buttons/Buttons";
import MarkerPoint from "../Marker/Marker";
import calculateCenter from "../../utils/CalculateCenter";
import GEOData from "../../data/Talhao.json";

const Maps = () => {
  const paths = GEOData.features[0].geometry.coordinates[0];
  const pathsArray = paths.map((path) => ({ lng: path[0], lat: path[1] }));
  const center = calculateCenter(pathsArray);

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
            zoom={16.3}
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
