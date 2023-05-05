import React from 'react';
import { createPortal } from 'react-dom';
import './style.css';

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, isModalOpen, closeModal }: ModalProps) => {
  const handleModal = (e: React.MouseEvent) => {
    delayClosingModalForAnim(closeModal);
    toggleModal(e);
  };

  const toggleModal = (e: React.MouseEvent) => {
    const modalDimmed = e.target;

    if (modalDimmed instanceof HTMLElement) {
      const modal = modalDimmed.nextElementSibling;
      modal?.classList.remove('open-modal');
      modal?.classList.add('close-modal');
    }
  };

  const delayClosingModalForAnim = (closeModalFn: () => void) => {
    setTimeout(() => {
      closeModalFn();
    }, 300);
  };

  return createPortal(
    <>
      {isModalOpen && (
        <>
          <div className="modal-backdrop" onClick={handleModal}></div>
          <div className="modal open-modal">{children}</div>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
