import React, { useState, useContext } from 'react';

import '../styles/UserLogRegModal.scss';

import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/MainContext';

import milieuLogo from '../assets/logo/logo-and-name.svg'


const UserLogRegModal = () => {

  const {
    state,
    openLoginModal,
    closeLoginModal,
    getOwnedVenuesByUser,
  } = useContext(DataContext);

  const { loginModalType, isLoginRegModalOpen } = state;

  const {
    loginUserLogic,
    registerUserLogic,
    errorMessage,
    currentUser
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [regFormData, setRegFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    profileImage: "",
    passwordHash: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (loginModalType === 'login') {
      setLoginData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setRegFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const lastLogin = new Date().toISOString();
    if (loginModalType === 'login') {
      loginUserLogic(loginData.email, loginData.password)
      .then(() => {
        closeLoginModal();
        setLoginData({
          email: "",
          password: "",
        });
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      registerUserLogic(regFormData, lastLogin)
      .then(() => {
        closeLoginModal();
        setRegFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          profileImage: "",
          passwordHash: "",
          dateOfBirth: "",
          gender: "",
          phoneNumber: ""
        });
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  if (!isLoginRegModalOpen) return null;

  return (
    <div className="user-log-reg-overlay">
      {/* <div className="user-log-reg-modal-container"> */}
      <div className={`user-log-reg-modal-container ${loginModalType === "login" ? "login" : "registration"}`}>

      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

        <div className="user-log-reg-modal-header">
          <div className="user-log-reg-modal__circle-close-btn" onClick={closeLoginModal}>
            {/* &times; */}
          </div>
        </div>
        {loginModalType === "login" ? (

          <form className="login-form" onSubmit={handleModalSubmit}>

            {/* LOGO */}
            <div className="login-form__logo">
              <img src={milieuLogo} alt="Logo and Name" />
            </div>

            {/* EMAIL */}
            <input
              className="login-form__email"
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleInputChange}
              autoFocus
            />

            {/* PASSWORD */}
            <input
              className="login-form__password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleInputChange}
            />

            {/* EYE ICON */}
            <span
              className="login-form__eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <i className="fas fa-eye"></i> :  <i className="fas fa-eye-slash"></i>}
            </span>

            {/* LOG IN BUTTON */}
            <button className="login-form__button" type="submit">
              {/* Log In */}
            </button>
            
            {/* REGISTRATION LINK */}
            <div className="login-form__register-link">
              Don't have an account?{" "}
              <div>
                <a href="#" onClick={() => { openLoginModal('register'); }}>
                  Register here
                </a>
              </div>
            </div>
          </form>

        ) : (
          <form className="registration-form" onSubmit={handleModalSubmit}>

            {/* FIRST NAME */}
            <input
              className="registration-form__first-name"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={regFormData.firstName}
              onChange={handleInputChange}
              autoFocus
            />

            {/* LAST NAME */}
            <input
              className="registration-form__last-name"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={regFormData.lastName}
              onChange={handleInputChange}
            />

            {/* USERNAME */}
            <input
              className="registration-form__username"
              type="text"
              name="username"
              placeholder="Username"
              value={regFormData.username}
              onChange={handleInputChange}
            />

            {/* EMAIL */}
            <input
              className="registration-form__email"
              type="email"
              name="email"
              placeholder="Email"
              value={regFormData.email}
              onChange={handleInputChange}
            />

            {/* PROFILE IMAGE */}
            <input
              className="registration-form__profileImage"
              type="text"
              name="profileImage"
              placeholder="Profile Image URL"
              value={regFormData.profileImage}
              onChange={handleInputChange}
            />

            {/* PASSWORD */}
            <input
              className="registration-form__password"
              type={showPassword ? "text" : "password"}
              name="passwordHash"
              placeholder="Password"
              value={regFormData.passwordHash}
              onChange={handleInputChange}
            />

            {/* EYE ICON */}
            <span
              className="registration-form__eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
            </span>

            {/* BIRTH */}
            <input
              className="registration-form__birth"
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={regFormData.dateOfBirth}
              onChange={handleInputChange}
            />

            {/* GENDER */}
            <select
              className="registration-form__dropdown-field"
              name="gender"
              value={regFormData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select a gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* PHONE NUMBER */}
            <input
              className="registration-form__phone-number"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={regFormData.phoneNumber}
              onChange={handleInputChange}
            />

            {/* BUTTON */}
            <button className="registration-form__button" type="submit">
              {/* Register */}
            </button>

            {/* SIGN-IN LINK */}
            <div className="registration-form__signin-link">
              <a href="#" onClick={() => { openLoginModal('login'); }}>
                Sign In here
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserLogRegModal;
