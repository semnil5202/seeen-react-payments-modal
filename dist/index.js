import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
import './style.css';
const Modal = ({ children, isModalOpen, closeModal }) => {
    const handleModal = (e) => {
        delayClosingModalForAnim(closeModal);
        toggleModal(e);
    };
    const toggleModal = (e) => {
        const modalDimmed = e.target;
        if (modalDimmed instanceof HTMLElement) {
            const modal = modalDimmed.nextElementSibling;
            modal === null || modal === void 0 ? void 0 : modal.classList.remove('open-modal');
            modal === null || modal === void 0 ? void 0 : modal.classList.add('close-modal');
        }
    };
    const delayClosingModalForAnim = (closeModalFn) => {
        setTimeout(() => {
            closeModalFn();
        }, 500);
    };
    return createPortal(_jsx(_Fragment, { children: isModalOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "modal-backdrop", onClick: handleModal }), _jsx("div", Object.assign({ className: "modal open-modal" }, { children: children }))] })) }), document.body);
};
export default Modal;
