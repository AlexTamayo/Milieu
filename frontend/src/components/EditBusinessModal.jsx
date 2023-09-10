import { useContext, useState } from 'react';
import { DataContext } from '../context/MainContext';
import {
  formatPhoneNumber,
  formatURL,
  extractNumbers,
  addressFormatter,
} from '../utils/helpers';

import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

function EditBusinessModal({ isOpen, onRequestClose, businesses }) {
  const { handleCopy, currentUser } = useContext(DataContext);

  const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);

  const hasNextBusiness = currentBusinessIndex < businesses.length - 1;
  const hasPreviousBusiness = currentBusinessIndex > 0;

  const nextBusiness = () => {
    if (hasNextBusiness) {
      setCurrentBusinessIndex(currentBusinessIndex + 1);
    }
  };

  const previousBusiness = () => {
    if (hasPreviousBusiness) {
      setCurrentBusinessIndex(currentBusinessIndex - 1);
    }
  };

  if (!isOpen || businesses.length === 0) {
    return null;
  }

  // Find the currently displayed business based on the index
  const currentBusiness = businesses[currentBusinessIndex];

  // Define background and badge image URLs
  const bgImageUrl = [
    // ... Add your background image URLs here
  ];

  const badgeImageUrl = [
    // ... Add your badge image URLs here
  ];

  // Rendered social media links
  const renderedSocialMediaLinks =
    currentBusiness.socialMedia && currentBusiness.socialMedia.length
      ? currentBusiness.socialMedia.map((media) => (
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
      title="Venue Modal Business"
      onRequestClose={onRequestClose}
      from="left"
      width="400px"
    >
      <div>
        {/* BACKGROUND IMAGE */}
        <div className="venue-modal__bg-image">
          <img src={bgImageUrl[0]} alt="Venue background" />
        </div>

        {/* BADGE IMAGE */}
        <div className="venue-modal__badge-image">
          <img
            src={badgeImageUrl[0]}
            alt="Venue badge"
            className="venue-badge"
          />
        </div>

        {/* NAME */}
        <div className="venue-modal__title">{currentBusiness.name}</div>

        {/* CATEGORY */}
        <div className="venue-modal__category">
          {currentBusiness.businessCategory.name}
        </div>

        {/* RATING */}
        <div className="venue-modal__rating">
          {currentBusiness.rating} / 5 rating ({currentBusiness.reviewCount})
        </div>

        <hr />

        {/* DESCRIPTION */}
        <div className="venue-modal__description">
          {currentBusiness.description}
          {/* Add your description here */}
        </div>

        <hr />

        {/* ADDRESS */}
        <div className="vm-container__address">
          <div className="vm-left__address">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="vm-right__address">
            {addressFormatter(currentBusiness.businessLocation)}
          </div>
          <div
            onClick={() =>
              handleCopy(addressFormatter(currentBusiness.businessLocation))
            }
            className="copy-icon-button"
          >
            <i className="fas fa-copy"></i>
          </div>
        </div>

        {/* OPERATING HOURS */}
        <div className="vm-container__operating-hours">
          <div className="vm-left__operating-hours">
            <i className="fas fa-clock"></i>
          </div>
          <div className="vm-right__operating-hours">Thursday 11h - 19h</div>
        </div>

        {/* WEBSITE */}
        <div className="vm-container__website">
          <div className="vm-left__website">
            <i className="fas fa-globe"></i>
          </div>
          <div className="vm-right__website">
            <a
              href={currentBusiness.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formatURL(currentBusiness.website)}
            </a>
          </div>
          <div
            onClick={() => handleCopy(currentBusiness.website)}
            className="copy-icon-button"
          >
            <i className="fas fa-copy"></i>
          </div>
        </div>

        {/* PHONE NUMBER */}
        <div className="vm-container__phoneNumber">
          <div className="vm-left__phoneNumber">
            <i className="fas fa-phone"></i>
          </div>
          <div className="vm-right__phoneNumber">
            {formatPhoneNumber(currentBusiness.phoneNumber)}
          </div>
          <div
            onClick={() =>
              handleCopy(extractNumbers(currentBusiness.phoneNumber))
            }
            className="copy-icon-button"
          >
            <i className="fas fa-copy"></i>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        {renderedSocialMediaLinks}

        {/* Previous and Next buttons */}
        {hasPreviousBusiness && (
          <button className="venue-modal__nav-button" onClick={previousBusiness}>
            Previous
          </button>
        )}
        {hasNextBusiness && (
          <button className="venue-modal__nav-button" onClick={nextBusiness}>
            Next
          </button>
        )}

        {/* CLOSE BUTTON */}
        <button className="venue-modal__close-button" onClick={onRequestClose}>
          &times;
        </button>
      </div>
    </SlidingPane>
  );
}

export default EditBusinessModal
