import Header from "./components/Header/Header";
import Map from "./components/Maps/Map";
import Modal from "./components/Modal/Modal";
import { MarkerContextProvider } from "./context/MarkerContext";
import { ModalContextProvider } from "./context/ModalContext";

function App() {
  return (
    <>
      <MarkerContextProvider>
        <ModalContextProvider>
          <Modal />
          <Header />
          <Map />
        </ModalContextProvider>
      </MarkerContextProvider>
    </>
  );
}

export default App;
