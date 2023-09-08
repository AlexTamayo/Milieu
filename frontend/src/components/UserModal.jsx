import { useContext, useEffect, useRef } from 'react';

import '../styles/UserModal.scss';

import useAuth from '../hooks/useAuth';

import { DataContext  } from '../context/dataProviderContext';


function UserModal({ userDivRef }) {
  const { isUserModalOpen, toggleUserModal } = useContext(DataContext);

  const userModalRef = useRef(null);

  const { user, signOut } = useAuth();


  // This useEffect checks if there was a click outside of the modal and the user div that opened the menu.
  useEffect(() => {
    function handleClickOutside(event) {
      if (userModalRef.current && !userModalRef.current.contains(event.target) && 
      (!userDivRef.current || (userDivRef.current && !userDivRef.current.contains(event.target)))) {
        toggleUserModal();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [userDivRef]);


  if (!isUserModalOpen || !user) return null;

return (
  <div ref={userModalRef} className="user-modal">
    <div className="user-modal__profile-pic">
      <img src={user.profileImage} alt={`${user.firstName}'s profile`} />
    </div>

    <div className="user-modal__greeting">Hi, {user.firstName}!</div>

    <div className="user-modal__username">@{user.username}</div>

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