import React from 'react';
import './style.css';
interface ModalProps {
    children: React.ReactNode;
    isModalOpen: boolean;
    closeModal: () => void;
}
declare const Modal: ({ children, isModalOpen, closeModal }: ModalProps) => React.ReactPortal;
export default Modal;
