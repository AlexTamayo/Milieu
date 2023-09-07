import React, { useContext } from 'react';
import { DataContext } from '../context/MainContext';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {
  formatPhoneNumber,
  formatURL,
  extractNumbers,
  addressFormatter
} from '../utils/helpers';

function EditEventModal({ isOpen, onRequestClose, currentEvent }) {
  const { handleCopy, currentUser } = useContext(DataContext);

  console.log(`current user is ${currentUser} and currentUser.business is ${currentUser.business}`);
  // Check if currentEvent is not provided, and the user has an event
  if (!currentEvent && currentUser && currentUser.event) {
    currentEvent = currentUser.event;
  }

  if (!currentEvent) {
    return null; // Render nothing if there's no currentEvent
  }

  // Define background and badge image URLs for events
  const bgImageUrl = [
    // ... Add your background image URLs for events here
  ];

  const badgeImageUrl = [
    // ... Add your badge image URLs for events here
  ];

  // Rendered social media links for events
  const renderedSocialMediaLinks =
    currentEvent.socialMedia && currentEvent.socialMedia.length
      ? currentEvent.socialMedia.map((media) => (
          <div key={media.id} className={`vm-container__social-media`}>
            <div className={`vm-left__social-media`}>
              <i className="fas fa-share-alt"></i>
            </div>

            <div className={`vm-right__social-media`}>
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-media__link social-media__link--${media.platform.toLowerCase()}`}
              >
                {formatURL(media.link)}
              </a>
            </div>

            <div
              onClick={() => handleCopy(media.link)}
              className="copy-icon-button"
            >
              <i className="fas fa-copy"></i>
            </div>
          </div>
        ))
      : null;

  return (
    <SlidingPane
      isOpen={isOpen}
      title="Edit Event Modal"
      onRequestClose={onRequestClose}
      from="right"
      width="400px"
    >
      <div>
        {/* BACKGROUND IMAGE */}
        <div className="event-modal__bg-image">
          <img src={bgImageUrl[0]} alt="Event background" />
        </div>

        {/* BADGE IMAGE */}
        <div className="event-modal__badge-image">
          <img
            src={badgeImageUrl[0]}
            alt="Event badge"
            className="event-badge"
          />
        </div>

        {/* NAME */}
        <div className="event-modal__title">{currentEvent.name}</div>

        {/* CATEGORY */}
        <div className="event-modal__category">
          {currentEvent.category}
        </div>

        {/* DESCRIPTION */}
        <div className="event-modal__description">
          {currentEvent.description}
          {/* Add your description here */}
        </div>

        {/* DATE */}
        <div className="event-modal__date">
          {currentEvent.date}
        </div>

        {/* LOCATION */}
        <div className="vm-container__location">
          <div className="vm-left__location">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="vm-right__location">
            {currentEvent.location}
          </div>
          <div
            onClick={() =>
              handleCopy(addressFormatter(currentEvent.location))
            }
            className="copy-icon-button"
          >
            <i className="fas fa-copy"></i>
          </div>
        </div>

        {/* WEBSITE */}
        <div className="vm-container__website">
          <div className="vm-left__website">
            <i className="fas fa-globe"></i>
          </div>
          <div className="vm-right__website">
            <a
              href={currentEvent.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formatURL(currentEvent.website)}
            </a>
          </div>
          <div
            onClick={() => handleCopy(currentEvent.website)}
            className="copy-icon-button"
          >
            <i className="fas fa-copy"></i>
          </div>
        </div>

        {/* CONTACT */}
        <div className="vm-container__contact">
          <div className="vm-left__contact">
            <i className="fas fa-phone"></i>
          </div>
          <div className="vm-right__contact">
            {formatPhoneNumber(currentEvent.contact)}
          </div>
          <div
            onClick={() =>
              handleCopy(extractNumbers(currentEvent.contact))
            }
            className="copy-icon-button"
          >
            <i className="fas fa-copy"></i>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        {renderedSocialMediaLinks}

        {/* CLOSE BUTTON */}
        <button className="event-modal__close-button" onClick={onRequestClose}>
          &times;
        </button>
      </div>
    </SlidingPane>
  );
}

export default EditEventModal;
