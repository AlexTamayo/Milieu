import React, { useState, useContext } from 'react';

import '../styles/UserLogRegModal.scss';

import { DataContext } from '../context/MainContext';

const UserLogRegModal = () => {
  const {
    state,
    openLoginModal,
    closeLoginModal,
  } = useContext(DataContext);

  const { loginModalType, isLoginModalVisible } = state;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profileImageUrl: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
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
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const lastLogin = new Date().toISOString();
    if (loginModalType === 'login') {
      // Insert your logic for logging in here.
      // For instance, an API call to your backend to validate the email and password.
  
      // Update the user's lastLogin timestamp in your backend.
      // updateLastLoginInBackend({ lastLogin });
  
    } else {
      const createdAt = lastLogin;  // Set to current date-time
      const updatedAt = lastLogin;  // Set to current date-time
  
      // Assuming you'll have a function or API call to send data
      // sendDataToBackend({
      //   ...formData,
      //   createdAt,
      //   updatedAt,
      //   lastLogin
      // });
    }
  };
  

  if (!isLoginModalVisible) return null;

  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="modal-header">
          <button className="close-btn" onClick={closeLoginModal}>
            &times;
          </button>
        </div>
        {loginModalType === "login" ? (

          <form className="login-form" onSubmit={handleModalSubmit}>
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <button className="submit-btn" type="submit">
              Log In
            </button>
            <div className="register-link-container">
              Don't have an account?{" "}
              <a href="#" onClick={() => {openLoginModal('register')}}>
                Register here
              </a>
            </div>
          </form>

        ) : (
          <form className="registration-form" onSubmit={handleModalSubmit}>
            <input
              className="input-field"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="text"
              name="profileImageUrl"
              placeholder="Profile Image URL"
              value={formData.profileImageUrl}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
            <select
              className="dropdown-field"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select a gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              className="input-field"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <button className="submit-btn" type="submit">
              Register
            </button>

            <div className="register-link-container">
              <a href="#" onClick={() => {openLoginModal('login')}}>
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
