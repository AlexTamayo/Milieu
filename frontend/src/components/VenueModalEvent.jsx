import { useContext } from 'react';
import { DataContext } from '../context/MainContext';
import {
  addressFormatter,
  formatDateTime,
  openGoogleMaps,
} from '../utils/helpers';

function VenueModalEvent({ currentEvent }) {

  const {
    closeVenueModal,
    handleCopy
  } = useContext(DataContext);

  return (
    <div>

      {/* BACKGROUND IMAGE */}
      <div className="venue-modal__bg-image">

        <img src={currentEvent.eventBranding.bannerUrl} alt="Venue background" />
      </div>

      {/* NAME */}
      <div className="venue-modal__title">{currentEvent.title}</div>

      {/* CATEGORY */}
      <div className="venue-modal__category">
        {currentEvent.eventCategory.name}
      </div>

      <hr />

      {/* DESCRIPTION */}
      <div className="venue-modal__description">
        {currentEvent.description}
      </div>

      <hr />

      {/* TIME */}
      <div className="vm-container__time">
        <div className="vm-left__time">
          <div className="vm-time-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="vm-time-icon">
            <i className="fas fa-clock"></i>
          </div>
        </div>

        <div className="vm-center__time">
          <div className="vm-time-label">Start</div>
          <div className="vm-time-label">End</div>
        </div>

        <div className="vm-right__time">
          <div className="vm-time-value">
            {formatDateTime(currentEvent.startTime)}
          </div>
          <div className="vm-time-value">
            {formatDateTime(currentEvent.endTime)}
          </div>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="vm-container__address">
        <div className="vm-left__address">
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <div className="vm-right__address">
          {addressFormatter(currentEvent.eventLocation)}
        </div>

        <div
          onClick={openGoogleMaps}
          className="google-maps-button"
        >
          <i className="fas fa-map"></i>
        </div>

        <div
          onClick={() => handleCopy(addressFormatter(currentEvent.eventLocation))}
          className="copy-icon-button"
        >
          <i className="fas fa-copy"></i>
        </div>


       
      </div>

      {/* CLOSE BUTTON */}
      <div
        className="venue-modal__circle-close-btn"
        onClick={closeVenueModal}
      >
        {/* &times; */}
      </div>
    </div>
  );
}

export default VenueModalEvent;
