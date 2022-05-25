import React from "react";
import { useModal } from "../../context/ModalContext";

import "../../styles/modal.scss";

const Modal = () => {
  const { toggleShow, show } = useModal();

  return (
    <>
      {show && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <div className="header-close">
              <span onClick={toggleShow} className="close">
                &times;
              </span>
            </div>
            <h2>Excluir todos os pontos?</h2>
            {/* <div className="images-modal">
              <img
                id="image-hight"
                src={}
                alt="images from each note expanded"
              />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
