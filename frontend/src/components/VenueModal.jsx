import { useContext, useEffect, useRef } from 'react';
import '../styles/VenueModal.scss';

import { DataContext } from '../context/MainContext';
import VenueModalBusiness from './VenueModalBusiness';
import VenueModalEvent from './VenueModalEvent';

function VenueModal() {

  const { 
    state,
    closeVenueModal,
    setSelectedVenue,
  } = useContext(DataContext);

  const {
    businessData,
    eventData,
    isVenueModalOpen,
    selectedVenueType,
    selectedVenueId,
  } = state;

  const arrNum = 1;

  const venueModalRef = useRef(null);

  const currentBusiness = businessData.find(business => business.id === selectedVenueId);
  
  const currentEvent = eventData.find(event => event.id === selectedVenueId);

  // Functions that detects if it's just a simple click or if it's a click and drag and closes modal if it's a simple click
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleMouseDown = (event) => {
        startX = event.clientX;
        startY = event.clientY;
    }

    const handleMouseUp = (event) => {
        const endX = event.clientX;
        const endY = event.clientY;

        const threshold = 3; // pixels
        if (Math.abs(startX - endX) <= threshold && Math.abs(startY - endY) <= threshold) {
            if (venueModalRef.current && !venueModalRef.current.contains(event.target)) {
                closeVenueModal();
            }
        }
    }

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
    }
  }, []);

  if (!isVenueModalOpen) return null;

  if (businessData.length < 1) return null;

  if (!selectedVenueType) return null;

  return (
    <div ref={venueModalRef} className="venue-modal">

      {selectedVenueType === 'business' && < VenueModalBusiness currentBusiness={currentBusiness} arrNum={arrNum - 1 }/>}

      {selectedVenueType === 'event' && < VenueModalEvent currentEvent={currentEvent} arrNum={arrNum - 1}/>}

    </div>
  );
}

export default VenueModal;
