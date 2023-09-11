import React from 'react';
import '../styles/Modal.scss';

function Modal({ isOpen, title, content, actions, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <button className="modal-close-btn" onClick={onClose}>&times;</button>
      {title && <h2 className="modal-title">{title}</h2>}
      <div className="modal-content">{content}</div>
      {actions && <div className="modal-actions">{actions}</div>}
    </div>
  );
}

export default Modal;
