import {
  React,
  useCallback,
  useContext,
  useEffect,
  useRef
} from 'react';
import '../styles/UserModal.scss';
import { DataContext } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';

import defaultImage from '../assets/logo/userProfile.png'

function UserModal({ userDivRef }) {

  const {
    state,
    closeUserModal,
    openVenueManagerModal,
  } = useContext(DataContext);

  const { isUserModalOpen } = state;
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

  const handleSignOutClick = useCallback(() => {
    signOut();
  }, [signOut]);

  if (!isUserModalOpen || !currentUser) return null;

  return (
    <div ref={userModalRef} className="user-modal">
      <div className="user-modal__profile-pic">
        <img src={currentUser.profileImage || defaultImage} alt={`${currentUser.firstName}'s profile`} />
      </div>

      <div className="user-modal__greeting">Hi, {currentUser.firstName}!</div>

      <div className="user-modal__username">@{currentUser.username}</div>

      <div className="user-modal__my-venues" onClick={openVenueManagerModal}>
        My Venues
      </div>

      <div className="user-modal__options">
        <button onClick={handleSignOutClick} className="user-modal__signout-btn">
          Sign Out
        </button>
      </div>

    </div>
  );
};

export default UserModal;
