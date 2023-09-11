import '../styles/UserVenueManager.scss';
import { useContext } from 'react';
import { DataContext } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';

function UserVenueManager() {

  const {
    state,
    closeVenueManagerModal,
    openUserAddVenue,
    deleteEntityById
  } = useContext(DataContext);

  const { isVenueManagerModalOpen } = state;
  const { currentUser, removeEntityFromCurrentUser } = useAuth();

  if(!currentUser) return null
  if(!isVenueManagerModalOpen) return null;

  const handleDelete = (id, type) => {
      deleteEntityById(id, type);
      removeEntityFromCurrentUser(id, type);
};

  const renderVenueList = (venues, type) => {
    if (venues && venues.length) {
      return venues.map(venue => (
        <div className="venue-item" key={venue.id}>
          <span className="venue-name">{type === 'business' ? venue.name : venue.title}</span>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(venue.id, type)}>Delete</button>
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

  return (
    <div className="modal-overlay">
      <div className="user-venue-modal">
        <button className="close-btn" onClick={closeVenueManagerModal}>&times;</button>
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
    </div>
  );
}

export default UserVenueManager;
