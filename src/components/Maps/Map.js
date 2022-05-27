import { useJsApiLoader } from "@react-google-maps/api";
import Loading from "../Loading/Loading";
import MapContent from "./MapContent";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBEAZxY2lhg4lozssrO4j2VdkCrAddNdTU",
  });
  return isLoaded ? <MapContent /> : <Loading />;
};

export default Map;
