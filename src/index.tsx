import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, isModalOpen, closeModal }: ModalProps) => {
  return createPortal(
    <>
      {isModalOpen && (
        <>
          <div
            className="modal-backdrop"
            onClick={() => {
              closeModal();
            }}
          ></div>
          <div className="modal">{children}</div>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
