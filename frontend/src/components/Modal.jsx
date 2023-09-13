import React from 'react';
import '../styles/Modal.scss';

function Modal({ isOpen, title, content, actions, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__circle-close-btn" onClick={onClose}>{/* &times; */}</div>
      {title && <h2 className="modal-title">{title}</h2>}
      <div className="modal-content">{content}</div>
      {actions && <div className="modal-actions">{actions}</div>}
    </div>
  );
}

export default Modal;
