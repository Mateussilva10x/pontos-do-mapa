import React from "react";
import { useMarker } from "../../context/MarkerContext";
import { useModal } from "../../context/ModalContext";

import trash from "../../assets/Trash.svg";

import "../../styles/modal.scss";

const Modal = () => {
  const { toggleShow, show, fn, title } = useModal();
  const { dispatch } = useMarker();

  const handleRemove = () => {
    dispatch({ type: fn });
    toggleShow();
  };

  return (
    <>
      {show && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <div className="headerClose">
              <span onClick={toggleShow} className="close">
                &times;
              </span>
            </div>
            <div className="titleExclude">
              <h2>{title}</h2>
            </div>
            <div className="warning">
              <div className="warningContent">
                <h3>Atenção!</h3>
                <p>Esta ação não poderá ser desfeita.</p>
              </div>
            </div>
            <div className="buttonsConfirm">
              <button onClick={handleRemove} className="confirmExclude">
                <img src={trash} alt="" /> Excluir
              </button>
              <button onClick={toggleShow} className="cancel">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
