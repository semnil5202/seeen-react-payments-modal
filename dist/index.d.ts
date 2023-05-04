import React from 'react';
interface ModalProps {
    children: React.ReactNode;
    isModalOpen: boolean;
    closeModal: () => void;
}
declare const Modal: ({ children, isModalOpen, closeModal }: ModalProps) => React.ReactPortal;
export default Modal;
