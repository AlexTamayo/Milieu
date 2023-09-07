import React, { useContext, useEffect, useRef, useState } from 'react';
import '../styles/UserModal.scss';
import { DataContext } from '../context/MainContext';
import { useAuth } from '../context/AuthContext';
import EditBusinessModal from './EditBusinessModal';
import EditEventModal from './EditEventModal';
import { getBusinessesByUser, getEventsByUser } from '../routes/api';

function UserModal({ userDivRef }) {
  const { state, toggleUserModal } = useContext(DataContext);
  const { isUserModalOpen } = state;
  const { currentUser, signOut } = useAuth();
  const userModalRef = useRef(null);

  const [isEditBusinessModalOpen, setIsEditBusinessModalOpen] = useState(false);
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null); // Track which modal to show
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchBusinessesByUser = async (userId) => {
    try {
      const response = await getBusinessesByUser(userId);
      if (response.data) {
        setBusinesses(response.data);
      } else {
        console.error('Businesses data not available in the response.');
      }
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  const fetchEventsByUser = async (userId) => {
    try {
      const response = await getEventsByUser(userId);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const openEditBusinessModal = () => {
    setSelectedModal('EditBusinessModal');
  };

  const openEditEventModal = () => {
    setSelectedModal('EditEventModal');
  };

  const closeSelectedModal = () => {
    setSelectedModal(null); // Reset the selected modal
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userModalRef.current &&
        !userModalRef.current.contains(event.target) &&
        (!userDivRef.current ||
          (userDivRef.current && !userDivRef.current.contains(event.target)))
      ) {
        toggleUserModal();
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [userDivRef, toggleUserModal]);

  useEffect(() => {
    if (currentUser) {
      fetchBusinessesByUser(currentUser.id);
      fetchEventsByUser(currentUser.id);
    }
  }, [currentUser]);

  if (!isUserModalOpen || !currentUser) return null;

  return (
    <div ref={userModalRef} className="user-modal">
      <div className="user-modal__profile-pic">
        <img src={currentUser.profileImage} alt={`${currentUser.firstName}'s profile`} />
      </div>

      <div className="user-modal__greeting">Hi, {currentUser.firstName}!</div>

      <div className="user-modal__username">@{currentUser.username}</div>

      <button className="user-modal__venues-btn" onClick={openEditBusinessModal}>
        Edit Business
      </button>

      <button className="user-modal__venues-btn" onClick={openEditEventModal}>
        Edit Event
      </button>

      <div className="user-modal__options">
        <button onClick={signOut} className="user-modal__signout-btn">
          Sign Out
        </button>
      </div>

      {selectedModal === 'EditBusinessModal' && (
        <EditBusinessModal
          isOpen={true}
          onRequestClose={closeSelectedModal}
          businesses={businesses}
        />
      )}

      {selectedModal === 'EditEventModal' && (
        <EditEventModal
          isOpen={true}
          onRequestClose={closeSelectedModal}
          events={events}
        />
      )}
    </div>
  );
};

export default UserModal;
