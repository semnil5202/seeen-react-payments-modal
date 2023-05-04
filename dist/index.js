import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
const Modal = ({ children, isModalOpen, closeModal }) => {
    return createPortal(_jsx(_Fragment, { children: isModalOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "modal-backdrop", onClick: () => {
                        closeModal();
                    } }), _jsx("div", Object.assign({ className: "modal" }, { children: children }))] })) }), document.body);
};
export default Modal;
