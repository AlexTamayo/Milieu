import '../styles/UserVenueManager.scss';
import { useContext } from 'react';
import { DataContext } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';
import { useConfirmationModal } from '../hooks/useConfirmationModal'
import Modal from './Modal'; 

function UserVenueManager() {

  const {
    state,
    closeVenueManagerModal,
    openUserAddVenue,
    deleteEntityById,
    openUserEditVenueModal,
  } = useContext(DataContext);

  const { isVenueManagerModalOpen } = state;
  const { currentUser, removeEntityFromCurrentUser } = useAuth();

  const handleDelete = (id, type) => {
    deleteEntityById(id, type);
    removeEntityFromCurrentUser(id, type);
  };

  /* CONFIRMATION MODAL */
  const {
    showConfirmationModal,
    openConfirmationModal,
    confirmDelete,
    cancelDelete,
  } = useConfirmationModal(handleDelete);

  const confirmationContent = <p>Are you sure you want to <strong>delete</strong> this venue?</p>;

  const confirmationActions = (
    <div>
      <button onClick={confirmDelete}>Confirm</button>
      <button onClick={cancelDelete}>Cancel</button>
    </div>
  );

  /* RENDERS LIST OF VENUES USER OWNS */
  const renderVenueList = (venues, type) => {
    if (venues && venues.length) {
      return venues.map(venue => (
        <div className="venue-item" key={venue.id}>
          <span className="venue-name">{type === 'business' ? venue.name : venue.title}</span>

          {/* <button className="edit-btn" onClick={() => openUserEditVenueModal(venue.id, type)}>Edit</button> */}

          <button className="delete-btn" onClick={() => openConfirmationModal(venue.id, type)}>Delete</button>
        </div>
      ));
    } else {
      return (
        <div className="empty-content" onClick={openUserAddVenue}>
          {`Add your first ${type}`}
        </div>
      );
    }
  };

  if(!currentUser) return null
  if(!isVenueManagerModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="user-venue-manager-modal">

        {/* <button className="close-btn" onClick={closeVenueManagerModal}>&times;</button> */}

        {/* CLOSE BUTTON */}
        <div
          className="user-venue-manager-modal__circle-close-btn"
          onClick={closeVenueManagerModal}
        >
          {/* &times; */}
        </div>
        
        <h2 className="modal-title">Venues Manager</h2>

        <h3 className="section-title">Business Section</h3>
        <div className="business-section">
          {renderVenueList(currentUser.businesses, 'business')}
        </div>

        <h3 className="section-title">Event Section</h3>
        <div className="event-section">
          {renderVenueList(currentUser.events, 'event')}
        </div>
      </div>
      <Modal 
        isOpen={showConfirmationModal}
        title="Confirmation"
        content={confirmationContent}
        actions={confirmationActions}
        onClose={cancelDelete}
      />
    </div>
  );
}

export default UserVenueManager;
