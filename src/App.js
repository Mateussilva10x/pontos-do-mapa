import "./App.css";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
import { MarkerContextProvider } from "./context/MarkerContext";

function App() {
  return (
    <>
      <MarkerContextProvider>
        <Header />
        <Maps />
      </MarkerContextProvider>
    </>
  );
}

export default App;
