import { useContext, useEffect, useRef } from 'react';
import '../styles/VenueModal.scss';

import { DataContext } from '../context/dataProviderContext';
import VenueModalBusiness from './VenueModalBusiness';
import VenueModalEvent from './VenueModalEvent';

function VenueModal() {

  const { 
    isVenueModalOpen,
    openVenueModal,
    closeVenueModal,
    venueType,
    setVenueType,
    eventData,
    businessData,
    userData,
  } = useContext(DataContext);

  const venueModalRef = useRef(null);

  const arrNum = 0;

  const currentBusiness = businessData[arrNum];
  const currentEvent = eventData[arrNum];
  const currentUser = userData[arrNum];


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

  if (!venueType) return null;

  return (
    <div ref={venueModalRef} className="venue-modal">

      {venueType === 'business' && < VenueModalBusiness currentBusiness={currentBusiness} arrNum={arrNum}/>}

      {venueType === 'event' && < VenueModalEvent currentEvent={currentEvent} arrNum={arrNum}/>}

    </div>
  );
}

export default VenueModal;
