import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/MainContext";
import { useAuth } from '../context/AuthContext';

import '../styles/TopNavBar.scss';

import logo_and_name from '../assets/logo/logo-and-name.svg'

import PlusSign from './SVGs/PlusSign';

function TopNavBar({ userDivRef }) {
  const {
    state,
    toggleUserModal,
    openLoginModal,
    openUserAddVenue,
    openVenueModal,
    setVenueType,
  } = useContext(DataContext);

  const { currentUser, isLoading } = useAuth();

  const { isCopied } = state;

  return (
    <div className="top-nav-bar">
      {isCopied && <div className="copied-message">Copied to clipboard</div>}

      <div className="top-nav-bar__left">
        <div className="left__logo">
          <img src={logo_and_name} alt="logo" />
        </div>
      </div>

      <button
        onClick={() => {
          setVenueType("business");
          openVenueModal();
        }}
      >
        Business
      </button>

      <button
        onClick={() => {
          setVenueType("event");
          openVenueModal();
        }}
      >
        Event
      </button>

      <button
        onClick={() => {
          setVenueType(null);
          openVenueModal();
        }}
      >
        Null
      </button>

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
            onClick={toggleUserModal}
          >
            <img src={currentUser.profileImage} alt="" />
          </div>
        </div>
      ) : (
        <div className="top-nav-bar__right">
          <button className="login-btn" onClick={() => openLoginModal("login")}>
            <strong>Sign In</strong>
          </button>
        </div>
      )}
    </div>
  );
}

export default TopNavBar;