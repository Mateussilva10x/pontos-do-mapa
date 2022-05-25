import "./App.css";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
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
          <Maps />
        </ModalContextProvider>
      </MarkerContextProvider>
    </>
  );
}

export default App;
