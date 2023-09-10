import '../styles/TopNavBar.scss';
import { useContext, useCallback } from "react";
import { DataContext } from "../context/MainContext";
import { useAuth } from '../context/AuthContext';

import defaultImage from '../assets/logo/logo.png'

import '../styles/TopNavBar.scss';

import logo_and_name from '../assets/logo/logo-and-name.svg'

import PlusSign from './SVGs/PlusSign';

function TopNavBar({ userDivRef }) {
  const {
    state,
    toggleUserModal,
    openUserModal,
    closeUserModal,
    openLoginModal,
    openUserAddVenue,
    openVenueModal,
    setVenueType,
  } = useContext(DataContext);

  const { currentUser, signOut } = useAuth();

  const { isCopied, isLoading, isUserModalOpen } = state;

  const handleLoginClick = useCallback(() => {
    openLoginModal("login");
  }, [openLoginModal]);

  const handleBusinessClick = useCallback(() => {
    setVenueType("business");
    openVenueModal();
  }, [setVenueType, openVenueModal]);

  const handleEventClick = useCallback(() => {
    setVenueType("event");
    openVenueModal();
  }, [setVenueType, openVenueModal]);

  const handleNullClick = useCallback(() => {
    setVenueType(null);
    openVenueModal();
  }, [setVenueType, openVenueModal]);

  const handleUserModalClick = useCallback(() => {
    // isUserModalOpen ? closeUserModal() : openUserModal();
    toggleUserModal()
  }, []);

  return (
    <div className="top-nav-bar">
      {isCopied && <div className="copied-message">Copied to clipboard</div>}

      <div className="top-nav-bar__left">
        <div className="left__logo">
          <img src={logo_and_name} alt="Logo and Name" />
        </div>
      </div>

      <button onClick={handleBusinessClick}>Business</button>

      <button onClick={handleEventClick}>Event</button>

      <button onClick={handleNullClick}>Null</button>

      {isLoading ? (
        <div className="top-nav-bar__right">
          // Some loading animation or placeholder
        </div>
      ) : currentUser ? (
        <div className="top-nav-bar__right">
          <div className="right__add" onClick={openUserAddVenue}>
            <PlusSign />
          </div>
          <div
            className="right__user"
            ref={userDivRef}
            onClick={handleUserModalClick}
          >
            <img src={currentUser.profileImage || defaultImage} alt="Profile Image" />
            {/* <img src={currentUser.profileImage} alt="Profile Image" /> */}
          </div>
        </div>
      ) : (
        <div className="top-nav-bar__right">
          <button className="login-btn" onClick={handleLoginClick}>
            <strong>Sign In</strong>
          </button>
        </div>
      )}
    </div>
  );
}

export default TopNavBar;