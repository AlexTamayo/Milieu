import React, { useContext, useEffect, useRef } from 'react';
import '../styles/UserModal.scss';
import { DataContext } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';

import defaultImage from '../assets/logo/userProfile.png'

function UserModal({ userDivRef }) {

  const {
    state ,
    closeUserModal,
    getOwnedVenuesByUser,
  } = useContext(DataContext);

  const { isUserModalOpen, ownedEvents, ownedBusinesses } = state;

  const { currentUser, signOut } = useAuth();

  const userModalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (userModalRef.current && !userModalRef.current.contains(event.target) && 
      (!userDivRef.current || (userDivRef.current && !userDivRef.current.contains(event.target)))) {
        closeUserModal();
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [userDivRef, closeUserModal]);


  if (!isUserModalOpen || !currentUser) return null;

return (
  <div ref={userModalRef} className="user-modal">
    <div className="user-modal__profile-pic">
      <img src={currentUser.profileImage || defaultImage} alt={`${currentUser.firstName}'s profile`} />
    </div>

      <div className="user-modal__greeting">Hi, {currentUser.firstName}!</div>

      <div className="user-modal__username">@{currentUser.username}</div>

      <div>
        Venues
      </div>

      <button onClick={() => {
        getOwnedVenuesByUser(currentUser);
        console.log(ownedEvents);
        console.log(ownedBusinesses);
        }}>activate</button>

      <div className="user-modal__options">
        <button onClick={signOut} className="user-modal__signout-btn">
          Sign Out
        </button>
      </div>

    </div>
  );
};

export default UserModal;
