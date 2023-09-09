import React, { useState, useContext, useEffect } from 'react';

import '../styles/UserLogRegModal.scss';

import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/MainContext';

import { createUser, loginUser, getUserById } from '../routes/api';


const UserLogRegModal = () => {
  const {
    state,
    openLoginModal,
    closeLoginModal,
    setLoading,
    clearLoading,
  } = useContext(DataContext);

  const { loginModalType, isLoginModalVisible } = state;

  const { setCurrentUser, currentUser } = useAuth();

  const [formData, setFormData] = useState({
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

  const [errorMessage, setErrorMessage] = useState("");

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

  const handleModalSubmit = async (e) => {
    
    const lastLogin = new Date().toISOString();
    e.preventDefault();
    if (loginModalType === 'login') {
      try {
        const response = await loginUser({
          email: loginData.email,
          password: loginData.password
        });

        
        if (response.data && response.data.token) {
          localStorage.setItem('authToken', response.data.token);

          const userProfile = await getUserById(response.data.userId);

          if (userProfile && userProfile.data) {
            const { passwordHash, ...userWithoutPassword } = userProfile.data;
            setCurrentUser(userWithoutPassword);
          }

          closeLoginModal();
        } else {
          throw new Error('Invalid login credentials.');
        }
      
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred during login. Please try again.");
        }
      }
      
    } else {
      const createdAt = lastLogin;
      const updatedAt = lastLogin;
      const role = "user";

      // Inside handleModalSubmit before the try block
      if (!formData.username || !formData.email || !formData.passwordHash) {
        setErrorMessage("Username, email, and password are required fields!");
        return;
      }

      try {

        await createUser({
          ...formData,
          createdAt,
          updatedAt,
          lastLogin,
          role,
        });

        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          profileImage: "",
          passwordHash: "",
          dateOfBirth: "",
          gender: "",
          phoneNumber: "",
        });

        closeLoginModal();
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred. Please try again later.");
          console.error(error);
        }
      }
    }
  };

  

  if (!isLoginModalVisible) return null;

  return (
    <div className="overlay">
      <div className="modal-container">

      {errorMessage && <p className="error-message">{errorMessage}</p>}


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
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
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
              name="profileImage"
              placeholder="Profile Image URL"
              value={formData.profileImage}
              onChange={handleInputChange}
            />
            <input
              className="input-field"
              type="password"
              name="passwordHash"
              placeholder="Password"
              value={formData.passwordHash}
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