import { useState } from 'react';

export const useConfirmationModal = (onDelete) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState({ id: null, type: null });

  const openConfirmationModal = (id, type) => {
    setToBeDeleted({ id, type });
    setShowConfirmationModal(true);
  };

  const confirmDelete = () => {
    onDelete(toBeDeleted.id, toBeDeleted.type);
    setShowConfirmationModal(false);
    setToBeDeleted({ id: null, type: null });
  };

  const cancelDelete = () => {
    setShowConfirmationModal(false);
    setToBeDeleted({ id: null, type: null });
  };

  return {
    showConfirmationModal,
    openConfirmationModal,
    confirmDelete,
    cancelDelete,
  };
};
