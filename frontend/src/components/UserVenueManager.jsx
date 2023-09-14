import '../styles/UserVenueManager.scss';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';
import { useConfirmationModal } from '../hooks/useConfirmationModal'
import Modal from './Modal'; 

function UserVenueManager() {

  const {
    state,
    closeVenueModal,
    openUserAddVenue,
    deleteEntityById,
    setSelectedVenue,
    setUserAddVenueType,
    closeVenueManagerModal,
    openUserEditVenueModal,
  } = useContext(DataContext);

  const {
    eventData,
    businessData,
    isVenueManagerModalOpen,
  } = state;

  const {
    currentUser,
    removeEntityFromCurrentUser
  } = useAuth();

  /* DOING THIS HERE TO SAVE TIME, BUT IDEALLY THIS SHOULD BE IN THE REDUCER */

  let ownedByCurrentUserBusinesses = [];
  let ownedByCurrentUserEvents = [];

  
  if(currentUser) {

    ownedByCurrentUserBusinesses = businessData.filter((business) => business.ownerId === currentUser.id);
    ownedByCurrentUserEvents = eventData.filter((event) => event.ownerId === currentUser.id);
  }



  const handleDelete = (id, type) => {
    closeVenueModal();
    deleteEntityById(id, type);
    // removeEntityFromCurrentUser(id, type);
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
        <div className={`venue-item ${type}`} key={venue.id}>
          {/* setSelectedVenue = (venueType, venueId) */}
          <span onClick={() => {
            setSelectedVenue(type, venue.id);
            closeVenueManagerModal();
            }} className={`venue-name ${type}`}>
            {type === 'business' ? venue.name : venue.title}
          </span>
          {/* <button className="edit-btn" onClick={() => openUserEditVenueModal(venue.id, type)}>Edit</button> */}
          <button className={`delete-btn ${type}`} onClick={() => openConfirmationModal(venue.id, type)}>Delete</button>
        </div>
      ));
    } else {
      return (
        <div className={`empty-content ${type}`}
        onClick={() => {
          setUserAddVenueType(type);
          openUserAddVenue();
        }}
          >
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

        <h3 className="section-title business">Business Section</h3>
        <div className="section business">
          {/* {renderVenueList(currentUser.businesses, 'business')} */}
          {renderVenueList(ownedByCurrentUserBusinesses, 'business')}
        </div>

        <h3 className="section-title event">Event Section</h3>
        <div className="section event">
          {/* {renderVenueList(currentUser.events, 'event')} */}
          {renderVenueList(ownedByCurrentUserEvents, 'event')}
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
