import { useContext} from 'react';
import { DataContext } from '../context/MainContext';
import {
  formatPhoneNumber,
  formatURL,
  extractNumbers,
  addressFormatter
} from '../utils/helpers';

function VenueModalBusiness({ currentBusiness } ) {

  const { 
    closeVenueModal,
    handleCopy,
  } = useContext(DataContext);

  const bgImageUrl = [
    "https://www.utsc.utoronto.ca/food/sites/utsc.utoronto.ca.food/files/styles/4_1_hero_1x_extra_large/public/images/page/Programs%20Images%20%2847%29.v1.jpg", 
    "https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg",
    "https://imgs.search.brave.com/3vun4Fo8OfXskwWtN6hG9lA8_eQjRH16I2P1YNpJ0DM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDc4NDQ4L3Bob3Rv/L3N1c2hpLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz12WlhD/RUMtUU9mb2ZFck9v/NUhOZ0J0Nk1XVTBp/dGZTeUlSaW56MXRR/Zm5ZPQ",
    "https://imgs.search.brave.com/b4-amD_49iy1xXeKw42aEDEytaHi-PgNL5tC2wDpPz8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE3/OTE0NjEyL3Bob3Rv/L3N1c2hpLW1peC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Z1BhZF9XSXpTRDB6/Y1hFVVZrTEgzc2RH/Y0FHMmptMGdUaGxM/Rm1ncWhaMD0"
    ];

  const badgeImageUrl = [
    "https://scontent.fcxh3-1.fna.fbcdn.net/v/t39.30808-6/272156862_107738941812296_8188206139364712661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=l-aEtExRvccAX9c--ua&_nc_ht=scontent.fcxh3-1.fna&oh=00_AfAGZlQt0ckaO5JyEYWBuFoYrFbxnmI-YDzFtmBbAJEP3A&oe=64FE57E3", 
    "https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg",
    "https://imgs.search.brave.com/kOHJOJAFpkjA64unoMMaTHBJ21jYtg17YbcrTTxxez8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NzcyMDQyMi92ZWN0/b3Ivc3VzaGktbG9n/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NGt1cU1pMDVS/UDRWNE5zM00tUnRX/T3lETmg5RVRMbm51/ZXMxSEJ2a0tMZz0",
    "https://imgs.search.brave.com/k6E-LQWwgXbalXiTpyGoIiNRcb9Qe7nHuDEuBaPp--0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc2Lzg5Lzc3/LzM2MF9GXzc2ODk3/NzU3X0NQc0x5VVhR/YkdNYzZ4WjlQZ05O/TmlrWDJac0hnYzlp/LmpwZw"
  ];

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
    <div>
      {/* BACKGROUND IMAGE */}
      <div className="venue-modal__bg-image">
        <img src={currentBusiness.businessBranding.bannerUrl} alt="Venue background" />
      </div>

      {/* BADGE IMAGE */}
      <div className="venue-modal__bagde-image">
        <img src={currentBusiness.businessBranding.logoUrl} alt="Venue badge" className="venue-badge"/>
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
      
      {/* CLOSE BUTTON */}

      <button className="venue-modal__close-button" onClick={closeVenueModal}>
        &times;
      </button>
    </div>
  );
}

export default VenueModalBusiness;