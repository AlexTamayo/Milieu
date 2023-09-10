import { useContext, useEffect, useRef } from 'react';

import '../styles/UserModal.scss';

import { DataContext  } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';

import defaultImage from '../assets/logo/logo.png'


function UserModal({ userDivRef }) {
  const {
    state ,
    closeUserModal,
  } = useContext(DataContext);

  const { isUserModalOpen } = state;

  const { currentUser, signOut } = useAuth();

  const userModalRef = useRef(null);

  // This useEffect checks if there was a click outside of the modal and the user div that opened the menu.
  useEffect(() => {
    function handleClickOutside(event) {
      if (userModalRef.current && !userModalRef.current.contains(event.target) && 
      (!userDivRef.current || (userDivRef.current && !userDivRef.current.contains(event.target)))) {
        closeUserModal();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [userDivRef]);


  if (!isUserModalOpen || !currentUser) return null;

return (
  <div ref={userModalRef} className="user-modal">
    <div className="user-modal__profile-pic">
      <img src={currentUser.profileImage || defaultImage} alt={`${currentUser.firstName}'s profile`} />
    </div>

    <div className="user-modal__greeting">Hi, {currentUser.firstName}!</div>

    <div className="user-modal__username">@{currentUser.username}</div>

    <div className="user-modal__venues-btn">Venues</div>

    <div className="user-modal__options">
      <button onClick={signOut} className="user-modal__signout-btn">
        Sign Out
      </button>
      
    </div>
  </div>
);
}

export default UserModal;