import { useContext, useState, useRef } from "react";
import { DataContext } from "../context/MainContext";

import '../styles/TopNavBar.scss';

import logo_and_name from '../assets/logo/logo-and-name.svg'
import profile from '../assets/temp/profile_pics_6.png'

import PlusSign from './SVGs/PlusSign';

function TopNavBar({ userDivRef }) {
  const {
    toggleUserModal,
    openLoginModal,
    openUserAddVenue,
    openVenueModal,
    setVenueType,
    state
  } = useContext(DataContext);

  const { isCopied } = state;

  const [logged, setlogged] = useState(true);

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

      {logged ? (
        <div className="top-nav-bar__right">
          <div className="right__add" onClick={openUserAddVenue}>
            <PlusSign />
          </div>
          <div
            className="right__user"
            ref={userDivRef}
            onClick={toggleUserModal}
          >
            <img src={profile} alt="" />
          </div>
        </div>
      ) : (
        <div className="top-nav-bar__right">
          <button className="login-btn" onClick={() => openLoginModal('login')}>
            <strong>Sign In</strong>
          </button>
        </div>
      )}
    </div>
  );
}

export default TopNavBar;