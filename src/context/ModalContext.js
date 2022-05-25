import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [fn, setFn] = useState();

  const toggleShow = (title, fn) => {
    setShow(!show);
    setTitle(title);
    setFn(fn);
  };

  return (
    <ModalContext.Provider value={{ show, toggleShow, title, fn }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
