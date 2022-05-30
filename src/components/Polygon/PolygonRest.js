import { Polygon } from "@react-google-maps/api";
import { useMarker } from "../../context/MarkerContext";

import GEOData from "../../data/Talhao.json";
// import teste from "../../data/teste.json";

const PolygonRest = () => {
  const { dispatch, state } = useMarker();
  const optionsPolygon = {
    fillColor: "white",
    fillOpacity: 0.4,
    strokeColor: "white",
  };

  const handleClickPolygon = (id) => {
    dispatch({ type: "DISABLE_MARKER", payload: id });
  };

  const paths = GEOData.features[0].geometry.coordinates[0];
  const pathsArray = paths.map((path) => ({ lng: path[0], lat: path[1] }));
  return (
    <Polygon
      paths={pathsArray}
      options={optionsPolygon}
      onClick={() => handleClickPolygon(state.id)}
    />
  );
};

export default PolygonRest;
