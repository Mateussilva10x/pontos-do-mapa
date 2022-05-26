import React from "react";
import { Polygon } from "@react-google-maps/api";
import GEOData from "../../data/Talhao.json";
// import teste from "../../data/teste.json";

const PolygonRest = () => {
  const optionsPolygon = {
    fillColor: "white",
    fillOpacity: 0.4,
    strokeColor: "white",
  };

  const paths = GEOData.features[0].geometry.coordinates[0];
  const pathsArray = paths.map((path) => ({ lng: path[0], lat: path[1] }));
  return <Polygon paths={pathsArray} options={optionsPolygon} />;
};

export default PolygonRest;
