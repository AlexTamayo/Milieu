import '../styles/TopNavBar.scss';
import { useContext, useCallback } from "react";
import { DataContext } from "../context/MainContext";
import { useAuth } from '../context/AuthContext';

import defaultImage from '../assets/logo/userProfile.png'
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
  } = useContext(DataContext);

  const { currentUser } = useAuth();

  const navigateToHome = () => {
    window.location.href = '/';
  };

  const { isCopied, isLoading, isUserModalOpen } = state;

  const handleLoginClick = useCallback(() => {
    openLoginModal("login");
    // openLoginModal("");
  }, [openLoginModal]);

  const handleUserModalClick = useCallback(() => {
    // isUserModalOpen ? closeUserModal() : openUserModal();
    toggleUserModal()
  }, []);

  return (
    <div className="top-nav-bar">
      {isCopied && <div className="copied-message">Copied to clipboard</div>}

      <div className="top-nav-bar__left">
      <div className="left__logo" onClick={navigateToHome}>
          <img src={logo_and_name} alt="Logo and Name" />
        </div>
      </div>

      {isLoading ? (
        <div className="top-nav-bar__right">
          // ................ \\
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
          </div>
        </div>
      ) : (
        <div className="top-nav-bar__right">
          <div className="right__signin" onClick={handleLoginClick}>
            {/* Sign In */}
          </div>
        </div>
      )}
    </div>
  );
}

export default TopNavBar;
