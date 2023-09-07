import { useContext, useEffect, useRef } from 'react';
import '../styles/VenueModal.scss';

import { DataContext } from '../context/dataProviderContext';

function VenueModal() {

  const { isVenueModalOpen, toggleVenueModal } = useContext(DataContext);

  const venueModalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (venueModalRef.current && !venueModalRef.current.contains(event.target)) {
        // toggleVenueModal();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const imageUrl = "https://www.utsc.utoronto.ca/food/sites/utsc.utoronto.ca.food/files/styles/4_1_hero_1x_extra_large/public/images/page/Programs%20Images%20%2847%29.v1.jpg"
  // const imageUrl = "https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg"

  // const smallerImageUrl = "https://scontent.fcxh3-1.fna.fbcdn.net/v/t39.30808-6/272156862_107738941812296_8188206139364712661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=l-aEtExRvccAX9c--ua&_nc_ht=scontent.fcxh3-1.fna&oh=00_AfAGZlQt0ckaO5JyEYWBuFoYrFbxnmI-YDzFtmBbAJEP3A&oe=64FE57E3";
  const smallerImageUrl = "https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg";

  if (!isVenueModalOpen) return null;

  return (
    <div ref={venueModalRef} className="venue-modal">

    <div className="venue-modal__bg-image">
      <img src={imageUrl} alt="Venue background" />
    </div>

    <div className="venue-modal__bagde-image">
      <img src={smallerImageUrl} alt="Venue badge" className="venue-badge" />
    </div>

      <button className="venue-modal__close-button" onClick={toggleVenueModal}>
        &times;  {/* This is an "X" character, representing a close button */}
      </button>

    </div>
  );
}

export default VenueModal;
