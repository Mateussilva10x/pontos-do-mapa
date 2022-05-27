import { GoogleMap } from "@react-google-maps/api";
import PolygonRest from "../Polygon/PolygonRest";
import Card from "../Card/Card";
import Buttons from "../Buttons/Buttons";
import MarkerPoint from "../Marker/Marker";
import calculateCenter from "../../utils/CalculateCenter";
import GEOData from "../../data/Talhao.json";

import "../../styles/map.scss";
// import teste from "../../data/teste.json";

const MapContent = () => {
  const paths = GEOData.features[0].geometry.coordinates[0];
  const pathsArray = paths.map((path) => ({ lng: path[0], lat: path[1] }));
  const center = calculateCenter(pathsArray);
  const google = window.google;

  const optionsMap = {
    controls: [],
    mapTypeId: "satellite",
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    disableDefaultUI: true,
  };

  return (
    <div className="mapContent">
      <Buttons />
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={16.2}
        options={optionsMap}
      >
        <PolygonRest />
        <MarkerPoint />
        <Card />
      </GoogleMap>
    </div>
  );
};

export default MapContent;
