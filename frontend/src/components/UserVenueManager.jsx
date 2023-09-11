import '../styles/UserVenueManager.scss';
import { useContext } from 'react';
import { DataContext } from '../context/MainContext';

function UserVenueManager() {

  const { state } = useContext(DataContext);

  const {
    isVenueManagerModalOpen
  } = state;

  if(!isVenueManagerModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="user-venue-modal">
        <button className="close-btn" onClick={() => {/* Logic to close modal goes here */}}>&times;</button>
        <h2 className="modal-title">Venues Manager</h2>
        <div className="business-section">
          {/* Content for businesses goes here */}
          Business Section
        </div>
        <div className="event-section">
          {/* Content for events goes here */}
          Event Section
        </div>
      </div>
    </div>
  );
}

export default UserVenueManager;
